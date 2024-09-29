import ProductList from "./ProductList"
interface Props{
  products:product[]
}
function Filtering({products}:Props){
  return(
    <main role="main" className="main">
    <section className="flex main__display">
      <header role="header" className="flex display__header">
        <select className="hover header__filter" id="filterCateogry">
          <option value="allCategories">AllCategories</option>
          <option value="Sport">Sport</option>
          <option value="Clothes">Clothes</option>
          <option value="Electronics">Electronics</option>
        </select>
      </header>
      <ProductList products={products}></ProductList>
    </section>

  </main>
  
  )
}
export default Filtering;