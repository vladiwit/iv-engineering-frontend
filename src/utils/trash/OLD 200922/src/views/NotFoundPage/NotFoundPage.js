import React from 'react';
import s from './NotFoundPage.module.scss';
import CloseButton from 'tools/CloseButton';
import { useSelector } from 'react-redux';
import { getSavedPrevPath } from 'redux/content/content-selectors';
import routes from 'routes';

export default function NotFoundPage({ location }) {
  const savedPath = useSelector(getSavedPrevPath);
  const routesAray = Object.values(routes);
  let rez = false;
  return (
    <>
      {savedPath !== '/systems/alternative-energy' && <CloseButton />}
      <h2 className={`${s.heads} ${s.headsNotFound}`}> 404 Page not Found </h2>

      {(rez = routesAray.find(route => location.pathname === route))}

      {rez && (
        <h2 className={s.subheadItems}>
          Sorry, page is in developing at this moment
        </h2>
      )}
    </>
  );
}
