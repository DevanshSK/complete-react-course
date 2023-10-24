# React Redux Toolkit

### Steps to integrate state management using redux toolkit in react

1. Install redux and redux toolkit in react app, using this command `npm install @reduxjs/toolkit react-redux`

2. Then configure the store in `/app/store.js` for redux.

3. After that create a alice and define the reducers in the file `/features/todo/todoReducer.js`

4. Inside this step, we have to create initial state, configure reducers.

5. After that export the actions and reducers and add it to the store .

6. Your redux is configured.

### To use redux in react

1. first create a dispatch using the `useDispatch` hook for mutating data.

2. Import the reducer function which was exported from the slice.

3. Call the reducer function inside the dispatch function call.

```
    dispatch(addTodo(input));
```

4. Get the value from store

## But most importantly, We have to use the redux provider
