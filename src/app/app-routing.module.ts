import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "",
        // tslint:disable-next-line:max-line-length
        redirectTo: "/(homeTab:home/default//recipesTab:recipes/default//settingsTab:settings/default//infoTab:info/default)",
        pathMatch: "full"
    },

    {
        path: "home",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/tabs/home/home.module#HomeModule",
        outlet: "homeTab"
    },
    {
        path: "recipes",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/tabs/recipes/recipes.module#RecipesModule",
        outlet: "recipesTab"
    },
    {
        path: "settings",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/tabs/settings/settings.module#SettingsModule",
        outlet: "settingsTab"
    },
    {
        path: "info",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/tabs/info/info.module#InfoModule",
        outlet: "infoTab"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
