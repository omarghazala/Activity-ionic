import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {Activity} from '../types';
import { ActivityService } from '../activity.service';
//import { setTimeout } from 'timers';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  activityList: Observable<Activity[]>
  constructor(activityService:ActivityService) {
    setTimeout(()=>{
      this.activityList = activityService.getAllActivity();
    },3000)
   

  }

}
