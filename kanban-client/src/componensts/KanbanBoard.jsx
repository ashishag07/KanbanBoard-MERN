import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import boardData from '../BoardData';
import Card from './Card';

function KanbanBoard() {
    function onDragEnd(result) {
    
    
    }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{padding: 16}}>
        <h1>Nested Card demo</h1>
        <Droppable droppableId="editor" type="card">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                backgroundColor: snapshot.isDraggingOver ? "red" : 'white'
              }}
            >
              {boardData.map((card, index) => (
                <Card
                  isDragginOver={snapshot.isDraggingOver}
                  key={`${card.type}-${card.id}`}
                  {...card}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  )
}

export default KanbanBoard