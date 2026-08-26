import React, { useState } from "react";

const VolunteerForm = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    parentName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "Indian",

    mobile: "",
    alternateMobile: "",
    email: "",

    address: "",
    city: "",
    state: "",
    pinCode: "",

    aadhaarNumber: "",
    aadhaarFile: null,

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
  });

  // ================= HANDLE INPUT =================

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    }));

    // Remove error when user starts correcting the form
    if (error) {
      setError("");
    }
  };

  // ================= CLOSE SUCCESS =================

  const closeSuccess = () => {
    setSuccess(false);

    if (onSuccess) {
      onSuccess();
    }
  };

  // ================= SUBMIT =================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // Declaration validation
    if (!formData.declaration) {
      setError(
        "Please confirm that the information provided by you is true and correct."
      );
      return;
    }

    setLoading(true);

    try {
      /*
       * IMPORTANT:
       * This sends the volunteer information to your Express backend.
       *
       * Your backend route should be:
       * POST http://localhost:5000/api/volunteer
       */

      const response = await fetch(
        "http://localhost:5000/api/volunteer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            parentName: formData.parentName,
            dateOfBirth: formData.dateOfBirth,
            gender: formData.gender,
            nationality: formData.nationality,

            mobile: formData.mobile,
            alternateMobile: formData.alternateMobile,
            email: formData.email,

            address: formData.address,
            city: formData.city,
            state: formData.state,
            pinCode: formData.pinCode,

            aadhaarNumber: formData.aadhaarNumber,

            qualification: formData.qualification,
            occupation: formData.occupation,
            organization: formData.organization,

            skills: formData.skills,

            reasonToJoin: formData.reasonToJoin,
            availableDays: formData.availableDays,
            availableTime: formData.availableTime,

            emergencyName: formData.emergencyName,
            emergencyRelation: formData.emergencyRelation,
            emergencyMobile: formData.emergencyMobile,

            declaration: formData.declaration,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to submit volunteer registration."
        );
      }

      // Successful submission
      setSuccess(true);

      // Reset form
      setFormData({
        fullName: "",
        parentName: "",
        dateOfBirth: "",
        gender: "",
        nationality: "Indian",

        mobile: "",
        alternateMobile: "",
        email: "",

        address: "",
        city: "",
        state: "",
        pinCode: "",

        aadhaarNumber: "",
        aadhaarFile: null,

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
      });

      // Reset file input
      e.target.reset();
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
    <>
      {/* ================= FORM ================= */}

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10">

        {/* FORM HEADER */}

        <div className="text-center mb-10">

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Snehal Foundation
          </h2>

          <p className="text-lg font-semibold text-blue-700 mt-2">
            Volunteer Registration Form
          </p>

          <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4 rounded"></div>

          <p className="text-gray-500 mt-4">
            Join us in creating a safer, stronger and more compassionate
            society.
          </p>

        </div>


        {/* ERROR MESSAGE */}

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700">
            <div className="font-semibold mb-1">
              Submission Failed
            </div>

            <p className="text-sm">
              {error}
            </p>
          </div>
        )}


        <form onSubmit={handleSubmit} className="space-y-10">

          {/* ================= 1. PERSONAL INFORMATION ================= */}

          <section>

            <SectionTitle number="1" title="Personal Information" />

            <div className="grid md:grid-cols-2 gap-5">

              <Input
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name (as per Aadhaar)"
                required
              />

              <Input
                label="Father / Mother / Spouse Name"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Father/Mother/Spouse Name"
                required
              />

              <Input
                label="Date of Birth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Gender
                </label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-blue-400
                  focus:border-blue-400 transition"
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


              <Input
                label="Nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="Nationality"
                required
              />

            </div>

          </section>


          {/* ================= 2. CONTACT DETAILS ================= */}

          <section>

            <SectionTitle number="2" title="Contact Details" />

            <div className="grid md:grid-cols-2 gap-5">

              <Input
                label="Mobile Number"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                pattern="[0-9]{10}"
                required
              />

              <Input
                label="Alternate Mobile"
                name="alternateMobile"
                type="tel"
                value={formData.alternateMobile}
                onChange={handleChange}
                placeholder="Alternate mobile number"
                pattern="[0-9]{10}"
              />

              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />

            </div>

          </section>


          {/* ================= 3. ADDRESS ================= */}

          <section>

            <SectionTitle number="3" title="Address" />

            <div className="space-y-5">

              <Input
                label="Full Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your complete address"
                required
              />

              <div className="grid md:grid-cols-3 gap-5">

                <Input
                  label="City / District"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City/District"
                  required
                />

                <Input
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  required
                />

                <Input
                  label="PIN Code"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  placeholder="PIN Code"
                  pattern="[0-9]{6}"
                  required
                />

              </div>

            </div>

          </section>


          {/* ================= 4. AADHAAR ================= */}

          <section>

            <SectionTitle
              number="4"
              title="Aadhaar Verification"
            />

            <div className="grid md:grid-cols-2 gap-5">

              <Input
                label="Aadhaar Number"
                name="aadhaarNumber"
                value={formData.aadhaarNumber}
                onChange={handleChange}
                placeholder="12-digit Aadhaar number"
                pattern="[0-9]{12}"
                maxLength="12"
                required
              />

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Aadhaar Document
                </label>

                <input
                  type="file"
                  name="aadhaarFile"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300
                  rounded-lg bg-white
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
                />

                <p className="text-xs text-gray-500 mt-2">
                  JPG, PNG or PDF
                </p>

              </div>

            </div>

          </section>


          {/* ================= 5. EDUCATION ================= */}

          <section>

            <SectionTitle
              number="5"
              title="Education & Occupation"
            />

            <div className="grid md:grid-cols-2 gap-5">

              <Input
                label="Qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                placeholder="Highest qualification"
                required
              />

              <Input
                label="Occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                placeholder="Current occupation"
              />

              <Input
                label="Organization / College"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Organization or college"
              />

            </div>

          </section>


          {/* ================= 6. SKILLS ================= */}

          <section>

            <SectionTitle
              number="6"
              title="Skills & Interests"
            />

            <TextArea
              label="Your Skills & Interests"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Tell us about your skills, interests, hobbies or areas where you can contribute..."
              required
            />

          </section>


          {/* ================= 7. VOLUNTEERING ================= */}

          <section>

            <SectionTitle
              number="7"
              title="Volunteering Details"
            />

            <div className="space-y-5">

              <TextArea
                label="Why do you want to join Snehal Foundation?"
                name="reasonToJoin"
                value={formData.reasonToJoin}
                onChange={handleChange}
                placeholder="Tell us why you would like to volunteer with us..."
                required
              />

              <div className="grid md:grid-cols-2 gap-5">

                <Input
                  label="Available Days"
                  name="availableDays"
                  value={formData.availableDays}
                  onChange={handleChange}
                  placeholder="Example: Monday, Saturday"
                  required
                />

                <Input
                  label="Available Time"
                  name="availableTime"
                  value={formData.availableTime}
                  onChange={handleChange}
                  placeholder="Example: 10 AM - 2 PM"
                  required
                />

              </div>

            </div>

          </section>


          {/* ================= 8. EMERGENCY ================= */}

          <section>

            <SectionTitle
              number="8"
              title="Emergency Contact"
            />

            <div className="grid md:grid-cols-3 gap-5">

              <Input
                label="Name"
                name="emergencyName"
                value={formData.emergencyName}
                onChange={handleChange}
                placeholder="Emergency contact name"
                required
              />

              <Input
                label="Relation"
                name="emergencyRelation"
                value={formData.emergencyRelation}
                onChange={handleChange}
                placeholder="Relation"
                required
              />

              <Input
                label="Mobile"
                name="emergencyMobile"
                type="tel"
                value={formData.emergencyMobile}
                onChange={handleChange}
                placeholder="Mobile number"
                pattern="[0-9]{10}"
                required
              />

            </div>

          </section>


          {/* ================= DECLARATION ================= */}

          <section className="bg-blue-50 border border-blue-100 p-5 rounded-xl">

            <label className="flex items-start gap-3 cursor-pointer">

              <input
                type="checkbox"
                name="declaration"
                checked={formData.declaration}
                onChange={handleChange}
                className="mt-1 w-5 h-5 accent-blue-600 cursor-pointer"
                required
              />

              <span className="text-sm text-gray-700 leading-relaxed">
                I confirm that the information provided by me is
                true and correct to the best of my knowledge. I
                understand that the information may be used by
                Snehal Foundation for volunteer registration and
                related activities.
              </span>

            </label>

          </section>


          {/* ================= SUBMIT ================= */}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl font-bold text-lg
            transition duration-300 flex items-center justify-center gap-3
            ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-yellow-400 hover:bg-yellow-500 hover:shadow-lg cursor-pointer"
            }`}
          >

            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Submitting...
              </>
            ) : (
              "Submit Volunteer Registration"
            )}

          </button>

          <p className="text-center text-xs text-gray-500">
            Your information will be securely submitted to Snehal Foundation.
          </p>

        </form>

      </div>


      {/* ================= SUCCESS POPUP ================= */}

      {success && (
        <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center px-4">

          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">

            {/* Success Icon */}

            <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">

              <span className="text-3xl text-green-600">
                ✓
              </span>

            </div>


            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Registration Successful!
            </h2>


            <p className="text-gray-600 leading-relaxed mb-6">
              Thank you for registering as a volunteer with
              Snehal Foundation. Your registration has been
              received successfully.
            </p>


            <button
              onClick={closeSuccess}
              className="bg-blue-600 text-white px-8 py-3 rounded-full
              font-semibold hover:bg-blue-700 transition cursor-pointer"
            >
              Done
            </button>

          </div>

        </div>
      )}

    </>
  );
};


// =====================================================
// REUSABLE INPUT COMPONENT
// =====================================================

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  pattern,
  maxLength,
}) => {
  return (
    <div>

      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}

        {required && (
          <span className="text-red-500 ml-1">
            *
          </span>
        )}

      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        maxLength={maxLength}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg
        focus:outline-none focus:ring-2 focus:ring-blue-400
        focus:border-blue-400 transition placeholder:text-gray-400"
      />

    </div>
  );
};


// =====================================================
// REUSABLE TEXTAREA COMPONENT
// =====================================================

const TextArea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <div>

      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}

        {required && (
          <span className="text-red-500 ml-1">
            *
          </span>
        )}

      </label>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={5}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg
        focus:outline-none focus:ring-2 focus:ring-blue-400
        focus:border-blue-400 transition resize-none placeholder:text-gray-400"
      />

    </div>
  );
};


// =====================================================
// SECTION TITLE
// =====================================================

const SectionTitle = ({ number, title }) => {
  return (
    <div className="flex items-center gap-3 mb-6">

      <div className="w-9 h-9 rounded-full bg-blue-600 text-white
      flex items-center justify-center font-bold shrink-0">
        {number}
      </div>

      <h3 className="text-xl font-bold text-gray-800">
        {title}
      </h3>

    </div>
  );
};

export default VolunteerForm;