import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RecipesRoutingModule } from "./recipes-routing.module";
import { RecipesComponent } from "./recipes.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RecipesRoutingModule
    ],
    declarations: [
        RecipesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RecipesModule { }
