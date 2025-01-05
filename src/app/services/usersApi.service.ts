import { HttpClient } from '@angular/common/http'; // подключаем технологию которая делает запрос на бекенд.
import { inject, Injectable } from '@angular/core'; 
import { User } from '../components/user-list-component/user-list.component';

@Injectable({providedIn: 'root',}) // Декоратор этот класс можно достать из другого класса с помощью inject

export class UsersApiService {
  api: HttpClient = inject(HttpClient); //инжектируем клиент http для запроса на бекенд

  getUsers() {
    return this.api.get('https://jsonplaceholder.typicode.com/users'); // метод который делает запрос на бекенд //.this - обращение к полю класса //get - получить
  }

  constructor() {
    console.log('сервис создан!');
  } // конструктор - это функция которая вызывается сразу когда создается класс
}



