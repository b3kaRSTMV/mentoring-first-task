import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { UserCard } from '../user-card-component/user-card.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { UsersApiService } from '../../services/usersApi.service';

export interface User {
  id: number;
  name: string;
  username?: string;
  email: string;
  addres?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website: string;
  company: {
    name: string;
    catchPhrase?: string;
    bs?: string;
  };
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCard, NgFor, AsyncPipe, CreateUserFormComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserList {
  public readonly usersApiService = inject(UsersApiService);
  public readonly usersService = inject(UsersService); // даем доступ в этот компонент данные из UsersService

  constructor() {
    this.usersApiService.getUsers().subscribe((response: any) => {
      this.usersService.loadUsers(response);
    });
    this.usersService.users$.subscribe((users) => {console.log(users)})
  } // Загрузка данных юзеров

  onDeleteUsers(id: number) {
    this.usersService.deleteUser(id);
  }

  editUser(user: any) {
    this.usersService.editUser({
      ...user,
      company: {
        name: user.companyName,
      }
    });
  }

  createUser(formData: any) {
    this.usersService.addUser({
      id: new Date().getTime(),
      name: formData.name,
      email: formData.email,
      website: formData.website,
      company: {
        name: formData.companyName,
      },
    });
  }

}
