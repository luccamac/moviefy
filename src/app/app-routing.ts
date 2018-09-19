import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
    { 
        path: '**', 
        component: NotFoundComponent
    },
    // { 
    //     path: 'about', 
    //     component: AboutComponent
    // },
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);  // here we are exporting an array of routes with 'forRoot' 