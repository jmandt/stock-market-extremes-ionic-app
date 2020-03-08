import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TickerItemComponent } from './ticker-item.component';

describe('TickerItemComponent', () => {
  let component: TickerItemComponent;
  let fixture: ComponentFixture<TickerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickerItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TickerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
