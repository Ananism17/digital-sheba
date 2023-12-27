//css
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "../styles/AdminLayout.scss";

import Layout from "@/components/Layouts/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
