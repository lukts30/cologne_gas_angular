import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GasStationDatapoint } from '../../interfaces/gas-station-datapoint';
import { GasStationInventoryService } from '../../services/gas-station-inventory-service.service';

@Component({
  selector: 'app-gas-station-json-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gas-station-json-page.component.html',
  styleUrl: './gas-station-json-page.component.css'
})
export class GasStationJSONPageComponent implements OnInit {
  message = '';
  errorMessage = '';
  gasStations: GasStationDatapoint[] = [];

  constructor(private gasStationService: GasStationInventoryService) {}

  ngOnInit(): void {
    this.gasStationService.getGasStationData()
      .subscribe(response => this.message = JSON.stringify(response, null, 4));
  }
}