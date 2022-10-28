import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeleoperateurs__MissionsComponent } from './add-teleoperateurs__missions/add-teleoperateurs__missions.component';
import { ListTeleoperateurs__MissionsComponent } from './list-teleoperateurs__missions/list-teleoperateurs__missions.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListTeleoperateurs__MissionsComponent
    },
    {
        path: 'add',
        component: AddTeleoperateurs__MissionsComponent
    },
    {
        path: ':id',
        component: AddTeleoperateurs__MissionsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Teleoperateurs__MissionsRoutingModule { }


