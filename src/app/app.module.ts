import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloAngularComponent } from './hello-angular/hello-angular.component';
import { NestedComponent } from './nested/nested.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloAngularComponent,
    NestedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
