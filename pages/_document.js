import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link> 
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
          <link rel="stylesheet" href="styles/Home.module.css"></link> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument