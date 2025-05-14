import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MyPageComponent } from './pages/my-page/my-page.component';

const routes: Routes = [
    {path: 'hello', component: HelloWorldComponent},
    {path: 'gas-stations', component: MyPageComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting { }