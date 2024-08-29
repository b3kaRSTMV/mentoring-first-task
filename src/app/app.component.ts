
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserApiService} from './hero.service';
import { Userlist } from './user-list.componetns';
import { __values } from 'tslib';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Userlist,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  
})
export class AppComponent {

userApiService:UserApiService = inject(UserApiService)
users: any = []


 constructor() {
  this.userApiService.getUsers()
  .subscribe(value => {
this.users = value
  })

 }

}
