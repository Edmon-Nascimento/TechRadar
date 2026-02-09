import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import type { HeaderProps } from "../../@types/types";
import styles from './header.module.css'


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
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.brand}>TechRadar</div>

                <div className={styles.search}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Pesquisar vagas, tecnologias ou empresas..."
                        onKeyDown={handleKeyDown}
                        ref={inputRef}
                        aria-label="Pesquisar vagas"
                    />

                    <button
                        type="button"
                        className={styles.searchBtn}
                        onClick={searchJob}
                        aria-label="Buscar vagas"
                    >
                        <BsSearch className={styles.icon} />
                    </button>
                </div>
            </div>
        </header>
    )
}