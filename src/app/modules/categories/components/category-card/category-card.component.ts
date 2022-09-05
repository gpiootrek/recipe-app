import { Component, Input, OnInit } from '@angular/core';
import { CategoryDetails } from 'src/app/core/models/category-details';

@Component({
  selector: 'categories-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
  @Input() category!: CategoryDetails;

  ngOnInit(): void {}
}
