import { Component,OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { User } from 'src/app/models/user.interface';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent {

  todosComplete!: Todo[];
  users!: User[];

  constructor(private todoSrv: TodosService) {}

  ngOnInit(): void {
    this.getUsers();
    this.getTodosComplete();
}

getTodosComplete() {
  this.todoSrv.getTodo().subscribe((todos: Todo[]) => {
      this.todosComplete = todos.filter(todo => todo.completed);
  });
}

getUserName(userId: number): string {
  const user = this.users.find((u) => u.id === userId);
  return user ? `${user.firstName} ${user.lastName}` : '';
}

getUsers() {
  this.todoSrv.getUsers().subscribe((users: User[]) => {
      this.users = users;
  });
}


}
