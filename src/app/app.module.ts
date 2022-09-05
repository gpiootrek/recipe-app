import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { RecipeModule } from './modules/recipe/recipe.module';
import { HomeModule } from './modules/home/home.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AuthService } from './core/services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipesModule } from './modules/recipes/recipes.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    RecipeModule,
    CategoriesModule,
    RecipesModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: FIREBASE_OPTIONS,
      useValue: environment.firebase,
    },
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
