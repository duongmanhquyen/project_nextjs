import React from 'react';

const categoriesData = [
  {
    icon: 'ni-mobile-button',
    title: 'Devices',
    stock: '250 in stock',
    sold: '346+ sold',
  },
  {
    icon: 'ni-tag',
    title: 'Tickets',
    closed: '123 closed',
    open: '15 open',
  },
  {
    icon: 'ni-box-2',
    title: 'Error logs',
    active: '1 is active',
    closed: '40 closed',
  },
  {
    icon: 'ni-satisfied',
    title: 'Happy users',
    count: '+ 430',
  },
];

const App = () => (
  <>
    <div className="border-black/12.5 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
      <div className="p-4 pb-0 rounded-t-4">
        <h6 className="mb-0 dark:text-white">Categories</h6>
      </div>
      <div className="flex-auto p-4">
        <ul className="flex flex-col pl-0 mb-0 rounded-lg">
          {categoriesData.map((data, index) => (
            <li key={index} className={`relative flex justify-between py-2 pr-4 mb-2 ${index === categoriesData.length - 1 ? 'rounded-b-lg' : 'rounded-t-lg'} rounded-xl text-inherit border-0`}>
              <div className="flex items-center">
                <div className="inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl">
                  <i className={`text-white ni ${data.icon} relative top-0.75 text-xxs`}></i>
                </div>
                <div className="flex flex-col">
                  <h6 className="mb-1 text-sm leading-normal text-slate-700 dark:text-white">{data.title}</h6>
                  {data.stock && data.sold ?
                    <span className="text-xs leading-tight dark:text-white/80">{data.stock}, <span className="font-semibold">{data.sold}</span></span>
                    :
                    <span className="text-xs leading-tight dark:text-white/80">{data.closed}, <span className="font-semibold">{data.open}</span></span>
                  }
                  {data.count &&
                    <span className="text-xs leading-tight dark:text-white/80"><span className="font-semibold">{data.count}</span></span>
                  }
                </div>
              </div>
              <div className="flex">
                <button className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white">
                  <i className="ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200" aria-hidden="true"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
);

export default App;