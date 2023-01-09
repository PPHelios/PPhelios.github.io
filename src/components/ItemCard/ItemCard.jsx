import "./itemCard.scss";

export const ItemCard = ({img}) => {
  return(
    <div className="storeItem">
      <img src={require('../../assets/images/' +
        img +
        '.jpg')} alt="bozo"/>
      <h2>toto</h2>
      <h3>lolo</h3>
    </div>
  )
}