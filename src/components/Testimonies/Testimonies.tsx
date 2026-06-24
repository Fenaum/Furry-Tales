import "./testimonies.css";

const Testimonies = () => {
  return (
    <div className="testimonies bg-gray-100 py-12">
      <h2 className="text-center text-3xl font-light mb-8">
        Why buyers use Furry Tales
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="testimony bg-white shadow-lg rounded-lg p-6">
          <p className="text-lg font-medium mb-4">
            We compared breeders, health notes, and kitten availability before
            sending an inquiry.
          </p>
          <p className="text-gray-500">- Maya R.</p>
        </div>
        <div className="testimony bg-white shadow-lg rounded-lg p-6">
          <p className="text-lg font-medium mb-4">
            The breed details made it easier to choose a cat that fits our
            home.
          </p>
          <p className="text-gray-500">- Jordan P.</p>
        </div>
        <div className="testimony bg-white shadow-lg rounded-lg p-6">
          <p className="text-lg font-medium mb-4">
            Messaging breeders in one place kept the process clear and calm.
          </p>
          <p className="text-gray-500">- Lena K.</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
