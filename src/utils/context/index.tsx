import React, { useState } from "react";

type ValueType = boolean;

type ContextType = {
  value: ValueType;
  newState: React.Dispatch<React.SetStateAction<boolean>>;
};

interface Props {
  children: React.ReactNode;
}
export const navContext = React.createContext<ContextType>({
  newState: () => {},
  value: false,
});

const NavbarContextWrapper: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState<ValueType>(false);

  return (
    <navContext.Provider value={{ newState: setState, value: state }}>
      {children}
    </navContext.Provider>
  );
};

export default NavbarContextWrapper;
