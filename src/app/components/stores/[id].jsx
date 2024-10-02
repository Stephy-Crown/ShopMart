// pages/stores/[id].js
import { useRouter } from "next/router";
import StoreDetails from "../StoreDetails";
import mockStoreData from "../../mockStoreData"; // Adjust path as needed

const StorePage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Here you would fetch the store data based on the ID
  const store = mockStoreData.find((s) => s.id === parseInt(id)); // Assuming store data is in an array
  const relatedStores = mockStoreData.filter((s) => s.id !== parseInt(id)); // Get related stores

  return store && <StoreDetails store={store} relatedStores={relatedStores} />;
};

export default StorePage;
