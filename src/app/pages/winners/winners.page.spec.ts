import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WinnersPage } from './winners.page';

describe('WinnersPage', () => {
  let component: WinnersPage;
  let fixture: ComponentFixture<WinnersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WinnersPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WinnersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
