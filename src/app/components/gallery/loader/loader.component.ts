import { Component, OnInit, ViewContainerRef, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoaderService } from 'src/app/services/loader.service';
import { MatSpinner } from '@angular/material';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit {

  overLayConfig: OverlayConfig;
  loader = new ComponentPortal(MatSpinner, this.viewContainerRef );
  overlayRef: OverlayRef;

  @Input()
  showLoader: boolean;

  @Output()
  emitter = new EventEmitter();


  constructor(
    public overlay: Overlay,
    public viewContainerRef: ViewContainerRef,
    public loaderService: LoaderService
  ) {
    this.overLayConfig = new OverlayConfig();
    this.overLayConfig.positionStrategy = this.overlay.position()
      .global().centerHorizontally().centerVertically();
    this.overLayConfig.hasBackdrop = true;
    this.overLayConfig.scrollStrategy = this.overlay.scrollStrategies.block();
    this.overLayConfig.backdropClass = 'loader-back';
    this.overlayRef = this.overlay.create(this.overLayConfig);
    this.overlayRef.backdropClick().subscribe(() => {
      this.loaderOff();
    });
  }

  ngOnInit() {

    this.loaderService.switch.subscribe((res: boolean) => {
      if (res) {
        this.loaderOn();
      } else {
        this.loaderOff();
      }
    });
  }



  loaderOn() {
    this.overlayRef.attach(this.loader);
  }

  loaderOff() {
    this.overlayRef.detach();
  }

}
