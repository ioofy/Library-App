import React from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "app/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./router/App";
// tailwind styles
import "./styles/index.css";

type RootElement = Element | DocumentFragment;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

let persistor = persistStore(store);

const rootElement = document.getElementById("root");
const renderRoot = createRoot(rootElement as RootElement);

renderRoot.render(
  <React.Fragment>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <App />
          <Toaster />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.Fragment>
);
