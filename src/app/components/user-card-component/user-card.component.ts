import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component ({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.scss'],
    standalone: true,
})

export class UserCard{
    @Input() user! : any // принимаем юзеров! инпут означает создания поля которое можно снаружи можно передать в этот компонент!
    @Output() deleteUser = new EventEmitter() // создали обработчик событий. сущность у которого есть метод emit Означает выброси событие!


    onDeleteUser(userId : number): void{
        this.deleteUser.emit(userId)
    } // создали метод который принимает в себя айди который мы получили при нажатии в user-card шаблоне и обращается к функции в удаления в users-service и применяет эту функцию

}


