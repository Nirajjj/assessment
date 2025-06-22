import React, { useState } from "react";
import "./table.css";

const SiteDataTable = () => {
  const [activeTab, setActiveTab] = useState("Sites");
  const navItems = ["Sites", "Orders", "VRs", "Reports", "Invoices", "PI"];
  const tableHeaders = [
    `${activeTab} Name`,
    "State",
    "City",
    "Revenue",
    "Total orders",
    "Last Order",
    "Created At",
  ];

  const placeholderRows = Array.from({ length: 6 });

  return (
    <>
      <div className="data-table-container">
        <nav>
          <ul className="tabs-nav">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={activeTab === item ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <table className="sites-table">
          <thead>
            <tr>
              {tableHeaders.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {placeholderRows.map((_, index) => (
              <tr key={index}>
                {tableHeaders.map((header) => (
                  <td key={`${header}-${index}`}>&nbsp;</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SiteDataTable;
