import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import type { HeaderProps } from "../../@types/types";


export default function Header({onSearch}:HeaderProps){
    
    const inputRef = useRef<HTMLInputElement>(null)

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>){
        if(e.key === "Enter"){
            searchJob()
        }
    }

    function searchJob(){
        const value = inputRef.current?.value.trim() || ""
        onSearch(value)
    }

    return(
        <header>
            <input type="text" 
                onKeyDown={handleKeyDown}
                ref={inputRef}
            />
            <BsSearch onClick={()=>searchJob()}/>
        </header>
    )
}