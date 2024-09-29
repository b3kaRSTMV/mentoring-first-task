import { Component } from "@angular/core";
import { ChangeDetectionStrategy } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [],
    templateUrl: './create-edit-user.html',
    styleUrl: './create-edit-user.scss',
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class CreateEditUser {
    
}
