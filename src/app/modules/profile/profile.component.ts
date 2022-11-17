import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'src/app/core/models/user';
import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonModule } from '@angular/common';
import { ImageDropComponent } from './image-drop/image-drop.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [CommonModule, ImageDropComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  @Input() user!: User;
  isSubscribing$: Observable<boolean>;
  files: File[] = [];

  constructor(
    public authService: AuthService,
    public dialog: MatDialog,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    this.isSubscribing$ = afs
      .collection('subscribers')
      .valueChanges()
      .pipe(
        map((val) => {
          return val.map((doc: any) => doc.email);
        }),
        map((emails: any) => {
          return (
            emails.findIndex((email: string) => email === this.user.email) !==
            -1
          );
        })
      );
  }

  ngOnInit(): void {
    this.user = this.authService.GetUserData();
  }

  openDialog() {
    this.dialog.open(ImageDropComponent);
  }

  saveUser(name: string, email: string, password: string) {
    this.afAuth.user.subscribe((user) => {
      if (name !== this.user.displayName) {
        user?.updateProfile({
          displayName: name,
        });
      }
      if (email !== user?.email) user?.updateEmail(email);
      if (password.length > 6) user?.updatePassword(password);
    });
  }

  onSubscribe() {
    this.afs.collection('subscribers').add({ email: this.user.email });
  }

  onUnsubscribe() {
    this.afs
      .collection('subscribers')
      .valueChanges({ idField: 'id' })
      .pipe(
        take(1),
        map((docs: any) => {
          let id = null;
          docs.forEach((doc: any) => {
            if (doc.email === this.user.email) {
              id = doc.id;
            }
          });
          return id;
        })
      )
      .subscribe((docId: number | null) => {
        if (docId) {
          this.afs.doc(`subscribers/${docId}`).delete();
        }
      });
  }
}
