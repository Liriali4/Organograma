 import './colaborador.css'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {TiUserDelete} from 'react-icons/ti'

const Colaborador = ({colaborador, corDeFundo, aoDeletar, aoFavoritar}) => {
    
    function favoritar() {
        aoFavoritar(colaborador.id)
    }

    const propsfavorito={
        size:25,
        onClick: favoritar
    }
    
    return (<div className="colaborador">
        <div 
            className="deletar" 
            onClick={() => aoDeletar(colaborador.id)}
        >   <TiUserDelete size={25}/>
        </div>

        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito 
                    ? <AiFillHeart {...propsfavorito} color='#ff0000'/>
                    : <AiOutlineHeart {...propsfavorito}/>
                }
            </div>
        </div>
    </div>)
}

export default Colaborador