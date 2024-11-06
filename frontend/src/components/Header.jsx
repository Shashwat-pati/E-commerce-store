import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import Loader from "./Loader";
import SmallProduct from "../pages/Products/SmallProduct";
import ProductCarousel from "../pages/Products/ProductCarousel";

const Header = () => {
    const { data, isLoading, error } = useGetTopProductsQuery();

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <h1>ERROR</h1>;
    }

    return (
        <>
            <div className="w-[10rem] ml-[45%] p-3 flex items-center justify-center space-x-3">
                <img
                    src="uploads\Icon.png"
                    className="w-[50%] h-[50%]"
                    alt="Icon"
                />
                <span className="font-semibold text-3xl font-serif">
                    ShipShop
                </span>
            </div>
            <div className="flex justify-around mt-5">
                <div className="xl:block lg:hidden md:hidden:sm:hidden">
                    <div className="grid grid-cols-2">
                        {data.map((product) => (
                            <div key={product._id}>
                                <SmallProduct product={product} />
                            </div>
                        ))}
                    </div>
                </div>
                <ProductCarousel />
            </div>
        </>
    );
};

export default Header;
