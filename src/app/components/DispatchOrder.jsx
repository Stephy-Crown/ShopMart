import Image from "next/image";

const DispatchOrder = () => {
  return (
    <div className="dispatch-order-section py-10 bg-[#CEDF9F]">
      <h2 className="text-xl font-bold text-center mb-6">
        Dispatch Your Order
      </h2>
      <div className="flex flex-col items-center">
        {/* <Image
          src="/images/dispatch.png" // Replace with the actual image path for the dispatch order
          alt="Dispatch Order"
          width={300}
          height={200}
          className="mb-4"
        /> */}
        <p className="text-center mb-4">
          Ready to get your order dispatched? Click the button below to proceed!
        </p>
        <button className="bg-[#b1843a] hover:bg-green-600 text-white py-2 px-4 rounded-lg">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default DispatchOrder;
