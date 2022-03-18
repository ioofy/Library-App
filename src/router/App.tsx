import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePages from 'pages/HomePages/HomePages';
import NotFound from 'pages/404Pages/NotFound';
import Example from 'pages/ExamplePages/Example';
import Layout from 'layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' component={HomePages} exact />
          <Route path='/example' component={Example} exact />
          <Route path='*' component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
