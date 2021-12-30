import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head';

export default function Layout({ staticPath, children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="title" content="xxx | xxx" />
        <meta name="keywords" content="xxx | xxx" />
        <meta name="subject" content="xxx | xxx" />
        <meta name="description" content="xxx 캐릭터 테스트" />
        <meta name="viewport" content="width=1024" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="xxx" />
        <meta property="og:description" content="xxx 캐릭터 테스트" />
        <meta property="og:image" content={staticPath + "/assets/img/thumbnail.png"} />

        <link href={staticPath + "/assets/img/favicon.ico?ver=20210326"} rel="shortcut icon" type="image/x-icon" />
        <link href={staticPath + "/assets/css/reset.css?ver=20210326"} rel="stylesheet" type="text/css" />
        <link href={staticPath + "/assets/css/quiz.css?ver=20210326"} rel="stylesheet" type="text/css" />
        <link href={staticPath + "/assets/css/painter.css?ver=20210326"} rel="stylesheet" type="text/css" />
        <title>xxx 캐릭터 테스트</title>
      </Head>
      <div id="wrapper">
        <header id="header">
          <div className="header_in">
            {/* <Link href="/quiz/[...id]" as="/quiz/1"><a><img src={staticPath + "/assets/img/home.png"} alt="Home" /></a></Link> */}
            <a href="/quiz" className="btn_home"><img src={staticPath + "/assets/img/home.png"} alt="Home" /></a>
          </div>
        </header>
        <div id="container">
          {children}
        </div>
        <footer id="footer">
          <div className="footer_in">
            <p>ⓒxxx Inc., All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}