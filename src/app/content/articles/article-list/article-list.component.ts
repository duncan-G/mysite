import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Article } from '../articles.model';
import { ArticlesService } from '../articles.service';

@Component({
    selector       : 'app-article-list',
    templateUrl    : './article-list.component.html',
    styleUrls      : ['./article-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleListComponent {
    @Input() articles: Article[];
    @Input() currentArticle: Article[];

    constructor(
        private route:              ActivatedRoute,
        private articlesService:    ArticlesService,
        private router:             Router
    ) { }

    /**
     * Read mail
     * @param articleId
     */
    readArticle(articleId) {
        const tagHandle  = this.route.snapshot.params.tagHandle,
              timePeriodHandle = this.route.snapshot.params.timePeriodHandle;

        if (tagHandle) {
            this.router.navigate(['articles/tag/' + tagHandle + '/' + articleId]);
        } else {
            this.router.navigate(['articles/latest/' + articleId]);
        }
    }
}
