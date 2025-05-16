import { Component, OnInit } from '@angular/core';
import { GasStationInventoryService } from '../../services/gas-station-inventory-service.service';
import { GasStationDatapoint } from '../../interfaces/gas-station-datapoint';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-gas-station-list-page',
  imports: [ 
    CommonModule, 
    MatListModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './gas-station-list-page.component.html',
  styleUrl: './gas-station-list-page.component.css'
})
export class GasStationListPageComponent implements OnInit {
  gasStations: GasStationDatapoint[] = [];

  constructor(private gasStationService: GasStationInventoryService) {}

  ngOnInit(): void {
    this.gasStationService.getGasStationData()
      .subscribe(data => this.gasStations = data);
  }
}
