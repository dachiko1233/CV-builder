import React from 'react';

function DeleteBtn({ clear, onClick }) {
  console.log(clear);

  return (
    <button className="del-btn" onClick={onClick}>
      ❌ {clear}
    </button>
  );
}

export default DeleteBtn;
