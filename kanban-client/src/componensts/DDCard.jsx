import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import DDTask from "./DDTask"


function DDCard() {
    const onDragEnd = ()=> {

    }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="card1">
        {(provided) => (
          <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="droppable-card-wrapper flex flex-col w-80 bg-gray-200 mx-auto my-5 p-3 rounded-3xl h-full">
              <div className="card-top">
                  <div className="card-heading flex justify-between items-center">
                      <h1 className="card-title font-bold p-2 text-lg">TO-DO CARD</h1>
                      dropdown
                  </div>
              </div>
  
              <Draggable draggableId="draggable-tasks">
              {(provided, index) => (
                  <div 
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="card-middle tasks-container w-full h-96 overflow-y-auto">
                      <DDTask index = {index}/>                          
                      <DDTask/>                          
              </div>
              )}
              </Draggable>
  
              <div className="card-bottom w-full rounded-md p-2 flex justify-center items-center border-black border-2 mt-3 cursor-pointer">
                  <button className="task-add font-bold">
                      ADD TASK
                  </button>
              </div>
              {provided.placeholder}
          </div>
          
      )}
        
        </Droppable>
    
    </DragDropContext>
  )
}

export default DDCard