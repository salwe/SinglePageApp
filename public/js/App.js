class App {
    constructor(rootEl) {
        this.pageBuilder = new PageBuilder();
        this.navList = [];
        this.page = null;
        this.root = $(`#${rootEl}`);

        this.initNavigation();
    }
    
    initNavigation() {
        this.navList = $('.mainNav .nav-link');

        this.navList.click((e) => {
            e.preventDefault();

            const url = $(e.currentTarget).attr('href');
            if (this.page.url === url) return;

            history.pushState({'url': url}, null, url);
            this.showPage(url);
        });

        window.onpopstate = () => {
            const url = history.state.url || '/';
            this.showPage(url);
        }
    }
    
    showPage(url) {
        this.prevPage = this.page;
        this.page = this.pageBuilder.getPage(url);

        this.root.append(this.page.dom);
        
        this.page.showItem()
            .then(response => {
                this.removePrevPage();
            })
            .catch(error => {
                console.log(error);
            });
        
        this.changeActiveNav(url);
    }

    removePrevPage() {
        if(this.prevPage) this.prevPage.dom.remove();
    }

    changeActiveNav(url) {
        this.navList.removeClass('active');
        this.navList.filter(`[href='${url}']`).addClass('active');
    }
}