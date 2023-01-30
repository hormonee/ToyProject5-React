import { createContext, useContext, useState } from "react";


const AddressContext = createContext({
  state : {id: '서울 강남구 테헤란로7길 7 에스코빌딩 6,7층'},
  action : {
    setAddress : () => { }
  }
});

const AddressProvider = ({children}) => {
  const [address, setAddress] = useState({id : '서울 강남구 테헤란로7길 7 에스코빌딩 6,7층'});
  const value = {
    state: address,
    action : {setAddress}
  };

  return (
    <AddressContext.Provider value={value}>{children}</AddressContext.Provider>  
  );
};

const AddressConsumer = AddressContext.Consumer;

export { AddressProvider, AddressConsumer};
export default AddressContext;