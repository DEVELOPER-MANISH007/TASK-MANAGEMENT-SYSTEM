import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setuserData] = useContext(AuthContext);
 
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-xl mt-5 border border-gray-700">
       <div className="bg-gradient-to-r from-blue-600 to-purple-600 mb-4 flex justify-between py-3 px-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-white w-1/5 text-center">Employee Name</h2>
          <h3 className="text-lg font-semibold text-white w-1/5 text-center">New Task</h3>
          <h5 className="text-lg font-semibold text-white w-1/5 text-center">Active Task</h5>
          <h5 className="text-lg font-semibold text-white w-1/5 text-center">Completed</h5> 
          <h5 className="text-lg font-semibold text-white w-1/5 text-center">Failed</h5> 
        </div>

     <div className="space-y-3">
     {userData.map(function(elem,id) {
        return(
        <div key={id} className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 flex justify-between py-3 px-6 rounded-lg border border-gray-600 shadow-md">
          <h2 className="text-lg  w-1/5 text-center text-gray-200">{elem.firstname}</h2>
          <h3 className="text-lg  w-1/5 text-center text-blue-400 font-semibold">{elem.taskCount.newTask}</h3>
          <h5 className="text-lg  w-1/5 text-center text-yellow-400 font-semibold">{elem.taskCount.active}</h5>
          <h5 className="text-lg  w-1/5 text-center text-green-400 font-semibold">{elem.taskCount.completed}</h5>
          <h5 className="text-lg  w-1/5 text-center text-red-400 font-semibold">{elem.taskCount.failed}</h5>
        </div>
      )})}
    </div>
    </div>
    
  )
}

export default AllTask
