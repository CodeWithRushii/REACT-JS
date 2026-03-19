function EmployeeTable() {

  return <>
    <div className="w-full overflow-x-auto bg-white rounded-xl shadow-lg p-4">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">Employee Records</h2>
      <table className="min-w-full divide-y divide-indigo-200">
        <thead className="bg-indigo-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Phone</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Salary</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Department</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">City</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Hobby</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Gender</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-indigo-100">
            <tr key="1" className="hover:bg-indigo-50/50 transition">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-900">rushi</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-900">rushi@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-900">+1 555-1234</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-900">$75,000</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-900">IT</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-900">New York</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-900">Reading, Music</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-900">Male</td>
            </tr>
        </tbody>
      </table>

    </div>
  </>
};

export default EmployeeTable;