import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownModule } from 'primeng/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RformComponent } from './rform/rform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {ConfirmationService,MessageService} from 'primeng/api'
import {ToastModule} from 'primeng/toast'
import { SidebarModule } from 'primeng/sidebar';

import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, RformComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DropdownModule,
    TableModule,
    InputTextModule,
    CalendarModule,
    BrowserAnimationsModule,
    ButtonModule,
    MessagesModule,
    ConfirmDialogModule,ToastModule,SidebarModule,
    HttpClientModule
    
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
