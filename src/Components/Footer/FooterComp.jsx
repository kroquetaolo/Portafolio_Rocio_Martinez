import { useContext } from 'react'
import { LanguageContext } from '../Language/LanguageContext'
import './FooterComp.css'
import { NavLink } from 'react-router-dom'

const FooterComp = () => {
    const { get } = useContext(LanguageContext)
    const year = new Date().getFullYear()
    
    return (
        <footer>
            <div>
                <h3>Rocío Martinez</h3>
                <p>{get('user-profesional-title')}</p>
            </div>
            {/* <p>¿Te gustá mi trabajo? Me puedes contactar a rocio@gmail.com</p> */}
            <p> © {year} Rocío Martinez.</p>
        </footer>
    )
}

export default FooterComp
