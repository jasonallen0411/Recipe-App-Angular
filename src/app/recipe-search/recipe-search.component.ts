import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})

export class RecipeSearchComponent implements OnInit {

	recipeName:string = "";
	recipeName1:string = "";
	recipeName2:string = "";
	recipeName3:string = "";
	recipeName4:string = "";
	recipeName5:string = "";
	recipeName6:string = "";
	recipeName7:string = "";
	recipeName8:string = "";
	recipeName9:string = "";
	recipeImage:string = ""; 
	recipeImage1:string = "";
	recipeImage2:string = "";
	recipeImage3:string = "";
	recipeImage4:string = "";
	recipeImage5:string = "";
	recipeImage6:string = "";
	recipeImage7:string = "";
	recipeImage8:string = "";
	recipeImage9:string = "";
	recipeIngredients:string = "";
	recipeIngredients1:string = "";
	recipeIngredients2:string = "";
	recipeIngredients3:string = "";
	recipeIngredients4:string = "";
	recipeIngredients5:string = "";
	recipeIngredients6:string = "";
	recipeIngredients7:string = "";
	recipeIngredients8:string = "";
	recipeIngredients9:string = "";
	// recipeArray = [];

	searchRecipe(food){
		let url = "https://api.edamam.com/search?app_id=38c25904&app_key=0e9730623102e47165236bd327802907&count=10&q=" + food;
		this.http.get(url).toPromise().then( data => {
			this.recipeName = data.hits[0].recipe.label;
			this.recipeName1 = data.hits[1].recipe.label;
			this.recipeName2 = data.hits[2].recipe.label;
			this.recipeName3 = data.hits[3].recipe.label;
			this.recipeName4 = data.hits[4].recipe.label;
			this.recipeName5 = data.hits[5].recipe.label;
			this.recipeName6 = data.hits[6].recipe.label;
			this.recipeName7 = data.hits[7].recipe.label;
			this.recipeName8 = data.hits[8].recipe.label;
			this.recipeName9 = data.hits[9].recipe.label;
			this.recipeImage = data.hits[0].recipe.image;
			this.recipeImage1 = data.hits[1].recipe.image;
			this.recipeImage2 = data.hits[2].recipe.image;
			this.recipeImage3 = data.hits[3].recipe.image;
			this.recipeImage4 = data.hits[4].recipe.image;
			this.recipeImage5 = data.hits[5].recipe.image;
			this.recipeImage6 = data.hits[6].recipe.image;
			this.recipeImage7 = data.hits[7].recipe.image;
			this.recipeImage8 = data.hits[8].recipe.image;
			this.recipeImage9 = data.hits[9].recipe.image;
			this.recipeIngredients = data.hits[0].recipe.ingredients[0].text;
			this.recipeIngredients1 = data.hits[1].recipe.ingredients[0].text;
			this.recipeIngredients2 = data.hits[2].recipe.ingredients[0].text;
			this.recipeIngredients3 = data.hits[3].recipe.ingredients[0].text;
			this.recipeIngredients4 = data.hits[4].recipe.ingredients[0].text;
			this.recipeIngredients5 = data.hits[5].recipe.ingredients[0].text;
			this.recipeIngredients6 = data.hits[6].recipe.ingredients[0].text;
			this.recipeIngredients7 = data.hits[7].recipe.ingredients[0].text;
			this.recipeIngredients8 = data.hits[8].recipe.ingredients[0].text;
			this.recipeIngredients9 = data.hits[9].recipe.ingredients[0].text;
			console.log(data);

		});
	}

 	constructor(private http: HttpClient) { }

	ngOnInit() {
  }

}
