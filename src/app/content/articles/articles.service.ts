import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Article } from './articles.model';
import { ArticlesAppState } from './store/reducers';
import { getArticlesArr, getTagsArr } from './store/selectors';

@Injectable()
export class ArticlesService {
    tagsArr: any;
    selectedArticles: Article[];
    articles: Article[];

    constructor(
        private http: HttpClient,
        private store: Store<ArticlesAppState>
    ) {
        this.store.select(getTagsArr).subscribe(tags => {
            this.tagsArr = tags;
        });
        this.store.select(getArticlesArr).subscribe(articles => {
            this.articles = articles;
        });

        this.selectedArticles = [];
    }

    getAllArticles(): Observable<Article[]> {
        return this.http.get<Article[]>('api/articles');
    }

    getTags(): Observable<any> {
        return this.http.get('api/article-tags');
    }

    getArticles(handle): Observable<Article[]> {
        if (handle.id === 'tagHandle') {
            const tagId = this.tagsArr.find(tag => tag.handle === handle.value).id;
            return this.http.get<Article[]>('api/articles?tags=' + tagId);
        } else {
            return this.http.get<Article[]>('api/articles');
        }
    }

    /**
     * Update the article
     * @param article
     * @returns {Promise<any>}
     */
    updateArticle(article) {
        return this.http.post('api/articles/' + article.id, {...article});
    }
}
