import React, {useRef, useEffect} from 'react';
import { CursorWrapper } from './CursorStyles';

export default function CustomCursor() {
  
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousemove', e => {
      const {clientX, clientY } = e;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style
    })
  }, [])


  
  return (
    <CursorWrapper/>
  )
}
