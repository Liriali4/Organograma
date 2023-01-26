 import './colaborador.css'


const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar}) => {
    return (<div className="colaborador">
        <div 
            className="deletar" 
            onClick={() => aoDeletar(colaborador.id)}
        >   deletar
        </div>

        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito ? 'favorito' : 'não favorito' onClick={aoFavoritar} }
            </div>
        </div>
    </div>)
}

export default Colaborador