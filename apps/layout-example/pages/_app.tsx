import { AppPropsWithLayout } from "@nextjs-middleware-example/nextjs-utils";

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)

  return (getLayout(<Component {...pageProps} />));
}

export default CustomApp;
