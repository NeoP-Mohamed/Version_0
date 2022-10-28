import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMissionsComponent } from './add-missions/add-missions.component';
import { ListMissionsComponent } from './list-missions/list-missions.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListMissionsComponent
    },
    {
        path: 'add',
        component: AddMissionsComponent
    },
    {
        path: ':id',
        component: AddMissionsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MissionsRoutingModule { }


