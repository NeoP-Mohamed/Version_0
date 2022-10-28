import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTypeProspectsComponent } from './add-typeprospects/add-typeprospects.component';
import { ListTypeProspectsComponent } from './list-typeprospects/list-typeprospects.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListTypeProspectsComponent
    },
    {
        path: 'add',
        component: AddTypeProspectsComponent
    },
    {
        path: ':id',
        component: AddTypeProspectsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TypeProspectsRoutingModule { }


