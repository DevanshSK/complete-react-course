// Create a context API in react
// Create a context Object and return it
// Here it gives a provider on top level of the app.
// All data is stored inside the provider component
// 2 ways to create a provider
// In first method, provider is in "./UserContextProvider.jsx" file
import React from "react";

const UserContext = React.createContext();

export default UserContext;
