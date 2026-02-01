import React, { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';

const BulderContext = createContext();

const pic =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1fiSQO7JfDw0uv1Ae_Ye-Bo9nhGNg27dwg&s';

function CVProvider({ children }) {
  //useState for General information
  const [form, setForm] = useState({
    name: 'xvale delete bnt unda gakeTo education  ',
    lastname: 'Maisashvili',
    profession: 'full-stack',
    portfolio: 'Dachi123',
    city: 'Cyprus, Limassol',
    linkdin: 'Linkedin Link',
    phone: '+357 95 949343',
    email: 'Dachi@Gmail.com',
    about: 'I am Full-stack developer',
    school: 'Stn',
    degree: 'uny',
    strdate: '18',
    enddate: '29',
  });

  //useState for profile img
  const [preview, setPreview] = useState(null);
  const [open, setOpen] = useState(false);

  // HandleChange for general Inforamtion
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleShowInputs() {
    setOpen((prev) => !prev);
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }

  function handleDelete() {
    setForm((prev) => ({
      ...prev,
      school: '',
      degree: '',
      strdate: '',
      enddate: '',
    }));
  }

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <BulderContext.Provider
      value={{
        handleChange,
        form,
        preview,
        handleFileChange,
        pic,
        open,
        handleShowInputs,
        handleDelete,
      }}
    >
      {children}
    </BulderContext.Provider>
  );
}

function useBuilder() {
  const context = useContext(BulderContext);
  if (context === undefined)
    throw new Error('Bulder context used outside the CVProvider');

  return context;
}

export { CVProvider, useBuilder };
