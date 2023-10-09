const Blog = {
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
                href: 'blog_details.html',
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
                href: 'blog_details.html',
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
                href: 'blog_details.html',
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
                href: 'blog_details.html',
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
                href: 'blog_details.html',
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
                href: 'blog_details.html',
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
    },
    computed: {
        articlesForMain() {
            return this.articles.slice(0, 3);
        }, articlesForBlog() {
            return this.articles.slice(0, this.articles.length - 1);
        }, lastArticle() {
            return this.articles[this.articles.length - 1];
        }
    },
};
const BlogDetails = {
    data() {
        return {
            tags: [
                {id: 0, text: 'Kitchen'},
                {id: 1, text: 'Bedroom'},
                {id: 2, text: 'Building'},
                {id: 3, text: 'Architecture'},
                {id: 4, text: 'Kitchen Planning'},
                {id: 5, text: 'Bedroom'},
            ],
            tagActive: 0,
            articles: [
                {
                    tag: 0,
                    title: 'Let’s Get Solution For Building Construction Work1111',
                    subTitle: 'Design sprints are great',
                    date: '26 December,2022',
                    imgMain: {
                        src: 'static/img/blog_details_11.jpg', alt: 'article1'
                    },
                    imgSecond: {
                        src: 'static/img/blog_details_2.jpg', alt: 'article1'
                    },
                    textMainParagraphs: [
                        {
                            id: 0,
                            text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. " +
                                "posuere in.Contrary to popular  belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered alteration in some " +
                                "form, by injecthumour, or randomised words which don\'t look even slightly " +
                                "believable."
                        },
                        {
                            id: 1,
                            text: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators " +
                                "on the Internet tend to repeat predefined chunks as necessary."
                        }
                    ],
                    textSecond: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. " +
                        "posuere in.Contrary to popular belief.There are many variations of passages " +
                        "of Lorem Ipsum available, but the majority have suffered.",
                    textSecondList: [
                        {
                            id: 0,
                            text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus." +
                                "posuere in.Contrary to popular belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered."
                        },
                        {
                            id: 1,
                            text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus." +
                                "posuere in.Contrary to popular belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered."
                        },
                        {
                            id: 2,
                            text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus." +
                                "posuere in.Contrary to popular belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered."
                        },
                    ],
                    textLast: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus." +
                                "posuere in.Contrary to popular belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered."

                },
                {
                    tag: 1,
                    title: 'Let’s Get Solution For Building Construction Work2222',
                    subTitle: 'Design sprints are great',
                    date: '26 December,2022',
                    imgMain: {
                        src: 'static/img/blog_details_21.jpg', alt: 'article1'
                    },
                    imgSecond: {
                        src: 'static/img/blog_details_2.jpg', alt: 'article1'
                    },
                    textMainParagraphs: [
                        {
                            id: 0,
                            text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. " +
                                "posuere in.Contrary to popular  belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered alteration in some " +
                                "form, by injecthumour, or randomised words which don\'t look even slightly " +
                                "believable."
                        },
                        {
                            id: 1,
                            text: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators " +
                                "on the Internet tend to repeat predefined chunks as necessary."
                        }
                    ],
                    textSecond: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. " +
                        "posuere in.Contrary to popular belief.There are many variations of passages " +
                        "of Lorem Ipsum available, but the majority have suffered.",
                    textSecondList: [
                        {
                            id: 0,
                            text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus." +
                                "posuere in.Contrary to popular belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered."
                        },
                        {
                            id: 1,
                            text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus." +
                                "posuere in.Contrary to popular belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered."
                        },
                        {
                            id: 2,
                            text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus." +
                                "posuere in.Contrary to popular belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered."
                        },
                    ]
                },
                {
                    tag: 2,
                    title: 'Let’s Get Solution For Building Construction Work3333',
                    subTitle: 'Design sprints are great',
                    date: '26 December,2022',
                    imgMain: {
                        src: 'static/img/blog_details_31.jpg', alt: 'article1'
                    },
                    imgSecond: {
                        src: 'static/img/blog_details_2.jpg', alt: 'article1'
                    },
                    textMainParagraphs: [
                        {
                            id: 0,
                            text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. " +
                                "posuere in.Contrary to popular  belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered alteration in some " +
                                "form, by injecthumour, or randomised words which don\'t look even slightly " +
                                "believable."
                        },
                        {
                            id: 1,
                            text: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators " +
                                "on the Internet tend to repeat predefined chunks as necessary."
                        }
                    ],
                    textSecond: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. " +
                        "posuere in.Contrary to popular belief.There are many variations of passages " +
                        "of Lorem Ipsum available, but the majority have suffered.",
                    textSecondList: [
                        {
                            id: 0,
                            text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus." +
                                "posuere in.Contrary to popular belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered."
                        },
                        {
                            id: 1,
                            text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus." +
                                "posuere in.Contrary to popular belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered."
                        },
                        {
                            id: 2,
                            text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus." +
                                "posuere in.Contrary to popular belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered."
                        },
                    ]
                },
                {
                    tag: 3,
                    title: 'Let’s Get Solution For Building Construction Work4444',
                    subTitle: 'Design sprints are great',
                    date: '26 December,2022',
                    imgMain: {
                        src: 'static/img/blog_details_41.jpg', alt: 'article1'
                    },
                    imgSecond: {
                        src: 'static/img/blog_details_2.jpg', alt: 'article1'
                    },
                    textMainParagraphs: [
                        {
                            id: 0,
                            text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. " +
                                "posuere in.Contrary to popular  belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered alteration in some " +
                                "form, by injecthumour, or randomised words which don\'t look even slightly " +
                                "believable."
                        },
                        {
                            id: 1,
                            text: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators " +
                                "on the Internet tend to repeat predefined chunks as necessary."
                        }
                    ],
                    textSecond: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. " +
                        "posuere in.Contrary to popular belief.There are many variations of passages " +
                        "of Lorem Ipsum available, but the majority have suffered.",
                    textSecondList: [
                        {
                            id: 0,
                            text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus." +
                                "posuere in.Contrary to popular belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered."
                        },
                        {
                            id: 1,
                            text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus." +
                                "posuere in.Contrary to popular belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered."
                        },
                        {
                            id: 2,
                            text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus." +
                                "posuere in.Contrary to popular belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered."
                        },
                    ]
                },
                {
                    tag: 4,
                    title: 'Let’s Get Solution For Building Construction Work5555',
                    subTitle: 'Design sprints are great',
                    date: '26 December,2022',
                    imgMain: {
                        src: 'static/img/blog_details_51.jpg', alt: 'article1'
                    },
                    imgSecond: {
                        src: 'static/img/blog_details_2.jpg', alt: 'article1'
                    },
                    textMainParagraphs: [
                        {
                            id: 0,
                            text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. " +
                                "posuere in.Contrary to popular  belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered alteration in some " +
                                "form, by injecthumour, or randomised words which don\'t look even slightly " +
                                "believable."
                        },
                        {
                            id: 1,
                            text: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators " +
                                "on the Internet tend to repeat predefined chunks as necessary."
                        }
                    ],
                    textSecond: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. " +
                        "posuere in.Contrary to popular belief.There are many variations of passages " +
                        "of Lorem Ipsum available, but the majority have suffered.",
                    textSecondList: [
                        {
                            id: 0,
                            text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus." +
                                "posuere in.Contrary to popular belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered."
                        },
                        {
                            id: 1,
                            text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus." +
                                "posuere in.Contrary to popular belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered."
                        },
                        {
                            id: 2,
                            text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus." +
                                "posuere in.Contrary to popular belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered."
                        },
                    ]
                },
                {
                    tag: 5,
                    title: 'Let’s Get Solution For Building Construction Work6666',
                    subTitle: 'Design sprints are great',
                    date: '26 December,2022',
                    imgMain: {
                        src: 'static/img/blog_details_61.jpg', alt: 'article1'
                    },
                    imgSecond: {
                        src: 'static/img/blog_details_2.jpg', alt: 'article1'
                    },
                    textMainParagraphs: [
                        {
                            id: 0,
                            text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. " +
                                "posuere in.Contrary to popular  belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered alteration in some " +
                                "form, by injecthumour, or randomised words which don\'t look even slightly " +
                                "believable."
                        },
                        {
                            id: 1,
                            text: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators " +
                                "on the Internet tend to repeat predefined chunks as necessary."
                        }
                    ],
                    textSecond: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. " +
                        "posuere in.Contrary to popular belief.There are many variations of passages " +
                        "of Lorem Ipsum available, but the majority have suffered.",
                    textSecondList: [
                        {
                            id: 0,
                            text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus." +
                                "posuere in.Contrary to popular belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered."
                        },
                        {
                            id: 1,
                            text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus." +
                                "posuere in.Contrary to popular belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered."
                        },
                        {
                            id: 2,
                            text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus." +
                                "posuere in.Contrary to popular belief.There are many variations of passages " +
                                "of Lorem Ipsum available, but the majority have suffered."
                        },
                    ]
                },
            ],
        }
    },
    methods:{
        clickOnTag(id){
            this.tagActive = id;
        },
    },
    computed: {
        currentArticle(){
            return this.articles.find((art)=> art.tag === this.tagActive)
        }
    }
};
Vue.createApp(Blog).mount('#blog');
Vue.createApp(BlogDetails).mount('#blog-details');
