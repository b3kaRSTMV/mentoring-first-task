import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UsersApiService } from './usersApi.service';
import { User } from '../components/user-list-component/user-list.component';
import { LocalStorageService } from './local-storage.service';
@Injectable({ providedIn: 'root' }) // паттерн синглтон - одно на все приложение!
export class UsersService {
  readonly usersApiService = inject(UsersApiService); // получаем доступ к классу UsersApiService
  private readonly usersSubject$ = new BehaviorSubject<User[]>([]);
  public readonly users$ = this.usersSubject$.asObservable(); // делаем так чтобы сабджект был виден снаружи



  readonly localStorageService = inject(LocalStorageService);
  private readonly localStorageKey = 'users';
 

  initializeUsers(): void {
    const storedUsers = this.localStorageService.getItem<User[]>(this.localStorageKey);  // Получаем данные из localStorage

    if (storedUsers && storedUsers.length > 0) {
      // Если данные есть в localStorage, загружаем их в Subject
      this.usersSubject$.next(storedUsers);
    } else {
      // Если данных нет в localStorage, загружаем их с сервера
      this.usersApiService.getUsers().subscribe((users) => {
        this.usersSubject$.next(users);  // Загружаем данные в Subject
        this.localStorageService.setItem(this.localStorageKey, users);  // Сохраняем данные в localStorage
      });
    }
  }

  // Метод для добавления нового пользователя
  addUser(user: User): void {
    const currentUsers = this.usersSubject$.value;
    const userExists = currentUsers.some((existingUser) => existingUser.email === user.email);

    if (userExists) {
      alert('Пользователь с таким Email уже существует!');
    } else {
      const updatedUsers = [...currentUsers, user];  // Добавляем нового пользователя
      this.usersSubject$.next(updatedUsers);  // Обновляем состояние
      this.localStorageService.setItem(this.localStorageKey, updatedUsers);  // Сохраняем данные в localStorage
      alert('Пользователь успешно создан!');
    }
  } // gpt

    //   addUser(user: User) {
    //   const userIsExisting = this.usersSubject$.value.find(
    //     currentElement => currentElement.email === user.email
    //   )
    //  console.log(userIsExisting) // проверка есть ли в массиве такой же email который был вписан в форму для создания пользователя
    //   if(userIsExisting !== undefined){
    //     alert('Пользователь с таким Email уже существует!')
    //   }else{
    //     alert('Пользователь успешно создан!')
    //     this.usersSubject$.next([...this.usersSubject$.value, user]); // с помощью spread оператора мы добавили того юзера которого тыкнули
    //     this.localStorageService.setItem(this.localStorageKey, this.users$);  // Сохраняем данные в localStorage // спросить на созвоне
    //   }
    








  // Метод для редактирования существующего пользователя
  editUser(editedUser: User): void {
    const updatedUsers = this.usersSubject$.value.map((user) =>
      user.id === editedUser.id ? editedUser : user  // Если id совпадает, заменяем пользователя
    );

    this.usersSubject$.next(updatedUsers);  // Обновляем состояние
    this.localStorageService.setItem(this.localStorageKey, updatedUsers);  // Сохраняем данные в localStorage
  }

  
  //  editUser(editedUser: User) {
  //   this.usersSubject$.next(
  //     this.usersSubject$.value.map((user) => {
  //       if (user.id === editedUser.id) {
  //         return editedUser;
  //       } else{
  //         return user
  //       }
  //     })
  //   );
  // } // если этот юзер тот который мы выбрали то мы заменяем на нового если нет то ничего не делаем!







  // Метод для удаления пользователя
  deleteUser(id: number): void {
    const updatedUsers = this.usersSubject$.value.filter((user) => user.id !== id);  // Удаляем пользователя по id
    this.usersSubject$.next(updatedUsers);  // Обновляем состояние
    this.localStorageService.setItem(this.localStorageKey, updatedUsers);  // Сохраняем данные в localStorage
  }



  // deleteUser(id: number): void {
  //   this.usersSubject$.next(
  //     this.usersSubject$.value.filter((item) => {
  //       if (id === item.id) {
  //         return false;
  //       } else {
  //         return true;
  //       }
  //     })
  //   );
  // }
 


  // loadUsers(users: User[]) {
  //  this.usersSubject$.next(users)
  //   }
 
}
