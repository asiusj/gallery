import { Component, OnInit, Inject, AfterViewChecked, AfterContentInit, OnChanges } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Image } from 'src/app/models/images';
import { LoaderService } from 'src/app/services/loader.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      img: Image
    },
    public loaderService: LoaderService
  ) { }

  ngOnInit() {

  }

  showIt() {
    this.loaderService.switchOff();
  }


}
