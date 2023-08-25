import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ImprovedHighlightDirective } from './directives/highlight/improved-highlight.directive';
import { UnlessDirective } from './directives/structural/unless.directive';
import { DropdownDirective } from './directives/structural/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ImprovedHighlightDirective,
    UnlessDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
