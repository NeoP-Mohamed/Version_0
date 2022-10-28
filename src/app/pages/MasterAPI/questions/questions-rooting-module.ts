import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { ListQuestionsComponent } from './list-questions/list-questions.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListQuestionsComponent
    },
    {
        path: 'add',
        component: AddQuestionsComponent
    },
    {
        path: ':id',
        component: AddQuestionsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuestionsRoutingModule { }


