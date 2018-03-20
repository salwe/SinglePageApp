class About extends PageTemplate {
    constructor() {
        const data = {
            title: 'About',
            url: '/about',
            initStyles: { top: '-150%', background: '#f4f5ed' },
            animation: { top: 0 },
            content: 'This is the page, wich tells about nothing'
        };

        super(data);
    }

    showItem() {
        return new Promise((resolve, reject) => {
            this.dom.animate(this.animation, {
                complete: () => resolve()
            });
        });
    }

    hideItem() {
        this.dom.css(this.initStyles);
    }
}