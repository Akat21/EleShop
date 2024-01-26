import CategoriesBrowser from "./components/Categories/CategoriesBrowser"
import TopSlider from "./components/TopSlider/TopSlider"
import ProductsList from "./components/Products/ProductsList"
import NewArrivals from "./components/NewArrivals/NewArrivals"
import Discount from "./components/Info/Discount"
import Informations from "./components/Info/Informations"
import Contact from "./components/Info/Contact"
import MainFooter from "./components/Footer/MainFooter"
import BottomFooter from "./components/Footer/BottomFooter"

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
