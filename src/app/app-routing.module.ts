import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AddTaskComponent } from './dash-board/add-task/add-task.component';

const routes: Routes = [
  { path: '', component: DashBoardComponent }, // Default route
  { path: 'add-task', component: AddTaskComponent } // Ensure this route exists
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
