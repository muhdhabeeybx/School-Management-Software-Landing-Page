import { createBrowserRouter } from "react-router";
import Root from "./Root";

const lazyPage = <T extends { default: React.ComponentType<any> }>(
  importer: () => Promise<T>
) =>
  importer().then((m) => ({
    Component: m.default,
  }));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, lazy: () => lazyPage(() => import("./pages/Home")) },
      { path: "features", lazy: () => lazyPage(() => import("./pages/Features")) },
      { path: "pricing", lazy: () => lazyPage(() => import("./pages/Pricing")) },
      {
        path: "request-demo",
        lazy: () => lazyPage(() => import("./pages/RequestDemo")),
      },
      { path: "about", lazy: () => lazyPage(() => import("./pages/About")) },
      { path: "faq", lazy: () => lazyPage(() => import("./pages/FAQ")) },
      { path: "contact", lazy: () => lazyPage(() => import("./pages/Contact")) },
    ],
  },
]);