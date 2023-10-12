<template>
  <html lang="ru">
  <body>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@400;600&display=swap"
          rel="stylesheet">
    <title>Blog</title>
  </head>
  <header id="home" class="header center">
    <div class="logo">
      <svg class="logo__img" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"
           fill="#CDA274">
        <path
            d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"/>
      </svg>
      <span class="logo__text">Interno</span>
    </div>

    <nav class="main-menu">
      <a class="main-menu__link" href="#">Home</a>
      <a class="main-menu__link" href="#">Project</a>
      <a class="main-menu__link" href="#">Blog</a>
    </nav>
  </header>
  <main-page :articles="articles"></main-page>
  <blog-page :articles="articles"></blog-page>
  <blog-details-page :articles="articlesDetails"></blog-details-page>

  <footer class="footer center">
    <div class="footer__block">
      <div class="logo">
        <svg class="logo__img" xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34"
             fill="none">
          <path
              d="M0.5 34.0003H13.9588V24.499C13.9588 22.4853 15.5898 20.8543 17.6035 20.8543C19.6172 20.8543 21.2482 22.4853 21.2482 24.499V34.0003H34.4975V0C15.7211 0 0.5 15.2211 0.5 34.0003Z"
              fill="#CDA274"/>
        </svg>
        <span class="logo__text">Interno</span>
      </div>
      <p class="footer__text">It is a long established fact that a reader will be distracted lookings.</p>
      <div class="footer__social">
        <a href="#" class="footer__social-link">
          <img src="@/assets/img/twitter.svg" class="footer__social-icon" alt="twitter link">
        </a>
        <a href="#" class="footer__social-link">
          <img src="@/assets/img/linkedin.svg" class="footer__social-icon" alt="linkedin link">
        </a>
      </div>

    </div>
    <div class="footer__block footer__block_nav">
      <h3 class="footer__block-title">Pages</h3>
      <ul class="footer__menu-list">
        <li>
          <a class="footer__nav-link" href="#">Home</a>
        </li>
        <li>
          <a class="footer__nav-link" href="#">Project</a>
        </li>
        <li>
          <a class="footer__nav-link" href="#">Blog</a>
        </li>
      </ul>
    </div>
    <div class="footer__block footer__block_contact">
      <h3 class="footer__block-title">Contact</h3>
      <div class="footer__block-content">
        <a class="footer__contact-link footer__contact-link_address" href="#">
          55 East Birchwood Ave. Brooklyn, New York 11201
        </a>
        <a class="footer__contact-link" href="#">
          contact@interno.com
        </a>
        <a class="footer__contact-link" href="#">
          (123) 456 - 7890
        </a>
      </div>
    </div>
  </footer>
  </body>
  </html>
</template>
<script>
import MainPage from '@/components/MainPage'
import BlogPage from "@/components/BlogPage";
import BlogDetailsPage from "@/components/BlogDetailsPage";

export default {
  name: 'App',
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
          src: require('@/assets/img/article_1.jpg'), alt: 'article1'
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
            src: require('./assets/img/blog_details_11.jpg'), alt: 'article1'
          },
          imgSecond: {
            src: require('./assets/img/blog_details_2.jpg'), alt: 'article1'
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
            src: require('./assets/img/blog_details_21.jpg'), alt: 'article1'
          },
          imgSecond: {
            src: require('./assets/img/blog_details_2.jpg'), alt: 'article1'
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
            src: require('./assets/img/blog_details_31.jpg'), alt: 'article1'
          },
          imgSecond: {
            src: require('./assets/img/blog_details_2.jpg'), alt: 'article1'
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
            src: require('./assets/img/blog_details_41.jpg'), alt: 'article1'
          },
          imgSecond: {
            src: require('./assets/img/blog_details_2.jpg'), alt: 'article1'
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
            src: require('./assets/img/blog_details_51.jpg'), alt: 'article1'
          },
          imgSecond: {
            src: require('./assets/img/blog_details_2.jpg'), alt: 'article1'
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
            src: require('./assets/img/blog_details_61.jpg'), alt: 'article1'
          },
          imgSecond: {
            src: require('./assets/img/blog_details_2.jpg'), alt: 'article1'
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

    }
  },
  components: {
    MainPage,
    BlogPage,
    BlogDetailsPage,

  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
