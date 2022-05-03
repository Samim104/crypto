import React from 'react'
import Home from './Home'
import ContextProvider from "./Context/ContextProvider"
function App() {
    return (
        <>
            <ContextProvider>
                <Home />
            </ContextProvider>
        </>
    )
}

export default App