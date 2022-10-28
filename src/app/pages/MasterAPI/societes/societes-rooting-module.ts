import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSocietesComponent } from './add-societes/add-societes.component';
import { ListSocietesComponent } from './list-societes/list-societes.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListSocietesComponent
    },
    {
        path: 'add',
        component: AddSocietesComponent
    },
    {
        path: ':id',
        component: AddSocietesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SocietesRoutingModule { }


