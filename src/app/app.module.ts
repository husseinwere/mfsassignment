import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { ToastrService } from './shared/toastr.service';
import { TransactionsService } from './shared/transactions.service';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    TransactionsService,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
