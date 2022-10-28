import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTrunkSIPComponent } from './add-trunksip/add-trunksip.component';
import { ListTrunkSIPComponent } from './list-trunksip/list-trunksip.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListTrunkSIPComponent
    },
    {
        path: 'add',
        component: AddTrunkSIPComponent
    },
    {
        path: ':id',
        component: AddTrunkSIPComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrunkSIPRoutingModule { }


