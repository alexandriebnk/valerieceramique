import { createContext, useState } from 'react';

export const DescriptionContext = createContext({
  descriptionFR: null,
  descriptionEN: null,
  setDescriptionFR: () => {},
  setDescriptionEN: () => {},
});

export const DescriptionProvider = ({ children }) => {
  const [descriptionFR, setDescriptionFR] = useState(null);
  const [descriptionEN, setDescriptionEN] = useState(null);

  const value = {
    descriptionFR,
    descriptionEN,
    setDescriptionFR,
    setDescriptionEN,
  };

  return (
    <DescriptionContext.Provider value={value}>
      {children}
    </DescriptionContext.Provider>
  );
};
