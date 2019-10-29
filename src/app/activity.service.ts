import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Activity} from './types';
@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  
  constructor(private _httpCLient:HttpClient) { }

  getActivity(activityId:string):Observable<Activity>{

    return this._httpCLient.get<Activity>(Api + "/id/" + activityId);
  }
  getAllActivity():Observable<Activity[]>{
    return this._httpCLient.get<Activity[]>(Api);
  }

}
const Api = "http://orangevalleycaa.org/api/videos";
