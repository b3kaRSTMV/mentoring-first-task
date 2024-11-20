import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'

})
export class UsersApiService {
  api: HttpClient = inject(HttpClient) //инжектируем клиент http для запроса на бекенд
  getUsers() { 
    return this.api.get("https://jsonplaceholder.typicode.com/users") // метод который делает запрос на бекенд //.this - обращение к полю класса //get - получить 
  }
  constructor(){} // конструктор - это функция которая вызывается сразу когда создается класс
}

