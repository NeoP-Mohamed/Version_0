import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMoyens__PaiementComponent } from './add-moyens__paiement/add-moyens__paiement.component';
import { ListMoyens__PaiementComponent } from './list-moyens__paiement/list-moyens__paiement.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListMoyens__PaiementComponent
    },
    {
        path: 'add',
        component: AddMoyens__PaiementComponent
    },
    {
        path: ':id',
        component: AddMoyens__PaiementComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Moyens__PaiementRoutingModule { }


