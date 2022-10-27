import s from './DetailsPageView.module.scss';
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router';
import { useDispatch } from 'react-redux';
import AppBar from '../../components/AppBar';
import InformationSystams from '../../global-components/InformationSystams';
import SecuritySystems from '../../global-components/SecuritySystems';
import AlternativeEnergy from '../../global-components/AlternativeEnergy';
import routes from 'routes';
import { setCurrentPath } from '../../redux/content/content-actions';
import LanguageButton from 'additional-components/LanguageButton';
import Footer from 'components/Footer';
import SelectContent from 'additional-components/SelectContent';
// import Alert from 'tools/Submit/Alert';
import NotFoundPage from 'views/NotFoundPage';

export default function DetailsPage({ location }) {
  const dispatch = useDispatch();
  const saveCurrentPath = value => dispatch(setCurrentPath(value));

  const {
    systems,
    information_systems,
    securitysystems,
    alternative_energy,

    lan,
    itsecurity,
    videosurvilance,
    alarm,
    access,
    fire,
    thunder,
    windturbines,
    lighting,
    solarenergy,
    heatpumps,
    heating,
    helioenergy,
  } = routes;

  saveCurrentPath(location.pathname);

  return (
    <section className={s.detailsPage}>
      <LanguageButton />
      <AppBar />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path={lan} component={SelectContent} />
          <Route path={itsecurity} component={SelectContent} />

          <Route
            exact
            // path={`${systems}${information_systems}`}
            path={`${information_systems}`}
            component={InformationSystams}
          />

          <Route path={videosurvilance} component={SelectContent} />
          <Route path={alarm} component={SelectContent} />
          <Route path={access} component={SelectContent} />
          <Route path={fire} component={SelectContent} />
          <Route path={thunder} component={SelectContent} />
          <Route
            exact
            path={`${systems}${securitysystems}`}
            component={SecuritySystems}
          />
          <Route path={windturbines} component={SelectContent} />
          <Route path={lighting} component={SelectContent} />
          <Route path={solarenergy} component={SelectContent} />
          <Route path={heatpumps} component={SelectContent} />
          <Route path={heating} component={SelectContent} />
          <Route path={helioenergy} component={SelectContent} />
          <Route
            exact
            path={`${systems}${alternative_energy}`}
            component={AlternativeEnergy}
          />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </Suspense>
      <Footer />
      {/* <Alert arg="Something went wrong . Check, please, Your submit name and email" /> */}
    </section>
  );
}
