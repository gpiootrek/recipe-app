import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Category } from './../../../../core/models/category';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'recipes-add',
  templateUrl: './recipes-add.component.html',
  styleUrls: ['./recipes-add.component.scss'],
})
export class RecipesAddComponent implements OnInit {
  categories: Category[] = [
    'Breakfast',
    'Beef',
    'Chicken',
    'Dessert',
    'Goat',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
    'Starter',
    'Vegan',
    'Vegetarian',
  ];

  recipeForm = this.fb.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    ingredients: this.fb.array([
      this.fb.group({
        ingredient: ['', Validators.required],
        measure: ['', Validators.required],
      }),
    ]),
    youtubeUrl: ['', this.validYoutubeUrl.bind(this)],
    tags: [''],
    thumbUrl: [''],
    instructions: ['', Validators.required],
    area: [''],
    source: [''],
  });

  constructor(private fb: FormBuilder, private afs: AngularFirestore) {}

  ngOnInit(): void {}

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(
      this.fb.group({
        ingredient: ['', Validators.required],
        measure: ['', Validators.required],
      })
    );
  }

  onSubmit() {
    this.afs
      .collection('recipes')
      .add(this.recipeForm.value)
      .then((res) => {
        console.log('Added successfully', res);
      });
    this.recipeForm.reset();
  }

  // TODO: make youtube url not required and figure out how this validator is working
  validYoutubeUrl(control: FormControl) {
    const regex =
      /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/;

    if (!regex.test(control.value)) return { isYoutubeUrlValid: true };

    return null;
  }
}
