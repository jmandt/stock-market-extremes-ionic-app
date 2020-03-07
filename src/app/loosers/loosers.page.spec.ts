import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {LoosersPage} from './loosers.page';

describe('LoosersPage', () => {
    let component: LoosersPage;
    let fixture: ComponentFixture<LoosersPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoosersPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(LoosersPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
