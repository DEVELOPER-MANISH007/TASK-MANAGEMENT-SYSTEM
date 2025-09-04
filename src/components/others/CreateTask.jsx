import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";


const CreateTask = () => {


  const [userData, setUserData] = useContext(AuthContext);


  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, SetTaskDate] = useState("");
  const [asignTo, setAsign] = useState("");
  const [Category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    
    // Create the new task object with correct property names
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category: Category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };
   
    const data = [...userData]; // Create a copy of the array
    
    data.forEach((elem) => {
      if (asignTo === elem.firstname) {
        elem.tasks.push(newTask);
        elem.taskCount.newTask = elem.taskCount.newTask + 1;
      }
    });
    
    // Update localStorage
    localStorage.setItem("employees", JSON.stringify(data));
    
    // Update context state with new reference
    setUserData(data);
    
    console.log("Task created successfully:", newTask);
    console.log("Updated data:", data);
 
    setTaskTitle("");
    setTaskDescription("");
    SetTaskDate("");
    setAsign("");
    setCategory("");
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="w-full flex items-start justify-between gap-8"
      >
        <div className="flex flex-col gap-6 w-1/2">
          <div>
            <h3 className="text-gray-200 mb-2 font-medium">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="bg-gray-800 text-white border border-gray-600 rounded-lg p-3 w-full placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-gray-200 mb-2 font-medium">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                SetTaskDate(e.target.value);
              }}
              className="bg-gray-800 text-white border border-gray-600 rounded-lg p-3 w-full focus:outline-none focus:border-blue-500 transition-colors"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-gray-200 mb-2 font-medium">Assign to</h3>
            <input
              value={asignTo}
              onChange={(e) => {
                setAsign(e.target.value);
              }}
              className="bg-gray-800 text-white border border-gray-600 rounded-lg p-3 w-full placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              type="text"
              placeholder="employee name"
            />
          </div>
          <div>
            <h3 className="text-gray-200 mb-2 font-medium">Category</h3>
            <input
              value={Category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="bg-gray-800 text-white border border-gray-600 rounded-lg p-3 w-full placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2 items-center">
          <h3 className="text-gray-200 mb-2 font-medium self-start">
            Description
          </h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            className="bg-gray-800 text-white border border-gray-600 rounded-lg p-3 w-full h-56 resize-none placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Description"
          ></textarea>
          <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg mt-6 w-full text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
