import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GasStationInventoryService } from '../../services/gas-station-inventory-service.service';
import { GasStationDatapoint } from '../../interfaces/gas-station-datapoint';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HighlightDirective } from './highlight.directive';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FilterboxComponent, FilterBoxState } from "../../components/filterbox/filterbox.component";


@Component({
  selector: 'app-gas-station-table-page',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    HighlightDirective,
    FormsModule,
    RouterModule,
    FilterboxComponent
],
  templateUrl: './gas-station-table-page.component.html',
  styleUrl: './gas-station-table-page.component.css'
})
export class GasStationTablePageComponent implements OnInit, AfterViewInit {

  displayedColumns = ['objectid', 'adresse', 'latitude', 'longitude', 'action'];
  dataSource = new MatTableDataSource<GasStationDatapoint>([]);
  hideUnmatchedRecords = true;

  currentFilter?: FilterBoxState;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private gasStationService: GasStationInventoryService) { }

  ngOnInit(): void {
    this.dataSource.filterPredicate = function (record, filter) {
      // console.log(`${record.adresse.toLocaleLowerCase()}`);
      return record.adresse.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
    }

    this.gasStationService.getGasStationData().subscribe(data => {
      this.dataSource.data = data;
      this.sort.active = 'adresse';
      this.sort.direction = 'asc';
      this.sort.sortChange.emit({ active: 'adresse', direction: 'asc' });
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  searchTextChanged2(event: FilterBoxState) {
    this.currentFilter = event;

    //this.searchText = event.searchQuery;
    this.hideUnmatchedRecords = event.showOnlyMatches;
  
    if (!this.hideUnmatchedRecords) {
      this.dataSource.filter = "";
    } else {
      this.dataSource.filter = this.currentFilter.searchQuery.trim().toLowerCase();
    }
  
    if (this.sort) {
      this.sort.active = 'adresse';
      this.sort.direction = event.sortDirection;
      this.sort.sortChange.emit({ active: this.sort.active, direction: event.sortDirection });
    }
  }
}