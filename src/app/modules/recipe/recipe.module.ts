import { RecipeRoutingModule } from './recipe-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommentsSectionComponent } from './components/comments-section/comments-section.component';
import { RecipeComponent } from './recipe.component';
import { CommonModule } from '@angular/common';
import { RecomendedComponent } from './components/recomended/recomended.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { CommentComponent } from './components/comment/comment.component';
@NgModule({
  declarations: [
    RecipeComponent,
    CommentsSectionComponent,
    CommentComponent,
    RecomendedComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    RecipeRoutingModule,
    NgxStarRatingModule,
    ReactiveFormsModule
  ],
})
export class RecipeModule {}
