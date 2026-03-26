import EmpForm from "./components/empForm";
import EmployeeTable from "./components/employeeTable";
import { useState } from "react";

function App() {

  const [employees, setEmployees] = useState<empType[]>(
    JSON.parse(localStorage.getItem("employees") || "[]")
  );

  type empType = {
    fName: string;
    lName: string;
    email: string;
    phone: string;
    salary: string;
    department: string;
    gender: string;
    hobby: string[];
    city: string;
    address: string;
  };
  return <>

    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-full max-w-4xl border border-white/50">

        <EmpForm employees={employees} setEmployees={setEmployees} />
        <EmployeeTable employees={employees} />
      </div>
    </div>

  </>
}

export default App;