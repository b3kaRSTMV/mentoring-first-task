import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { UsersService } from '../services/users.service';
import { UserApiService } from '../services/usersApi.service';



@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './userList.component.html',
    styleUrl: './app.component.scss'
})

export class Userlist {
constructor(
){
   
}
}