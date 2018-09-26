import { SearchComponent } from './search/search.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
    { 
         path: 'about', 
         component: AboutComponent
    },
    { 
        path: '', 
        component: SearchComponent,
        pathMatch: 'full'
    }
    { 
        path: '**', 
        component: NotFoundComponent
    }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);  // here we are exporting an array of routes with 'forRoot' 