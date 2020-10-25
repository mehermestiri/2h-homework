import { SearchPipe } from './../search.pipe';
import { Ticket } from './../../interfaces/ticket.interface';
import { User } from './../../interfaces/user.interface';
import { of } from 'rxjs';
import { BackendService } from './../backend.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsListComponent } from './tickets-list.component';

describe('TicketsListComponent', () => {
  let component: TicketsListComponent;
  let fixture: ComponentFixture<TicketsListComponent>;
  let mockUser: User;
  let mockTicket: Ticket;
  let backendServiceSpy;

  beforeEach(async () => {

    mockUser = { id: 111, name: 'Victor' };
    mockTicket = {
      id: 0,
      completed: false,
      assigneeId: 111,
      description: 'Install a monitor arm'
    };

    backendServiceSpy = jasmine.createSpyObj({
      tickets: of ([mockTicket]),
      users: of ([mockUser])
    });

    await TestBed.configureTestingModule({
      declarations: [ TicketsListComponent, SearchPipe ],
      providers: [{provide: BackendService, useValue: backendServiceSpy}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve the tickets from service', () => {
    expect(backendServiceSpy.tickets).toHaveBeenCalled();
  });
});
