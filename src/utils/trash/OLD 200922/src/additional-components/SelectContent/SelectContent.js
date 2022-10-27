import s from './SelectContent.module.scss';
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router';
import { useSelector } from 'react-redux';
import { getDetails, getSavedPrevPath } from 'redux/content/content-selectors';
import { CSSTransition } from 'react-transition-group';
import routes from 'routes';
import LANContent from 'content-components/LANContent';
import Itsecurity from 'content-components/Itsecurity';
import VideoSurvilance from 'content-components/VideoSurvilance';
import AlarmSystems from 'content-components/AlarmSystems';
import AccessSystems from 'content-components/AccessSystems';
import FireSystems from 'content-components/FireSystems';
import ThunderStormSystem from 'content-components/ThunderStormSystem';
import WindTurbines from 'content-components/WindTurbines';
import Lighting from 'content-components/Lighting';
import SolidFuelHeating from 'content-components/SolidFuelHeating';
import SolarEnergy from '../../content-components/SolarEnergy';
import NotFoundPage from 'views/NotFoundPage/NotFoundPage';
import CloseButton from 'tools/CloseButton';

export default function SelectContent() {
  let onSavedPath = useSelector(getSavedPrevPath);
  const details = useSelector(getDetails);
  // localStorage.setItem('details', JSON.stringify(details));
  // if (!onSavedPath) {
  //   onSavedPath = localStorage.getItem('prevPath');
  // } else {
  //   localStorage.setItem('prevPath', JSON.stringify(onSavedPath));
  // }

  sessionStorage.setItem('details', JSON.stringify(details));
  if (!onSavedPath) {
    onSavedPath = sessionStorage.getItem('prevPath');
  } else {
    sessionStorage.setItem('prevPath', JSON.stringify(onSavedPath));
  }

  const {
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

  return (
    <>
      <CloseButton />
      <CSSTransition
        in={true}
        appear={true}
        timeout={1000}
        unmountOnExit
        classNames={s}
      >
        <section>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Switch>
              <Route path={lan} component={LANContent} />
              <Route path={itsecurity} component={Itsecurity} />
              <Route path={videosurvilance} component={VideoSurvilance} />
              <Route path={alarm} component={AlarmSystems} />
              <Route path={access} component={AccessSystems} />
              <Route path={fire} component={FireSystems} />
              <Route path={thunder} component={ThunderStormSystem} />
              <Route path={windturbines} component={WindTurbines} />
              <Route path={lighting} component={Lighting} />
              <Route path={solarenergy} component={SolarEnergy} />
              <Route path={heatpumps} component={NotFoundPage} />
              <Route path={heating} component={SolidFuelHeating} />
              <Route path={helioenergy} component={NotFoundPage} />
            </Switch>
          </Suspense>
        </section>
      </CSSTransition>
    </>
  );
}
