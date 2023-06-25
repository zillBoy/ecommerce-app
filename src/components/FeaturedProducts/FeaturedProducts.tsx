// React Dependencies
import React from "react";

// Internal Dependencies
import {
  ProductCard,
  ProductCardProps,
} from "@/components/common/Card/ProductCard";

export type FeaturedProductsProps = {
  products: ProductCardProps[];
};

export const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  return (
    <div
      role="featured-products"
      className="flex flex-col flex-wrap items-start justify-center md:flex-row md:justify-between"
    >
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          creator={product.creator}
          price={product.price}
          cardNum={index + 1}
        />
      ))}
    </div>
  );
};
