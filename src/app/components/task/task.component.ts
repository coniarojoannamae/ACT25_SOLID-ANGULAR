import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  taskTitle: string = '';
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  addTask(): void {
    if (this.taskTitle) {
      this.taskService.addTask(this.taskTitle);
      this.taskTitle = '';
      this.tasks = this.taskService.getTasks(); // Refresh the task list
    }
  }

  completeTask(id: number): void {
    this.taskService.completeTask(id);
    this.tasks = this.taskService.getTasks(); // Refresh the task list
  }
}