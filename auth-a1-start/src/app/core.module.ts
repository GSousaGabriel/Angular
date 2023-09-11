import { NgModule } from '@angular/core';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { HeaderInterceptor } from './interceptors/header.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  providers: [ShoppingListService, RecipeService, { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }],
})
export class CoreModule { }
