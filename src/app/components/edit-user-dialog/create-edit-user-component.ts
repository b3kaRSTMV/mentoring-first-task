import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CreateUser, User } from '../user-list-component/user-list.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './create-edit-user-component.html',
  standalone: true,
  imports: [ReactiveFormsModule, ],
})
export class CreateEditUserDialogComponent implements OnInit {
  private readonly dialogRef = inject(MatDialogRef<CreateEditUserDialogComponent>) // ссылка на компонент // переменная хранит в себе компонент с помощью которого мы можем обращатся к компоненту
  public data = inject<{ user: User, isEdit: boolean }>(MAT_DIALOG_DATA); // в модалке получили данные когда открывали диалоговое окно (при отркытии модалки она заполнена юзером который мы хотим отредактировать)
  
  public readonly form = new FormGroup({
    id: new FormControl(new Date().getTime(), Validators.required),
    name: new FormControl('', [Validators.required, Validators.minLength(2),]),
    email: new FormControl('', [Validators.required, Validators.email,]),
    website: new FormControl('', [Validators.required, Validators.minLength(2),]),
    company: new FormGroup({
        name: new FormControl('', Validators.required)
    })
  });
  ngOnInit(): void {
    if (this.data.isEdit) {
        this.form.patchValue(this.data.user) // условие которое проверяет что isEdit true это значит что мы нажали редактировать и данные пришли какие то при нажантии на кнопку и метод patchvalue заполняет форму 
    }
  }
  
onSubmit() {
    this.dialogRef.close(this.form.value)
  }
}
