import 'react-quill/dist/quill.snow.css';
import "../styles/main.scss";

import { ReactElement, ReactNode, useEffect, useState } from "react";

import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import ErrorBoundary from "@/common/components/ErrorBoundary";
import Head from "next/head";
import type { NextPage } from "next";
import { Provider } from "react-redux";
import SEO from "../next-seo.config";
import store from "@/common/redux/store";
import { ThemeProvider } from "next-themes";
import Layout from "@/common/components/Layout";
import { EthereumClient, w3mConnectors, w3mProvider } from "@web3modal/ethereum";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, avalanche, bsc, fantom, gnosis, mainnet, optimism, polygon } from "wagmi/chains";
import { Web3Modal } from "@web3modal/react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  theme?: string;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error("You need to provide NEXT_PUBLIC_PROJECT_ID env variable");
}
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const chains = [mainnet, polygon, avalanche, arbitrum, bsc, optimism, gnosis, fantom];

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ version: 1, chains, projectId }),
  provider,
});

const ethereumClient = new EthereumClient(wagmiClient, chains);

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [ready, setReady] = useState(false);
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      <Head>
        <title>Jotaro</title>
        <link rel="icon" href="/images/jotaro.png" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, maximum-scale=1, width=device-width" />
        <meta name="description" content="Jotaro" />
        <meta name="image" content="/images/jotaro.png" />

        <meta itemProp="name" content="Jotaro" />
        <meta itemProp="description" content="Jotaro" />
        <meta itemProp="image" content="/images/jotaro.png" />
      </Head>

      <Provider store={store}>
        <ThemeProvider defaultTheme="light" enableSystem={false} attribute="class" forcedTheme={Component.theme || null}>
          <DefaultSeo {...SEO} />
          <ErrorBoundary>
            <WagmiConfig client={wagmiClient}>{ready ? <Layout>{getLayout(<Component {...pageProps} />)}</Layout> : null}</WagmiConfig>
          </ErrorBoundary>
          <Web3Modal
            projectId={projectId}
            ethereumClient={ethereumClient}
            themeVariables={{
              "--w3m-accent-color": "#0979A6",
              "--w3m-logo-image-url": "/images/jotaro.png",
              "--w3m-background-color": "#ffffff",
            }}
          />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
