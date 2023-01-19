import "@/styles/globals.css";
import tailwindConfig from "../../tailwind.config";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
