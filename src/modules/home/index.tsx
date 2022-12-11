import { ProductModal } from "./components/ProductModal";
import { HomeFlashSale } from "./containers/HomeFlashSale";
import { HomeNavBar } from "./containers/HomeNavBar";
import { HomeSearchBar } from "./containers/HomeSearchBar";
import { HomeSlider } from "./containers/HomeSlider";
import { HomeToolbar } from "./containers/HomeToolbar";

export const HomeModule: React.FC = () => {
  return (
    <>
      <header>
        <HomeToolbar />
        <HomeSearchBar />
        <HomeNavBar />
      </header>
      <main>
        <HomeSlider />
        <HomeFlashSale />
        <ProductModal />
      </main>
    </>
  );
};
