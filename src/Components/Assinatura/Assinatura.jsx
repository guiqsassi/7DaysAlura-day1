import "./Assinatura.css"
import plant from "../../images/plant.png"
const Assinatura = () => {
    return(
        
        <div className="Assinatura">
            <style>
  @import url('https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

</style>
      <div className="ball">
      <svg xmlns="http://www.w3.org/2000/svg" width="955" height="637" viewBox="0 0 955 637" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M284.914 -328.488C378.816 -388.839 500.328 -305.147 606.445 -270.44C695.841 -241.201 781.671 -207.371 850.687 -143.445C922.505 -76.9232 976.461 4.47409 1004.51 98.2672C1036.23 204.339 1064.83 320.816 1019.74 421.899C973.65 525.226 876.3 611.001 765.538 633.99C662.06 655.466 576.585 552.577 472.273 535.525C367.351 518.373 251.989 590.47 161.155 535.189C65.3803 476.901 -6.1279 360.625 1.04142 248.736C8.06001 139.198 147.437 91.9167 195.868 -6.56121C246.231 -108.969 188.927 -266.797 284.914 -328.488Z" fill="#FFCB47"/>
      </svg>
      </div>

      <div className="left">
        <div className="text">
        <h3>Sua casa com as</h3>
        <h2>melhores plantas</h2>
        <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
        </div>
        <div className="input">
            <div className="inputContainer">
                <div className="emailImg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 0 24 12" fill="none">
                    <g opacity="0.3">
                        <path d="M3.58826 1H20.8432C22.0294 1 23 1.56008 23 2.24461V9.7123C23 10.3968 22.0294 10.9569 20.8432 10.9569H3.58826C2.40198 10.9569 1.4314 10.3968 1.4314 9.7123V2.24461C1.4314 1.56008 2.40198 1 3.58826 1Z" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M23 2.24475L12.2157 6.60091L1.4314 2.24475" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
                </div>
                <input placeholder="Insira seu email" type="text" />
                <button>Assinar newsletter</button>
            </div>
        </div>
      </div>
      <div className="right">
        <img src={plant} alt="" />
      </div>
        </div>
    )
}

export default Assinatura