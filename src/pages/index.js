import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;
  const schema = {
    '@context': 'https://schema.org/',
    '@type': 'Person',
    name: 'Duong Nam Truong',
    url: 'https://laptrinhbanthan.com',
    image:
      'https://res.cloudinary.com/alerthumg/image/upload/v1597216922/laptrinhbanthan/images/nam-truong.jpg',
    sameAs: [
      'https://www.facebook.com/truongduongg99',
      'https://github.com/namtruongdev',
      'https://laptrinhbanthan.com',
      'https://www.linkedin.com/in/truongduong99/',
    ],
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Nam Truong Inc',
    },
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
        <link rel="canonical" href="https://duongnamtruong.com/" />
        <meta
          name="keywords"
          content="Dương Nam Trường,Portfolio,Resume,cv,duong nam truong, nam truong, duong truong"
        />
        <meta property="og:url" content="https://duongnamtruong.com/" />
        <meta property="og:title" content="Trang chủ" />
        <meta property="og:description" content="Hi there! I'm a Fullstack Javascript Developer" />
        <meta property="og:type" content="website" />
        <meta name="twitter:creator" content="@truongduong99" />
        <meta name="twitter:title" content="Trang chủ" />
        <meta name="twitter:description" content="Hi there! I'm a Fullstack Javascript Developer" />
        <meta property="fb:app_id" content="174766196750045" />
        <meta property="fb:pages" content="108704720678153" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="author" content="Dương Nam Trường" />
        <meta property="og:site_name" content="Duong Nam Truong | Full Stack Developer" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/alerthumg/image/upload/v1598274640/duongnamtruong/images/duongnamtruong-seo_jtvjok.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <App />
    </>
  );
};
