import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  
   users: any[] = [];

  getUsers(): any[] {
    return this.users;
  }

  setUsers(users: any[]): void {
    this.users = users;
  }

  addUser(user: any): void {
    this.users.push(user);
  }

  removeUser(userId: number): void {
    this.users = this.users.filter(user => user.id !== userId);
  }

  updateUser(userId: number, updatedUser: any): void {
    const index = this.users.findIndex(user => user.id === userId);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }
  
}
