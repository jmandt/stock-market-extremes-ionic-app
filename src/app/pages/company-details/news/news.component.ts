import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NewsService} from '../../../services/news/news.service';
import {NewsArticle} from '../../../models/models';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit, OnDestroy {
    @Input() isin: string | undefined;
    news: NewsArticle [];

    subscriptions: Subscription [] = [];

    constructor(private newsService: NewsService,
                private router: Router) {
    }

    get sortData() {
        return this.news.sort((a, b) => {
            // @ts-ignore
            return new Date(b.datePublished) - new Date(a.datePublished);
        });
    }

    ngOnInit() {
        this.subscriptions.push(
            this.newsService.getNewsByIsinInSubcollection(this.isin)
                .subscribe((res: NewsArticle []) => this.news = res)
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(item => item.unsubscribe());
    }


    newsDetails(article: NewsArticle) {
        console.log(encodeURI(article.name));
        this.router.navigateByUrl('company/' + this.isin + '/news/' + encodeURI(article.name));
    }
}
