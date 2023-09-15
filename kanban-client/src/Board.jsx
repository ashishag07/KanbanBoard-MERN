import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import Card from "./Card"

function Board() {
    const onDragEnd = () =>{

    }

  return (
    <DragDropContext onDragEnd={onDragEnd}>        
        <Droppable droppableId="droppable-board">
        {(provided) => (
            <div 
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="board-wrapper cards-container h-screen w-screen flex flex-wrap p-4 overflow-hidden">
                <Card cardId={'draggable-todo-card'} cardKey={'todoCard'} cardIndex={'todo-card'}/>
                <Card cardId={'draggable-doing-card'} cardKey={'doingCard'} cardIndex={'doing-card'}/>
                <Card cardId={'draggable-done-card'} cardKey={'doneCard'} cardIndex={'done-card'}/>
            </div>
            
        )}
        
        </Droppable>
        
    
    </DragDropContext>
  )
}

export default Board