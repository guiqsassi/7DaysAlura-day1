import "./Produtos.css"

function Produtos (props){
    // let texto = "Z"
    return(
    <div className="ProdutosContainer">
        <div style={{
          backgroundImage: `url(${props.img})`
        }} className="image">
        </div>
        <div className="description">
            <div className="info">
                <h3>{props.name}</h3>
                <h4>R$ {props.price}</h4>
            </div>
            <div className="buyButton">
                <h3>Comprar</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
  <path d="M1 4.9494H15" stroke="#FFCB47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 1L15 4.94931L8 8.89862" stroke="#FFCB47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
        </div>
    </div>
    )
}
export default Produtos