import { Data } from "../components/app04/Data"
import { store } from "../components/app04/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "../components/app04/store";

function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={productsApi}>
        <div className="App">
          <Data />
        </div>
      </ApiProvider>
    </Provider>
  );
}

export default App;