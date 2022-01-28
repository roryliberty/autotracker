import { Injectable } from "@angular/core";
import { AutoModel } from "./auto.model";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: "root"})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  postData(auto: AutoModel) {
    // Send Http request
    this.http.post("https://autotracker-da6d9-default-rtdb.firebaseio.com/posts.json", auto)
      .subscribe(posts => {
        // Log the response data to the console
        console.log(posts);
      });
  }

  getData() {
    // Send Http request
    return this.http.get<{ [key: string]: AutoModel }>("https://autotracker-da6d9-default-rtdb.firebaseio.com/posts.json")
      .pipe(
        map((responseData: { [key: string]: any })  => {
          const dataArray: AutoModel[] = [];
          for(const key in responseData) {
            if(responseData.hasOwnProperty(key)) {
              dataArray.push({ ...responseData[key], id: key });
            }
          }
          return dataArray;
        })
      )
      .subscribe();
  }
}
