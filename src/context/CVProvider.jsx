import React, { createContext, useContext } from 'react';

import { useState, useEffect } from 'react';

const BulderContext = createContext();

function CVProvider({ children }) {
  const [form, setForm] = useState({
    name: 'Dachi',
    lastname: 'Maisashvili',
    profession: 'full-stack',
    portfolio: 'Dachi123',
    city: 'Limassol',
    linkdin: 'Linkdin Link',
    phone: '+35795949343',
    email: 'Dachi@Gmail.com',
    about: 'I am Full-stack developer',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const [preview, setPreview] = useState(null);

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);
  return (
    <BulderContext.Provider
      value={{ handleChange, form, preview, handleFileChange }}
    >
      {children}
    </BulderContext.Provider>
  );
}

function useBulder() {
  const context = useContext(BulderContext);
  if (context === undefined)
    throw new Error('Bulder context used outside the CVProvider');

  return context;
}

export { CVProvider, useBulder };
