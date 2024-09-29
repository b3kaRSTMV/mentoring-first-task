import { RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { UserCard } from '../user-card-component/user-card.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { UsersService } from '../../services/users.service';



@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet,UserCard,NgFor, AsyncPipe],
    templateUrl: './user-list.component.html',
    styleUrl: './user-list-component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush

})

export class UserList implements OnInit {
    public readonly usersService = inject(UsersService)

ngOnInit(): void {
    this.usersService.loadUsers()      
}

onDeleteUsers(id: number) {
this.usersService.deleteUser(id)
}
}




