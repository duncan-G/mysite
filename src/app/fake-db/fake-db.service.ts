import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ArticlesFakeDb } from './articles';

export class FakeDbService implements InMemoryDbService {
    createDb() {
        return {
            // Articles
            'articles'     : ArticlesFakeDb.articles,
            'article-tags' : ArticlesFakeDb.tags,
        };
    }
}
