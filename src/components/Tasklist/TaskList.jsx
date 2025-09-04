import React from "react";
import AcceptTask from "./AcceptTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";


const TaskList = ({data}) => {
console.log(data)
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto  w-full flex items-center justify-start flex-nowrap gap-5 mt-10 py-5 rounded-2xl"
    >
   
      {data.tasks.map((elem,index)=>{ 
       if(elem.active){
        return <AcceptTask key={index} data={elem}/>
       }
        if(elem.newTask){
          return <NewTask key={index} data={elem}/>
        }
       if(elem.failed){
        return <FailedTask key={index} data={elem}/>
       }
        if(elem.completed){
          return <CompleteTask key={index} data={elem}/>
        }
       
      })
      }

    </div>
  );
};

export default TaskList;
