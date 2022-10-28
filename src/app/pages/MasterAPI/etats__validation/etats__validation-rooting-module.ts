import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEtats__ValidationComponent } from './add-etats__validation/add-etats__validation.component';
import { ListEtats__ValidationComponent } from './list-etats__validation/list-etats__validation.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListEtats__ValidationComponent
    },
    {
        path: 'add',
        component: AddEtats__ValidationComponent
    },
    {
        path: ':id',
        component: AddEtats__ValidationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Etats__ValidationRoutingModule { }


