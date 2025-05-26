import { CommonModule } from '@angular/common';
import { Component, input, OnInit, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';

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
export class FilterboxComponent implements OnInit {

  showViewToggleRow = input<boolean>(false);
  showOnlyMatchesPreset = input<boolean>(false);
  useQueryParams = input<boolean>(true);

  filterboxState: FilterBoxState = {
    searchQuery: '',
    showOnlyMatches: false,
    sortDirection: 'asc',
    viewMode: 'list'
  };

  filterboxStateChanged = output<FilterBoxState>();

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.filterboxState.showOnlyMatches = this.showOnlyMatchesPreset();

    if (this.useQueryParams()) {
      this.route.queryParams.subscribe(params => {
        const newState: Partial<FilterBoxState> = { ...this.filterboxState };
    
        if (params['view']) {
          newState.viewMode = params['view'] === 'gallery' ? 'gallery' : 'list';
        }
    
        if (params['sort']) {
          newState.sortDirection = params['sort'] === 'desc' ? 'desc' : 'asc';
        }
    
        if (params['search']) {
          newState.searchQuery = params['search'];
        }
    
        if (params['show']) {
          newState.showOnlyMatches = params['show'] === 'true';
        }
    
        this.filterboxState = newState as FilterBoxState;
      });
    }    
    this.emitChanges();
  }
  
  emitChanges() {
    this.filterboxStateChanged.emit(this.filterboxState);

    if (this.useQueryParams()) {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {
          view: this.filterboxState.viewMode,
          sort: this.filterboxState.sortDirection,
          search: this.filterboxState.searchQuery || null,
          show: this.filterboxState.showOnlyMatches || null,
        },
        queryParamsHandling: 'merge',
      });
    }

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