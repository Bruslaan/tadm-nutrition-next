import RecyclingCard from './recycling-card';
const RecycleSection = () => {
  return (
    <section className="px-5 md:px-7">
      <div className="nature_green mx-auto max-w-7xl rounded-2xl p-10 text-center">
        <h2 className="text-4xl font-semibold">Recycle and reuse.</h2>
        <div className="mx-auto mt-48 flex max-w-5xl flex-col justify-between gap-10 md:flex-row">
          <RecyclingCard imageURL="/static/bag-tadm.png" />
          <RecyclingCard imageURL="/static/bag-tadm.png" />
          <RecyclingCard className="w-60" imageURL="/static/package_mini.png" />
        </div>
      </div>
    </section>
  );
};

export default RecycleSection;
