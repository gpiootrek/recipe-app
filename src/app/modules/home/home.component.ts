import { Category } from './../../core/models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: Category[] = ['Beef', 'Chicken', 'Pasta'];

  constructor() {}

  ngOnInit(): void {}
}
