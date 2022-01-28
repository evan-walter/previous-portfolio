import React from 'react';

export default function Button({ text, Bg, BgS, addClassName }) {
  const btnBgOrBgSBase = 'font-bold inline-block relative leading-none z-10 border-2 ';
  const btnBgOrBgSDefaultSize = 'py-1 px-4 text-lg lg:text-xl';
  const btnBg = btnBgOrBgSBase + 'text-primary border-primary btn-bg';
  const btnBgS = btnBgOrBgSBase + 'btn-bgs';
  const btnNoBg = 'font-bold text-primary lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-primary lg:to-secondary';
  
  const size = (addClassName ? addClassName : ((Bg || BgS) ? btnBgOrBgSDefaultSize : null)) + ' ';

  return (
    <div>
      <button className = {size + (Bg ? btnBg : (BgS ? btnBgS : btnNoBg))}>
        {text}
      </button>
    </div>
  );
}
