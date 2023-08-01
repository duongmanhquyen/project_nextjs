import React from 'react';

const salesData = [
  {
    country: 'United States',
    flag: '/flags/US.png',
    sales: 2500,
    value: '$230,900',
    bounce: '29.9%',
  },
  {
    country: 'Germany',
    flag: '/flags/DE.png',
    sales: 3900,
    value: '$440,000',
    bounce: '40.22%',
  },
  {
    country: 'Great Britain',
    flag: '/flags/GB.png',
    sales: 1400,
    value: '$190,700',
    bounce: '23.44%',
  },
  {
    country: 'Brasil',
    flag: '/flags/BR.png',
    sales: 562,
    value: '$143,960',
    bounce: '32.14%',
  },
];

const App = () => (
  <>
    <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl dark:bg-gray-950 border-black-125 rounded-2xl bg-clip-border">
      <div className="p-4 pb-0 mb-0 rounded-t-4">
        <div className="flex justify-between">
          <h6 className="mb-2 dark:text-white">Sales by Country</h6>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="items-center w-full mb-4 align-top border-collapse border-gray-200 dark:border-white/40">
          <tbody>
            {salesData.map((data, index) => (
              <tr key={index}>
                <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                  <div className="flex items-center px-2 py-1">
                    <div>
                      <img src={data.flag} alt="Country flag" />
                    </div>
                    <div className="ml-6">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Country:</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">{data.country}</h6>
                    </div>
                  </div>
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                  <div className="text-center">
                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Sales:</p>
                    <h6 className="mb-0 text-sm leading-normal dark:text-white">{data.sales}</h6>
                  </div>
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                  <div className="text-center">
                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Value:</p>
                    <h6 className="mb-0 text-sm leading-normal dark:text-white">{data.value}</h6>
                  </div>
                </td>
                <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                  <div className="flex-1 text-center">
                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Bounce:</p>
                    <h6 className="mb-0 text-sm leading-normal dark:text-white">{data.bounce}</h6>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
);

export default App;