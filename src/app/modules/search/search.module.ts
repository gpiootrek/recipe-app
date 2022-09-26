import { SearchInputComponent } from './search-input/search-input.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SearchComponent, SearchInputComponent],
  imports: [CommonModule, RouterModule, SearchRoutingModule, SharedModule],
})
export class SearchModule {}
