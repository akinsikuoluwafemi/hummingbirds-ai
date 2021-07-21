import React, {useRef, useEffect} from 'react';
import { CursorWrapper } from './CursorStyles';

export default function CustomCursor() {
  
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousemove', e => {
      const {clientX, clientY } = e;
      
    })
  }, [])


  
  return (
    <CursorWrapper/>
  )
}