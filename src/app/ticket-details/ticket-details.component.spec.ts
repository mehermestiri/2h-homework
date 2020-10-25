import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from './../backend.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDetailsComponent } from './ticket-details.component';

describe('TicketDetailsComponent', () => {
  let component: TicketDetailsComponent;
  let fixture: ComponentFixture<TicketDetailsComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketDetailsComponent ],
      providers: [BackendService, {provide: ActivatedRoute, useValue: {
        params: of([{id: 1}])
      }}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
