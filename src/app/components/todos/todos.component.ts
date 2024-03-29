import { Component, OnInit} from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { User } from 'src/app/models/user.interface';
import { TodosService } from 'src/app/service/todos.service';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
    todos!: Todo[];
    users: User[] = [];

    constructor(private todoSrv: TodosService) {}

    ngOnInit(): void {
        this.getUsers();
        this.getTodos();
    }
    


    getUsers() {
        this.todoSrv.getUsers().subscribe((users: User[]) => {
            this.users = users;
        });
    }

    getTodos() {
        this.todoSrv.getTodo().subscribe((todos: Todo[]) => {
            this.todos = todos;
        });
    }

    getUserName(userId: number): string {
        const user = this.users.find((u) => u.id === userId);
        return user ? `${user.firstName} ${user.lastName}` : '';
    }
}
