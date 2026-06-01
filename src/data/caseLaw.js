export const caseLawAnchors = [
  {
    id: "fulton",
    chapters: [5],
    caseName: "City of Chicago v. Fulton",
    citation: "592 U.S. 154 (2021)",
    sourceUrl: "https://www.supremecourt.gov/opinions/boundvolumes/592US1PP.pdf",
    whyItMatters: "Automatic-stay intake requires careful fact capture without promising a remedy.",
    simpleFacts:
      "The City of Chicago retained vehicles that it had impounded before the owners filed Chapter 13 cases.",
    courtSaid:
      "The Supreme Court held that merely retaining estate property does not violate section 362(a)(3). Other provisions and case-specific facts may still matter.",
    supportImpact:
      "Record the repossession or retention timeline, identify the creditor and asset, gather notices, and flag the issue promptly for attorney review.",
    supportCanDo: "Create a complete issue log and route the matter for attorney review.",
    attorneyReview:
      "Attorney review is needed before anyone states whether the stay was violated or what relief may be available.",
  },
  {
    id: "law-v-siegel",
    chapters: [4, 11],
    caseName: "Law v. Siegel",
    citation: "571 U.S. 415 (2014)",
    sourceUrl: "https://www.supremecourt.gov/docket/docketfiles/html/public/12-5196.html",
    whyItMatters: "Exemption information needs careful documentation and attorney review.",
    simpleFacts:
      "The case addressed whether a bankruptcy court could use its equitable powers to surcharge a debtor's exempt property.",
    courtSaid:
      "The Supreme Court held that a bankruptcy court may not contravene specific Bankruptcy Code protections through general equitable powers.",
    supportImpact:
      "Collect the facts and source documents that may affect an exemption analysis. Do not select exemptions or calculate the legal result.",
    supportCanDo: "Organize the exemption-related facts and identify missing documents.",
    attorneyReview: "An attorney decides exemption strategy and legal effect.",
  },
  {
    id: "taggart",
    chapters: [15],
    caseName: "Taggart v. Lorenzen",
    citation: "587 U.S. 554 (2019)",
    sourceUrl: "https://www.supremecourt.gov/opinions/18pdf/18-489_p8k0.pdf",
    whyItMatters: "Post-discharge communications require disciplined logging and escalation.",
    simpleFacts:
      "The case considered the standard for holding a creditor in civil contempt for violating a discharge order.",
    courtSaid:
      "The Supreme Court adopted an objective standard: contempt may be appropriate when there is no fair ground of doubt about whether the order barred the conduct.",
    supportImpact:
      "Preserve communications, record dates, identify the sender, and escalate suspected post-discharge collection activity.",
    supportCanDo: "Build a communication timeline and evidence packet.",
    attorneyReview: "An attorney evaluates whether the discharge order applies and what response is appropriate.",
  },
  {
    id: "bartenwerfer",
    chapters: [11, 15],
    caseName: "Bartenwerfer v. Buckley",
    citation: "598 U.S. 69 (2023)",
    sourceUrl: "https://www.supremecourt.gov/docket/docketfiles/html/public/21-908.html",
    whyItMatters: "Potential fraud and dischargeability issues call for immediate escalation.",
    simpleFacts:
      "The case addressed a debt arising from fraud committed by a debtor's partner in a business transaction.",
    courtSaid:
      "The Supreme Court held that section 523(a)(2)(A) can bar discharge of a qualifying debt even when the debtor did not personally commit the fraud.",
    supportImpact:
      "Capture the parties, transaction documents, allegations, and communications without characterizing the legal outcome.",
    supportCanDo: "Organize a fact chronology and document index.",
    attorneyReview: "An attorney evaluates dischargeability, litigation risk, and next steps.",
  },
  {
    id: "purdue-pharma",
    chapters: [11],
    caseName: "Harrington v. Purdue Pharma L.P.",
    citation: "603 U.S. 204 (2024)",
    sourceUrl: "https://www.supremecourt.gov/docket/docketfiles/html/public/23-124.html",
    whyItMatters: "Complex Chapter 11 issues require clear escalation boundaries.",
    simpleFacts:
      "The case involved a Chapter 11 plan containing releases for nondebtor members of the Sackler family without affected claimants' consent.",
    courtSaid:
      "The Supreme Court held that the Bankruptcy Code does not authorize the nonconsensual releases at issue.",
    supportImpact:
      "Support professionals can organize plan documents and issue logs but should route release questions to counsel.",
    supportCanDo: "Maintain the document set and escalation record.",
    attorneyReview: "An attorney evaluates plan treatment, releases, objections, and legal strategy.",
  },
  {
    id: "ransom",
    chapters: [4],
    caseName: "Ransom v. FIA Card Services, N.A.",
    citation: "562 U.S. 61 (2011)",
    sourceUrl: "https://www.supremecourt.gov/docket/docketfiles/html/public/09-907.html",
    whyItMatters: "Means-test inputs must be collected accurately without deciding deductions.",
    simpleFacts:
      "The case considered whether a debtor who owned a vehicle outright could claim a vehicle-ownership expense in the means test.",
    courtSaid:
      "The Supreme Court held that the debtor could not take the vehicle-ownership deduction when there was no loan or lease expense.",
    supportImpact:
      "Gather vehicle ownership, loan, lease, and payment records. Flag unclear facts for attorney review.",
    supportCanDo: "Collect and reconcile supporting records.",
    attorneyReview: "An attorney decides which deductions apply.",
  },
  {
    id: "stern",
    chapters: [11],
    caseName: "Stern v. Marshall",
    citation: "564 U.S. 462 (2011)",
    sourceUrl: "https://www.supremecourt.gov/docket/docketfiles/html/public/10-179.html",
    whyItMatters: "Litigation and court-authority questions belong with counsel.",
    simpleFacts:
      "The case considered the constitutional authority of a bankruptcy court to enter a final judgment on a state-law counterclaim.",
    courtSaid:
      "The Supreme Court held that the bankruptcy court lacked constitutional authority to enter the final judgment at issue.",
    supportImpact:
      "Maintain pleadings, deadlines, and issue logs while escalating questions about forum and authority.",
    supportCanDo: "Track filings and prepare a clean procedural timeline.",
    attorneyReview: "An attorney evaluates jurisdiction, authority, and litigation strategy.",
  },
];

export const caseLawById = Object.fromEntries(caseLawAnchors.map((item) => [item.id, item]));
