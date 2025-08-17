import { useState } from "react";
import CompanyMenu from "./CompanyMenu";

export default function Company() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-500 text-white rounded">
        Company
      </button>

      {open && <CompanyMenu />}
    </div>
  );
}
