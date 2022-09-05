import { Meal } from 'src/app/core/models/meal';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss'],
})
export class MealCardComponent implements OnInit {
  @Input() meal: Meal | undefined;

  constructor() {}

  ngOnInit(): void {}
}
