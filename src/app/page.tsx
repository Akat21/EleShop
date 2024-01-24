import CategoriesBrowser from "./components/CategoriesBrowser"
import TopSlider from "./components/TopSlider"
import ProductsList from "./components/ProductsList"
import NewArrivals from "./components/NewArrivals"
import Discount from "./components/Discount"
import Informations from "./components/Informations"
import Contact from "./components/Contact"
import MainFooter from "./components/MainFooter"
import BottomFooter from "./components/BottomFooter"

export default function Home() {
  return (
    <div className="w-full h-12">
      <TopSlider />    
      <CategoriesBrowser/>
      <ProductsList/>
      <NewArrivals/>
      <Discount />
      <Informations />
      <Contact />
      <MainFooter />
      <BottomFooter />
    </div>
  )
}
