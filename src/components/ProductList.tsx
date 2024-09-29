import GridProduct from "./GridProduct";
interface Props{
    products:product[]
}
function ProductList({products}:Props){
    const ProductsArray = products.map((product) => {
        return (
          <GridProduct
            id={product.id}
            name={product.name}
            price={product.price}
            detail={product.detail}
            image={product.image}
            category={product.category}
          ></GridProduct>
        );
      });
      return(
          <section className="flex display__products" id="customersProduct">
                {ProductsArray}
            </section>      
      )
    };
export default ProductList;