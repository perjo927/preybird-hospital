import { Component, Input } from '@angular/core';

@Component({
    selector: 'logo',
    templateUrl: './logo.html',
    styleUrls: ['./logo.css']
})

export class LogoComponent {
    @Input() url: string;
}
