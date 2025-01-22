import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { UserCard } from '../user-card-component/user-card.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { UsersApiService } from '../../services/usersApi.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CreateEditUserDialogComponent} from '../edit-user-dialog/create-edit-user-component';

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
}
export interface CreateUser {
  id: number;
  name: string;
  email: string;
  website: string;
  company: {
    name: string;
  }
}
// сделать отдельную папку для интерфейсов

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCard, NgFor, AsyncPipe,],
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
    this.usersService.users$.subscribe((users) => {
      console.log(users);
    });
  } // Загрузка данных юзеров

  onDeleteUsers(id: number) {
    this.usersService.deleteUser(id);
  }

  editUser(user: CreateUser) {
    this.usersService.editUser({
      ...user,
      company: {
        name: user.company.name,
      },
    });
  }

  createUser(formData: CreateUser) {
    this.usersService.addUser({
      id: new Date().getTime(),
      name: formData.name,
      email: formData.email,
      website: formData.website,
      company: {
        name: formData.company.name,
      },
    });
  }

 
  readonly dialog = inject(MatDialog);
  openDialog(user?: User): void { // при открытии диалога будет либо undf либо обьект типа User! если в параметре указан вопросительный знак то это значит что он необьязателен!
    let isEdit: boolean = false; // если пришел юзер делаем true если нет то undefined и фолс создаем переменную которая хранит булеан значение
    if (user){
      isEdit = true
    }
    const dialogRef = this.dialog.open(CreateEditUserDialogComponent, {
      data: { user: user , isEdit},
    });

    dialogRef.afterClosed().subscribe((result: CreateUser | User) => {
      console.log('МОДАЛКА ЗАКРЫЛАСЬ, ЗНАЧЕНИЕ ФОРМЫ:', result);
      if (result) {
         isEdit ? this.editUser(result) : this.createUser(result); // если isEdit true я его редак если false то создаю 
      }
    });
  }
}
