import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.scss'],
})
export class SignupModalComponent implements OnInit {
  constructor(public authService: AuthService) {}
  ngOnInit(): void {}
}
