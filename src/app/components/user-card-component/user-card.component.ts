import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component ({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.scss'],
    standalone: true,
})

export class UserCard{
    @Input() user! : any 
    @Output() deleteUser = new EventEmitter() // создали обработчик событий


    onDeleteUser(userId : number): void{
        this.deleteUser.emit(userId)
    }

}


