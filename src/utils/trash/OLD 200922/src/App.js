import { Switch, Route } from 'react-router';
import { Suspense } from 'react';
import routes from './routes';
import componentsLoad from './componentsLoad';

const App = (/* { location } */) => {
  const { main, systems, about } = routes;
  const { DetailsPage, HomePageView, NotFoundPage, AboutPageView } =
    componentsLoad;

  const styles = {
    overflow: 'hidden',
  };

  // console.log('☄️ LOCATION::::', location.pathname);

  return (
    <div style={styles}>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path={systems} component={DetailsPage} />
          <Route path={about} component={AboutPageView} />
          {/* <Route path="/success" component={AboutPageView} /> */}
          <Route exact path={main} component={HomePageView} />
          <Route path={''} component={NotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
};
export default App;
