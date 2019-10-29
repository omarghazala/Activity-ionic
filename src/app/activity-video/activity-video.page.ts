import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-activity-video',
  templateUrl: './activity-video.page.html',
  styleUrls: ['./activity-video.page.scss'],
})
export class ActivityVideoPage implements OnInit {

  videoURL:string;

  constructor(
    private _modalCntroller:ModalController,
    navParams:NavParams) { 

      this.videoURL=navParams.get("videoURL")
      //console.log(this.videoURL);
    }

  ngOnInit() {
  }

  closeModal(){
    this._modalCntroller.dismiss();
  }

}
