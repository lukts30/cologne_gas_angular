import { Component, Input, numberAttribute } from '@angular/core';
import { GasStationInventoryService } from '../../services/gas-station-inventory-service.service';
import { GasStationDatapoint } from '../../interfaces/gas-station-datapoint';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gas-station-details-page',
  imports: [
    CommonModule
  ],
  templateUrl: './gas-station-details-page.component.html',
  styleUrl: './gas-station-details-page.component.css'
})
export class GasStationDetailsPageComponent implements OnInit {

  @Input({ transform: numberAttribute }) stationId!: number;

  station?: GasStationDatapoint;

  constructor(private service: GasStationInventoryService, private router: Router) {}

  ngOnInit() {
    this.service.getGasStationById(this.stationId).subscribe(station => {
      if (station) {
        this.station = station;
      } else {
        this.router.navigate(['/not-found']);
      }
    });
  }

}
