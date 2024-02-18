import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { buildProvidersTree } from "./components/BuildProvidersTree/BuildProvidersTree";
import { ConfigProvider } from "antd";
import locale from "antd/locale/en_US";
import { Provider } from "react-redux";
import { persistor, store } from "~/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { theme } from "./themes/theme";
import { Toaster } from "react-hot-toast";
import Web3Provider from "./components/WagmiProvider/WagmiProviderContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

const ProvidersTree = buildProvidersTree([
  [Provider, { store }],
  [PersistGate, { loading: null, persistor }],
  [Web3Provider, {}],
  [ConfigProvider, { locale: locale, theme: theme }],
  [QueryClientProvider, { client: queryClient }],
]);

export default function App() {
  return (
    <ProvidersTree>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </ProvidersTree>
  );
}
