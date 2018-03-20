class Home extends PageTemplate {
    constructor() {
        const data = {
            title: 'Home',
            url: '/',
            initStyles: { left: '-150%', background: '#ececec' },
            animation: { left: 0 },
            content: 'This is the Main page of Application'
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