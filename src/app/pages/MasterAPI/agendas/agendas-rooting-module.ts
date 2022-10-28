import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAgendasComponent } from './add-agendas/add-agendas.component';
import { ListAgendasComponent } from './list-agendas/list-agendas.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListAgendasComponent
    },
    {
        path: 'add',
        component: AddAgendasComponent
    },
    {
        path: ':id',
        component: AddAgendasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgendasRoutingModule { }


