import { useDispatch } from "react-redux";
import Routes from "./routes/AppRoutes";
import { useEffect } from "react";
import { getProducts } from "./state/productSlice/productSlice";
import { AppDispatch } from "./state/store/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
