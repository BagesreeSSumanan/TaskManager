import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-task',
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  taskname: string =""
  @Output() taskAdded = new EventEmitter<string>(); // Event to pass data
  addTask(task: string){
    task = task.trim(); 
    if(task.length>0){
      this.taskAdded.emit(task);
    }
    this.taskname = "";
  }
}
