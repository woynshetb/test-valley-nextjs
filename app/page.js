import Image from "next/image";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import ShortcutSlider from "./components/ShortSlider";
import CollectionsSlider from "./components/CollectionSlider";

export default function Home() {

  return (
    <main className="flex  flex-col items-center">
      <Header/>
     
     <ImageSlider/>
     <ShortcutSlider/>
     <CollectionsSlider/>
    </main>
  );
}

