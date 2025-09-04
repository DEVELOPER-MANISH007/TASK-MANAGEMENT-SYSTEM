import React from "react";

const AcceptTask = ({data}) => {
  return (
    <div>
      <div className="flex-shrink-0 p-6 h-full rounded-2xl w-[320px] bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-400/20">
        <div className="flex justify-between items-center mb-4">
          <h3 className="bg-blue-700/80 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
              {data.category}
          </h3>
          <h4 className="text-sm text-blue-100 font-medium">{data.date}</h4>
        </div>
        <h2 className="text-xl text-white font-bold mb-3 leading-tight">
          {data.title}
        </h2>
        <p className="text-sm text-blue-100 mb-6 leading-relaxed line-clamp-3">
          {data.description}
        </p>
        <div className="flex justify-between gap-3 mt-auto">
            <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-3 text-sm rounded-xl transition-all duration-200 shadow-md hover:shadow-lg">
              Complete
            </button>
            <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-3 text-sm rounded-xl transition-all duration-200 shadow-md hover:shadow-lg">
              Failed
            </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;
