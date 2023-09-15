import { Draggable, Droppable } from "react-beautiful-dnd"
import Task from "./Task"

function Card({children =[], ...props}) {
  return (
    <Draggable draggableId={props.id} index={props.index} type="card">
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={{
            ...provided.draggableProps.style,
            padding: 8,
            marginTop: 8,
            border: "1px solid lightgray"
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
            card list {props.id}
          </p>
          <Droppable droppableId={props.id} type="task">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  backgroundColor: snapshot.isDraggingOver ? "skyblue" : "white"
                }}
              >
                {children.map((task, index) => (
                  <Task
                    key={`${task.type}-${index}`}
                    {...task}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  )
}

export default Card