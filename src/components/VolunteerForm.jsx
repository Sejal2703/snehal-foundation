import React, { useState } from "react";

const VolunteerForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, phone, message };

    try {
      const res = await fetch("http://localhost:5000/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setSuccess(data.message);

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setSuccess("Something went wrong!");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-10">
      {success && <p className="mb-4 text-green-600">{success}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default VolunteerForm;