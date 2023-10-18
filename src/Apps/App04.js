import { Data } from "../components/app04/Data";
import { store, usersApi } from "../components/app04/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "../components/app04/store";
import Users from "../components/app04/users";

function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={usersApi}>
        <div className="App">
          <Users />
        </div>
      </ApiProvider>
     
    </Provider>
  );
}

export default App;
