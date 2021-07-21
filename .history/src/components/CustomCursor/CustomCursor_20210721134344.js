import React, {useRef, useEffect} from 'react';
import { CursorWrapper } from './CursorStyles';
import CursorWhite from '../../assets/images/LOGO HUMMINGBIRDS AI/CURSOR/SVG/'

export default function CustomCursor() {
  
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousemove', e => {
      const {clientX, clientY } = e;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    })
  }, [])


  
  return (
    <CursorWrapper ref={ cursorRef}/>
  )
}
