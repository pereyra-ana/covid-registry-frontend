import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSnackBarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CovidCheckDetailComponent } from './components/main/covid-check-detail/covid-check-detail.component';
import { CovidCheckListComponent } from './components/main/covid-check-list/covid-check-list.component';
import { CovidCheckNewComponent } from './components/main/covid-check-new/covid-check-new.component';
import { MainComponent } from './components/main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ResponseHttpInterceptor } from './interceptors/http/response-http.interceptor';
import { LoaderInterceptor } from './interceptors/loader/loader.interceptor';
import { GetPropertiesPipe } from './pipes/get-properties.pipe';
import { LoaderService } from './services/loader/loader.service';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    MainComponent,
    PageNotFoundComponent,
    CovidCheckNewComponent,
    CovidCheckListComponent,
    GetPropertiesPipe,
    CovidCheckDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatIconModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseHttpInterceptor, multi: true },
    LoaderService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CovidCheckNewComponent,
    CovidCheckDetailComponent
  ],
})
export class AppModule { }
