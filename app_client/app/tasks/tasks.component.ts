import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { TaskService } from '../service/task.service'

import { Task } from '../models/Task';


@Component({
  selector: 'tasks',
  templateUrl: 'app/tasks/tasks.component.html'
})

export class TasksComponent implements OnInit {
  public tasks: Task[];
  public title: string;
  public name: string;
  public parentSubject: Subject<any> = new Subject();
  constructor(private taskService: TaskService) { }

  ngOnInit() { 
    this.taskService.getAllTasks().subscribe((respose) => {
      this.tasks = respose;
    });
    this.name = 'Parent';
  }

  public addTask(): void {
    let data = {
      title: this.title,
      isDone: false
    }
    this.taskService.addTask(data).subscribe((respose: any) => {
      console.log(respose);
      this.tasks.push(respose);
    });
  }

  public deleteTask(id: string): void {
    this.taskService.deleteTask(id).subscribe((respose: any) => {
      console.log(respose);
    });
  }

  public updateIsDone(task: any): void {
    task.isDone = !task.isDone;
    this.taskService.updateTask(task).subscribe((respose: any) => {
      console.log(respose);
    });
  }

  public getMessageFromChild(data: any): void {
    console.log(data);
  }

  public notifyChild(): void {
    this.name = 'Parent';
    this.parentSubject.next({message: 'Hello'});
  }
}