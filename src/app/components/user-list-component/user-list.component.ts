import { RouterOutlet } from '@angular/router';
import { Component, inject, OnInit } from "@angular/core";
import { UserCard } from '../user-card-component/user-card.component';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';




@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet,UserCard,NgFor],
    templateUrl: './userList.component.html',
    styleUrl: './user-list-component.scss'
})

export class UserList {
    readonly api = inject(HttpClient)
    users: any = []
    constructor(){
        this.api.get('https://jsonplaceholder.typicode.com/users').subscribe(
            (response: any) => {
                this.users = response
                console.log(this.users)
            }
        )
    }
deleteUser(id :number){
    // @ts-ignore
    this.users = this.users.filter(value =>{
        if (id === value.id) {
            return false;
        } else {
            return true;
        }
       } 
    )
} 
    }

