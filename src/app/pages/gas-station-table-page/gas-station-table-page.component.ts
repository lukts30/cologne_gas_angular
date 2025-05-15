import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GasStationInventoryService } from '../../services/gas-station-inventory-service.service';
import { GasStationDatapoint } from '../../interfaces/gas-station-datapoint';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { HighlightDirective } from './highlight.directive';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


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
    RouterModule
  ],
  templateUrl: './gas-station-table-page.component.html',
  styleUrl: './gas-station-table-page.component.css'
})
export class GasStationTablePageComponent implements OnInit, AfterViewInit {

  displayedColumns = ['objectid', 'adresse', 'latitude', 'longitude', 'action'];
  dataSource = new MatTableDataSource<GasStationDatapoint>([]);
  hideUnmatchedRecords = true;

  searchText = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private gasStationService: GasStationInventoryService) { }

  ngOnInit(): void {
    this.gasStationService.getGasStationData().subscribe(data => {
      this.dataSource.data = data;
    });
    this.dataSource.filterPredicate = function (record, filter) {
      // console.log(`${record.adresse.toLocaleLowerCase()}`);
      return record.adresse.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  showOptions(event: MatCheckboxChange): void {
    console.log(event.checked);

    if(!this.hideUnmatchedRecords) {
      this.dataSource.filter = "";
      return;
    }
  }

  searchTextChanged() {
    if(!this.hideUnmatchedRecords) {
      this.dataSource.filter = "";
      return;
    }
    this.dataSource.filter = this.searchText.trim().toLowerCase();
  }

}