export class Quote {
    // quote class
    id: number;
    title: string;
    author: string;
    quote: string;
    upvotes: number;
    downvotes: number;
    // constructor
    constructor(id: number, title: string, author: string, quote: string, upvotes: number, downvotes: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.quote = quote;
        this.upvotes = upvotes;
        this.downvotes = downvotes
    }
}
