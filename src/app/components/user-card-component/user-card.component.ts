import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { User } from '../user-list-component/user-list.component';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

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

  readonly dialog = inject(MatDialog);

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(EditUserDialogComponent, {
  //     data: { user: this.user }, //  метод из matdialog мы просто подставляем свои данные
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (!result) return;
  //     this.editUser.emit(result);
  //   }); //после закрытия отлавливаем данные с помощью подписки и емитим(отправляем наружу)
  // }

  onEditUser(user: User){
    this.editUser.emit(this.user)
  }

  onDeleteUser(userId: number): void {
    this.deleteUser.emit(userId);
  } // создали метод который принимает в себя айди который мы получили при нажатии в user-card шаблоне и обращается к функции в удаления в users-service и применяет эту функцию
}// опен дайлог повесить на едит юзер в юзер лист хтмл и в 
