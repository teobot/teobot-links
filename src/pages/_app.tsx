import type { AppProps } from "next/app";

import useModal from "@/hooks/useModal";

import "@/styles/globals.css";

import "@fontsource/inter";

export default function App({ Component, pageProps }: AppProps) {
  const { ModalProvider } = useModal();

  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  );
}
