import {Component, OnDestroy, OnInit} from '@angular/core';
import {FinancialsService} from '../../services/financials/financials.service';
import {Financials} from '../../models/models';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-loosers',
    templateUrl: 'loosers.page.html',
    styleUrls: ['loosers.page.scss']
})
export class LoosersPage implements OnInit, OnDestroy {

    loosers: Financials [];
    subscriptions: Subscription [] = [];

    constructor(private finService: FinancialsService) {
    }

    ngOnInit() {
        this.subscriptions.push(
            this.finService.getLoosers(10).subscribe((res: Financials []) => this.loosers = res)
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(item => item.unsubscribe());
    }

}
