import { ShortenPipe } from './pipes/shorten.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MealCardComponent } from './components/meal-card/meal-card.component';
import { NgModule } from '@angular/core';
import { NewsletterFormComponent } from './components/newsletter-form/newsletter-form.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { SignupModalComponent } from './components/signup-modal/signup-modal.component';
import { FilterPipe } from './pipes/filter.pipe';
import { DynamicBackground } from './directives/dynamic-background.directive';

@NgModule({
  declarations: [
    NewsletterFormComponent,
    MealCardComponent,
    LoginModalComponent,
    SignupModalComponent,
    FilterPipe,
    ShortenPipe,
    DynamicBackground,
  ],
  imports: [CommonModule, RouterModule, MatDialogModule, MatButtonModule],
  exports: [
    NewsletterFormComponent,
    MealCardComponent,
    LoginModalComponent,
    SignupModalComponent,
    FilterPipe,
    ShortenPipe,
    DynamicBackground,
  ],
})
export class SharedModule {}
