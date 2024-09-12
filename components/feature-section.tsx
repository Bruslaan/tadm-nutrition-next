import Image from 'next/image';
const FeatureSection = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-20">
        {/* Component */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
          {/* Item */}
          <div className="py-20">
            <h2 className="mb-6 inline-block bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-4xl font-bold text-transparent md:mb-10 md:text-6xl lg:mb-12">
              With Nature in Mind
            </h2>
            <ul className="grid max-w-2xl grid-cols-2 sm:gap-5 lg:max-w-none">
              <li className="flex flex-col p-5">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                  alt=""
                  className="mb-4 inline-block h-10 w-10 rounded-full object-cover"
                />
                <p className="mb-4 font-semibold">Support</p>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.
                </p>
              </li>
              <li className="flex flex-col p-5">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                  alt=""
                  className="mb-4 inline-block h-10 w-10 rounded-full object-cover"
                />
                <p className="mb-4 font-semibold">Organise</p>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.
                </p>
              </li>
              <li className="flex flex-col p-5">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                  alt=""
                  className="mb-4 inline-block h-10 w-10 rounded-full object-cover"
                />
                <p className="mb-4 font-semibold">Flexibility</p>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.
                </p>
              </li>
              <li className="flex flex-col p-5">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                  alt=""
                  className="mb-4 inline-block h-10 w-10 rounded-full object-cover"
                />
                <p className="mb-4 font-semibold">Speed</p>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.
                </p>
              </li>
            </ul>
          </div>
          {/* Item */}
          <div className="h-full w-full max-w-xl overflow-hidden rounded-xl">
            <Image
              width={500}
              height={500}
              src="/static/footprint.png"
              alt=""
              className="mx-auto inline-block h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
