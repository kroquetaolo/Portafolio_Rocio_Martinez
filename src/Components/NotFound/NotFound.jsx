import { useContext } from 'react'
import { LanguageContext } from "../Language/LanguageContext"
import './NotFound.css'
import SVGselector from '../SVGcomp/SVGselector'
const NotFound = () => {
    const { get } = useContext(LanguageContext)
    return (
        <div className="not-found">
            <SVGselector className="not-found-bg" type={'background'}/>
            <h1>ERROR 404</h1>
            <p>{get('not_found')}</p>
            <a href="/">{get('back-home')}</a>
        </div>
    )
}

export default NotFound
