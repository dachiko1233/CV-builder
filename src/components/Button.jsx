import React from 'react';

function Button({ button, icon }) {
  return (
    <button className="btn-nav">
      {icon} {button}
    </button>
  );
}

export default Button;
