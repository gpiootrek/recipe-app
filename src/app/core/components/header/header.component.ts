import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from 'src/app/shared/components/login-modal/login-modal.component';
import { User } from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: User | null = null;
  isLogged: boolean = false;

  constructor(public dialog: MatDialog, public afAuth: AngularFireAuth) {
    afAuth.user.subscribe((user) => {
      if (user) {
        this.isLogged = true;
        this.user = user.providerData[0] as User;
      } else {
        this.user = null;
        this.isLogged = false;
      }
    });
  }

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(LoginModalComponent);
  }
}
