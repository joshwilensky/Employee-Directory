// Imports
import React from "react";
import Header from "./components/header";
import Search from "./components/search";
import Table from "./components/table";
import axios from "axios";
import './App.css'

function App() {
  const [state, setState] = React.useState({
    base: [],
    employees: [],
  });

  React.useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((response) => {
        // console.log(response.data.results);
        setState({
          employees: response.data.results,
          base: response.data.results,
        });
      })
      .catch((error) => console.warn(error.message));
  }, []);

  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setState({
      // automatically renders
      ...state,
      employees: state.base.filter((employee) =>
        employee.name.first.toLowerCase().includes(searchTerm) ||
        employee.name.last.toLowerCase().includes(searchTerm)
      ),
    });
  };
  return (
    <div>
      <Header />
      <Search onChange={handleChange} />
      <Table employees={state.employees} />
    </div>
  );
}
export default App;