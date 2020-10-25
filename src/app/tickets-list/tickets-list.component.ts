import { BackendService } from './../backend.service';
import { Ticket } from './../../interfaces/ticket.interface';
import { User } from './../../interfaces/user.interface';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tickets-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent{

  public readonly users$: Observable<User[]> = this.backendService.users();
  public readonly tickets$: Observable<Ticket[]> = this.backendService.tickets();

  constructor(private readonly backendService: BackendService) {}

}
