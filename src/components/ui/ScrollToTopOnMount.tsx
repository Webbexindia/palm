import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTopOnMount() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Need a slight delay to ensure the DOM has painted the target element
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
