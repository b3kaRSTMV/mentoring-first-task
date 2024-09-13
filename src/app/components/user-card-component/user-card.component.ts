import { Component, Input } from "@angular/core";

@Component ({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.scss'],
    standalone: true,
})

export class UserCard{
    @Input() user!: { name: string; email: string; phone: string; address: string};
}