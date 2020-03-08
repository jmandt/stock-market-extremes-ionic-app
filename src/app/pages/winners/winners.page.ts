import {Component, OnDestroy, OnInit} from '@angular/core';
import {FinancialsService} from '../../services/financials/financials.service';
import {Financials} from '../../models/models';
import {Subscription} from 'rxjs';


@Component({
    selector: 'app-winners',
    templateUrl: 'winners.page.html',
    styleUrls: ['winners.page.scss']
})
export class WinnersPage implements OnInit, OnDestroy {

    winners: Financials [] = [];
    subscriptions: Subscription [] = [];

    constructor(private finService: FinancialsService) {
    }

    ngOnInit() {
        this.subscriptions.push(
            this.finService.getWinners(10).subscribe((res: Financials []) => this.winners = res)
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(item => item.unsubscribe());
    }

}
