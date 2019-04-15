import { Component, OnInit } from "@angular/core";
import { DataService } from "../../shared/data.service";
import { Recipe } from "../../shared/recipe.model";
// import { Fab } from "nativescript-floatingactionbutton";
// Fix this shit
// import { registerElement } from "nativescript-angular/element-registry";
// registerElement("Fab", () => Fab);

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    items: Array<Recipe>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }

    newRecipe() {
        console.log("fab tapped");
    }
}
