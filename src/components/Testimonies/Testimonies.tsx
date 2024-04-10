import "./testimonies.css";

const Testimonies = () => {
  return (
    <div className="testimonies bg-gray-100 py-12">
      <h2 className="text-center text-3xl font-light mb-8">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="testimony bg-white shadow-lg rounded-lg p-6">
          <p className="text-lg font-medium mb-4">
            "Amazing service! Highly recommended."
          </p>
          <p className="text-gray-500">- John Doe</p>
        </div>
        <div className="testimony bg-white shadow-lg rounded-lg p-6">
          <p className="text-lg font-medium mb-4">
            "Best experience ever. Thank you!"
          </p>
          <p className="text-gray-500">- Jane Smith</p>
        </div>
        <div className="testimony bg-white shadow-lg rounded-lg p-6">
          <p className="text-lg font-medium mb-4">
            "Excellent team and great support."
          </p>
          <p className="text-gray-500">- Mike Johnson</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
