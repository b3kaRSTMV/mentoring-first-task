import { Injectable,inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UsersApiService } from './usersApi.service';


@Injectable({providedIn: 'root',}) // паттерн синглтон - одно на все приложение!
export class UsersService {
  readonly usersApiService = inject(UsersApiService) // получаем доступ к классу UsersApiService
  private readonly usersSubject$ = new BehaviorSubject<any[]> ([]); // мы создали коробку где есть пустой массив
  public readonly users$ = this.usersSubject$.asObservable(); // делаем так чтобы сабджект был виден снаружи


  loadUsers() {
    this.usersApiService.getUsers().subscribe(
      (response: any) => {
        this.usersSubject$.next(response)
      } 
    )
  }


deleteUser(id: number): void {
 this.usersSubject$.next(
  this.usersSubject$.value.filter(
    item => {
      if (id === item.id){
        return false
      } else {
        return true;
      } 
    }
  )
 )
}

editUser(editedUser: any){
  this.usersSubject$.value.map(
    user => {
      if (user.id === editedUser.id){
        return editedUser
      } else {
        user
      }
    }
  )
} // если этот юзер тот который мы выбрали то мы заменяем на нового если нет то ничего не делаем!

addUser(user:any){
  this.usersSubject$.next(
    [...this.usersSubject$.value, user],
  ) // с помощью spread оператора мы добавили того юзера которого тыкнули
  this.usersSubject$.next(
    [...this.usersSubject$.value.concat([user])],
  )
} 
}
  


