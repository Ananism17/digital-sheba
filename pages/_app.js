//css
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "../styles/AdminLayout.scss";

//Redux imports
import { Provider } from "react-redux";
import { persistor, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

import Layout from "@/components/Layouts/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}
