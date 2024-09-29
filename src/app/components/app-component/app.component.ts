
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserList } from '../user-list-component/user-list.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  
})
export class AppComponent {

 constructor() {

 }
}
