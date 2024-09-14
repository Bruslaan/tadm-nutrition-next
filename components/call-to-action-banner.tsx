const CallToActionBanner = () => {
  return (
    <div className="px-5">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-6 rounded-3xl bg-gradient-to-r from-blue-50 to-orange-100 p-10 text-center">
        <h2 className="text-5xl">Become better version of yourself</h2>
        <button className="hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 mt-5 inline-flex items-center justify-center rounded-lg bg-black px-5 py-3 text-center text-base font-medium text-white focus:ring-4">
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

export default CallToActionBanner;
