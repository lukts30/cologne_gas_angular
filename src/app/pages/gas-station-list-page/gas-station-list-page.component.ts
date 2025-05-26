import { Component, OnInit } from '@angular/core';
import { GasStationInventoryService } from '../../services/gas-station-inventory-service.service';
import { GasStationDatapoint } from '../../interfaces/gas-station-datapoint';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GasStationListItemComponent } from "../../components/gas-station-list-item/gas-station-list-item.component";
import { FilterboxComponent, FilterBoxState } from "../../components/filterbox/filterbox.component";

@Component({
  selector: 'app-gas-station-list-page',
  imports: [
    CommonModule,
    MatListModule,
    MatProgressSpinnerModule,
    GasStationListItemComponent,
    FilterboxComponent
],
  templateUrl: './gas-station-list-page.component.html',
  styleUrl: './gas-station-list-page.component.css'
})
export class GasStationListPageComponent implements OnInit {

  gasStations: GasStationDatapoint[] = [];
  filteredGasStations: GasStationDatapoint[] = [];

  filterState: FilterBoxState = {
    searchQuery: '',
    showOnlyMatches: false,
    sortDirection: 'asc',
    viewMode: 'list'
  };

  constructor(private gasStationService: GasStationInventoryService) {}

  ngOnInit(): void {
    this.gasStationService.getGasStationData().subscribe(data => {
      this.gasStations = data;
      this.applyFilterAndSort();
    });
  }

  onFilterChanged(state: FilterBoxState) {
    this.filterState = state;
    this.applyFilterAndSort();
  }

  applyFilterAndSort() {
    let result = [...this.gasStations];

    if (this.filterState.showOnlyMatches && this.filterState.searchQuery.trim()) {
      const query = this.filterState.searchQuery.toLowerCase();
      result = result.filter(station =>
        station.adresse?.toLowerCase().includes(query)
      );
    }

    result.sort((a, b) => {
      const aVal = a.adresse?.toLowerCase() || '';
      const bVal = b.adresse?.toLowerCase() || '';
      return this.filterState.sortDirection === 'asc'
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    });

    this.filteredGasStations = result;
  }
}
