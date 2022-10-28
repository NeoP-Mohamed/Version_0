import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionnairesComponent } from './add-questionnaires/add-questionnaires.component';
import { ListQuestionnairesComponent } from './list-questionnaires/list-questionnaires.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListQuestionnairesComponent
    },
    {
        path: 'add',
        component: AddQuestionnairesComponent
    },
    {
        path: ':id',
        component: AddQuestionnairesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuestionnairesRoutingModule { }


