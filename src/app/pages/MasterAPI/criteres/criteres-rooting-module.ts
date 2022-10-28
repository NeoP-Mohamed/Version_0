import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCriteresComponent } from './add-criteres/add-criteres.component';
import { ListCriteresComponent } from './list-criteres/list-criteres.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListCriteresComponent
    },
    {
        path: 'add',
        component: AddCriteresComponent
    },
    {
        path: ':id',
        component: AddCriteresComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CriteresRoutingModule { }


