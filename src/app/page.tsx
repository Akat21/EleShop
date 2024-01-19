import CategoriesBrowser from "./components/CategoriesBrowser"
import TopSlider from "./components/TopSlider"
import ProductsList from "./components/ProductsList"
import NewArrivals from "./components/NewArrivals"

export default function Home() {
  return (
    <div className="w-full h-12">
      <TopSlider />    
      <CategoriesBrowser/>
      <ProductsList/>
      <NewArrivals/>
    </div>
  )
}
