import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Recipes",
    moduleId: module.id,
    templateUrl: "./recipes.component.html"
})
export class RecipesComponent implements OnInit {
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }
}
