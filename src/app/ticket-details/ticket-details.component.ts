import { of, Observable } from 'rxjs';
import { Ticket } from './../../interfaces/ticket.interface';
import { BackendService } from './../backend.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tick } from '@angular/core/testing';
import { switchMap, map, switchAll, concatMap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-ticket-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent {

  public ticket$ : Observable<Ticket> = this.activatedRoute.params.pipe(
    switchMap(params => this.backendService.ticket(params.id)));

  constructor( private activatedRoute: ActivatedRoute, private backendService: BackendService) { }


}
