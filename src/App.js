import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <BrowserRouter>
        <NavLink to="/books" data-testid="book-link">
      Books
        </NavLink>
        <Switch>
          <Route path="/books" exact>
            <h1>Booklist</h1>
            <BookList />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
