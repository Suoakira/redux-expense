import { createStore, combineReducers } from "redux"

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_AMOUNT
// SORT_BY_START DATE
// SET_END_DATE

// expenses reducer

const expensesReducerDefaultState = []
const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
}

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        default: 
            return state
    }
}

const filtersReducer = (state =  filtersReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

// store create

const store =  createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}) 

)

console.log(store.getState())


const demoState = {
    expenses: [{
        id: "234234",
        description: "January Rent",
        note: "Final payment for that property",
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount", // date or amount
        startDate: undefined,
        endDate: undefined
    }
}


