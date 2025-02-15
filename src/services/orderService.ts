import { db } from "../Firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { OrderData } from "../types/orderTypes";

export const placeOrder = async (orderData: OrderData) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), orderData);
    // console.log("Order stored with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error storing order: ", error);
    throw error;
  }
};
