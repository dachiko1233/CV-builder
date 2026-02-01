import React from 'react';
import { useBuilder } from '../context/CVProvider';

function DeleteBtn({ clear }) {
  console.log(clear);
  const { handleDelete } = useBuilder();
  return (
    <button className="del-btn" onClick={handleDelete}>
      ❌ {clear}
    </button>
  );
}

export default DeleteBtn;
