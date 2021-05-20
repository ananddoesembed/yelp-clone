import React from "react"

interface starProp{
    rating:number
}
const Stars:React.FC<starProp>=({rating})=> {
    const stars = []
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
        <div style={{color:"yellow",display:'flex'}}>
            {stars.map((item,index)=><div key={index}>{item}</div>)}
        </div>
    )
}
export default Stars
