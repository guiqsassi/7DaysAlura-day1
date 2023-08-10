
import "./ShopSection.css";
import produto1 from "../../images/produto01.png"
import Produtos from "../Produtos/Produtos";
const ShopSection = () =>{
    return(
        <div className="Shop">
            <div className="sectionTittle">
                <h3>Conheça nossas</h3>
                <h2>Ofertas</h2>
            </div>
            <div className="products">
                <Produtos texto="" img={produto1} name={"Ajuga reptans"} price={"20,00"}></Produtos>
                <Produtos texto="" img={produto1} name={"Ajuga reptans"} price={"20,00"}></Produtos>
                <Produtos texto="" img={produto1} name={"Ajuga reptans"} price={"20,00"}></Produtos>
                <Produtos texto="" img={produto1} name={"Ajuga reptans"} price={"20,00"}></Produtos>
                <Produtos texto="" img={produto1} name={"Ajuga reptans"} price={"20,00"}></Produtos>
                <Produtos texto="" img={produto1} name={"Ajuga reptans"} price={"20,00"}></Produtos>
            </div>
        </div>
    )
}

export default ShopSection