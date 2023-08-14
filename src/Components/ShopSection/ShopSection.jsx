
import "./ShopSection.css";
import produto1 from "../../images/produto01.png"
import Produtos from "../Produtos/Produtos";
import { useEffect, useState } from "react";


const ShopSection = () =>{
    const [products, setProducts] = useState([{}])
    const url = "https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw?utm_medium=email&_hsmi=231361624&_hsenc=p2ANqtz-_yQmHKHhgjRPyuXl2u-TJAfBzTQu2N83QMXZWSd6ZCHN1mSsMMmYGyHhQqa8WlDMNiKeQ0Oy84mUbhMmnFzpvoVeqxyg&utm_content=231361624&utm_source=hs_automation"
    useEffect(()=>{
        fetch(url)
        .then(res =>{ return res.json() }).then(data =>{ setProducts(data)})
    }, [])
    return(
        <div className="Shop">
            <div className="sectionTittle">
                <h3>Conheça nossas</h3>
                <h2>Ofertas</h2>
            </div>
            <div className="products">
                {products? products.map((product) =>{
                    return(
                    <Produtos name={product.name} price={product.preco} img={product.img}></Produtos>
                    )
                }) : console.log("No")}
            </div>
        </div>
    )
}

export default ShopSection