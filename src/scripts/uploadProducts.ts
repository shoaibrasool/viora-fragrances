import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Product } from "../types/productTypes";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// Initial state data
const initialState: Product[] = [
  {
    id: "1",
    name: "Product 1",
    oldPrice: "Rs.2,199.00",
    newPrice: "Rs.450.00",
    images: ["ProductImages/1.webp", "ProductImages/2.webp"],
  },
  {
    id: "2",
    name: "Product 2",
    oldPrice: "Rs.2,199.00",
    newPrice: "Rs.450.00",
    images: ["ProductImages/1.webp", "ProductImages/2.webp"],
  },
  {
    id: "3",
    name: "Product 3",
    oldPrice: "Rs.2,199.00",
    newPrice: "Rs.450.00",
    images: ["ProductImages/1.webp", "ProductImages/2.webp"],
  },
  {
    id: "4",
    name: "Product 4",
    oldPrice: "Rs.2,199.00",
    newPrice: "Rs.450.00",
    images: ["ProductImages/1.webp", "ProductImages/2.webp"],
  },
  {
    id: "5",
    name: "Product 5",
    oldPrice: "Rs.2,199.00",
    newPrice: "Rs.450.00",
    images: ["ProductImages/1.webp", "ProductImages/2.webp"],
  },
  {
    id: "6",
    name: "Product 6",
    oldPrice: "Rs.2,199.00",
    newPrice: "Rs.450.00",
    images: ["ProductImages/1.webp", "ProductImages/2.webp"],
  },
];

// Function to upload data to Firestore
export const uploadProducts = async () => {
  const productsCollection = collection(db, "products");
  for (const product of initialState) {
    try {
      await addDoc(productsCollection, product);
      console.log(`Uploaded ${product.name}`);
    } catch (error) {
      console.error("Error uploading product:", product.name, error);
    }
  }
};

uploadProducts().then(() => {
  console.log("All products uploaded");
});
