import Image from "next/image";
const StoreCard = ({ store }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <Image
        src={store.image}
        alt={store.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{store.name}</h3>
      <p className="text-gray-600 mb-4">{store.description}</p>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${store.whatsappNumber}`}
        className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16.01 20.11A9 9 0 115 3l-1.43 5.11L9.8 9.8a9 9 0 016.2 10.31z"
          />
        </svg>
        Connect on WhatsApp
      </a>
    </div>
  );
};

export default StoreCard;
