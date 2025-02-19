import React, { useState } from "react";
import "./CaseHistories.css"; // Ensure you create a corresponding CSS file

const pdfFileMapping = {
   
 
    "Land Dispute Resolution": "pdfs/-0___jonew__judis__123.pdf",
    "Criminal Sentencing Guidelines": "pdfs/-0___jonew__judis__126.pdf",
    "Family Law Mediation": "pdfs/-0___jonew__judis__10166.pdf",
    "Tax Evasion Prosecution": "pdfs/-0___jonew__judis__10187.pdf",
    "Corporate Fraud Litigation": "pdfs/-0___jonew__judis__10193.pdf",
    "Environmental Impact Assessment": "pdfs/-0___jonew__judis__10290.pdf",
    "Child Custody Disputes": "pdfs/-0___jonew__judis__10304.pdf",
    "Workplace Discrimination Cases": "pdfs/-0___jonew__judis__10322.pdf",
    "Intellectual Property Rights": "pdfs/-0___jonew__judis__10347.pdf",
    "Personal Injury Compensation": "pdfs/-0___jonew__judis__10356.pdf",
    "Contract Breach Claims": "pdfs/-0___jonew__judis__10391.pdf",
    "Real Estate Title Disputes": "pdfs/-0___jonew__judis__10426.pdf",
    "Employment Termination Laws": "pdfs/-0___jonew__judis__10439.pdf",
    "Civil Rights Violations": "pdfs/-0___jonew__judis__10442.pdf",
    "Medical Malpractice Cases": "pdfs/-0___jonew__judis__10502.pdf",
    "Immigration Visa Denials": "pdfs/-0___jonew__judis__10519.pdf",
    "Insider Trading Allegations": "pdfs/-0___jonew__judis__10520.pdf",
    "Paternity Test Results": "pdfs/-0___jonew__judis__10548.pdf",
    "Divorce Settlement Agreements": "pdfs/-0___jonew__judis__10166.pdf",
    "Product Liability Lawsuits": "pdfs/-0___jonew__judis__10187.pdf",
    "Inheritance Dispute Resolutions": "pdfs/-0___jonew__judis__10193.pdf",
    "Antitrust Violations": "pdfs/-0___jonew__judis__10290.pdf",
    "Defamation Lawsuits": "pdfs/-0___jonew__judis__10304.pdf",
    "Copyright Infringement Actions": "pdfs/-0___jonew__judis__10322.pdf",
    "Zoning Regulation Challenges": "pdfs/-0___jonew__judis__10347.pdf",
    "Police Misconduct Allegations": "pdfs/-0___jonew__judis__10356.pdf",
    "Bankruptcy Filing Process": "pdfs/-0___jonew__judis__10391.pdf",
    "Adoption Approval Hearings": "pdfs/-0___jonew__judis__10426.pdf",
    "Insurance Claim Disputes": "pdfs/-0___jonew__judis__10439.pdf",
    "Custodial Parent Relocation": "pdfs/-0___jonew__judis__10442.pdf",
    "Workers' Compensation Claims": "pdfs/-0___jonew__judis__10502.pdf",
    "Alimony Modification Petitions": "pdfs/-0___jonew__judis__10519.pdf",
    "Housing Code Violations": "pdfs/-0___jonew__judis__10520.pdf",
    "Domestic Violence Restraining": "pdfs/-0___jonew__judis__10548.pdf",
    "Eminent Domain Proceedings": "pdfs/-0___jonew__judis__10557.pdf",
    "Child Support Orders": "pdfs/-0___jonew__judis__10562.pdf",
    "Whistleblower Protections": "pdfs/-0___jonew__judis__10613.pdf",
    "Tax Fraud Investigations": "pdfs/-0___jonew__judis__10629.pdf",
    "Employment Discrimination": "pdfs/-0___jonew__judis__10637.pdf",
    "Marriage Annulment Cases": "pdfs/-0___jonew__judis__10649.pdf",
    "Class Action Lawsuits": "pdfs/-0___jonew__judis__10663.pdf",
    "Juvenile Delinquency Hearings": "pdfs/-0___jonew__judis__10668.pdf",
    "Securities Fraud Trials": "pdfs/-0___jonew__judis__10679.pdf",
    "Privacy Invasion Suits": "pdfs/-0___jonew__judis__10693.pdf",
    "Property Boundary Disputes": "pdfs/-0___jonew__judis__10752.pdf",
    "Medical Ethics Issues": "pdfs/-0___jonew__judis__10762.pdf",
    "Immigration Asylum Claims": "pdfs/-0___jonew__judis__10773.pdf",
    "Non-Compete Agreement": "pdfs/-0___jonew__judis__10796.pdf",
    "Public Nuisance Lawsuits": "pdfs/-0___jonew__judis__10804.pdf",
    "Adoption Finalizations": "pdfs/-0___jonew__judis__10805.pdf",
    "Landlord-Tenant Disputes": "pdfs/-0___jonew__judis__10814.pdf",
    "Nursing Home Neglect": "pdfs/-0___jonew__judis__10818.pdf",
    "Elder Abuse Allegations": "pdfs/-0___jonew__judis__10823.pdf",
    "Child Abuse Investigations": "pdfs/-0___jonew__judis__10823.pdf",
    "Business Partnership Dissolutions": "pdfs/-0___jonew__judis__10844.pdf",
    "Criminal Insanity Defenses": "pdfs/-0___jonew__judis__10857.pdf",
    "Workplace Safety Violations": "pdfs/-0___jonew__judis__10877.pdf",
    "Defective Product Recalls": "pdfs/-0___jonew__judis__10886.pdf",
    "Marriage License Issuance": "pdfs/-0___jonew__judis__10892.pdf",
    "Expert Witness Testimonies": "pdfs/-0___jonew__judis__10897.pdf"
};

const CaseHistories = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="case-histories-container">
      <a href="/" className="home-button">Home</a>
      <h1>Legal Case Histories</h1>
      <input
        type="text"
        placeholder="Search for a case..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button className="search-button">Search</button>
      <div className="pdf-container">
        {Object.entries(pdfFileMapping)
          .filter(([title]) => title.toLowerCase().includes(searchTerm))
          .map(([title, link]) => (
            <div key={title} className="pdf-card">
              <a href={link} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CaseHistories;
