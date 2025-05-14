import { Routes, RouterModule } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MyPageComponent } from './pages/my-page/my-page.component';

export const routes: Routes = [
    {path: 'hello', component: HelloWorldComponent},
    {path: 'gas-stations', component: MyPageComponent},
];
