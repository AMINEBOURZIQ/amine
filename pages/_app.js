import Navigation from "../Components/Navigation";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Navigation />
    </>
  );
}

export default appWithTranslation(MyApp);
