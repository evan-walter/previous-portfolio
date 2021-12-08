import React, { useState, useEffect, useRef } from 'react';

export default function Fade({ children }) {
  const [visible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
  }, []);

  return (
    <div className={'fade-in-section ' + (visible ? 'is-visible' : '')} ref={domRef}>
      {children}
    </div>
  );
}
