import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddnewComponent } from './page/addnew/addnew.component';
import { BookViewpageComponent } from './page/book-viewpage/book-viewpage.component';
import { EditdataComponent } from './page/editdata/editdata.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path:'home',component:HomeComponent},
  {path:'bookview',component:BookViewpageComponent},
  {path:'addnew',component:AddnewComponent},
  {path:'editdata/:id',component:EditdataComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
