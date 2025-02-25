import { createContext, useEffect, useState } from "react";

const NoteContext = createContext();

export const NoteProvider = ({children}) => {
    const [notes, setNotes] = useState(() =>{
        const data = localStorage.getItem("notes");
       return data ? JSON.parse(data) : [];
    });
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);
    return(
    <NoteContext.Provider value={{notes, setNotes}}>
        {children}
    </NoteContext.Provider>);
}

export default NoteContext;
