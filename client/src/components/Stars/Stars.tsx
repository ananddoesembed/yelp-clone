
export default function Stars() {
    const stars = []
    const rating = 1.5;
    for(let i=1;i<=5;i++){
        if(i<=rating){
            stars.push(<i className="fas fa-star"></i>)
        }
        else if(i===Math.ceil(rating) && !Number.isInteger(rating)){
            stars.push(<i className="fas fa-star-half-alt"></i>)
        }
        else if(i>rating){
            stars.push(<i className="far fa-star"></i>)
        }
    }
    return (
        <>
            {stars}
        </>
    )
}
