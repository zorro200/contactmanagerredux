// Actions are objects that contain info about what should be changed
// (In this case, the return is the action).
// Changing info or sending it to the store
// TYPE property is necessary and need to be in "snake case"

function handleAdd(person) {
    return {
        type: 'ADD_PERSON',
        data: person
    }
}

// NEXT FEATURE
function handleDelete(person) {
    return {
        type: 'DELETE_PERSON',
        data: person
    }
}

export { handleAdd, handleDelete };