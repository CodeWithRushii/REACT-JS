import { useEffect, useState } from "react"

function TableView() {
    const [allEmployees, setAllEmployees] = useState<any[]>([]);


    useEffect(() => {

        const data = [
            {
                name: "John Doe",
                email: "john.doe@example.com",
                phone: "123-456-7890",
                isActive: true
            },
            {
                name: "Jane Smith",
                email: "jane.smith@example.com",
                phone: "098-765-4321",
                isActive: false
            },
            {
                name: "Alice Johnson",
                email: "alice.johnson@example.com",
                phone: "555-555-5555",
                isActive: true
            },
            {
                name: "Bob Brown",
                email: "bob.brown@example.com",
                phone: "555-555-5555",
                isActive: true
            },
            {
                name: "Charlie Davis",
                email: "charlie.davis@example.com",
                phone: "555-555-5555",
                isActive: false
            }
        ];

        setAllEmployees(data);
    }, []);

    return <>

        <h1 style={{ color: 'red' }}>Employees Table</h1>
        <table className="table " border={1} >
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {
                    allEmployees.map((employee, index) => {
                        return <tr key={index}>
                            <td>{index + 1} </td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.isActive ? "🟢" : "🔴"}</td>
                            <td>
                                <button className="btn btn-success">Edit</button>
                                <button className="btn btn-danger mx-2">Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
}

export default TableView