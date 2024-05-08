import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Video } from '../video.mode';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  videos: Video[] = [];

  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this.loadVideos();
  }

  loadVideos() {
    this._api.getVideos().subscribe(videos => {
      this.videos = videos;
    }, error => {
      console.error('Error fetching videos:', error);
    });
  }

playVideo(video: Video) {
    console.log(video)
  }

  deleteVideo(video: Video) {
    this._api.deleteVideo(video).subscribe(() => {
      this.loadVideos();
    }, error => {
      console.error('Error deleting video:', error);
    });
  }

}
