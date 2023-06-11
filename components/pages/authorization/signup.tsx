import { Card } from "@tremor/react";
import { FormEvent, useState } from "react";
import UserForm from "./user-form";
import InstitutionForm from "./institution-form";

export default function SignUp() {
  const [selectedForm, setSelectedForm] = useState("user");

  const handleFormTypeChange = (formType: string) => {
    setSelectedForm(formType);
  };

  return (
    <Card>
      <div>
        <label htmlFor="formType">Select Form:</label>
        <select
          id="formType"
          value={selectedForm}
          onChange={(e) => handleFormTypeChange(e.target.value)}
        >
          <option value="user">User</option>
          <option value="institution">Institution</option>
        </select>
      </div>

      {selectedForm === "user" && <UserForm />}
      {selectedForm === "institution" && (
        <InstitutionForm />
      )}
    </Card>
  );
}
