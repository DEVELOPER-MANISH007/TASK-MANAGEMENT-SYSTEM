import React from 'react'

const NewTask = ({data}) => {

  return (
    <div>
       <div className="flex-shrink-0 p-6 h-full rounded-2xl w-[320px] bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-400/20">
        <div className="flex justify-between items-center mb-4">
          <h3 className="bg-emerald-700/80 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
            {data.category}
          </h3>
          <h4 className="text-sm text-emerald-100 font-medium">{data.date}</h4>
        </div>
        <h2 className="text-xl text-white font-bold mb-3 leading-tight">
          {data.title}
        </h2>
        <p className="text-sm text-emerald-100 mb-6 leading-relaxed line-clamp-3">
          {data.description}
        </p>
        <div className="mt-auto">
            <button className="w-full bg-emerald-700/80 hover:bg-emerald-800 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg backdrop-blur-sm">
              New Task
            </button>
        </div>
      </div>
    </div>
  )
}

export default NewTask
