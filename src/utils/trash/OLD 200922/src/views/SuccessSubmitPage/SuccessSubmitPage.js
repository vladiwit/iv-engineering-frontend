import s from './SuccessSubmitPage.module.scss';
import React from 'react';
import CloseButton from 'tools/CloseButton';

export default function SuccessSubmitPage() {
  return (
    <div lassName={s.success}>
      <CloseButton />
      <h2>Success</h2>
    </div>
  );
}
