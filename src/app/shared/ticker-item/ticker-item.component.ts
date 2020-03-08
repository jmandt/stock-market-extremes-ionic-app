import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Company, Financials} from '../../models/models';
import {CompanyService} from '../../services/company.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-ticker-item',
  templateUrl: './ticker-item.component.html',
  styleUrls: ['./ticker-item.component.scss'],
})
export class TickerItemComponent implements OnInit, OnDestroy {

  @Input() financials: Financials;

  subscriptions: Subscription [] = [];

  constructor(private companyService: CompanyService,
              private router: Router) { }

  ngOnInit() {}

  goCompanyDetails(symbol: any) {
    this.subscriptions.push(this.companyService.getIsinFromSymbol(symbol).subscribe(
        (res: Company) => this.router.navigateByUrl(`company/${res.isin}`)
    ));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe());
  }

}
