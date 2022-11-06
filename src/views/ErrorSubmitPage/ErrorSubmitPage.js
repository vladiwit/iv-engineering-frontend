import s from './ErrorSubmitPage.module.scss';
import CloseButton from 'tools/CloseButton';
import LangContentSelector from 'additional-components/LanguageContentSelector/LanguageContentSelector';
import { getLanguageMemoised } from 'redux/languages/languages-selector';

import { useSelector } from 'react-redux';
import LanguageButton from 'additional-components/LanguageButton';

export default function SuccessSubmitPage() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { alertSubmit } = LangContentSelector(currentLanguage);

  return (
    <div>
      <div>
        <CloseButton />
        <LanguageButton />
      </div>
      <div className={s.success}>
        <h2 className={s.alertMessage}>{alertSubmit.text1}</h2>
        <br />
      </div>
    </div>
  );
}
