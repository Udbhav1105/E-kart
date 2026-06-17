import React, { useState } from 'react'
import {products} from '../assets/assets/frontend_assets/assets.js'
// import front from '../assets/assets/frontend_assets'
import { createContext } from 'react'


export const DataAssestsApi=createContext();
const DataAssets =(props) => {
   const [cartValue, setcartValue] = useState(0);
  
  return (
      <DataAssestsApi.Provider value={[products,cartValue,setcartValue]} >
        {props.children}
      </DataAssestsApi.Provider>
  )
}

export default DataAssets
