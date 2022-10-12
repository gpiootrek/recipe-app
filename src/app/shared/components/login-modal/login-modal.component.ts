import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { SignupModalComponent } from '../signup-modal/signup-modal.component';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {
  constructor(public authService: AuthService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  signUp() {
    this.dialog.ngOnDestroy();
    this.dialog.open(SignupModalComponent);
  }
}
