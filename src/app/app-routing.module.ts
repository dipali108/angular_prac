import { NgModule } from '@angular/core';
import { Test1Component } from './practice/test1/test1.component';
import { RouterModule } from '@angular/router';
import { Test2Component } from './practice/test2/test2.component';
import { Test3Component } from './practice/test3/test3.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { PracticeComponent } from './practice/practice.component';
import { HomeComponent } from './home/home.component';
import { AdminGuard } from './admin.guard';


@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forRoot([
      {path:'',redirectTo:"home",pathMatch:"full"},  //Redirect routes
      {path:"home", component:HomeComponent},
      {path:"practice", component:PracticeComponent,
        canActivate : [AdminGuard],//route guard
       
          children:[
            {path:"test1", component:Test1Component},
            {path:"test2", component:Test2Component},
            {path:"test3", component:Test3Component},
            {path:"form", component:FormComponent},
            {path:"table", component:TableComponent}
          ]
          },
          
          // {path:"links",component:LinkComponent},

           {path:"**", component:NotFoundComponent} //wildcard routes
    ])
  ],
  exports:[
    RouterModule
  ],
  
  providers:[],
})
export class AppRoutingModule {}


