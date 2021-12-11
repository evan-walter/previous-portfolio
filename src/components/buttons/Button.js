import React from 'react';

export default function Button({ text, Bg, BgS, NoBg, addClassName }) {
  const btnBgOrBgSBase = 'font-bold inline-block relative leading-none z-10 ';
  const btnBgOrBgSDefaultSize = 'py-1 px-4 text-lg lg:text-xl';
  const btnBg = btnBgOrBgSBase + 'btn-bg';
  const btnBgS = btnBgOrBgSBase + 'btn-bgs';
  const btnNoBg = 'font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary';
  
  const size = (addClassName ? addClassName : ((Bg || BgS) ? btnBgOrBgSDefaultSize : null)) + ' ';

  return (
    <div>
      <button className = {size + (Bg ? btnBg : (BgS ? btnBgS : btnNoBg))}>
        {text}
      </button>
    </div>
  );
}
