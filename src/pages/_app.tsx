//NEXTJS-HEAD
import Head from 'next/head';
//STYLE
import '../styles/globals.css';


function App({ Component, pageProps }: any) {
    return (
        <div className="app">
            <Head>
                <title> Medicines </title>
            </Head>

            <Component {...pageProps}/>
        </div>
    )
}

export default App;