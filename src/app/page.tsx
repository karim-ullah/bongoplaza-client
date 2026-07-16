import Brands from "@/components/homepage/Brands";
import FeaturedProduct from "@/components/homepage/FeaturedProduct";
import Hero from "@/components/homepage/Hero";
import NewsLetter from "@/components/homepage/NewsLetter";
import Perk from "@/components/homepage/Perk";
import PromoBanner from "@/components/homepage/PromoBanner";
import Testimonial from "@/components/homepage/Testimonial";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero/>
      <Perk/>
      <Brands/>
      <FeaturedProduct/>
      <PromoBanner/>
      <Testimonial/>


      <NewsLetter/>
    </div>
  );
}
