import App from 'next/app';
import Head from 'next/head';
import 'styles/style.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  if (Math.random() > 0.5) {
    appProps.hasReadPermission = true;
  }

  return { ...appProps };
};

export default MyApp;
