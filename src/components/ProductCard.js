import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <h2 className="text-xl font-bold mt-4">{product.name}</h2>
      <p className="text-grey-700 mt-2">${product.price}</p>
      <Link to={`/product/${product.id}`} className="text-blue-50 mt-4 block">
        VIew Details
      </Link>
    </div>
  );
};

export default ProductCard;
