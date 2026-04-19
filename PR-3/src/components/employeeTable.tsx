import { useEffect, useState } from "react";
import type { empType } from "../utils/global";

type props = {
  employees: empType[];
  deleteEmployee: (index: number) => void;
  updateEmployee: (index: number) => void;
};

function EmployeeTable({ employees, deleteEmployee, updateEmployee }: props) {

  const getGenderBadge = (gender: string) => {
    const base = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
    if (gender.toLowerCase() === "male") {
      return <span className={`${base} bg-blue-100 text-blue-800`}>Male</span>;
    }
    if (gender.toLowerCase() === "female") {
      return <span className={`${base} bg-pink-100 text-pink-800`}>Female</span>;
    }
    return <span className={`${base} bg-gray-100 text-gray-800`}>{gender}</span>;
  };

  const [search, setSearch] = useState<string>("");
  const [phoneSearch, setPhoneSearch] = useState<string>("");

  const filterEmployees = employees.filter((emp) => {
    const generalMatch =
      emp.fName.toLowerCase().includes(search.toLowerCase()) ||
      emp.lName.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase()) ||
      emp.city.toLowerCase().includes(search.toLowerCase());

    const phoneMatch = emp.phone.toString().includes(phoneSearch);

    return generalMatch && phoneMatch;
  });

  const [numberOfCity, setNumberOfCity] = useState<number>(0);



  useEffect(() => {
    let allCity: any = employees.map(emp => emp.city);
    allCity = new Set([...allCity]);
    setNumberOfCity(allCity.size);
  }, [employees]);

  const totalEmployees = employees.length;
  const maleCount = employees.filter(emp => emp.gender.toLowerCase() === "male").length;
  const femaleCount = employees.filter(emp => emp.gender.toLowerCase() === "female").length;

  return (
    <>   {/* Header with title and static search bar */}
      <div className="mb-6 mt-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-700 to-indigo-900 bg-clip-text text-transparent">
            Employee Directory
          </h1>
          <p className="text-indigo-500 text-sm mt-1">Manage and view employee records</p>
        </div>
        {/* Static Search Bar (non-functional) */}
        <input
          type="text"
          placeholder="Search employees..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 pr-4 py-2 border border-indigo-200 rounded-xl text-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-all w-full sm:w-64"
        />
        <input
          type="text"
          placeholder="Search by mobile..."
          value={phoneSearch}
          onChange={(e) => setPhoneSearch(e.target.value)}
          className="pl-4 pr-4 py-2 border border-indigo-200 rounded-xl text-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-all w-full sm:w-64"
        />
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-4 flex items-center justify-between">
          <div>
            <p className="text-indigo-500 text-sm font-normal">Total Employees</p>
            <p className="text-2xl font-bold text-indigo-800">{totalEmployees}</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
            <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>

        </div>
        <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-4 flex items-center justify-between">
          <div>
            <p className="text-indigo-500 text-sm font-normal">Male Employees</p>
            <p className="text-2xl font-bold text-blue-600">{maleCount}</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-4 flex items-center justify-between">
          <div>
            <p className="text-indigo-500 text-sm font-normal">Female Employees</p>
            <p className="text-2xl font-bold text-pink-600">{femaleCount}</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
            <svg className="h-5 w-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-4 flex items-center justify-between">
          <div>
            <p className="text-indigo-500 text-sm font-normal">City Employees</p>
            <p className="text-2xl font-bold text-indigo-800">{numberOfCity}</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
            <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>

        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-xl border border-indigo-100/60 overflow-hidden">
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-indigo-50">
          <table className="min-w-full divide-y divide-indigo-100">
            <thead className="bg-gradient-to-r from-indigo-50 to-indigo-100/40">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">
                  Full Name
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">
                  Phone
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">
                  Salary
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">
                  Department
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">
                  Gender
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">
                  Hobby
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">
                  City
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-indigo-50">
              {filterEmployees.map((employee, index) => (
                <tr
                  key={index}
                  className="group hover:bg-indigo-50/40 transition-all duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white font-medium text-sm shadow-sm">
                        {employee.fName.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-semibold text-indigo-900">
                          {employee.fName} {employee.lName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-indigo-700">{employee.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm text-indigo-700">{employee.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-indigo-800">{Number(employee.salary).toLocaleString("en-IN")}</span>
                      <span className="text-xs text-indigo-400">/year</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      {employee.department}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getGenderBadge(employee.gender)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span className="text-sm text-indigo-700">{employee.hobby}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm text-indigo-700">{employee.city}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l2-2m-2 2l-2 2m2-2h14M5 12l2 2m-2-2l2 2m6-6l2-2m0 0l2 2m-2-2l2 2m-6 6l2 2m0 0l2-2m-2 2l-2-2m-2 2h8" />
                      </svg>
                      <span className="text-sm text-indigo-700">{employee.address}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">

                      {/* ✅ EDIT */}
                      <button
                        onClick={() => updateEmployee(index)}
                        className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-lg border border-blue-200"
                      >
                        ✏️
                      </button>

                      {/* ✅ DELETE */}
                      <button
                        onClick={() => deleteEmployee(index)}
                        className="px-3 py-1 text-xs font-medium text-red-600 bg-red-100 rounded-lg border border-red-200"
                      >
                        🗑️
                      </button>


                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer with record count */}
        <div className="bg-indigo-50/30 px-6 py-3 border-t border-indigo-100 flex items-center justify-between">
          <p className="text-xs text-indigo-500">
            Showing <span className="font-medium text-indigo-700">{employees.length}</span> employee records
          </p>
          <div className="flex gap-1">
            <button className="px-3 py-1 text-xs text-indigo-400 bg-white rounded-lg border border-indigo-200 cursor-default">Prev</button>
            <button className="px-3 py-1 text-xs text-indigo-600 bg-indigo-100 rounded-lg border border-indigo-200 cursor-default">Next</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeTable;