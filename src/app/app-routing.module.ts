import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ImporterComponent } from './importer/importer.component';
import { ExporterComponent } from './exporter/exporter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MachineryComponent } from './machinery/machinery.component';
import { ImporterDetailsComponent } from './importer-details/importer-details.component';
import { ImportDutyComponent } from './import-duty/import-duty.component';
import { GenerateQuoteComponent } from './generate-quote/generate-quote.component';

const routes: Routes = [
  {
    path:'home',
    title:'Home',
    component:HomeComponent},
  { 
    path:'login',
    title:'Login',
    component:LoginComponent},
  {
    path:'signup',
    title:'SignUp',
    component:SignUpComponent},
  { 
    path:'importers',
    title:'Importer',
    component:ImporterComponent
  },
  {
    path:'exporters',
    title:'Exporter',
    component:ExporterComponent},
  {
    path:'generate-quote',
    title:'Generate Quote',
    component:GenerateQuoteComponent},
  {
    path:'importer-details',
    title:'Importer Details',
    component:ImporterDetailsComponent},
  {
    path:'import-duty',
    title:'Import-duty',
    component:ImportDutyComponent},
   {
    path:'machinery/:id',
    component:MachineryComponent},
   {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
   },
   {
    path:'**',
    title:'Page Not Found',
    component:PageNotFoundComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
