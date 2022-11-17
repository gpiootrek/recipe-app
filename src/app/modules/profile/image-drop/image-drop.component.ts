import { NotificationsService } from 'src/app/core/services/notifications.service';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'profile-image-drop',
  templateUrl: './image-drop.component.html',
  styleUrls: ['./image-drop.component.scss'],
  imports: [CommonModule, NgxDropzoneModule, MatDialogModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageDropComponent {
  file: File | null = null;
  
  constructor(private notificationsService: NotificationsService) {}

  onSelect(event: any) {
    if(event.addedFiles.length > 1) {
      this.notificationsService.showNotification("Select only one image!");
    } else {
      this.file = event.addedFiles[0];
    }
    console.log(this.file);
  }

  onRemove() {
    this.file = null;
  }

  changeImage() {
    this.notificationsService.showNotification("Changed profile picture");
  }
}
