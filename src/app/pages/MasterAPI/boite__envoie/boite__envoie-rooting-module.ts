import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBoite__EnvoieComponent } from './add-boite__envoie/add-boite__envoie.component';
import { ListBoite__EnvoieComponent } from './list-boite__envoie/list-boite__envoie.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListBoite__EnvoieComponent
    },
    {
        path: 'add',
        component: AddBoite__EnvoieComponent
    },
    {
        path: ':id',
        component: AddBoite__EnvoieComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Boite__EnvoieRoutingModule { }


