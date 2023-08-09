import { Html, Head, Main, NextScript } from "next/document";

import { getInitColorSchemeScript } from "@mui/joy/styles";
import { CssVarsProvider } from "@mui/joy/styles";

export default function Document() {
  return (
    <Html lang="en" data-bs-theme="dark">
      <Head />
      <body>
        <CssVarsProvider defaultMode="dark">
          <Main />
          <NextScript />
        </CssVarsProvider>
      </body>
    </Html>
  );
}
