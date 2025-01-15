import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UsersApiService } from './usersApi.service';
import { User } from '../components/user-list-component/user-list.component';
@Injectable({ providedIn: 'root' }) // паттерн синглтон - одно на все приложение!
export class UsersService {
  readonly usersApiService = inject(UsersApiService); // получаем доступ к классу UsersApiService
  private readonly usersSubject$ = new BehaviorSubject<User[]>([]);
  public readonly users$ = this.usersSubject$.asObservable(); // делаем так чтобы сабджект был виден снаружи


  loadUsers(users: User[]) {
   this.usersSubject$.next(users)
    }

    addUser(user: User) {
      const userIsExisting = this.usersSubject$.value.find(
        currentElement => currentElement.email === user.email
      )
     console.log(userIsExisting) // проверка есть ли в массиве такой же email который был вписан в форму для создания пользователя
      if(userIsExisting !== undefined){
        alert('Пользователь с таким Email уже существует!')
      }else{
        alert('Пользователь успешно создан!')
        this.usersSubject$.next([...this.usersSubject$.value, user]); // с помощью spread оператора мы добавили того юзера которого тыкнули
      }
     
    }

   editUser(editedUser: User) {
    this.usersSubject$.next(
      this.usersSubject$.value.map((user) => {
        if (user.id === editedUser.id) {
          return editedUser;
        } else{
          return user
        }
      })
    );
  } // если этот юзер тот который мы выбрали то мы заменяем на нового если нет то ничего не делаем!
  
  deleteUser(id: number): void {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((item) => {
        if (id === item.id) {
          return false;
        } else {
          return true;
        }
      })
    );
  }


 
  
}
