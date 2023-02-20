// ----------BEGIN----------------
import { createElement } from 'react';
import s from '../utils/styles/animationStyles/animation.scss';

// ---------

const io = (id = 'contentItems', rootMargin = '-10%', className = 'active') => {
  const mainCallback = entries => {
    // console.log(entries);
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('ENTRY!!!::::🇩🇪::', entry.target);
        entry.target.classList.add(className);
      }
    });
  };

  const options = {
    rootMargin,
    threshold: 0.4,
  };
  const observer = new IntersectionObserver(mainCallback, options);
  // const targets = document.querySelectorAll('#contentItems');
  const targets = document.querySelectorAll(`#${id}`);
  console.log('TARGET_ARRAY:::::', targets);

  targets.forEach(target => observer.observe(target));
};

export default io;
