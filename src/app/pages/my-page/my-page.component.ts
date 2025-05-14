import { Component } from '@angular/core';
import { GasStationInventoryService } from '../../services/gas-station-inventory-service.service';
import { GasStationDatapoint } from '../../interfaces/gas-station-datapoint';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-page',
  imports: [ CommonModule ],
  templateUrl: './my-page.component.html',
  styleUrl: './my-page.component.css'
})
export class MyPageComponent {
  gasStations: GasStationDatapoint[] = [];

  constructor(private gasStationService: GasStationInventoryService) {}

  ngOnInit(): void {
    this.gasStationService.getGasStationData()
      .subscribe(data => this.gasStations = data);
  }
}
