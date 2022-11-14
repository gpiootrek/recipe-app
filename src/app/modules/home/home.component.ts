import { Category } from 'src/app/core/models/category';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CATEGORIES } from 'src/app/core/constants/categories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  categories: Category[] = CATEGORIES.slice(0, 3);

  constructor() {}
}
