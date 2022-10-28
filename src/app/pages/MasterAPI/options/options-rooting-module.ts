import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOptionsComponent } from './add-options/add-options.component';
import { ListOptionsComponent } from './list-options/list-options.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListOptionsComponent
    },
    {
        path: 'add',
        component: AddOptionsComponent
    },
    {
        path: ':id',
        component: AddOptionsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OptionsRoutingModule { }


