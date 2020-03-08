import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../../../models/models';
import {Subscription} from 'rxjs';
import {CompanyService} from '../../../services/company.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  @Input() company: Company;

  peers: string [] = [];
  subscriptions: Subscription [] = [];

  constructor(private companyService: CompanyService,
              private router: Router) { }

  ngOnInit() {
    this.peers = this.company.peers.filter(item => item !== this.company.ticker);
  }

  goCompanyDetails(symbol: any) {
    this.subscriptions.push(
        this.companyService.getIsinFromSymbol(symbol).subscribe(
            (res: Company) => this.router.navigateByUrl(`company/${res.isin}`)
        ));
  }

}
