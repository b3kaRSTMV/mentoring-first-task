import { Injectable,inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly api = inject(HttpClient);
  private readonly usersSubject$ = new BehaviorSubject <any[]>([]);
  public readonly users$ = this.usersSubject$.asObservable(); // делаем так чтобы сабджект был виден снаружи
  


private loadUsers(): void {
  this.api.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(
  (responce: any[]) => {
    this.usersSubject$.next(responce)
  }
  )
}

private editUser(editUser: any): void {
  this.api.post<any>('https://jsonplaceholder.typicode.com/users', editUser).subscribe(
    (responce:any) => {
      this.usersSubject$.next(
        this.usersSubject$.value.map(
          user => user.id === responce.id ? editUser : user // юзера заменили если айдишки совпадают то значит это он значит заменяем на новый если не он то на нового заменяем
        )
      )
    }
  )
}// непонятная часть кода спросить на созвоне!!!

private addUser(addUser: any): void {
  this.api.post<any>('https://jsonplaceholder.typicode.com/users', addUser).subscribe(
    (responce:any) => {
      this.usersSubject$.next(
        [...this.usersSubject$.value, responce]
      )
    }
  )
}// непонятная часть кода спросить на созвоне!


private deleteUser(usersToDelete: any): void {
  this.api.delete<any>(`https://jsonplaceholder.typicode.com/users${usersToDelete.id}`).subscribe(
    (responce:any) => {
      this.usersSubject$.next(
        this.usersSubject$.value.filter(
          user => user.id !== responce.id
        )
      )
    }
  )

}

constructor () {
this.loadUsers() // при инициализации класса будет сделан запрос и данные будут в usersSubject
} 


}
