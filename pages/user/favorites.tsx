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
    console.log(favorites)

  return (
    <div>favorites:
      {favorites && favorites.map((cafe : string) => {
        console.log(cafe)
        return <div key={`${cafe}`}>
          {cafe}
        </div>
      })
    }
    </div>
  )
}
export default favorites