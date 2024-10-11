import { useSelector } from 'react-redux'
import * as S from './styles'

// import { Produto } from '../../App'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

import { RootReducer } from '../../store'

// type Props = {
//   itensNoCarrinho: Produto[]
//   favoritos: Produto[]
// }

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const itensFavoritos = useSelector(
    (state: RootReducer) => state.favoritos.itens
  )

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>Sports Store</h1>
      <div>
        <span>{itensFavoritos.length} favoritos</span>
        <img alt="" src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
