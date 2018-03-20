class Contacts extends PageTemplate {
    constructor() {
        const data = {
            title: 'Contacts',
            url: '/contacts',
            initStyles: { opacity: '0', background: '#c5c5cc' },
            animation: { opacity: 1 },
            content: 'Page with our contacts'
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