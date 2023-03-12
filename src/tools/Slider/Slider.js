import s from './Slider.module.scss';
import React, {
  useState,
  useEffect,
  memo,
  useCallback,
  createElement,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import changeSlide from './changeSlide';
import io from '../io';
//======================================

const Slider = ({ images }) => {
  const [slide1, setSlide1] = useState('');
  const [slide2, setSlide2] = useState(images[0]);
  // const [slide3, setSlide3] = useState(images[1]);
  // const [status, setStatus] = useState(true);
  // const [statusEnterClass /* setStatusEnterClass */] = useState('');
  const timeoutValue = 2800;
  // const onClassChange = () => {
  //   setStatusEnterClass('slide-enter-active');
  // };

  const sliderItem1 = document
    .querySelector('#el1')
    ?.classList.remove(s.activeSlide1);
  const sliderItem2 = document
    .querySelector('#el2')
    ?.classList.remove(s.activeSlide2);

  // console.log('SLIDER1:::::', sliderItem1?.classList);
  // console.log('SLIDER2:::::', sliderItem2?.classList);

  // sliderItem1?.classList.remove(s.activeSlide1);
  // sliderItem2?.classList.remove(s.activeSlide2);

  const getCurrentSlides = useCallback(() => {
    const state = {
      slide1,
      slide2,
      // slide3,
      // status,
      // statusEnterClass,
    };

    const rez = changeSlide(state, images);
    setSlide1(rez.slide1);
    setSlide2(rez.slide2);
    // setSlide3(rez.slide3);
    // setStatus(rez.status);

    io('el1', '', s.activeSlide1);
    io('el2', '', s.activeSlide2);

    // slider1Class = [...s.activeSlide1];
    // slider2Class.push(s.activeSlide2);
  }, [slide1, slide2, images]);
  // }, [slide1, slide2, status, statusEnterClass, images]);

  useEffect(() => {
    io('el1', '', s.activeSlide1);
    io('el2', '', s.activeSlide2);
    getCurrentSlides();
  }, []);

  useEffect(() => {
    // if (status === true) {
    //   return;
    // }

    setTimeout(getCurrentSlides, timeoutValue - 10);
  }, [getCurrentSlides]);

  return (
    <div className={s.backdrop}>
      <div className={s.slider}>
        <ul>
          {/* <CSSTransition
            in={!status}
            classNames={s}
            timeout={timeoutValue}
            unmountOnExit
          > */}
          {/* <li className={`${s.imageItem} ${s.inactive}`} id="el1"> */}
          <li className={`${s.imageItem} `} id="el1">
            <img className={`${s.img} `} src={slide1} alt="datatransfer" />
          </li>
          {/* </CSSTransition> */}
          {/* <CSSTransition
            in={status}
            classNames={s}
            timeout={timeoutValue}
            unmountOnExit
          > */}
          <li className={`${s.imageItem} ${s.inactive} `} id="el2">
            <img className={`${s.img}  `} src={slide2} alt="datatransfer" />
          </li>
          {/* </CSSTransition> */}
        </ul>
      </div>
    </div>
  );
};

export default memo(Slider);
