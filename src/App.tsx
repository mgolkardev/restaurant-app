import { RouterProvider } from "react-router-dom";
import { MainLayout } from "./modules/shared/components";
import { routes } from "./modules/shared/utils/router";
import { Provider } from "react-redux";
import { appStore } from "./modules/shared/redux-state/app.store";

function App() {
  return (
    <Provider store={appStore}>
      <MainLayout>
        <RouterProvider router={routes} />
      </MainLayout>
    </Provider>
  );
}

export default App;
