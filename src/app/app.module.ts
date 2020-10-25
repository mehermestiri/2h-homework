import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { AppRoutingModule } from './app-routing.module';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [AppComponent, TicketsListComponent, TicketDetailsComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
