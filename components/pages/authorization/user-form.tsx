import { FormEvent, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

function UserForm() {
  const router = useRouter();
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
              address: address,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const { status, access_token, refresh_token } = await response.json();
      if (!status) {
        throw new Error("Failed to submit form");
      }

      Cookies.set("accessToken", access_token, {
        secure: true,
        sameSite: "strict",
        httpOnly: true,
      });
      Cookies.set("refreshToken", refresh_token, {
        secure: true,
        sameSite: "strict",
        httpOnly: true,
      });
      console.log("Form submitted successfully");

      router.push("/dashboard");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
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

      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="tel"
        id="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <label htmlFor="country">Country of Residence</label>
      <input
        type="text"
        id="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <label htmlFor="address">Address</label>
      <textarea
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      ></textarea>

      <div className="col-start-1 col-end-3 flex items-center justify-center gap-3">
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

      <div className="col-start-1 col-end-3 flex items-center justify-center gap-3">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default UserForm;
