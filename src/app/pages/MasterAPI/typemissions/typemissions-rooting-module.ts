import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTypeMissionsComponent } from './add-typemissions/add-typemissions.component';
import { ListTypeMissionsComponent } from './list-typemissions/list-typemissions.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListTypeMissionsComponent
    },
    {
        path: 'add',
        component: AddTypeMissionsComponent
    },
    {
        path: ':id',
        component: AddTypeMissionsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TypeMissionsRoutingModule { }


