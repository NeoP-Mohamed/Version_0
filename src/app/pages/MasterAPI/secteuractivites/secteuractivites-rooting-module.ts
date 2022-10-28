import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSecteurActivitesComponent } from './add-secteuractivites/add-secteuractivites.component';
import { ListSecteurActivitesComponent } from './list-secteuractivites/list-secteuractivites.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListSecteurActivitesComponent
    },
    {
        path: 'add',
        component: AddSecteurActivitesComponent
    },
    {
        path: ':id',
        component: AddSecteurActivitesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecteurActivitesRoutingModule { }


