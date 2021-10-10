import { Switch, Route, BrowserRouter } from "react-router-dom";

//pages
import { Home } from "./pages";
import { AddExpense } from "./pages";
import { Header, Footer } from "./pages/partials";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add-expense" component={AddExpense}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
