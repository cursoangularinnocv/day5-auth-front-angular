import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionService } from "./session.service";
import { FormsModule } from "@angular/forms"
import { LoggedinComponent } from './loggedin/loggedin.component';
import { Routes } from '@angular/router';

// export const routes: Routes = [
//   { path: '', component: AppComponent },
//   {
//       path: 'loggedIn',
//       component: LoggedinComponent,
//       canActivate: [ SessionService ]
//   },
//   { path: '**', redirectTo: '' }
// ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
