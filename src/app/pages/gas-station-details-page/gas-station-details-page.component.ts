import { Component, Input, numberAttribute, OnInit } from '@angular/core';
import { GasStationInventoryService } from '../../services/gas-station-inventory-service.service';
import { GasStationDatapoint } from '../../interfaces/gas-station-datapoint';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GoogleMapsModule } from "@angular/google-maps";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-gas-station-details-page',
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    GoogleMapsModule
  ],
  templateUrl: './gas-station-details-page.component.html',
  styleUrl: './gas-station-details-page.component.css'
})
export class GasStationDetailsPageComponent implements OnInit {

  @Input({ transform: numberAttribute }) stationId!: number;

  station?: GasStationDatapoint;

  center: google.maps.LatLngLiteral = { lat: 50.935173, lng: 6.953101 };
  zoom = 11;

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
