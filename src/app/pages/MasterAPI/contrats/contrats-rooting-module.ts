import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContratsComponent } from './add-contrats/add-contrats.component';
import { ListContratsComponent } from './list-contrats/list-contrats.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListContratsComponent
    },
    {
        path: 'add',
        component: AddContratsComponent
    },
    {
        path: ':id',
        component: AddContratsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContratsRoutingModule { }


