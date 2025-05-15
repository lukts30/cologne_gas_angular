import { Routes } from '@angular/router';

import { GasStationJSONPageComponent } from './pages/gas-station-json-page/gas-station-json-page.component';
import { GasStationListPageComponent } from './pages/gas-station-list-page/gas-station-list-page.component';
import { GasStationTablePageComponent } from './pages/gas-station-table-page/gas-station-table-page.component';
import { GasStationDetailsPageComponent } from './pages/gas-station-details-page/gas-station-details-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

// MenuBarComponent must be kept in sync...
export const routes: Routes = [
    {path: 'gas-station-json', component: GasStationJSONPageComponent},
    {path: 'gas-station-list', component: GasStationListPageComponent},
    {path: 'gas-table', component: GasStationTablePageComponent},
    {path: 'gas-stations/:stationId', component: GasStationDetailsPageComponent },
    // {path: '**', redirectTo: 'gas-table' },
    {path: 'not-found', component: NotFoundPageComponent},
    {path: '**', component: NotFoundPageComponent}
];
