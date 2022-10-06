import Card from "./Card"


const Products = () => {
  return (
    <main className="mt-2 pt-5 mx-auto w-4/5 flex flex-wrap gap-x-5">
       <Card price='115,5 zł' description='product'/>
       <Card price='115,5 zł' description='product'/>
       <Card price='115,5 zł' description='product'/>
       <Card price='115,5 zł' description='product'/>
       <Card price='115,5 zł' description='product'/>
    </main>
  )
}

export default Products
