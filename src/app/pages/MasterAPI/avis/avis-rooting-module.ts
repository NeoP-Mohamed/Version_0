import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAvisComponent } from './add-avis/add-avis.component';
import { ListAvisComponent } from './list-avis/list-avis.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListAvisComponent
    },
    {
        path: 'add',
        component: AddAvisComponent
    },
    {
        path: ':id',
        component: AddAvisComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AvisRoutingModule { }


