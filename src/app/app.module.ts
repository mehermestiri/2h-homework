import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { SearchPipe } from './search.pipe';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent, TicketsListComponent, TicketDetailsComponent, SearchPipe],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
