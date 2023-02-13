import s from './SelectContent.module.scss';
import React, { Suspense } from 'react';
import { CSSTransition } from 'react-transition-group';
import routes from 'routes';
import componentsLoad from '../../componentsLoad';
import CloseButton from 'tools/CloseButton';
import ElectricDirection from '../../content-components/ElectricDirection';

export default function SelectContent(props) {
  const {
    NotFoundPage,
    LANContent,
    Itsecurity,
    VideoSurvilance,
    AlarmSystems,
    AccessSystems,
    FireSystems,
    ThunderStormSystem,
    WindTurbines,
    Lighting,
    SolidFuelHeating,
    SolarEnergy,
  } = componentsLoad;
  const { state: pathname } = props;
  const path = pathname.pathname;

  const hashes = Object.values(routes);
  hashes.splice(0, 6);

  return (
    <>
      <CSSTransition
        in={true}
        appear={true}
        timeout={1000}
        unmountOnExit
        classNames={s}
      >
        <section>
          <Suspense fallback={<h2>Loading...</h2>}>
            {path.hash === hashes[0] && <LANContent />}
            {path.hash === hashes[1] && <Itsecurity />}
            {path.hash === hashes[2] && <NotFoundPage />}
            {path.hash === hashes[3] && <NotFoundPage />}
            {path.hash === hashes[4] && <VideoSurvilance />}
            {path.hash === hashes[5] && <AlarmSystems />}
            {path.hash === hashes[6] && <AccessSystems />}
            {path.hash === hashes[7] && <FireSystems />}
            {path.hash === hashes[8] && <ThunderStormSystem />}
            {path.hash === hashes[9] && <NotFoundPage />}
            {/* {path.hash === hashes[9] && <ElectricDirection />} */}
            {path.hash === hashes[10] && <WindTurbines />}
            {path.hash === hashes[11] && <Lighting />}
            {path.hash === hashes[12] && <SolarEnergy />}
            {path.hash === hashes[13] && <SolidFuelHeating />}
            {path.hash === hashes[14] && <NotFoundPage />}
            {path.hash === hashes[15] && <NotFoundPage />}
          </Suspense>
        </section>
      </CSSTransition>
      <CloseButton />
    </>
  );
}
