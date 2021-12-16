import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import BookDetail from './views/Books/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <BrowserRouter>
        <h1>Library Catalog</h1>
        <h2> Welcome to Dangalf&apos;s Library of Computer Science!</h2>
        <p className="desc"> Checkout the amazing selection of books in our&nbsp;
          <NavLink to="/books" data-testid="book-link">
            catalog
          </NavLink>
      .</p>
        <Switch>
          <Route path="/books" exact>
            <h1>Booklist</h1>
            <BookList />
          </Route>
          <Route path="/books/:id" component={BookDetail}/>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
