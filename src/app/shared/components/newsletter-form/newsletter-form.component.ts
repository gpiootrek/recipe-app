import { NotificationsService } from 'src/app/core/services/notifications.service';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { validateEmail } from '../../helpers/form.helpers';

@Component({
  selector: 'app-newsletter-form',
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.scss'],
})
export class NewsletterFormComponent implements OnInit {
  isValid: boolean = true;
  subscribersCollection: AngularFirestoreCollection;

  constructor(
    private afs: AngularFirestore,
    private notificationsService: NotificationsService
  ) {
    this.subscribersCollection = afs.collection('subscribers');
  }

  ngOnInit(): void {}

  onSubmit(e: Event, emailInput: HTMLInputElement) {
    e.preventDefault();
    if (validateEmail(emailInput.value)) {
      this.subscribersCollection.add({ email: emailInput.value }).then(() => {
        this.notificationsService.showNotification(
          'Subscribed to the newsletter'
        );
      });
      this.isValid = true;
      emailInput.value = '';
    } else {
      this.isValid = false;
    }
  }
}
