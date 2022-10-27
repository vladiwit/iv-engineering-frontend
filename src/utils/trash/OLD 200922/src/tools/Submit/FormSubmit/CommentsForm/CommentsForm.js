import s from './CommentsForm.module.scss';
import shortid from 'shortid'; //https://www.npmjs.com/package/shortid
import sprite from 'utils/db/img/sprite.svg';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import LangContentSelector from '../../../../additional-components/LanguageContentSelector';
import React from 'react';
import { useSelector } from 'react-redux';

export default function CommentsForm({ comment, handleChange }) {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { submitForm } = LangContentSelector(currentLanguage);

  const commentsInputId = shortid.generate();

  return (
    <div>
      <div className={s.comments}>
        <textarea
          className={`${s.formInput} ${s.commentContent}`}
          type="text"
          id={commentsInputId}
          name="comment"
          value={comment}
          onChange={handleChange}
          placeholder=" "
        />
        <label className={s.inputLabel} htmlFor={commentsInputId}>
          {submitForm.comments}
        </label>
        <svg className={s.inputIcon}>
          <use href={sprite + '#icon-keyboard'} />
        </svg>
      </div>
    </div>
  );
}
