
import SearchFilterPanel from "../../components/shop/SeachFilterPanel";
import { getProducts } from "@/lib/api/product";
import ProductCard from "@/components/shop/ProductCard";
import PaginationPart from "../../components/shop/PaginationPart";

const ShopPage = async({searchParams}) => {
    const sParams = await searchParams;
      const search = sParams.search || "";
      const category = sParams.category || "";
      const sortBy = sParams.sortBy || "";
      const page = sParams.page;
    
      const params = new URLSearchParams();
      if (search) {
        params.set("search", search);
      }
      if (category) {
        params.set("category", category);
      }
      if (sortBy) {
        params.set("sortBy", sortBy);
      }
      if (page) {
        params.set("page", page);
      }
      const res = await getProducts(params)
      const products = res.products
  return (
    <div className="container py-10">
      <div>
        <h3 className="font-dmSans text-xl font-medium">All Products</h3>
        <h2 className="font-exo2 text-5xl font-bold mb-0.5">Shop Everything</h2>
        <span className="text-[#6B7A99] font-dmSans">8 products found</span>
      </div>

      <div className="mt-10">
        <SearchFilterPanel/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
        {products && (
          products.map(product => <ProductCard key={product._id} product = {product}/>)
        )}
      </div>

      <div className="mt-6">
        <PaginationPart data={res}/>
      </div>
    </div>
  );
};

export default ShopPage;
