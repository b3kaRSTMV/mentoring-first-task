import { Component, inject,} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { User } from "../user-list-component/user-list.component";

@Component({
    selector: 'app-edit-user-dialog',
    templateUrl: './edit-user-dialog.html',
    standalone: true,
    imports: [ReactiveFormsModule, MatDialogClose],
})
export class EditUserDialogComponent {
    readonly data = inject<{user: User }>(MAT_DIALOG_DATA); // в модалке получили данные когда открывали диалоговое окно (при отркытии модалки она заполнена юзером который мы хотим отредактировать)
      public readonly form = new FormGroup({
           name: new FormControl(this.data.user.name, [ Validators.required, Validators.minLength(2)] ), //конструктор - это функция вызывается автомат когда создается новый экзепляр класса
           email: new FormControl(this.data.user.email,[Validators.required, Validators.email]),
           website: new FormControl(this.data.user.website,[Validators.required, Validators.minLength(2)]),
           companyName: new FormControl(this.data.user.company.name,[Validators.required]),
       }); // создали форму которая выйдет когда мы нажмем редактировать

   get userWithUpdatedFields(){
    return {
        ...this.form.value,
        id: this.data.user.id,
    };
   } // геттер - конструкция которая позволяет к методу обьекта обращатся как к полю которая будет  ав вычисляемым в момент обращения к нему
}

