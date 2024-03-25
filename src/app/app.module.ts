import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ImporterComponent } from './importer/importer.component';
import { ExporterComponent } from './exporter/exporter.component';
import { MachineryComponent } from './machinery/machinery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ImporterDetailsComponent } from './importer-details/importer-details.component';
import { GenerateQuoteComponent } from './generate-quote/generate-quote.component';
import { ImportDutyComponent } from './import-duty/import-duty.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ImporterComponent,
    ExporterComponent,
    MachineryComponent,
    PageNotFoundComponent,
    ImporterDetailsComponent,
    GenerateQuoteComponent,
    ImportDutyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
