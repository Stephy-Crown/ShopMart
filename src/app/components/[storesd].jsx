const StoreDetails = ({ store }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{store.name}</h1>
      {/* Other store details */}
      <a
        href={`https://wa.me/${store.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white px-4 py-2 rounded hover:bg-[#1ebe57] transition"
      >
        Contact on WhatsApp
      </a>
    </div>
  );
};
