import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBanquesComponent } from './add-banques/add-banques.component';
import { ListBanquesComponent } from './list-banques/list-banques.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListBanquesComponent
    },
    {
        path: 'add',
        component: AddBanquesComponent
    },
    {
        path: ':id',
        component: AddBanquesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BanquesRoutingModule { }


