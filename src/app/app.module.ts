import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { Test1Component } from './practice/test1/test1.component';
import { Test2Component } from './practice/test2/test2.component';
import { Test3Component } from './practice/test3/test3.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { PracticeComponent } from './practice/practice.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    FooterComponent,
    NotFoundComponent,
    FormComponent,
    TableComponent,
    PracticeComponent,
    HomeComponent
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
