import React from "react";

function DDTask() {
  return (
    <div  className="task-card w-full h-52 bg-rose-400 rounded-md p-2 mt-2">
      <div className="task-top flex justify-between items-center p-1">
        <h1 className="task-title font-bold">Todo Project 1</h1>
        dropdown
      </div>

      <div className="task-middle p-1 flex items-center">
        <p className="task-description text-sm">
          This is project 1. I am task description. All the details related to
          task can be find here. Please check more for details. Please enable
          option for show more, only first 100 charactes of the project
          description should be visible.
        </p>
      </div>

      <div className="task-bottom flex justify-between p-1 text-sm">
        <div className="footer-item flex">
          <div className="item-icon">icon</div>
          <p className="icon-text ml-2">12 sept</p>
        </div>

        <div className="footer-item flex">
          <div className="item-icon">icon</div>
          <p className="icon-text ml-2">12 sept</p>
        </div>

        <div className="footer-item flex">
          <div className="item-icon">icon</div>
          <p className="icon-text ml-2">12 sept</p>
        </div>
      </div>
    </div>
  );
}

export default DDTask;
