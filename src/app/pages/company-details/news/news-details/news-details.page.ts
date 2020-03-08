import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Company, NewsArticle, NewsContext} from '../../../../models/models';
import {NewsService} from '../../../../services/news/news.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit, OnDestroy {

  articleName: string | undefined;
  subscriptions: Subscription [] = [];

  article: NewsArticle;


  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.articleName = this.route.snapshot.params.id;
    console.log(this.route.snapshot.params.id)
    this.subscriptions.push(
        this.newsService.getArticleByName(this.articleName)
            .subscribe((result: NewsArticle []) => this.article = result[0])
    );
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe());
  }
}
