import React, {createContext} from 'react'

type CategoriesContextProviderProps = {
    children: React.ReactNode
}

export const CategoriesContext = createContext({
    id: null,
    changeId: ()=>{}
});

export const CategoriesContextProvider = ({children}: CategoriesContextProviderProps ) => {
    return <CategoriesContext.Provider value={''}> {children} </CategoriesContext.Provider>  
}