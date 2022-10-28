import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTypeAppelsComponent } from './add-typeappels/add-typeappels.component';
import { ListTypeAppelsComponent } from './list-typeappels/list-typeappels.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListTypeAppelsComponent
    },
    {
        path: 'add',
        component: AddTypeAppelsComponent
    },
    {
        path: ':id',
        component: AddTypeAppelsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TypeAppelsRoutingModule { }


