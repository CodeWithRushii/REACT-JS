import { useState } from "react";

function EmpForm() {

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

    const [error, setError] = useState({
        f_name: "",
        email: "",
        phone: ""
    });

    const allHobby = ["Reading", "Gaming", "Sports", "Music", "Other"];
    const allCity = ["Surat", "Rajkot", "Mumbai", "UP", "Bihar"];
    const departments = ["IT", "HR", "Finance", "Marketing"];

    const handleHobby = (e: any) => {
        const value = e.target.value;
        const checked = e.target.checked;

        if (checked) {
            setHobby(prev => [...prev, value]);
        } else {
            setHobby(prev => prev.filter(h => h !== value));
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        let err = {
            f_name: "",
            email: "",
            phone: ""
        };

        if (fName === "") err.f_name = "First name required";
        if (email === "") err.email = "Email required";
        if (phone === "") err.phone = "Phone required";

        setError(err);

        if (err.f_name || err.email || err.phone) return;

        const empData = {
            first_name: fName,
            last_name: lName,
            email,
            phone,
            salary,
            department,
            gender,
            hobby,
            city,
            address
        };

        const oldData = JSON.parse(localStorage.getItem("employees") || "[]");
        localStorage.setItem("employees", JSON.stringify([...oldData, empData]));

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
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-full max-w-4xl border border-white/50">

                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-10 w-2 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></div>
                    <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-purple-800">
                        Employee Registration
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <input
                                placeholder="First Name"
                                value={fName}
                                onChange={(e) => setFName(e.target.value)}
                                className="w-full px-4 py-3 bg-indigo-50/50 border border-indigo-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                            <p className="text-red-500 text-sm mt-1">{error.f_name}</p>
                        </div>

                        <input
                            placeholder="Last Name"
                            value={lName}
                            onChange={(e) => setLName(e.target.value)}
                            className="w-full px-4 py-3 bg-indigo-50/50 border border-indigo-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <input
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 bg-indigo-50/50 border border-indigo-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                            <p className="text-red-500 text-sm mt-1">{error.email}</p>
                        </div>

                        <div>
                            <input
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-4 py-3 bg-indigo-50/50 border border-indigo-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                            <p className="text-red-500 text-sm mt-1">{error.phone}</p>
                        </div>
                    </div>

                    {/* Salary + Department */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            placeholder="Salary"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            className="w-full px-4 py-3 bg-indigo-50/50 border border-indigo-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                        />

                        <select
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className="w-full px-4 py-3 bg-indigo-50/50 border border-indigo-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                        >
                            <option value="">Select Department</option>
                            {departments.map((d, i) => (
                                <option key={i} value={d}>{d}</option>
                            ))}
                        </select>
                    </div>

                    {/* City */}
                    <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-4 py-3 bg-indigo-50/50 border border-indigo-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    >
                        <option value="">Select City</option>
                        {allCity.map((c, i) => (
                            <option key={i}>{c}</option>
                        ))}
                    </select>

                    {/* Hobby */}
                    <div>
                        <p className="font-semibold text-indigo-900 mb-3">Hobbies</p>
                        <div className="flex flex-wrap gap-4">
                            {allHobby.map((h, i) => (
                                <label key={i} className="flex items-center gap-2 bg-indigo-50/30 px-4 py-2 rounded-full border border-indigo-200 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        value={h}
                                        checked={hobby.includes(h)}
                                        onChange={handleHobby}
                                         />
                                    <span className="text-sm text-indigo-800">{h}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Gender */}
                    <div>
                        <p className="font-semibold text-indigo-900 mb-3">Gender</p>
                        <div className="flex gap-4">
                            {["Male", "Female", "Other"].map(g => (
                                <label key={g} className="flex items-center gap-2 bg-indigo-50/30 px-5 py-2 rounded-full border border-indigo-200 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={g}
                                        checked={gender === g}
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                    <span className="text-sm text-indigo-800">{g}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Address */}
                    <textarea
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full px-4 py-3 bg-indigo-50/50 border border-indigo-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    />

                    {/* Submit */}
                    <div className="flex justify-end pt-4">
                        <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition">
                            Submit Application
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default EmpForm;