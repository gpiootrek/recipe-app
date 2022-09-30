import { NotificationsService } from './notifications.service';
import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    public notificationsService: NotificationsService
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.user.subscribe((user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user.providerData[0]));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user?.providerData[0]);
        this.notificationsService.showNotification(`Logged in`, 'Close');
      })
      .catch((error) => {
        this.notificationsService.showNotification(error.message, 'Close');
      });
  }

  // Sign up with email/password
  SignUp(email: string, password: string, name: string) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user?.providerData[0], name);
        this.notificationsService.showNotification(`Signed up`, 'Close');
      })
      .catch((error) => {
        this.notificationsService.showNotification(error.message, 'Close');
      });
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser.then((u: any) => u.sendEmailVerification());
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.SetUserData(result.user?.providerData[0]);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  async SetUserData(user: any, name?: string) {
    (await this.afAuth.currentUser)!
      .updateProfile({
        displayName: name,
        photoURL: '../../../../../assets/img/user.svg',
      })
      .then((result) => {
        localStorage.setItem('user', JSON.stringify(user));
      });
  }

  GetUserData() {
    return JSON.parse(localStorage.getItem('user')!);
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['home']);
      this.notificationsService.showNotification(`Signed out`, 'Close');
    });
  }
}
