import { Injectable } from '@angular/core';
import { AutoModel } from './auto.model';
import {map, tap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class HttpService {
  public loadedAutos: Subject<AutoModel[]> = new Subject<AutoModel[]>();

  constructor(private http: HttpClient) { }

  postData(auto: AutoModel) {
    // Send Http request
    this.http.post('https://autotracker-da6d9-default-rtdb.firebaseio.com/posts.json', auto)
      .subscribe(posts => {
        // Log the response data to the console
        console.log(posts);
      });
  }

  getData() {
    // Send Http request
    return this.http.get<{ [key: string]: AutoModel }>('https://autotracker-da6d9-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map((responseData: { [key: string]: AutoModel })  => {
          const dataArray: AutoModel[] = [];
          for(const key in responseData) {
            if(responseData.hasOwnProperty(key)) {
             dataArray.push({ ...responseData[key], id: key });
           }
          }
          return dataArray;
        })
      )
  }

  clearData() {
    // Sent Http request
    return this.http.delete('https://autotracker-da6d9-default-rtdb.firebaseio.com/posts.json');
  }

  getAuto(id: number) {
    return this.http.get<{ auto: AutoModel }>('https://autotracker-da6d9-default-rtdb.firebaseio.com/posts/`${ id }`.json')
      .pipe(tap(() => {
        console.log('fetched auto ' + `${id}`);
      }))
  }
}


