import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import Layout from "@/components/layout/Layout";
import { CustomTheme } from "@/theme";
import { RecoilRoot } from "recoil";
import NavbarContextWrapper from "@/utils/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <NavbarContextWrapper>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            ...CustomTheme,
            fontFamily: "Fira_Code,sans-serif",
            fontFamilyMonospace: "Fira_Code, Courier, monospace",
            headings: { fontFamily: "Fira_Code, sans-serif" },
          }}
        >
          <RecoilRoot>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RecoilRoot>
        </MantineProvider>
      </NavbarContextWrapper>
    </>
  );
}
