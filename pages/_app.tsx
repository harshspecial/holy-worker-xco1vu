import "../styles/globals.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import { ErrorBoundary } from "react-error-boundary";

export default function MyApp({ Component, pageProps }) {
  return <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
    <Component {...pageProps} />
  </ErrorBoundary>;
}
