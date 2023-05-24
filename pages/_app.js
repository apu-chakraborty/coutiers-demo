import "./globals.scss";


// code imports
import { Provider } from "react-redux";
import configureStore from "../src/store";

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={configureStore()}>
            <Component {...pageProps} />
         </Provider>
    );
}


export default MyApp;