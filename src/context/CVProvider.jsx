import React, { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';

const BulderContext = createContext();

const pic =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1fiSQO7JfDw0uv1Ae_Ye-Bo9nhGNg27dwg&s';

function CVProvider({ children }) {
  //useState for General information
  const [form, setForm] = useState({
    name: 'Dachi',
    lastname: 'Maisashvili',
    profession: 'full-stack',
    portfolio: 'Dachi123',
    city: 'Cyprus, Limassol',
    linkdin: 'Linkedin Link',
    phone: '+357 95 949343',
    email: 'Dachi@Gmail.com',
    about: 'I am Full-stack developer',
    // eudcation state
    school: 'SaShvalo skola',
    degree: 'uny',
    strdate: '18',
    enddate: '29',
  });

  //work useState
  const [work, setWork] = useState({
    position: '',
    company: '',
    location: '',
    fromdate: '',
    todate: '',
    tasks: '',
  });

  //education state
  const [education, setEducation] = useState({
    eduschool: 'sashvalo skola',
    edudegre: 'rato',
    edustart: '12',
    eduend: '43',
  });

  //useState for profile img
  const [preview, setPreview] = useState(null);

  //open inuts state
  const [open, setOpen] = useState({
    eudcation: 'false',
    workeexp: 'false',
  });
  //open inputs function
  function handleShowInputs(section) {
    setOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }

  //onChange setWork

  function handleChangeWork(e) {
    const { name, value } = e.target;
    setWork((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // HandleChange for general Inforamtion
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleAddEducation(e) {
    const { name, value } = e.target;
    setEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
  }

  //delete btn
  function deleteEducation() {
    // setEducation((prev) => prev.filter((_, i) => i !== index));

    setEducation((prev) => ({
      ...prev,
      eduschool: '',
      edudegre: '',
      eduend: '',
      edustart: '',
    }));
  }

  //delete btn genetal info
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
        education,
        setEducation,
        handleAddEducation,
        deleteEducation,
        work,
        handleChangeWork,
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
