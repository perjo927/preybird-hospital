import { Component, Input } from '@angular/core';
import { NavItem } from './navitem.model';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.css']
})

export class NavbarComponent {
    @Input() show: boolean;
    @Input() items: Array<NavItem>;
}
