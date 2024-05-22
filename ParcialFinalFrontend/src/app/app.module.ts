import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyEntityListComponent } from './components/my-entity-list/my-entity-list.component';
import { MyEntityCreateComponent } from './components/my-entity-create/my-entity-create.component';

@NgModule({
  declarations: [
    AppComponent,
    MyEntityListComponent,
    MyEntityCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
