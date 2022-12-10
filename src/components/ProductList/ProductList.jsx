import "./productList.css";
import Product from "../Product/Product";
import { products } from "../../data";
const ProductList = () => {
  return (
    <div className="productList">
      <div className="productList-Texts">
        <h1 className="productList-Title"> Create and Inspire. It is Sha1</h1>
        <p className="productList-Desc">
          Sha1 is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="p-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
