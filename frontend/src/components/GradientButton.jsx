import React from 'react';

const variants = {
  blue: {
    text: 'text-[#4285F4]',
    border: 'from-[#4285F4]',
    background: 'from-[#4285F4]/40',
    pattern: 'from-[#4285F4]/10',
    hover: 'hover:from-[#4285F4]/50'
  },
  red: {
    text: 'text-[#DB4437]',
    border: 'from-[#DB4437]',
    background: 'from-[#DB4437]/40',
    pattern: 'from-[#DB4437]/10',
    hover: 'hover:from-[#DB4437]/50'
  },
  yellow: {
    text: 'text-[#F4B400]',
    border: 'from-[#F4B400]',
    background: 'from-[#F4B400]/40',
    pattern: 'from-[#F4B400]/10',
    hover: 'hover:from-[#F4B400]/50'
  },
  green: {
    text: 'text-[#0F9D58]',
    border: 'from-[#0F9D58]',
    background: 'from-[#0F9D58]/40',
    pattern: 'from-[#0F9D58]/10',
    hover: 'hover:from-[#0F9D58]/50'
  }
};

function GradientButton({ children, color = 'blue', onClick, className = '' }) {
  const variant = variants[color];

  return (
    <button
      onClick={onClick}
      className={`
        relative cursor-pointer
        px-8 py-4
        uppercase tracking-[0.3rem]
        font-game text-sm md:text-base
        transition-all duration-200
        ${variant.text}
        ${className}
      `}
      style={{
        background: `
          radial-gradient(circle, ${color === 'blue' ? '#4285F440' : color === 'red' ? '#DB443740' : color === 'yellow' ? '#F4B40040' : '#0F9D5840'} 0%, transparent 95%),
          linear-gradient(${color === 'blue' ? '#4285F410' : color === 'red' ? '#DB443710' : color === 'yellow' ? '#F4B40010' : '#0F9D5810'} 1px, transparent 1px),
          linear-gradient(90deg, ${color === 'blue' ? '#4285F410' : color === 'red' ? '#DB443710' : color === 'yellow' ? '#F4B40010' : '#0F9D5810'} 1px, transparent 1px)
        `,
        backgroundSize: 'cover, 15px 15px, 15px 15px',
        borderImageSource: `radial-gradient(circle, ${color === 'blue' ? '#4285F4' : color === 'red' ? '#DB4437' : color === 'yellow' ? '#F4B400' : '#0F9D58'} 0%, transparent 100%)`,
        borderImageSlice: 1,
        borderWidth: '1px 0'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundSize = 'cover, 10px 10px, 10px 10px';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundSize = 'cover, 15px 15px, 15px 15px';
      }}
    >
      {children}
    </button>
  );
}

export default GradientButton;
