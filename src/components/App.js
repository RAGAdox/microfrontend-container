import React from "react";
const MicroAppBtn = React.lazy(() => import("micro_application_1/Button"));
const Main = () => {
  return (
    <div>
      <React.Suspense fallback="Loading Button">
        <MicroAppBtn />
      </React.Suspense>

      <h1>My React App is working!</h1>
    </div>
  );
};
export default Main;
