import { Draggable, Droppable } from "react-beautiful-dnd"
import Task from "./Task"

function Card({cardId, cardKey, cardIndex}) {
  return (
    <Draggable
    key={cardKey}
    index={cardIndex}    
    draggableId={cardId}
    >
    {(provided) => (
        <div
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        {...provided.draggableProps} 
        className="droppable-card-wrapper flex flex-col w-80 bg-gray-200 mx-auto my-5 p-3 rounded-3xl h-full">
            <div className="card-top">
                <div className="card-heading flex justify-between items-center">
                    <h1 className="card-title font-bold p-2 text-lg">TO-DO CARD</h1>
                    dropdown
                </div>
            </div>

            <Droppable droppableId="droppable-tasks">
            {(provided, index) => (
                <div 
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="card-middle tasks-container w-full h-96 overflow-y-auto">
                    <Task taskId={'draggable-todo1'} taskKey={'todo1'} taskIndex={'todo-1'}/>                           
                    <Task taskId={'draggable-todo2'} taskKey={'todo2'} taskIndex={'todo-2'}/>                           
            </div>
            )}
            </Droppable>

            <div className="card-bottom w-full rounded-md p-2 flex justify-center items-center border-black border-2 mt-3 cursor-pointer">
                <button className="task-add font-bold">
                    ADD TASK
                </button>
            </div>
            {provided.placeholder}
        </div>
        
    )}
    
    </Draggable>
  )
}

export default Card