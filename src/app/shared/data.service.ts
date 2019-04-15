import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
    providedIn: "root"
})
export class DataService {

    private items = new Array<Recipe>(
        {
            id: 1,
            name: "Kenya Bora",
            description: "Medium",
            variant: "Medium",
            weight: 85,
            starttemp: 190,
            temp: 235
        },
        {
            id: 2,
            name: "Monsooned Malabar",
            variant: "Medium",
            description: "Medium",
            weight: 85,
            starttemp: 190,
            temp: 235
        },
        {
            id: 3,
            name: "Colombia Sierra Nevada",
            variant: "Medium",
            description: "Medium",
            weight: 85,
            starttemp: 190,
            temp: 235
        },
        {
            id: 4,
            name: "Colombia La Lomita",
            variant: "Medium",
            description: "Medium",
            weight: 85,
            starttemp: 190,
            temp: 235
        },
        {
            id: 5,
            name: "Brazil Santos",
            variant: "Medium",
            description: "Medium",
            weight: 85,
            starttemp: 190,
            temp: 235
        },
        {
            id: 6,
            name: "Brazil Catuai",
            variant: "Medium",
            description: "Medium",
            weight: 85,
            starttemp: 190,
            temp: 235
        }
    );

    getItems(): Array<Recipe> {
        return this.items;
    }

    getItem(id: number): Recipe {
        return this.items.filter((item) => item.id === id)[0];
    }
}
