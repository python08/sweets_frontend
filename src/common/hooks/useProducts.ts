"use client";

import { useEffect, useState } from "react";
import { getAllProducts } from "../../apis/product/product";
import type { ProductsType } from "../temp/temp";

export const useProducts = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function loadProducts() {
      try {
        const data = await getAllProducts();
        if (!mounted) return;

        if (data?.error) {
          setHasError(true);
          setProducts([]);
        } else {
          setProducts(data);
        }
      } catch {
        if (mounted) {
          setHasError(true);
          setProducts([]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadProducts();

    return () => {
      mounted = false;
    };
  }, []);

  return { products, loading, hasError };
};
