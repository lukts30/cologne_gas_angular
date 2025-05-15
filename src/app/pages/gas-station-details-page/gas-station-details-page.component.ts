import { Component, Input, numberAttribute } from '@angular/core';
import { GasStationInventoryService } from '../../services/gas-station-inventory-service.service';
import { GasStationDatapoint } from '../../interfaces/gas-station-datapoint';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gas-station-details-page',
  imports: [
    CommonModule
  ],
  templateUrl: './gas-station-details-page.component.html',
  styleUrl: './gas-station-details-page.component.css'
})
export class GasStationDetailsPageComponent {

  @Input({ transform: numberAttribute }) stationId!: number;

  station$!: Observable<GasStationDatapoint | undefined>;

  constructor(private service: GasStationInventoryService) {}

  ngOnInit() {
    this.station$ = this.service.getGasStationById(this.stationId);
  }

}
