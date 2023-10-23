import {createStore, createLogger} from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {},
    state: {
        articles: [
            {
                isAccent: false,
                tag: {
                    text: 'Kitchan Design', href: '#'
                },
                title: 'Let’s Get Solution For Building Construction Work',
                date: '26 December,2022',
                href: 'blog_details.html',
                img: {
                    src: require('@/assets/img/article_1.jpg'), alt: 'article1'
                },
                shortText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'
            },
            {
                isAccent: true,
                tag: {
                    text: 'Living Design', href: '#'
                },
                title: 'Low Cost Latest Invented Interior Designing Ideas.',
                date: '22 December,2022',
                href: 'blog_details.html',
                img: {
                    src: require('@/assets/img/article_2.jpg'), alt: 'article2'
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
                    src: require('@/assets/img/article_3.jpg'), alt: 'article3'
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
                    src: require('@/assets/img/article_4.jpg'), alt: 'article4'
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
                    src: require('@/assets/img/article_5.jpg'), alt: 'article5'
                },
                shortText: ''
            }, {
                isAccent: false, tag: {
                    text: 'Interior Design', href: '#'
                }, title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022', href: '', img: {
                    src: require('@/assets/img/article_6.jpg'), alt: 'article6'
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
                    src: require('@/assets/img/article_last.jpg'), alt: 'article7'
                },
                shortText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam ' +
                    'eu sem vitae turpis dignissim maximus.' +
                    'posuere in.Contrary to popular belief.<br><br> ' +
                    'Lorem Ipsum is not simply random text. ' +
                    'It has roots in a piece of classica.'
            },
        ],
        articlesDetails: [
            {
                tag: 0,
                title: 'Let’s Get Solution For Building Construction Work1111',
                subTitle: 'Design sprints are great',
                date: '26 December,2022',
                imgMain: {
                    src: require('@/assets/img/blog_details_11.jpg'), alt: 'article1'
                },
                imgSecond: {
                    src: require('@/assets/img/blog_details_2.jpg'), alt: 'article1'
                },
                textMainParagraphs: [
                    {
                        id: 0,
                        text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. " +
                            "posuere in.Contrary to popular  belief.There are many variations of passages " +
                            "of Lorem Ipsum available, but the majority have suffered alteration in some " +
                            "form, by injecthumour, or randomised words which don/'t look even slightly " +
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
                    src: require('@/assets/img/blog_details_21.jpg'), alt: 'article1'
                },
                imgSecond: {
                    src: require('@/assets/img/blog_details_2.jpg'), alt: 'article1'
                },
                textMainParagraphs: [
                    {
                        id: 0,
                        text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. " +
                            "posuere in.Contrary to popular  belief.There are many variations of passages " +
                            "of Lorem Ipsum available, but the majority have suffered alteration in some " +
                            "form, by injecthumour, or randomised words which don\\'t look even slightly " +
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
                    src: require('@/assets/img/blog_details_31.jpg'), alt: 'article1'
                },
                imgSecond: {
                    src: require('@/assets/img/blog_details_2.jpg'), alt: 'article1'
                },
                textMainParagraphs: [
                    {
                        id: 0,
                        text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. " +
                            "posuere in.Contrary to popular  belief.There are many variations of passages " +
                            "of Lorem Ipsum available, but the majority have suffered alteration in some " +
                            "form, by injecthumour, or randomised words which don\\'t look even slightly " +
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
                    src: require('@/assets/img/blog_details_41.jpg'), alt: 'article1'
                },
                imgSecond: {
                    src: require('@/assets/img/blog_details_2.jpg'), alt: 'article1'
                },
                textMainParagraphs: [
                    {
                        id: 0,
                        text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. " +
                            "posuere in.Contrary to popular  belief.There are many variations of passages " +
                            "of Lorem Ipsum available, but the majority have suffered alteration in some " +
                            "form, by injecthumour, or randomised words which don\\'t look even slightly " +
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
                    src: require('@/assets/img/blog_details_51.jpg'), alt: 'article1'
                },
                imgSecond: {
                    src: require('@/assets/img/blog_details_2.jpg'), alt: 'article1'
                },
                textMainParagraphs: [
                    {
                        id: 0,
                        text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. " +
                            "posuere in.Contrary to popular  belief.There are many variations of passages " +
                            "of Lorem Ipsum available, but the majority have suffered alteration in some " +
                            "form, by injecthumour, or randomised words which don\\'t look even slightly " +
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
                    src: require('@/assets/img/blog_details_61.jpg'), alt: 'article1'
                },
                imgSecond: {
                    src: require('@/assets/img/blog_details_2.jpg'), alt: 'article1'
                },
                textMainParagraphs: [
                    {
                        id: 0,
                        text: " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. " +
                            "posuere in.Contrary to popular  belief.There are many variations of passages " +
                            "of Lorem Ipsum available, but the majority have suffered alteration in some " +
                            "form, by injecthumour, or randomised words which don\\'t look even slightly " +
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
        projects: [
            {
                img: {
                    src: require('@/assets/img/project/project1.jpg'), alt: 'project1'
                },
                breadcrumbs: [
                    {text: 'Decor', href: '#'},
                    {text: 'Artchitecture', href: '#'}
                ],
                tags: [1, 3],
                title: 'Minimal Bedroom',
                href: '#',
                Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
            },
            {
                breadcrumbs: [
                    {text: 'Decor', href: '#'},
                    {text: 'Artchitecture', href: '#'}
                ],
                tags: [2, 3],
                title: 'Classic Minimal Bedroom',
                href: '#',
                img: {
                    src: require('@/assets/img/project/project3.jpg'), alt: 'project3'
                },
                Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
            },
            {
                breadcrumbs: [
                    {text: 'Decor', href: '#'},
                    {text: 'Artchitecture', href: '#'}
                ],
                tags: [1, 3],
                title: 'Minimal Bedroom',
                href: '#',
                img: {
                    src: require('@/assets/img/project/project5.jpg'), alt: 'project2'
                },
                Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
            },
            {
                breadcrumbs: [
                    {text: 'Decor', href: '#'},
                    {text: 'Artchitecture', href: '#'}
                ],
                tags: [2, 3],
                title: 'Minimal Bedroom table',
                href: '#',
                img: {
                    src: require('@/assets/img/project/project7.jpg'), alt: 'project5'
                },
                Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
            },
            {
                breadcrumbs: [
                    {text: 'Decor', href: '#'},
                    {text: 'Artchitecture', href: '#'}
                ],
                tags: [1, 3],
                title: 'Modern Bedroom',
                href: '#',
                img: {
                    src: require('@/assets/img/project/project2.jpg'), alt: 'project4'
                },
                Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
            },
            {
                breadcrumbs: [
                    {text: 'Decor', href: '#'},
                    {text: 'Artchitecture', href: '#'}
                ],
                tags: [0, 3],
                title: 'Modern Medroom',
                href: '#',
                img: {
                    src: require('@/assets/img/project/project4.jpg'), alt: 'project7'
                },
                Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
            },
            {
                breadcrumbs: [
                    {text: 'Decor', href: '#'},
                    {text: 'Artchitecture', href: '#'}
                ],
                tags: [0, 3],
                title: 'System Table',
                href: '#',
                img: {
                    src: require('@/assets/img/project/project6.jpg'), alt: 'project6'
                },
                Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
            },
            {
                breadcrumbs: [
                    {text: 'Decor', href: '#'},
                    {text: 'Artchitecture', href: '#'}
                ],
                tags: [0, 3],
                title: 'Modern Bedroom',
                href: '#',
                img: {
                    src: require('@/assets/img/project/project8.jpg'), alt: 'project8'
                },
                Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
            },
        ],
        projectDetails: {
            id: 0,
            title: 'Minimal Look Bedrooms',
            paragraphs: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis ' +
                'dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
                'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum ' +
                'commodo.',
                'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis ' +
                'quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis ' +
                'elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus ' +
                'porttitor.'
            ],
            images: [
                {
                    id: 0,
                    src: require("@/assets/img/project/details/photo-1.jpg"),
                    alt: 'photo-1'
                },
                {
                    id: 1,
                    src: require("@/assets/img/project/details/photo-2.jpg"),
                    alt: 'photo-2'
                },
                {
                    id: 2,
                    src: require("@/assets/img/project/details/photo-3.jpg"),
                    alt: 'photo-3'
                },
            ]
        }
    },
    mutations: {},
    getters: {
        getProjectDetails(state) {
            return state.projectDetails
        },
        getProjects(state) {
            return state.projects
        },
        getArticles(state) {
            return state.articles
        },
        getArticlesForMain(state) {
            return state.articles.slice(0, 3);
        },
        getArticlesForBlog(state) {
            return state.articles.slice(0, state.articles.length - 1);
        },
        getLastArticle(state) {
            return state.articles[state.articles.length - 1];
        },
        getArticlesDetails(state) {
            return state.articlesDetails
        },
    },
    actions: {},

    strict: debug,
    plugins: debug ? [createLogger()] : []
})