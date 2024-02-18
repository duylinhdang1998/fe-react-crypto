import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

export default function Layout() {
  // useBeforeUnload(
  //   () => {
  //     if (!isRemember) {
  //       dispatch(logout());
  //     }
  //   },
  //   {
  //     capture: true,
  //   }
  // );
  return (
    <Suspense fallback={null}>
      <Outlet />
      <ScrollRestoration />
    </Suspense>
  );
}
