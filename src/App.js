import { Switch, Route, BrowserRouter } from "react-router-dom";

//pages
import { Home } from "./pages";
import { Header, Footer } from "./pages/partials";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
