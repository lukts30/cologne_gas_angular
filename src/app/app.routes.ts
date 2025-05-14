import { Routes } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MyPageComponent } from './pages/my-page/my-page.component';
import { GasStationTablePageComponent } from './pages/gas-station-table-page/gas-station-table-page.component';

export const routes: Routes = [
    {path: 'raw-json', component: HelloWorldComponent},
    {path: 'gas-stations', component: MyPageComponent},
    {path: 'gas-table', component: GasStationTablePageComponent},
];
