class PageTemplate {
    constructor({ title, url, initStyles, animation, content }) {
        this.title = title;
        this.url = url;
        this.animation = animation;
        this.content = content;
        this.initStyles = initStyles;

        this.createDOM();
        this.setInitStyles();
    }
    
    createDOM () {
        this.dom = $(`
            <div class="page p-3 rounded">
                <h2>${this.title}</h2>
                <div class="content">
                    ${this.content}
                </div>
            </div>
        `);
    }

    setInitStyles() {
        this.dom.css(this.initStyles);
    }

    showItem() {}

    hideItem() {}

}