import { Component, OnInit } from '@angular/core';

import { Task } from './task';
import { TasksService } from '../core/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  task: Task;
  tasks: Task[];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.getTasks();
    this.reset();
  }

  selectTask(task: Task) {
    this.task = task;
  }

  getTasks() {
    this.tasksService.all()
      .subscribe(res => this.tasks = res);
  }

  saveTask(task: Task) {
    task.id ?
      this.updateTask(task) :
      this.createTask(task);
  }

  createTask(task: Task) {
    this.tasksService.create(task)
      .subscribe(res => {
        this.reset();
        this.getTasks();
      });
  }

  updateTask(task: Task) {
    this.tasksService.update(task)
      .subscribe(res => {
        this.reset();
        this.getTasks();
      });
  }

  deleteTask(id: number) {
    this.tasksService.delete(id)
      .subscribe(res => {
        this.reset();
        this.getTasks();
      });
  }

  reset() {
    const emptyTask: Task = {
      id: null,
      description: '',
      status: '',
    };
    this.selectTask(emptyTask);
  }

}
