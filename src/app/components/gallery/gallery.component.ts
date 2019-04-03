import { Component, OnInit, OnDestroy, ViewContainerRef, ViewRef, ElementRef, Output, EventEmitter } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { Image, Images } from 'src/app/models/images';
import { MatDialog } from '@angular/material';
import { ModalComponent } from './modal/modal.component';
import { Subscription } from 'rxjs';
import { ScrollService } from 'src/app/services/scroll.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ScrollStrategyOptions, Overlay } from '@angular/cdk/overlay';




@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {

  static MenuTitle = 'Галерея';
  showLoader = false;
  getImagesSub: Subscription;
  getScroll: Subscription;
  imgs: Image[] = [];
  imagesWereLoaded = false;
  title: string;
  currentPage = 1;
  imagesPerPage = 10;
  currentLoadingCount = 0;
  wasScrolled = false;

  constructor(
    public galleryService: GalleryService,
    private dialog: MatDialog,
    public scrollService: ScrollService,
    public loaderService: LoaderService
  ) {
    this.title = GalleryComponent.MenuTitle;
    this.dialog.afterAllClosed.subscribe(() => {
      this.showLoader = false;
    });
  }

  ngOnInit() {
    this.getImages();
    this.scrollService.scroll.subscribe((r: Element) => {
      if (!this.showLoader) {
        this.scroll(r);
      }
    });
  }

  getImages() {
    this.show_loader();
    this.currentLoadingCount = 0;
    this.getImagesSub = this.galleryService.getImgs(null, this.imagesPerPage, this.currentPage).subscribe((res: Images) => {
      this.imgs = this.imgs.concat(this.parseRes(res.hits));
    }, () => {
      console.log('SERVER ERROR --- NEXT REQUEST WILL BE OVER 3 SECONDS');
      setTimeout(
        () => {
          this.hide_loader(false);
          this.getImages();
        }, 3000
      );
    });
  }

  show_loader() {
    if (!this.showLoader) {
      this.showLoader = true;
      this.loaderService.switchOn();
      this.imagesWereLoaded = false;
    }
  }

  hide_loader(success: boolean) {
    if (this.showLoader && success) {
      this.showLoader = false;
      this.imagesWereLoaded = true;
      this.currentPage++;
    } else if (!success) {
      this.showLoader = false;
      this.imagesWereLoaded = false;
    }
    this.loaderService.switchOff();
  }



  parseRes(imgs: Image[]) {
    const images = imgs.map(img => {
      const i = new Image();
      i.webformatHeight = img.webformatHeight;
      i.webformatURL = img.webformatURL;
      i.webformatWidth = img.webformatWidth;
      i.largeImageURL = img.largeImageURL;
      i.tags = img.tags;
      i.page = this.currentPage;
      return i;
    });
    return images;
  }

  openDialog(img: Image) {
    let width = '1280px';
    if (img.webformatHeight > img.webformatWidth) {
      width = '640px';
    }
    this.loaderService.switchOn();
    this.showLoader = true;
    this.dialog.open(ModalComponent, {
      width,
      data: {
        img
      }
    });
  }

  scroll(e: Element) {
    const currentPos = e.scrollTop + window.innerHeight;
    console.log('scroll');
    if (e.scrollHeight === currentPos) {
      console.log('scroll-1');
      this.getImages();
      this.wasScrolled = true;
    } else if (!this.wasScrolled) {
      console.log('scroll-2');
      this.getImages();
      this.wasScrolled = true;
    }
  }

  imgsReady() {
    this.currentLoadingCount++;
    if (this.currentLoadingCount === this.imagesPerPage) {
      this.hide_loader(true);
    }
  }

  ngOnDestroy(): void {
    this.getImagesSub.unsubscribe();
  }

}
