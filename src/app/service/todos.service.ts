import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.interface';
import { User } from '../models/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodosService {


  constructor(private http: HttpClient) {  }

   getUsers(): Observable<User[]> {
    return this.http.get<any>('../../assets/dbuser.json').pipe(
      map((data) => {
       

        return data as User[];
      })
    );
  }

  getTodo(): Observable<Todo[]> {
    return this.http.get<any>('../../assets/dbtodo.json').pipe(
      map((data) => {
        
        return data as Todo[];
      })
    );
  }


}
