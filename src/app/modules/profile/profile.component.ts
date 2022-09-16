import { Observable } from 'rxjs';
import { map, find, tap, filter } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from './../../core/models/user';
import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonModule } from '@angular/common';
import { devOnlyGuardedExpression } from '@angular/compiler';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [CommonModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  @Input() user!: User;
  isSubscribing$: Observable<boolean>;

  constructor(
    public authService: AuthService,
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
        find((emails: any) => {
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
    // this.afs
    //   .collection('subscribers')
    //   .valueChanges()
    //   .pipe(filter((doc: any) => doc.email !== this.user.email))
    //   .subscribe();
  }
}
