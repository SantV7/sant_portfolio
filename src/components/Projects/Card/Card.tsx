interface CardPros {
    id: number;
    imgP: string;
    nameP: string;
    descP: string;
}
const Card = ({id, imgP, nameP, descP}: CardPros) => {
  return (
    <>
    <div key={id}>
        <div>
            <img src={imgP} alt="Imagem de projeto" />
        </div>
        <h3>{nameP}</h3>
        <p>{descP}</p>
    </div>
    </>
  )
}

export default Card