import React, { useState } from "react";

const initialFormData = {
  fullName: "",
  parentName: "",
  dateOfBirth: "",
  gender: "",
  nationality: "",

  mobile: "",
  alternateMobile: "",
  email: "",

  address: "",
  city: "",
  state: "",
  pinCode: "",

  aadhaarNumber: "",

  qualification: "",
  occupation: "",
  organization: "",

  skills: "",

  reasonToJoin: "",
  availableDays: "",
  availableTime: "",

  emergencyName: "",
  emergencyRelation: "",
  emergencyMobile: "",

  declaration: false,
};

const Volunteer = () => {
  console.log("VOLUNTEER COMPONENT LOADED");
  const [formData, setFormData] = useState(initialFormData);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ================= SUBMIT FORM =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("SUBMIT HANDLER CALLED");

    setError("");
    setSuccess(false);

    // Declaration validation
    if (!formData.declaration) {
      setError(
        "Please confirm the declaration before submitting the form."
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/volunteer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      console.log("RESPONSE STATUS:", response.status);

      const data = await response.json();
       console.log("BACKEND RESPONSE:", data);


      if (!response.ok) {
        throw new Error(
          data.message || "Unable to submit the volunteer form."
        );
      }

      // Success
      setSuccess(true);

      // Reset form
      setFormData(initialFormData);

    } catch (err) {
      console.error("Volunteer form error:", err);

      setError(
        err.message ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-28 px-4 md:px-10 lg:px-20 min-h-screen bg-slate-100">

      {/* ================= PAGE HEADER ================= */}
      <section className="max-w-4xl mx-auto text-center mb-10">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Become a Volunteer
        </h1>

        <div className="h-1 w-24 bg-yellow-400 mx-auto mt-5 mb-5 rounded"></div>

        <p className="text-gray-600 text-lg leading-relaxed">
          Join Snehal Foundation and become a part of our mission
          to protect, empower, and create opportunities for vulnerable
          communities.
        </p>

      </section>


      {/* ================= FORM CARD ================= */}
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10 mb-16">

        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-700 mb-8">
          Snehal Foundation – Volunteer Registration Form
        </h2>


        <form onSubmit={handleSubmit} className="space-y-8">

          {/* ================= 1. PERSONAL INFORMATION ================= */}
          <div>

            <h3 className="text-xl font-bold text-gray-800 border-b pb-3 mb-5">
              1. Personal Information
            </h3>

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="label">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="input"
                />
              </div>


              <div>
                <label className="label">
                  Father / Mother / Spouse Name
                </label>

                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="Parent / Spouse Name"
                  className="input"
                />
              </div>


              <div>
                <label className="label">
                  Date of Birth
                </label>

                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="input"
                />
              </div>


              <div>
                <label className="label">
                  Gender
                </label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="input"
                  required
                >
                  <option value="">
                    Select Gender
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>


              <div>
                <label className="label">
                  Nationality
                </label>

                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  placeholder="Nationality"
                  className="input"
                />
              </div>

            </div>

          </div>


          {/* ================= 2. CONTACT DETAILS ================= */}
          <div>

            <h3 className="text-xl font-bold text-gray-800 border-b pb-3 mb-5">
              2. Contact Details
            </h3>

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="label">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  placeholder="Mobile Number"
                  className="input"
                />
              </div>


              <div>
                <label className="label">
                  Alternate Mobile
                </label>

                <input
                  type="tel"
                  name="alternateMobile"
                  value={formData.alternateMobile}
                  onChange={handleChange}
                  placeholder="Alternate Mobile"
                  className="input"
                />
              </div>


              <div className="md:col-span-2">

                <label className="label">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="input"
                />

              </div>

            </div>

          </div>


          {/* ================= 3. ADDRESS ================= */}
          <div>

            <h3 className="text-xl font-bold text-gray-800 border-b pb-3 mb-5">
              3. Address
            </h3>

            <div className="space-y-5">

              <div>
                <label className="label">
                  Full Address
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Enter your complete address"
                  className="input min-h-[100px]"
                />
              </div>


              <div className="grid md:grid-cols-3 gap-5">

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City / District"
                  className="input"
                />

                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="input"
                />

                <input
                  type="text"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  placeholder="PIN Code"
                  className="input"
                />

              </div>

            </div>

          </div>


          {/* ================= 4. AADHAAR ================= */}
          <div>

            <h3 className="text-xl font-bold text-gray-800 border-b pb-3 mb-5">
              4. Aadhaar Verification
            </h3>

            <div>

              <label className="label">
                Aadhaar Number
              </label>

              <input
                type="text"
                name="aadhaarNumber"
                value={formData.aadhaarNumber}
                onChange={handleChange}
                placeholder="Enter Aadhaar Number"
                className="input"
              />

              <p className="text-sm text-gray-500 mt-2">
                Only provide Aadhaar information if it is genuinely
                required by the Foundation's verification process.
              </p>

            </div>

          </div>


          {/* ================= 5. EDUCATION ================= */}
          <div>

            <h3 className="text-xl font-bold text-gray-800 border-b pb-3 mb-5">
              5. Education & Occupation
            </h3>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                placeholder="Qualification"
                className="input"
              />

              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                placeholder="Occupation"
                className="input"
              />

              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Organization / College"
                className="input md:col-span-2"
              />

            </div>

          </div>


          {/* ================= 6. SKILLS ================= */}
          <div>

            <h3 className="text-xl font-bold text-gray-800 border-b pb-3 mb-5">
              6. Skills & Interests
            </h3>

            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Tell us about your skills, interests, experience, etc."
              className="input min-h-[120px]"
            />

          </div>


          {/* ================= 7. VOLUNTEERING DETAILS ================= */}
          <div>

            <h3 className="text-xl font-bold text-gray-800 border-b pb-3 mb-5">
              7. Volunteering Details
            </h3>

            <div className="space-y-5">

              <textarea
                name="reasonToJoin"
                value={formData.reasonToJoin}
                onChange={handleChange}
                placeholder="Why do you want to join Snehal Foundation?"
                className="input min-h-[120px]"
              />

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="availableDays"
                  value={formData.availableDays}
                  onChange={handleChange}
                  placeholder="Available Days"
                  className="input"
                />

                <input
                  type="text"
                  name="availableTime"
                  value={formData.availableTime}
                  onChange={handleChange}
                  placeholder="Available Time"
                  className="input"
                />

              </div>

            </div>

          </div>


          {/* ================= 8. EMERGENCY CONTACT ================= */}
          <div>

            <h3 className="text-xl font-bold text-gray-800 border-b pb-3 mb-5">
              8. Emergency Contact
            </h3>

            <div className="grid md:grid-cols-3 gap-5">

              <input
                type="text"
                name="emergencyName"
                value={formData.emergencyName}
                onChange={handleChange}
                placeholder="Name"
                className="input"
              />

              <input
                type="text"
                name="emergencyRelation"
                value={formData.emergencyRelation}
                onChange={handleChange}
                placeholder="Relation"
                className="input"
              />

              <input
                type="tel"
                name="emergencyMobile"
                value={formData.emergencyMobile}
                onChange={handleChange}
                placeholder="Mobile"
                className="input"
              />

            </div>

          </div>


          {/* ================= DECLARATION ================= */}
          <div className="bg-gray-50 p-5 rounded-xl border">

            <label className="flex gap-3 items-start text-gray-700">

              <input
                type="checkbox"
                name="declaration"
                checked={formData.declaration}
                onChange={handleChange}
                className="mt-1 w-5 h-5"
              />

              <span>
                I confirm that the information provided above is
                true and correct to the best of my knowledge.
              </span>

            </label>

          </div>


          {/* ================= ERROR ================= */}
          {error && (
            <div className="bg-red-100 border border-red-300 text-red-700 p-4 rounded-lg">
              {error}
            </div>
          )}


          {/* ================= SUBMIT ================= */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-full font-bold text-lg transition duration-300 shadow-lg ${
              loading
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-yellow-400 hover:bg-yellow-500 text-black hover:scale-[1.02]"
            }`}
          >
            {loading ? "Submitting..." : "Submit Volunteer Application"}
          </button>

        </form>

      </section>


      {/* ================= SUCCESS POPUP ================= */}
      {success && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] px-4">

          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">

            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-100 flex items-center justify-center">

              <span className="text-3xl text-green-600">
                ✓
              </span>

            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Application Submitted!
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Thank you for your interest in volunteering with
              Snehal Foundation. Your application has been submitted
              successfully. Our team will contact you soon.
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </main>
  );
};

export default Volunteer;