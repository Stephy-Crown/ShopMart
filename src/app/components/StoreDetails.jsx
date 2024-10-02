// components/StoreDetails.js
import Link from "next/link";

const StoreDetails = ({ store, relatedStores }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{store.name}</h1>
      <p className="mt-2">{store.description}</p>

      {/* WhatsApp Contact Button */}
      <a
        href={`https://wa.me/${store.whatsappBusinessId}?text=Hi!%20I%27d%20like%20to%20inquire%20about%20your%20products.`} // Predefined message
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white px-4 py-2 rounded hover:bg-[#1ebe57] transition mt-4 block text-center"
      >
        Connect via WhatsApp
      </a>

      {/* Related Stores Section */}
      <h2 className="text-xl font-bold mt-6">Other Stores in Electronics</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {relatedStores.map((relatedStore) => (
          <div key={relatedStore.id} className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold">{relatedStore.name}</h3>
            <p className="text-gray-600">{relatedStore.description}</p>
            {/* Link to each related store's details page */}
            <Link href={`/stores/${relatedStore.id}`}>
              <a className="text-[#528353] hover:underline">
                View Store Details
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreDetails;
