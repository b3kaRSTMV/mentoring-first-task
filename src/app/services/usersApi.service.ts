import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  api: HttpClient = inject(HttpClient) 
  users = []
  getUsers(){ 
    return this.api.get("https://jsonplaceholder.typicode.com/users").subscribe(
      (response: any) => {
        this.users = response
      }
    )
  }
}
