import React from 'react';

function Button({ button, onClick, close }) {
  return (
    <button onClick={onClick} className="btn-nav">
      {button}
      {close}
    </button>
  );
}

export default Button;
