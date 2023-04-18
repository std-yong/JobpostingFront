import '../node_module/dist/css/bootstrap.min.css';
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("../node_module/dist/css/bootstrap.min.js");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
