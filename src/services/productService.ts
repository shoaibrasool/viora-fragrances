// src/services/productService.ts
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";
import { Product } from "../types/productTypes";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const productsCollection = collection(db, "products");
    const productSnapshot = await getDocs(productsCollection);
    const productList = productSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Product[];
    return productList;
  } catch (error) {
    console.error("Error fetching products: ", error);
    return [];
  }
};
