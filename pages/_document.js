import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='stylesheet' href='https://chat-service.baania.com/baaniachatjs/0.0.2/baaniachatjs.css' />
          <script src='https://chat-service.baania.com/baaniachatjs/0.0.2/baaniachatjs.js'></script>
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
