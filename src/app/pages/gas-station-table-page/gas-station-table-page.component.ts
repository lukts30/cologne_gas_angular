import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GasStationInventoryService } from '../../services/gas-station-inventory-service.service';
import { GasStationDatapoint } from '../../interfaces/gas-station-datapoint';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-gas-station-table-page',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule],
  templateUrl: './gas-station-table-page.component.html',
  styleUrl: './gas-station-table-page.component.css'
})
export class GasStationTablePageComponent implements OnInit, AfterViewInit {

  displayedColumns = ['objectid', 'adresse', 'latitude', 'longitude'];
  dataSource = new MatTableDataSource<GasStationDatapoint>([]);

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

  // https://www.angularjswiki.com/material/mat-table-filter/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}