import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-gas-station-details-page',
  imports: [],
  templateUrl: './gas-station-details-page.component.html',
  styleUrl: './gas-station-details-page.component.css'
})
export class GasStationDetailsPageComponent {
  @Input({ transform: numberAttribute }) stationId!: number;
}
