import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: 'app-create-user-form',
    templateUrl:'./create-user-form.html',
    styleUrl:'./create-user-form.scss',
    standalone:true,
    imports: [ReactiveFormsModule],
})
export class CreateUserFormComponent{
    @Output()
    createUser = new EventEmitter()

    public form = new FormGroup({
        name: new FormControl('', [ Validators.required, Validators.minLength(2)] ), //конструктор - это функция вызывается автомат когда создается новый экзепляр класса
        email: new FormControl('',[Validators.required, Validators.email]),
        website: new FormControl('',[Validators.required, Validators.minLength(2)]),
        companyName: new FormControl('',[Validators.required]),
    });

    public submitForm () {
        console.log("user created")
        // console.log({
        //     name: this.form.get("name")?.value, // вопросительный знак это доп проверка если ничего нет то ничего не произойдет
        // })
        this.createUser.emit(this.form.value)
        this.form.reset();   
    }
   constructor(){
    this.form.valueChanges.subscribe(
        formValue => console.log(formValue)
    )
   } 
 
}

