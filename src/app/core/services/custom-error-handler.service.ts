import { NotificationsService } from 'src/app/core/services/notifications.service';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class CustomErrorHandler extends ErrorHandler {
  constructor(private notificationsService: NotificationsService) {
    super();
  }

  override handleError(error: unknown): void {
    this.notificationsService.showNotification(
      'Sorry! There is an error but we are working on it...'
    );
  }
}
