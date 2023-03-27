import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.cdnfonts.com/css/montserrat" rel="stylesheet" />
          <style>
            @import url('https://fonts.cdnfonts.com/css/montserrat');
          </style>
        </Head>
        <body className="antialiased overflow-x-auto">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
