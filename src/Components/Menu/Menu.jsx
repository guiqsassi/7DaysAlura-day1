import "./Menu.css"
import logo from "../../images/logo.png"
const Menu = ()=>{
    return(
        <header>
            <div className="HeaderContainer">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav">
                <ul>
                    <li>Como fazer</li>
                    <li>/</li>
                    <li>Ofertas</li>
                    <li>/</li>
                    <li>Depoimentos</li>
                    <li>/</li>
                    <li>Vídeos</li>
                    <li>/</li>
                    <li>Meu carrinho</li>
                </ul>
            </div>
            </div>
            
        </header>
    )
}

export default Menu