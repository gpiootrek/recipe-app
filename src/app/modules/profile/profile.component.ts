import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from './../../core/models/user';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
})
export class ProfileComponent implements OnInit {
  @Input() user!: User;

  constructor(
    public authService: AuthService,
    private afAuth: AngularFireAuth
  ) {}

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
}
