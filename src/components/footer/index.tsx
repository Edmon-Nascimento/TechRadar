import styles from './footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <p>Criado por <Link target='_blank' to='https://linktree-edmoncode.vercel.app/'>Edmoncode</Link> | 2026 &copy; Todos os direitos reservados.</p>
        </footer>
    )
}