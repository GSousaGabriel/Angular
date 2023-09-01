import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from './interfaces/post';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpContentService {
  private api = "http://localhost:8080/"

  constructor(
    private http: HttpClient
  ) { }

  postPost(data: IPost): Observable<any> {
    return this.http.post(`${this.api}posts`, data, { observe: 'response', responseType: 'json' })
  }

  getPosts(): Observable<any> {
    return this.http.get(`${this.api}posts`).pipe(
      map((responseData: any[]) => {
        const fixedPosts = []
        for (let i = 0; i < responseData.length; i++) {
          fixedPosts.push({
            title: responseData[i].title,
            content: responseData[i].content,
            date: responseData[i].date
          })
        }
        return fixedPosts
      }))
  }

  deletePosts(): Observable<any> {
    return this.http.delete(`${this.api}posts`, { observe: 'events' })
    .pipe(
      tap(
        event=>{
          if(event.type === HttpEventType.Response){
            console.log(event.body)
          }
        }
      )
    )
  }
}
