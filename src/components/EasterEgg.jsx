import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const sequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

const EasterEgg = () => {
  useEffect(() => {
    let idx = 0;
    const handler = e => {
      console.log(e.key,idx);
      if (e.key === sequence[idx]) {
        idx++;
        if (idx === sequence.length) {
          Swal.fire('Easter Egg!', 'You unlocked the secret terminal!', 'info');
          idx = 0;
        }
      } else idx = 0;
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);
  return null;
};

export default EasterEgg;