import { BoardsComponent } from './pages/boards/boards.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewBoardsComponent } from './pages/view-boards/view-boards.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/boards'},
  {path: 'boards', component:BoardsComponent},
  {path:'view-board/:boardindex', component:ViewBoardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
