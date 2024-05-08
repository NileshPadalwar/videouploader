import { HttpClient, HttpEvent, HttpEventType, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Video } from './video.mode';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private videosUrl = "http://localhost:3000/vid"; 
  login: any;

  constructor(private http: HttpClient) { }

  uploadVideo(file: File): Observable<any> {
   
    const formData: FormData = new FormData();
   
    formData.append('video', file);
    



    return this.http.post<any>(" http://localhost:3000/vid",formData)
  }


  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.videosUrl);
  }

  deleteVideo(video: Video): Observable<any> {
   
    return this.http.delete<any>("http://localhost:3000/vid/"+video.id);
  }
}
