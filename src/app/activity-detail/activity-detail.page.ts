import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Activity} from '../types';
import { ActivityService } from '../activity.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { ActivityVideoPage } from '../activity-video/activity-video.page';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {

  activityDetail:Observable<Activity>;

  constructor(
    private _modalController:ModalController,
    activityService:ActivityService,
    activatedRoute:ActivatedRoute,) {
    const activityID = activatedRoute.snapshot.params["activityId"]
    this.activityDetail = activityService.getActivity(activityID);

    //console.log(JSON.stringify(this.activityDetail)) 
   }

  ngOnInit() {
  }

  async openModal(){
    console.log("hi")
    const videoModal = await this._modalController.create({
      component:ActivityVideoPage
    })
    return await this.activityDetail.subscribe((activity)=>{
      videoModal.componentProps ={
        videoURL:activity.video_url
      }
      return videoModal.present();
    })
    
  }

}
