import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReponsesComponent } from './add-reponses/add-reponses.component';
import { ListReponsesComponent } from './list-reponses/list-reponses.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListReponsesComponent
    },
    {
        path: 'add',
        component: AddReponsesComponent
    },
    {
        path: ':id',
        component: AddReponsesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReponsesRoutingModule { }


