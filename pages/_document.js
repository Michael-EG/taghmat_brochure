import { ServerStyleSheets } from '@material-ui/core';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
// import Head from 'next/head';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />

          {/* <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@300&display=swap"
            rel="stylesheet"
          /> */}

          {/* <link
            href="https://fonts.googleapis.com/css2?family=FiraSansCondensed:300,400,500,700&display=swap"
            rel="stylesheet"
          /> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@300;400&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () => {
    return originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });
  };
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
