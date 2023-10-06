const ArticlesApp = {
    el: '#blog',
    data() {
        return {
            articles: [{
                isAccent: false,
                tag: {
                    text: 'Kitchan Design', href: '#'
                },
                title: 'Let’s Get Solution For Building Construction Work',
                date: '26 December,2022',
                href: '',
                img: {
                    src: 'static/img/article_1.jpg', alt: 'article1'
                },
                shortText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'
            }, {
                isAccent: true,
                tag: {
                    text: 'Living Design', href: '#'
                },
                title: 'Low Cost Latest Invented Interior Designing Ideas.',
                date: '22 December,2022',
                href: '',
                img: {
                    src: 'static/img/article_2.jpg', alt: 'article2'
                },
                shortText: ''
            }, {
                isAccent: false,
                tag: {
                    text: 'Interior Design', href: '#'
                },
                title: 'Best For Any Office & Business Interior Solution',
                date: '25 December,2022',
                href: '',
                img: {
                    src: 'static/img/article_3.jpg', alt: 'article3'
                },
                shortText: 'Lorem Ipsum is not simply random text. It has roots in a piece of classica.Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
            }, {
                isAccent: false,
                tag: {
                    text: 'Kitchan Design', href: '#'
                },
                title: 'Let’s Get Solution For Building Construction Work',
                date: '26 December,2022',
                href: '',
                img: {
                    src: 'static/img/article_4.jpg', alt: 'article4'
                },
                shortText: ''
            }, {
                isAccent: false,
                tag: {
                    text: 'Living Design', href: '#'
                },
                title: 'Low Cost Latest Invented Interior Designing Ideas.',
                date: '22 December,2022',
                href: '',
                img: {
                    src: 'static/img/article_5.jpg', alt: 'article5'
                },
                shortText: ''
            }, {
                isAccent: false, tag: {
                    text: 'Interior Design', href: '#'
                }, title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022', href: '', img: {
                    src: 'static/img/article_6.jpg', alt: 'article6'
                }, shortText: ''
            }, {
                isAccent: false,
                tag: {
                    text: 'Interior Design', href: '#'
                },
                title: 'Best For Any Office & Business Interior Solution',
                date: '25 December,2022',
                href: '',
                img: {
                    src: 'static/img/article_last.jpg', alt: 'article7'
                },
                shortText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam ' +
                    'eu sem vitae turpis dignissim maximus.' +
                    'posuere in.Contrary to popular belief.<br><br> ' +
                    'Lorem Ipsum is not simply random text. ' +
                    'It has roots in a piece of classica.'
            },
            ]
        }
    }, computed: {
        articlesForMain() {
            return this.articles.slice(0, 3);
        }, articlesForBlog() {
            return this.articles.slice(0, this.articles.length - 1);
        }, lastArticle() {
            return this.articles[this.articles.length - 1];
        }
    },
};

Vue.createApp(ArticlesApp).mount('#blog');