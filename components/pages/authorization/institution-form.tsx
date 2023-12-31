import { FormEvent, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { Notify } from "notiflix";

type SubRole = string;

function InstitutionForm() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState("");
  const [subRoles, setSubRoles] = useState<SubRole[]>(["Loading..."]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [country, setCountry] = useState("");
  const [countryOptions, setCountryOptions] = useState<any[]>(["Loading..."]);
  const [organizationAddress, setOrganizationAddress] = useState("");
  const [organizationRegistrationNumber, setOrganizationRegistrationNumber] =
    useState("");
  const [assetsUnderManagement, setAssetsUnderManagement] = useState("");
  const [investmentTicketPreference, setInvestmentTicketPreference] =
    useState("");
  const [productPreference, setProductPreference] = useState("");
  const [regionsOfInterest, setRegionsOfInterest] = useState("");
  const [sectorOfInterest, setSectorOfInterest] = useState("");
  const [termsAgreement, setTermsAgreement] = useState(false);

  useEffect(() => {
    fetchSubRoleFromAPI()
      .then((data) => setSubRoles(data["Subrole"]))
      .catch((error) => console.error(error.message));

    fetchCountries().then((options) => {
      setCountryOptions(options);
      setCountry(options[0]);
    });
  }, []);

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
            institution_data: {
              role: "Institution",
              email: email,
              password: password,
              subrole: selectedRole,
              organization_name: organizationName,
              country: country,
              organization_address: organizationAddress,
              organization_registration_number: organizationRegistrationNumber,
              assets_under_management: assetsUnderManagement,
              investment_ticket_preference: investmentTicketPreference,
              product_preference: productPreference,
              regions_of_interest: regionsOfInterest,
              sector_of_interest: sectorOfInterest,
            },
          }),
        }
      );

      if (!response.ok) {
        Notify.failure("Failed to submit form");
        throw new Error("Failed to submit form");
      }

      const { status, access_token, refresh_token } = await response.json();
      if (!status) {
        Notify.failure("Users already exist");
        throw new Error("Failed to submit form");
      }

      Cookies.set("accessToken", access_token, {
        secure: true,
        sameSite: "strict",
      });
      Cookies.set("refreshToken", refresh_token, {
        secure: true,
        sameSite: "strict",
      });
      console.log("Form submitted successfully");

      router.push("/dashboard");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
      <label htmlFor="selectedRole" className="required-label">
        Select Role
      </label>
      <select
        id="selectedRole"
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        required
      >
        <option value="">-- Select Role --</option>
        {subRoles.map((subRole) => (
          <option key={subRole} value={subRole}>
            {subRole}
          </option>
        ))}
      </select>

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

      <label htmlFor="organizationName" className="required-label">
        Organization Name
      </label>
      <input
        type="text"
        id="organizationName"
        value={organizationName}
        onChange={(e) => setOrganizationName(e.target.value)}
        required
      />

      <label htmlFor="country" className="required-label">
        Country
      </label>
      <select
        id="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        required
      >
        <option value="">-- Select Country --</option>
        {countryOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <label htmlFor="organizationAddress" className="required-label">
        Organization Address
      </label>
      <textarea
        id="organizationAddress"
        value={organizationAddress}
        onChange={(e) => setOrganizationAddress(e.target.value)}
        required
      ></textarea>

      <label
        htmlFor="organizationRegistrationNumber"
        className="required-label"
      >
        Organization Registration Number
      </label>
      <input
        type="text"
        id="organizationRegistrationNumber"
        value={organizationRegistrationNumber}
        onChange={(e) => setOrganizationRegistrationNumber(e.target.value)}
        required
      />

      <label htmlFor="assetsUnderManagement">Assets under management</label>
      <input
        type="text"
        id="assetsUnderManagement"
        value={assetsUnderManagement}
        onChange={(e) => setAssetsUnderManagement(e.target.value)}
      />

      <label htmlFor="investmentTicketPreference">
        Investment ticket preference
      </label>
      <select
        id="investmentTicketPreference"
        value={investmentTicketPreference}
        onChange={(e) => setInvestmentTicketPreference(e.target.value)}
      >
        <option value="">-- Select Investment Ticket Preference --</option>
        <option value="$0 - $10MM">$0 - $10MM</option>
        <option value="$10 MM - $50 MM">$10 MM - $50 MM</option>
        <option value="$50 MM - $100 MM">$50 MM - $100 MM</option>
        <option value="Above $100 MM">Above $100 MM</option>
      </select>

      <label htmlFor="productPreference">Product preference</label>
      <select
        id="productPreference"
        value={productPreference}
        onChange={(e) => setProductPreference(e.target.value)}
      >
        <option value="">-- Select Product Preference --</option>
        <option value="Equity finance">Equity finance</option>
        <option value="Debt finance">Debt finance</option>
      </select>

      <label htmlFor="regionsOfInterest">Regions of interest</label>
      <input
        type="text"
        id="regionsOfInterest"
        value={regionsOfInterest}
        onChange={(e) => setRegionsOfInterest(e.target.value)}
      />

      <label htmlFor="sectorOfInterest">Sector of interest</label>
      <select
        id="sectorOfInterest"
        value={sectorOfInterest}
        onChange={(e) => setSectorOfInterest(e.target.value)}
      >
        <option value="">-- Select Sector of Interest --</option>
        <option value="Renewable energy">Renewable energy</option>
        <option value="Infrastructure">Infrastructure</option>
        <option value="Forestry">Forestry</option>
        <option value="Carbon credits">Carbon credits</option>
      </select>

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

      <div className="col-start-1 col-end-3 flex items-center justify-center">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

const fetchSubRoleFromAPI = async () => {
  try {
    const response = await fetch(
      "https://carbon-sarhat-backend-flask.vercel.app/subrole"
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

const fetchCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();

    const countryOptions = data.map((country: any) => ({
      label: country.name,
      value: country.alpha2Code,
    }));

    return countryOptions;
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
};

export default InstitutionForm;
