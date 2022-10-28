import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEtats__AppelComponent } from './add-etats__appel/add-etats__appel.component';
import { ListEtats__AppelComponent } from './list-etats__appel/list-etats__appel.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListEtats__AppelComponent
    },
    {
        path: 'add',
        component: AddEtats__AppelComponent
    },
    {
        path: ':id',
        component: AddEtats__AppelComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Etats__AppelRoutingModule { }


