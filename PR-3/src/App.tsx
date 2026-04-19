import EmpForm from "./components/empForm";
import EmployeeTable from "./components/employeeTable";
import { useState, useEffect } from "react";
import type { empType } from "./utils/global";
import { toast, ToastContainer } from "react-toastify";

function App() {

  const [employees, setEmployees] = useState<empType[]>(
    JSON.parse(localStorage.getItem("employees") || "[]")
  );

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editEmployee, setEditEmployee] = useState<empType>();

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // delete
  const deleteEmployee = (index: number) => {
    setEmployees((prev) => prev.filter((_, i) => i !== index));
    toast.success("Employee deleted successfully..");
  };

  // update (edit start)
  const updateEmployee = (index: number) => {
    setEditIndex(index);
    setEditEmployee(employees[index]);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-full max-w-4xl border border-white/50">

          <EmpForm
            employees={employees}
            setEmployees={setEmployees}
            editEmployee={editEmployee}
            editIndex={editIndex}
            setEditIndex={setEditIndex}
          />

          <EmployeeTable
            employees={employees}
            deleteEmployee={deleteEmployee}
            updateEmployee={updateEmployee}
          />

        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default App;