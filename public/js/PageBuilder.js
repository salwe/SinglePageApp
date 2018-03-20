class PageBuilder {
    constructor() {
        this.pages = {
            '/' : Home,
            '/about' : About,
            '/contacts' : Contacts
        };
    }

    getPage(url) {
        if (url in this.pages) return new this.pages[url];        
    }
}