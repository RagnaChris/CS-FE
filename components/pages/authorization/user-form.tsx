import { FormEvent, useState } from "react";

function UserForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [accreditedInvestor, setAccreditedInvestor] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [termsAgreement, setTermsAgreement] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://carbon-sarhat-backend-flask.vercel.app/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_data: {
              role: "User",
              email: email,
              password: password,
              firstName: firstName,
              lastName: lastName,
              accreditedInvestor: accreditedInvestor,
              phoneNumber: phoneNumber,
              country: country,
              address: address
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="required-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="required-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="firstName" className="required-label">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="lastName" className="required-label">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="accreditedInvestor" className="required-label">
          Are you an accredited investor
        </label>
        <select
          id="accreditedInvestor"
          value={accreditedInvestor}
          onChange={(e) => setAccreditedInvestor(e.target.value)}
          required
        >
          <option value="">-- Select One --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="country">Country of Residence</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
      </div>

      <div>
        <input
          type="checkbox"
          id="termsAgreement"
          checked={termsAgreement}
          onChange={(e) => setTermsAgreement(e.target.checked)}
          required
        />
        <label htmlFor="termsAgreement" className="required-label">
          I Agree to the Platform’s Terms of Use and Terms and Conditions
        </label>
      </div>

      <div>
        <a href="/terms-of-use">Terms of Use</a>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
