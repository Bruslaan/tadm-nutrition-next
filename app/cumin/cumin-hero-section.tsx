import FloatingIcon from 'components/floating-icon';
import Image from 'next/image';
const CuminHeroSection = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden text-center">
      <h1 className="max-w-5xl text-5xl font-bold uppercase text-blue-200 lg:text-9xl">
        Black Cumin Seed Oil
      </h1>
      <div className="relative -mt-20">
        {/* svg */}
        <div className="absolute right-0 top-0">
          <svg
            className="h-auto w-40 lg:w-72"
            viewBox="0 0 558 617"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M273.271 30.5729C245.786 1.84464 200.241 -13.939 130.469 20.4421C13.4246 78.1172 -4.25796 254.567 1.5313 335.582C13.9179 408.436 56.8023 560.887 129.247 587.862C219.803 621.582 344.928 651.609 460.311 513.634C575.694 375.659 581.445 234.664 515.119 128.842C448.794 23.0198 376.685 146.159 317.127 36.9106C293.583 -6.27642 279.899 4.3461 273.271 30.5729Z"
              fill="#3185D2"
              fillOpacity="0.2"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0">
          <svg
            className="h-auto w-40 lg:w-72"
            viewBox="0 0 746 734"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M564.961 111.636C556.87 64.1986 520.961 17.0726 424.542 2.81331C262.798 -21.107 119.756 141.223 68.4534 225.378C29.74 306.022 -33.7382 486.514 22.0569 563.323C91.8008 659.334 199.883 775.61 416.689 718.939C633.496 662.269 739.137 526.759 745.418 376.18C751.699 225.601 590.105 297.534 605.803 148.248C612.009 89.2334 590.356 90.2748 564.961 111.636Z"
              fill="#3185D2"
              fillOpacity="0.2"
            />
          </svg>
        </div>

        <div className="relative">
          <Image
            src="/static/CuminFlower.png"
            alt="cumin flower"
            height={500}
            width={500}
            className="w-60 lg:w-96"
          ></Image>
          <FloatingIcon className="right-0 top-0 w-14 blur-sm" size={70} />
          <FloatingIcon className="bottom-0 left-0 z-10 blur-sm" size={150} />
          <FloatingIcon className="left-0" size={50} />
          <FloatingIcon className="-right-32 top-20 -rotate-45" size={80} />
        </div>
      </div>
      <div className="absolute bottom-10 z-10 flex flex-col items-center justify-center gap-3 text-black">
        <span className="uppercase">Discover</span>
        <span className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-black text-xl text-white">
          ↓
        </span>
      </div>
    </div>
  );
};

export default CuminHeroSection;
