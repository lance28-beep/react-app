import React, { useEffect, useState } from 'react'

function ScrollTracker() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return <p>Scroll Position: {scrollY}px</p>;
}

export default ScrollTracker