import { Component } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'dash-board',
  standalone: false,
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {
  constructor(private router: Router) {} 
  taskList:string[] = ["Learn Angular","Create task manager app"]
  addtask(newItem: string) {
    this.taskList.push(newItem);
  }
  deleteTask(index: number) {
    this.taskList.splice(index, 1);
  }
}
