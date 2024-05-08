import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  selectedFile: File | null = null;
  uploadProgress: number | null = null;

  constructor(private _api: ApiService) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadVideo() {
    if (!this.selectedFile) return;
    console.log(this.selectedFile)

    this._api.uploadVideo(this.selectedFile)
      .subscribe(progress => {
        this.uploadProgress = progress;
      }, error => {
        console.error('Error uploading video:', error);
      });
  }

}
