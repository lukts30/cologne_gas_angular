import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GasStationDatapoint } from '../interfaces/gas-station-datapoint';
import { GasStationInventoryService } from '../services/gas-station-inventory-service.service';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {
  message: string = '';
  errorMessage: string = '';
  gasStations: GasStationDatapoint[] = [];

  constructor(private gasStationService: GasStationInventoryService) {}

  ngOnInit(): void {
    this.gasStationService.getGasStationData()
      .subscribe(response => this.message = JSON.stringify(response, null, 4));
  }
}