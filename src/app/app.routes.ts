import { Routes } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MyPageComponent } from './pages/my-page/my-page.component';

export const routes: Routes = [
    {path: 'raw-json', component: HelloWorldComponent},
    {path: 'gas-stations', component: MyPageComponent},
];
