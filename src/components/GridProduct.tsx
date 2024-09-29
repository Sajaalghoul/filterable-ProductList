interface Props{
    id:number,
    name:string,
    price:number,
    detail:string,
    image:string,
    category:string

}
function GridProduct({id,name,price,detail,image,category}:Props){
 return(
    <div className="flex products__product" product-id={id}>
    <img src={image} alt="productImage" className="product__img"></img>
    <p className="product__name">{name}</p>
    <p className="product__price">{price}$</p>
    <p className="product__cateogry">{category}</p>
    <p className="product__detail">{detail}</p>
    </div>
        )
}
export default GridProduct;
