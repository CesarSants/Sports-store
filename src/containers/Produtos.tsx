// import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetJogosQuery } from '../services/api'

import * as S from './styles'

// type Props = {
//   produtos: ProdutoType[]
//   favoritos: ProdutoType[]
//   favoritar: (produto: ProdutoType) => void
// }

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetJogosQuery()
  if (isLoading) return <h2>Carregando...</h2>

  // const produtoEstaNosFavoritos = (produto: ProdutoType) => {
  //   const produtoId = produto.id
  //   const IdsDosFavoritos = favoritos.map((f) => f.id)

  //   return IdsDosFavoritos.includes(produtoId)
  // }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            // favoritar={favoritar}
            // estaNosFavoritos={false}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
