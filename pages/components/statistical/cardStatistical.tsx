import React from 'react';


const App = () => (
  <>
    <div className="flex flex-wrap -mx-3">
      {[
        {
          title: "Today's Money",
          value: "$53,000",
          percentage: "+55%",
          description: "since yesterday",
          iconClass: "ni-money-coins",
          iconColor: "text-white",
          gradientFrom: "from-blue-500",
          gradientTo: "to-violet-500",
        },
        {
          title: "Today's Users",
          value: "2,300",
          percentage: "+3%",
          description: "since last week",
          iconClass: "ni-world",
          iconColor: "text-white",
          gradientFrom: "from-red-600",
          gradientTo: "to-orange-600",
        },
        {
          title: "New Clients",
          value: "+3,462",
          percentage: "-2%",
          description: "since last quarter",
          iconClass: "ni-paper-diploma",
          iconColor: "text-white",
          gradientFrom: "from-emerald-500",
          gradientTo: "to-teal-400",
        },
        {
          title: "Sales",
          value: "$103,430",
          percentage: "+5%",
          description: "than last month",
          iconClass: "ni-cart",
          iconColor: "text-white",
          gradientFrom: "from-orange-500",
          gradientTo: "to-yellow-500",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"
        >
          <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                      {item.title}
                    </p>
                    <h5 className="mb-2 font-bold dark:text-white">{item.value}</h5>
                    <p className="mb-0 dark:text-white dark:opacity-60">
                      <span className="text-sm font-bold leading-normal text-emerald-500">
                        {item.percentage}
                      </span>
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="px-3 text-right basis-1/3">
                  <div className={`inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl ${item.gradientFrom} ${item.gradientTo}`}>
                    <i className={`ni leading-none ${item.iconClass} text-lg relative top-3.5 ${item.iconColor}`}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);
export default App;