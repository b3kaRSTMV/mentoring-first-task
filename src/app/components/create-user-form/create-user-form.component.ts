// import { Component, EventEmitter, inject, Output } from "@angular/core";
// import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
// import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
// import { User } from "../user-list-component/user-list.component";
// @Component({
//     selector: 'app-create-user-form',
//     templateUrl:'./create-user-form.html',
//     styleUrl:'./create-user-form.scss',
//     standalone:true,
//     imports: [ReactiveFormsModule,],
// })
// export class CreateUserFormComponent{
//     readonly data = inject<{user: User, isEdit: boolean}>(MAT_DIALOG_DATA) // приходят юзер и флаги тру фолс 
//     readonly dialogRef: MatDialogRef<CreateUserFormComponent> = inject(MatDialogRef<CreateUserFormComponent>)
//     @Output() createUser = new EventEmitter()
//     public form = new FormGroup({
//         name: new FormControl(this.data.isEdit ? this.data.user.name : '' , [ Validators.required, Validators.minLength(2)] ), //конструктор - это функция вызывается автомат когда создается новый экзепляр класса
//         email: new FormControl(this.data.isEdit ? this.data.user.email : '' ,[Validators.required, Validators.email]),
//         website: new FormControl(this.data.isEdit ? this.data.user.website : '' ,[Validators.required, Validators.minLength(2)]),
//         companyName: new FormControl(this.data.isEdit ? this.data.user.company.name : '' ,[Validators.required]),
//     }); // Либо заполненная форма или пустая проверка

//     public submitForm () {
//         // console.log({
//         //     name: this.form.get("name")?.value, // вопросительный знак это доп проверка если ничего нет то ничего не произойдет
//         // })
//         // this.createUser.emit(this.form.value)
//         // this.form.reset();
//         if (this.data.isEdit) {
//             this.createUser.emit(this.form.value) // на редактирование
//             this.form.reset()
//           } else {
//             this.dialogRef.close(this.form.value) // на создание
//           }
//     }
// //    constructor(){
// //     this.form.valueChanges.subscribe(
// //         formValue => console.log(formValue)
// //     )
// //    } // подписка на каждое изменение инпута!
// // this.data.isEdit ? this.data.user.name : '' // во все формконтролы
// }

