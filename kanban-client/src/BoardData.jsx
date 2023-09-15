const boardData = [
    {
        type: 'card',
        id: 'todo-card',
        children: [
            {
                type: 'task',
                id: 'todo-task1'
            },

            {
                type: 'task',
                id: 'todo-task2'
            }
        ]
    },

    {
        type: 'card',
        id: 'doing-card',
        children: [
            {
                type: 'task',
                id: 'doing-task1'
            },

            {
                type: 'task',
                id: 'doing-task2'
            }
        ]
    },

    {
        type: 'card',
        id: 'done-card',
        children: [
            {
                type: 'task',
                id: 'done-task1'
            },

            {
                type: 'task',
                id: 'done-task2'
            }
        ]
    },

];

export default boardData;