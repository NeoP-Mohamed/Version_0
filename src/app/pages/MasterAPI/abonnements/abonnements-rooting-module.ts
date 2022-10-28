import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAbonnementsComponent } from './add-abonnements/add-abonnements.component';
import { ListAbonnementsComponent } from './list-abonnements/list-abonnements.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListAbonnementsComponent
    },
    {
        path: 'add',
        component: AddAbonnementsComponent
    },
    {
        path: ':id',
        component: AddAbonnementsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AbonnementsRoutingModule { }


