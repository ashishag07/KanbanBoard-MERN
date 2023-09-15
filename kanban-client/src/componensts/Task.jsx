import { Draggable, Droppable } from "react-beautiful-dnd"
import Card from "./Card"

function Task({children = [], ...props}) {
  return (
    <Draggable 
    draggableId={props.id} 
    index={props.index} 
    type="task">
          {(provided, snapshot) => (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              style={{
                ...provided.draggableProps.style,
                padding: 8,
                marginTop: 8,
                border: "1px solid lightgray",
                backgroundColor: snapshot.isDragging ? "yellow" : "white"
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                  margin: 0,
                  padding: 0
                }}
              >
                {`${snapshot.isDragging ? "Dragging! " : ""}Task ${props.id}`}
              </p>
              <Droppable
                droppableId={`inner-block-${props.id}`}
                type="card"
              >
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      backgroundColor: snapshot.isDraggingOver
                        ? "green"
                        : "white"
                    }}
                  >
                    {children.map((card, index) => (
                      <Card
                        key={card.id}
                        {...card}
                        index={index}
                      />
                    ))}
                  </div>
                )}
              </Droppable>
            </div>
          )}
        </Draggable>
  )
}

export default Task