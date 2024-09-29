function Filtering(){
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
    </section>
  </main>
  
  )
}
export default Filtering;