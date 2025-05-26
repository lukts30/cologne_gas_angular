import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';

export interface FilterBoxState {
  searchQuery: string;
  showOnlyMatches: boolean;
  sortDirection: 'asc' | 'desc';
  viewMode: 'list' | 'gallery';
}

@Component({
  selector: 'app-filterbox',
  imports: [
    CommonModule,
    FormsModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './filterbox.component.html',
  styleUrl: './filterbox.component.css'
})
export class FilterboxComponent {

  showViewToggleRow = input<boolean>(false)
  showOnlyMatchesPreset = input<boolean>(false)

  filterboxState: FilterBoxState = {
    searchQuery: '',
    showOnlyMatches: false,
    sortDirection: 'asc',
    viewMode: 'list'
  };

  filterboxStateChanged = output<FilterBoxState>();

  ngOnInit() {
    this.filterboxState.showOnlyMatches = this.showOnlyMatchesPreset();
  }
  
  emitChanges() {
    this.filterboxStateChanged.emit(this.filterboxState);
  }

  onSearchInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.filterboxState.searchQuery = input.value;
    this.emitChanges();
  }

  toggleSortDirection() {
    this.filterboxState.sortDirection = this.filterboxState.sortDirection === 'asc' ? 'desc' : 'asc';
    this.emitChanges();
  }

  setViewMode(mode: 'list' | 'gallery') {
    this.filterboxState.viewMode = mode;
    this.emitChanges();
  }
}