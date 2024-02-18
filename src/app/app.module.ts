import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ModalloginComponent } from './components/modallogin/modallogin.component';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout'
import {
MatSidenavModule, 
} from '@angular/material/sidenav';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ModalloginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogActions,
    MatDialogContent,
    ReactiveFormsModule,
    MatSidenavModule,
    FlexLayoutModule

  ],
  providers: [
    provideAnimationsAsync(),
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {autoFocus: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
