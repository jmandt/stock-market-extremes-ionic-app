import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../services/company.service';
import {ActivatedRoute} from '@angular/router';
import {Company} from '../../models/models';
import {Location} from '@angular/common';


@Component({
    selector: 'app-company-details',
    templateUrl: './company-details.page.html',
    styleUrls: ['./company-details.page.scss'],
})
export class CompanyDetailsPage implements OnInit {

    isin: string;
    company: Company;
    selectedSegment = 'overview';

    constructor(private companyService: CompanyService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit() {
        this.isin = this.route.snapshot.params.id;
        this.companyService.getCompanyInfo(this.isin).subscribe((result: Company[]) => this.company = result[0]);
    }

    segmentChanged(event) {
        this.selectedSegment = event.detail.value;
    }

    goBack() {
        this.location.back();
    }
}
