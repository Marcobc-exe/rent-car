import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import { HashRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </Provider>
  );
};

export default App;
