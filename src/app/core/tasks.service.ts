import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../tasks/task';

const model = 'tasks';
const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(`${BASE_URL}/${model}`);
  }

  findOne(taskId: number) {
    return this.http.get(`${BASE_URL}/${model}/${taskId}`);
  }

  create(task: Task) {
    return this.http.post(`${BASE_URL}/${model}`, task);
  }

  update(task: Task) {
    return this.http.patch(`${BASE_URL}/${model}/${task.id}`, task);
  }

  delete(taskId: number) {
    return this.http.delete(`${BASE_URL}/${model}/${taskId}`);
  }

}
