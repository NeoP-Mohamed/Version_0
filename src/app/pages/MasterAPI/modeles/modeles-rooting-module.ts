import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddModelesComponent } from './add-modeles/add-modeles.component';
import { ListModelesComponent } from './list-modeles/list-modeles.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListModelesComponent
    },
    {
        path: 'add',
        component: AddModelesComponent
    },
    {
        path: ':id',
        component: AddModelesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModelesRoutingModule { }


