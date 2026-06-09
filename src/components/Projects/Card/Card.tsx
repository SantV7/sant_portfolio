interface CardPros {
    id: number;
    imgP: string;
    nameP: string;
    descP: string;
    urlP: string
}
const Card = ({id, imgP, nameP, descP, urlP}: CardPros) => {
  return (
    <>
    <div key={id}>
        <div>
            <img src={imgP} alt="Imagem de projeto" />
        </div>
        <h3>{nameP}</h3>
        <p>{descP}</p>
        <a href={urlP}>Ver projeto</a>
    </div>
    </>
  )
}

export default Card