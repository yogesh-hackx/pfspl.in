import 'keen-slider/keen-slider.min.css';
import 'react-medium-image-zoom/dist/styles.css';
import '../css/index.css';
import Head from 'next/head';
import Layout from '@components/layout';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <title>PFS</title>
                <meta
                    name="Description"
                    content="A Next.js starter styled using Tailwind CSS."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name=" theme-color" content="#000" />
            </Head>

            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
