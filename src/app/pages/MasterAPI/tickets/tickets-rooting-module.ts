import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTicketsComponent } from './add-tickets/add-tickets.component';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListTicketsComponent
    },
    {
        path: 'add',
        component: AddTicketsComponent
    },
    {
        path: ':id',
        component: AddTicketsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TicketsRoutingModule { }


