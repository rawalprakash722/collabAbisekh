import { NextPage } from 'next'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
import { useState,useEffect } from 'react';
import { env } from '../components/constrant'; 

const Document:NextPage=()=> {

  return (
    <Html>
    <Head>
     <title>{env.title}</title>
     <meta charSet="utf-8" />
     <meta name="description" content={env.description} />
     <meta name="keywords" content={env.keywords} />
     <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="https://goinggenius.com.np/gg-front/assets/img/favicon.png" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
      <link  href="/assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
      <link  href="/assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
      <script  src="/assets/plugins/global/plugins.bundle.js"></script>
      <script  src="/assets/js/scripts.bundle.js"></script>
    </Head>
      <body  id="kt_body" className="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed aside-enabled aside-fixed">
        <Main />
        <NextScript />

        {/* <Script src="/assets/plugins/global/plugins.bundle.js" strategy="lazyOnload" />
        <Script src="/assets/js/scripts.bundle.js" strategy="lazyOnload"  /> */}
        {/* <script  src="/assets/plugins/global/plugins.bundle.js" id="plugin_bundle_script"   ></script>
        <script  src="/assets/js/scripts.bundle.js" id="compiled_script"   ></script> */}
      </body>
    </Html>
  )
}
export default Document;