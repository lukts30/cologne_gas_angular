import { Component } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-menu-bar',
    imports: [ 
        CommonModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule,
        RouterModule,
     ],
    templateUrl: './menu-bar.component.html',
    styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

    /*
    This array holds the definition of the menu's buttons.
   */
    buttons = [
        {title: 'JSON RAW', routerLink: 'gas-station-json'}, 
        {title: 'List', routerLink: 'gas-station-list'}, 
        {title: 'Table', routerLink: 'gas-table'}, 
    ];
}
