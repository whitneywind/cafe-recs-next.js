import { useAppContext } from '../../context/AppContext'

interface Cafe {
  name: String;
  address: String;
  parking: Boolean
}

type Props = {
  cafe: Cafe
}
const favorites = () => {
    const { favorites } = useAppContext();

  return (
    <div>favorites:
      {favorites && favorites.map((cafe : Cafe) => {
        console.log(cafe)
        return <div key={`${cafe.name}`}>
          {cafe.name}
        </div>
      })
    }
    </div>
  )
}
export default favorites