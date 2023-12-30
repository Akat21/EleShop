import CategoriesBrowser from "./components/CategoriesBrowser"
import TopSlider from "./components/TopSlider"

export default function Home() {
  return (
    <div className="w-full">
      <TopSlider />    
      <CategoriesBrowser/>
    </div>
  )
}
