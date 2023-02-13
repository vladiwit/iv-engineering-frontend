// ----------BEGIN----------------
import s from '../utils/styles/animationStyles/animation.scss';

// ---------

const io = () => {
  const mainCallback = entries => {
    // console.log(entries);
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // console.log('ENTRY!!!::::🇩🇪::', entry.target);
        entry.target.classList.add('active');
      }
    });
  };

  const options = {
    // rootMargin: '-100px',
  };
  const observer = new IntersectionObserver(mainCallback, options);
  const targets = document.querySelectorAll(`#contentItems`);
  // console.log('TARGET_ARRAY:::::', targets);

  targets.forEach(target => observer.observe(target));
};

export default io;
