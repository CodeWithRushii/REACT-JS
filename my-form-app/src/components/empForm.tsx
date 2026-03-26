import { useEffect, useState } from "react";

function EmpForm( {employees, setEmployees}) {

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [salary, setSalary] = useState("");
    const [department, setDepartment] = useState("");
    const [gender, setGender] = useState("");
    const [hobby, setHobby] = useState<string[]>([]);
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");

    const [error, setError] = useState<any>({});

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


    const allHobby = ["Reading", "Gaming", "Sports", "Music", "Other"];
    const allCity = ["Surat", "Rajkot", "Mumbai", "UP", "Bihar"];
    const departments = ["IT", "HR", "Finance", "Marketing"];

    useEffect(() => {
        localStorage.setItem("employees", JSON.stringify(employees));
    }, [employees]);

    const hobbys = (e: any) => {
        const value = e.target.value;
        const checked = e.target.checked;

        if (checked) {
            setHobby(prev => [...prev, value]);
        } else {
            setHobby(prev => prev.filter(h => h !== value));
        }
    };

    // ✅ Validation
    const validation = () => {
        let newError: any = {};

        if (!fName) newError.f_name = "Required";
        if (!lName) newError.l_name = "Required";

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email) {
            newError.email = "Email is required";
        } else if (!emailPattern.test(email)) {
            newError.email = "Invalid email";
        }

        const phonePattern = /^(\+91[\-\s]?)?[0]?[6789]\d{9}$/;
        if (!phone) {
            newError.phone = "Phone is required";
        } else if (!phonePattern.test(phone)) {
            newError.phone = "Invalid phone";
        }

        if (!salary) newError.salary = "Required";
        if (!department) newError.department = "Required";
        if (!gender) newError.gender = "Required";
        if (hobby.length === 0) newError.hobby = "Required";
        if (!city) newError.city = "Required";
        if (!address) newError.address = "Required";

        setError(newError);
        return Object.keys(newError).length === 0;
    };

    const submit = (e: any) => {
        e.preventDefault();

        if (!validation()) return;

        const empData: empType = {
            fName,
            lName,
            email,
            phone,
            salary,
            department,
            gender,
            hobby,
            city,
            address
        };

        setEmployees(prev => [...prev, empData]);

        // reset
        setFName("");
        setLName("");
        setEmail("");
        setPhone("");
        setSalary("");
        setDepartment("");
        setGender("");
        setHobby([]);
        setCity("");
        setAddress("");
        setError({});
    };

    return <>


        <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-2  bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></div>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-purple-800">
                Employee Registration
            </h1>
        </div>

        <form onSubmit={submit} className="space-y-6">

            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <input
                        placeholder="First Name"
                        value={fName}
                        onChange={(e) => setFName(e.target.value)}
                        className={`w-full px-4 py-3 bg-indigo-50/50 border ${error.f_name ? "border-red-500" : "border-indigo-200"} rounded-xl outline-none`}
                    />
                    <p className="text-red-500 text-sm mt-1">{error.f_name}</p>
                </div>

                <div>
                    <input
                        placeholder="Last Name"
                        value={lName}
                        onChange={(e) => setLName(e.target.value)}
                        className={`w-full px-4 py-3 bg-indigo-50/50 border ${error.l_name ? "border-red-500" : "border-indigo-200"} rounded-xl outline-none`}
                    />
                    <p className="text-red-500 text-sm mt-1">{error.l_name}</p>
                </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <input
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full px-4 py-3 bg-indigo-50/50 border ${error.email ? "border-red-500" : "border-indigo-200"} rounded-xl outline-none`}
                    />
                    <p className="text-red-500 text-sm mt-1">{error.email}</p>
                </div>

                <div>
                    <input
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full px-4 py-3 bg-indigo-50/50 border ${error.phone ? "border-red-500" : "border-indigo-200"} rounded-xl outline-none`}
                    />
                    <p className="text-red-500 text-sm mt-1">{error.phone}</p>
                </div>
            </div>

            {/* Salary + Department */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <input
                        placeholder="Salary"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        className={`w-full px-4 py-3 bg-indigo-50/50 border ${error.salary ? "border-red-500" : "border-indigo-200"} rounded-xl outline-none`}
                    />
                    <p className="text-red-500 text-sm mt-1">{error.salary}</p>
                </div>

                <div>
                    <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className={`w-full px-4 py-3 bg-indigo-50/50 border ${error.department ? "border-red-500" : "border-indigo-200"} rounded-xl outline-none`}
                    >
                        <option value="">Select Department</option>
                        {departments.map((d, i) => (
                            <option key={i} value={d}>{d}</option>
                        ))}
                    </select>
                    <p className="text-red-500 text-sm mt-1">{error.department}</p>
                </div>
            </div>

            {/* City */}
            <div>
                <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={`w-full px-4 py-3 bg-indigo-50/50 border ${error.city ? "border-red-500" : "border-indigo-200"} rounded-xl outline-none`}
                >
                    <option value="">Select City</option>
                    {allCity.map((c, i) => (
                        <option key={i} value={c}>{c}</option>
                    ))}
                </select>
                <p className="text-red-500 text-sm mt-1">{error.city}</p>
            </div>

            {/* Hobby */}
            <div>
                <p className="font-semibold text-indigo-900 mb-3">Hobbies</p>
                <div className={`flex flex-wrap gap-4 border p-3 rounded-xl ${error.hobby ? "border-red-500" : "border-indigo-200"}`}>
                    {allHobby.map((h, i) => (
                        <label key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200 cursor-pointer">
                            <input
                                type="checkbox"
                                value={h}
                                checked={hobby.includes(h)}
                                onChange={hobbys}
                            />
                            <span className="text-sm">{h}</span>
                        </label>
                    ))}
                </div>
                <p className="text-red-500 text-sm mt-1">{error.hobby}</p>
            </div>

            {/* Gender */}
            <div>
                <p className="font-semibold text-indigo-900 mb-3">Gender</p>
                <div className={`flex gap-4 border p-3 rounded-xl ${error.gender ? "border-red-500" : "border-indigo-200"}`}>
                    {["Male", "Female", "Other"].map(g => (
                        <label key={g} className="flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-200 cursor-pointer">
                            <input
                                type="radio"
                                name="gender"
                                value={g}
                                checked={gender === g}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <span className="text-sm">{g}</span>
                        </label>
                    ))}
                </div>
                <p className="text-red-500 text-sm mt-1">{error.gender}</p>
            </div>

            {/* Address */}
            <div>
                <textarea
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className={`w-full px-4 py-3 bg-indigo-50/50 border ${error.address ? "border-red-500" : "border-indigo-200"} rounded-xl outline-none`}
                />
                <p className="text-red-500 text-sm mt-1">{error.address}</p>
            </div>

            {/* Submit */}
            <div className="flex justify-end pt-4">
                <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl">
                    Submit Application
                </button>
            </div>

        </form>
    </>
}

export default EmpForm;


