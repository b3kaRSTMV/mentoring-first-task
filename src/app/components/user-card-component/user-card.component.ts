import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { User } from '../user-list-component/user-list.component';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  standalone: true,
})
export class UserCard {
  @Input() user!: User; // принимаем юзеров! инпут означает создания поля которое можно снаружи можно передать в этот компонент! воскл знак говорит ожидать данные пока не придут
  @Output() deleteUser = new EventEmitter(); // создали обработчик событий. сущность у которого есть метод emit Означает выброси событие!
  @Output() editUser = new EventEmitter();

  onEditUser(user: User){
    this.editUser.emit(this.user)
  }

  onDeleteUser(userId: number): void {
    this.deleteUser.emit(userId);
  } // создали метод который принимает в себя айди который мы получили при нажатии в user-card шаблоне и обращается к функции в удаления в users-service и применяет эту функцию
}
