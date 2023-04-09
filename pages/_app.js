import Head from "next/head";
import HeaderNavigation from "../components/header-navigation";

import "../styles/globals.scss";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>MINAB | bazény na mieru</title>
                <meta
                    name="description"
                    content="Bazény na mieru, betónové bazény, zastrešenia"
                />
                <meta property="og:image" content="/images/meta/baz-8.webp" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <HeaderNavigation />
            <main className="main">{children}</main>
        </>
    );
};

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
