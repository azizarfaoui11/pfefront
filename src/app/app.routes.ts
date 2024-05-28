import { Routes } from '@angular/router';
import { PipelineComponent } from './pages/front/pipeline/pipeline.component';
import { HomeComponent } from './pages/front/home/home.component';
import { ContactComponent } from './pages/front/contact/contact.component';
import { PaginationComponent } from './pages/front/pagination/pagination.component';
import { Page3Component } from './pages/front/page3/page3.component';
import { RecapComponent } from './pages/front/recap/recap.component';
import { TestsComponent } from './pages/front/tests/tests.component';
import { ForfunComponent } from './pages/front/forfun/forfun.component';
import { DocumentationComponent } from './pages/front/documentation/documentation.component';
import { StripeComponent } from './pages/front/stripe/stripe.component';


export const routes: Routes = [


       {  path : 'home' , component: HomeComponent},
       {  path : 'pipeline', component: PipelineComponent  },
       {  path : 'contact' , component: ContactComponent },
       {  path : 'page2' , component:PaginationComponent},
       {  path : 'page3' , component:Page3Component},
       {  path : 'recap' , component:RecapComponent},
       {  path : 'tests' , component:TestsComponent},
       {  path : 'forfun' , component:ForfunComponent},
       {  path : 'documentation' , component:DocumentationComponent},
       {  path : 'stripe' , component:StripeComponent},







        //path:"",
       // loadChildren:() => import('./pages/front/front.module').then(m => m.FrontModule)
       //},
       /*{
         path:"dashboard",
         //loadChildren:() => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
         */
        

];
