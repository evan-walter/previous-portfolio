import React, { useState, useEffect, useRef } from 'react';

export default function Fade({ children, from }) {
  const fadeBase = (
    from === 'top' ? 'fade-from-top ' : 
    from === 'right' ? 'fade-from-right ' :
    from === 'bottom' ? 'fade-from-bottom ' :
    from === 'left' ? 'fade-from-left ' : 'fade-from-top '
  );

  const [visible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div ref={domRef} className={fadeBase + (visible ? 'is-visible' : '')}>
      {children}
    </div>
  );
}
