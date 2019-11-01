const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

function AddItem (text) {
    return {
        type: ADD_ITEM,
        text
    }
}

function RemoveItem (text) {
    return {
        type: REMOVE_ITEM,
        text
    }
}

function SetVisibilityFilter (filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}