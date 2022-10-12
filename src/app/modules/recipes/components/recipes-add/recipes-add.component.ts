import {
  validateYoutubeUrl,
  validateUrl,
} from 'src/app/shared/helpers/form.helpers';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { CATEGORIES } from 'src/app/core/constants/categories';

@Component({
  selector: 'recipes-add',
  templateUrl: './recipes-add.component.html',
  styleUrls: ['./recipes-add.component.scss'],
})
export class RecipesAddComponent implements OnInit {
  categories = CATEGORIES;
  enteredTags: Array<string> = [];

  recipeForm = this.fb.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    ingredients: this.fb.array([
      this.fb.group({
        ingredient: ['', Validators.required],
        measure: ['', Validators.required],
      }),
    ]),
    youtubeUrl: ['', validateYoutubeUrl.bind(this)],
    tags: [''],
    thumbUrl: ['', validateUrl.bind(this)],
    instructions: ['', Validators.required],
    area: [''],
    source: ['', validateUrl.bind(this)],
  });

  constructor(private fb: FormBuilder, private afs: AngularFirestore) {}

  ngOnInit(): void {}

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  onTagInput(event: KeyboardEvent) {
    if (event.key === ',') {
      let tagInput = this.recipeForm.get('tags')?.value!;
      this.enteredTags.push(tagInput?.slice(0, tagInput.length - 1));
      this.recipeForm.get('tags')?.reset();
    }
  }

  addIngredient() {
    this.ingredients.push(
      this.fb.group({
        ingredient: ['', Validators.required],
        measure: ['', Validators.required],
      })
    );
  }

  removeTag(tagToRemove: string) {
    this.enteredTags = this.enteredTags.filter((tag) => tag !== tagToRemove);
  }

  onSubmit() {
    const formValue = { ...this.recipeForm.value, tags: this.enteredTags };

    this.afs
      .collection('recipes')
      .add(formValue)
      .then((res) => {
        console.log('Added successfully', res);
      });

    this.recipeForm.reset();
    this.enteredTags = [];
  }
}
