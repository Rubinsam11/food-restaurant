import { useEffect } from 'react';  // You only need this one

const SmoothScroll = () => {
  useEffect(() => {
    // Add event listener for smooth scrolling
    const handleSmoothScroll = (event) => {
      const target = event.target;

      if (target.tagName === 'A' && target.hash) {
        event.preventDefault();

        const targetElement = document.querySelector(target.hash);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    // Add the event listener to the document
    document.addEventListener('click', handleSmoothScroll);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return null;
};

export default SmoothScroll;
