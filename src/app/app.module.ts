import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketItemComponent } from './components/ticket-item/ticket-item.component';
import { ButtonComponent } from './components/button/button.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'tickets', component: TicketsComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		TicketsComponent,
		TicketItemComponent,
		ButtonComponent,
		UserFormComponent,
		AddTicketComponent,
  FooterComponent,
  LoginComponent,
  RegisterComponent
	],
	imports: [
		BrowserModule,
		// AppRoutingModule,
		RouterModule.forRoot(appRoutes, { enableTracing: true }),
		HttpClientModule,
		FormsModule,
		FontAwesomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
