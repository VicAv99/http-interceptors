import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../tasks/task';
import { Observable } from 'rxjs';

const model = 'tasks';
const BASE_URL = 'http://localhost:3000';

@Injectable()
export class TasksService {

  constructor(private http: HttpClient) { }

  all(): Observable<Task[]> {
    return this.http.get<Task[]>(`${BASE_URL}/${model}`);
  }

  findOne(taskId: number): Observable<Task> {
    return this.http.get<Task>(`${BASE_URL}/${model}/${taskId}`);
  }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(`${BASE_URL}/${model}`, task);
  }

  update(task: Task): Observable<Task> {
    return this.http.patch<Task>(`${BASE_URL}/${model}/${task.id}`, task);
  }

  delete(taskId: number): Observable<Task> {
    return this.http.delete<Task>(`${BASE_URL}/${model}/${taskId}`);
  }

}
