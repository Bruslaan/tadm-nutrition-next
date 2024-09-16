const TableSection = () => {
  return (
    <div className="w-full bg-yellow-100 p-5">
      <div className="mx-auto grid max-w-7xl gap-10 py-10 lg:grid-cols-2">
        <div className="">
          <h1 className="text-5xl font-semibold">Recycle and reuse.</h1>
          <br />

          {/* table */}
          <div className="rounded-2xl bg-white p-2">
            <div className="relative overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                <thead className="text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Get unlimited pages & more
                    </th>
                    <th scope="col" className="px-6 py-3">
                      [KG CO2]
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      tadm Omega-3
                    </th>
                    <td className="px-6 py-4">0,89</td>
                  </tr>
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      tadm Omega-3
                    </th>
                    <td className="px-6 py-4">0,89</td>
                  </tr>
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      tadm Omega-3
                    </th>
                    <td className="px-6 py-4">0,89</td>
                  </tr>
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      tadm Omega-3
                    </th>
                    <td className="px-6 py-4">0,89</td>
                  </tr>
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      tadm Omega-3
                    </th>
                    <td className="px-6 py-4">0,89</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      tadm Omega-3
                    </th>
                    <td className="px-6 py-4">0,89</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="">
          <p className="text-xl text-neutral-700">
            Recycling is a crucial component in our quest for a sustainable future. By repurposing
            materials, we dramatically reduce the need for raw resource extraction, thereby
            conserving natural habitats and diminishing our carbon footprint.
            <br /> <br /> Each time we recycle, we participate in a cycle of renewal that decreases
            pollution, saves energy, and lessens the burden on landfills.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TableSection;
