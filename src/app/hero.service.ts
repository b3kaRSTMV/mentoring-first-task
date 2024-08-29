import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { pipe } from 'rxjs';
pipe

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

api: HttpClient = inject(HttpClient) 



getUsers(){ 
 return this.api.get("https://jsonplaceholder.typicode.com/users")

}
  }
