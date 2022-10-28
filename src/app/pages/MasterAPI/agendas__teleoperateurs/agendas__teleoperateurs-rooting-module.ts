import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAgendas__TeleoperateursComponent } from './add-agendas__teleoperateurs/add-agendas__teleoperateurs.component';
import { ListAgendas__TeleoperateursComponent } from './list-agendas__teleoperateurs/list-agendas__teleoperateurs.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListAgendas__TeleoperateursComponent
    },
    {
        path: 'add',
        component: AddAgendas__TeleoperateursComponent
    },
    {
        path: ':id',
        component: AddAgendas__TeleoperateursComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Agendas__TeleoperateursRoutingModule { }


