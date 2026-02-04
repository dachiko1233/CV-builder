import React from 'react';

function DeleteBtn({ clear, onClick }) {
  return (
    <button className="del-btn" onClick={onClick}>
      ❌ {clear}
    </button>
  );
}

export default DeleteBtn;
