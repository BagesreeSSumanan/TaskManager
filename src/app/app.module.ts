import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AddTaskComponent } from './dash-board/add-task/add-task.component';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule


@NgModule({
    declarations: [
      AppComponent,
      DashBoardComponent,
      AddTaskComponent  
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
