import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import {PaginatorModule} from 'primeng/paginator';
import { MessagesModule } from 'primeng/messages';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    LoginSignupComponent,
    TemplatedrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    ImageModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    InputNumberModule,
    PaginatorModule,
    MessagesModule,
    CardModule,
    PanelModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
