import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from '@mui/material'
import {theme} from '../Theme/Theme'
import Layout from '../Component/Layout/Layout'
import {Provider} from "react-redux";
import {store} from "../Redux/slice/store";

export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </Provider>
    )
}