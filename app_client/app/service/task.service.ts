import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class TaskService {

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService
  ) { }
  public getAllTasks() {
    return this.http.get('http://localhost:3000/api/tasks', this.authenticationService.createAuthHeader()).map(res => res.json());
  }

  public addTask(data: any) {
    return this.http.post('http://localhost:3000/api/task', data, this.authenticationService.createAuthHeader()).map(res => res.json());
  }

  public deleteTask(id: string) {
    return this.http.delete('http://localhost:3000/api/task/' + id).map(res => res.json());
  }

  public updateTask(data: any) {
    return this.http.put('http://localhost:3000/api/task/' + data._id, data).map(res => res.json());
  }

}