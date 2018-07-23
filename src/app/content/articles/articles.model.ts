export class Article {
    id: string;
    time: string;
    title: string;
    tags: string[];
    content: string;
    read: boolean;

    constructor(article) {
        this.id = article.id;
        this.time = article.time;
        this.title = article.title;
        this.tags = article.tags;
        this.content = article.content;
        this.time = article.time;
        this.read = article.read;
    }

    markRead() {
        this.read = true;
    }

    markUnRead() {
        this.read = false;
    }
}
