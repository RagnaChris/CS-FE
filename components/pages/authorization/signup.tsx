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
      <div className="grid grid-cols-3 grid-rows-2 gap-3 mb-3">
        <label htmlFor="formType" className="col-span-2">Select Form</label>
        <select className="col-span-2"
          id="formType"
          value={selectedForm}
          onChange={(e) => handleFormTypeChange(e.target.value)}
        >
          <option value="user">User</option>
          <option value="institution">Institution</option>
        </select>
      </div>

      {selectedForm === "user" && <UserForm />}
      {selectedForm === "institution" && <InstitutionForm />}
    </Card>
  );
}
