export const buyerSegments = [
  {
    title: "Law firms",
    copy: "Build a structured onboarding layer for supervised bankruptcy support workflows.",
  },
  {
    title: "ALSP, LPO, and BPO teams",
    copy: "Train legal and business support professionals around workflow discipline, quality checks, and escalation.",
  },
  {
    title: "Legal operations and training heads",
    copy: "Use a practical readiness model that connects learning to observable support tasks.",
  },
  {
    title: "Individual learners",
    copy: "Develop a stronger foundation for supervised bankruptcy support work.",
  },
];

export const productPaths = [
  {
    title: "Foundation",
    label: "Onboarding",
    copy: "Core lifecycle, terminology, role boundaries, and guided chapter pathways.",
  },
  {
    title: "Workflow Readiness",
    label: "Team practice",
    copy: "Scenario-led practice, QC habits, docket discipline, and attorney-review escalation notes.",
  },
  {
    title: "Team Enablement",
    label: "Operational layer",
    copy: "Manager review prompts, work-product examples, source locker, and expandable practice modules.",
  },
];

export const renewalReasons = [
  "Repeatable onboarding for new team members",
  "Manager-led refreshers around quality and escalation",
  "Expandable chapter simulations and work-product examples",
  "Official-source anchors for supervised review",
];

export const practiceModuleReady = [1, 4, 5, 11, 13, 14, 15];

export const chapter5Demo = {
  title: "Urgent Intake: Foreclosure Scheduled Tomorrow",
  duration: "30-minute buyer demo",
  scenario:
    "A caller says a foreclosure sale is scheduled for tomorrow morning. The caller has received several notices, is worried about losing the home, and asks whether filing bankruptcy will stop the sale.",
  task:
    "Build a supervised-support intake packet that lets an attorney assess urgency quickly. Capture facts, request documents, prepare a QC pass, and draft an attorney-review escalation note.",
  documents: [
    "Foreclosure notice and any sale notice",
    "Mortgage statement and recent servicer communications",
    "Prior bankruptcy case information, if any",
    "Property address and ownership documents available to the caller",
    "Caller contact details and the best time for an urgent callback",
  ],
  canDo: [
    "Capture the caller's words and the foreclosure timeline",
    "Request and organize available notices",
    "Flag the matter as urgent and route it for attorney review",
    "Prepare a clear escalation note with missing information",
  ],
  mustNot: [
    "Promise that a filing will stop the sale",
    "Choose a bankruptcy chapter",
    "State whether the automatic stay applies",
    "Predict the outcome or give legal advice",
  ],
  qcChecklist: [
    "Sale date, time, and time zone recorded",
    "Property address and caller contact details confirmed",
    "Notices received or marked as missing",
    "Prior filing question asked and response recorded",
    "Attorney-review escalation clearly marked urgent",
  ],
  escalationNote:
    "URGENT ATTORNEY REVIEW: Caller reports foreclosure sale scheduled for tomorrow at 10:00 a.m. local time. Foreclosure notice requested and pending upload. Caller reports no prior bankruptcy filing but this has not been verified. Property address and callback number confirmed. Please assess legal options, applicable deadlines, and whether any additional facts or documents are needed before responding to the caller.",
  workflowNodes: [
    {
      id: "capture",
      label: "Capture urgency",
      whatToAsk: "What date, time, and location appear on the sale notice? What did the caller receive?",
      documents: "Request the foreclosure notice and any recent servicer communications.",
      whatToCheck: "Record the caller's exact words and verify the time zone.",
      notPromise: "Do not promise that a filing will stop the sale.",
      escalateWhen: "Escalate immediately when a sale, lockout, garnishment, repossession, or utility shutoff is time-sensitive.",
      sampleNote: "Caller reports foreclosure sale tomorrow at 10:00 a.m. local time. Notice requested.",
    },
    {
      id: "identity",
      label: "Confirm identity",
      whatToAsk: "Who owns the property? What is the property address? How can the caller be reached urgently?",
      documents: "Collect available ownership and contact details.",
      whatToCheck: "Confirm names, spelling, property address, phone number, and email.",
      notPromise: "Do not state who should file or under which chapter.",
      escalateWhen: "Escalate unclear ownership, multiple owners, business ownership, or conflicting caller information.",
      sampleNote: "Property address and callback number confirmed. Ownership details require review.",
    },
    {
      id: "history",
      label: "Ask filing history",
      whatToAsk: "Has the caller filed bankruptcy before? If so, when and where?",
      documents: "Request prior case information if available.",
      whatToCheck: "Mark unverified facts clearly.",
      notPromise: "Do not explain the legal effect of a prior filing.",
      escalateWhen: "Escalate any prior filing, dismissal, active case, or uncertain response.",
      sampleNote: "Caller reports no prior filing; response not independently verified.",
    },
    {
      id: "documents",
      label: "Build document list",
      whatToAsk: "Which notices and statements are available now? Which items may take longer to obtain?",
      documents: "Create a missing-document list and upload index.",
      whatToCheck: "Separate received items from requested and unavailable items.",
      notPromise: "Do not delay escalation while waiting for a perfect packet.",
      escalateWhen: "Escalate the urgent issue first, then continue document collection.",
      sampleNote: "Foreclosure notice requested and pending upload. Mortgage statement available.",
    },
    {
      id: "qc",
      label: "Run QC pass",
      whatToAsk: "Are the essential dates, contact details, and missing items visible at a glance?",
      documents: "Use the urgent-intake QC checklist.",
      whatToCheck: "Confirm sale timing, address, notice status, prior-filing response, and callback details.",
      notPromise: "Do not convert a factual QC pass into a legal conclusion.",
      escalateWhen: "Escalate conflicts, missing sale timing, or any fact that could change the urgency assessment.",
      sampleNote: "QC pass complete. Sale timing captured; notice still pending.",
    },
    {
      id: "escalate",
      label: "Route to attorney",
      whatToAsk: "What does the attorney need to see first to assess urgency?",
      documents: "Attach the issue log, document list, and received notices.",
      whatToCheck: "Use an urgent label and state what is known, unknown, and requested.",
      notPromise: "Do not provide an answer to the caller before attorney review.",
      escalateWhen: "Route immediately after the minimum viable urgency packet is assembled.",
      sampleNote: "URGENT ATTORNEY REVIEW: foreclosure sale reported for tomorrow. Please assess next steps.",
    },
  ],
};
