import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <h2> Welcome to Dangalf&apos;s Library of Computer Science!</h2>
      <BrowserRouter>
        <p> Checkout the amazing selection of books in our&nbsp;
          <NavLink to="/books" data-testid="book-link">
            catalog
          </NavLink>
      .</p>
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
