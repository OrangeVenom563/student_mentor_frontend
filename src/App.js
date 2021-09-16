import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header-nav/header.component";
import ViewPage from "./pages/view-page/view-page.component";
import CreatePage from "./pages/create-page/create-page.component";
import ChangePage from "./pages/change-page/change-page.component";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/view" component={ViewPage} />
          <Route path="/create" component={CreatePage} />
          <Route path="/change" component={ChangePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
