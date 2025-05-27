import { Component, input } from '@angular/core';
import { GasStationDatapoint } from '../../interfaces/gas-station-datapoint';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gas-station-list-item',
  imports: [
    MatListModule,
    RouterModule
  ],
  templateUrl: './gas-station-list-item.component.html',
  styleUrl: './gas-station-list-item.component.css'
})
export class GasStationListItemComponent {
  station = input.required<GasStationDatapoint>();
}
