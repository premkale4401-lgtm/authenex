"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Shield, 
  Lock, 
  FileText, 
  AlertTriangle, 
  Scale, 
  Gavel, 
  Phone, 
  ExternalLink, 
  ChevronDown,
  CheckCircle2,
  XCircle,
  Database,
  Trash2,
  Globe,
  Landmark,
  BookOpen,
  Siren,
  Download,
  Menu,
  X,
  Clock,
  ShieldCheck,
  ShieldAlert,
  LockKeyhole,
  Fingerprint as FingerprintIcon,
  UserX,
  Scale as ScaleIcon,
  FileCheck,
  PhoneCall,
  AlertCircle,
  Info,
  CreditCard,
  Video,
  Mic,
  Scan as ScanIcon,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

// --- Types & Interfaces ---

interface SectionData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  content: React.ReactNode;
  actions?: ActionButton[];
}

interface ActionButton {
  id: string;
  label: string;
  description: string;
  authority: string;
  whenToUse: string;
  href: string;
  icon: React.ElementType;
  external: boolean;
  variant: "primary" | "secondary" | "urgent" | "outline";
}

interface MisuseScenario {
  id: string;
  title: string;
  description: string;
  harm: string;
  affected: string;
  action: string;
  icon: React.ElementType;
  severity: "critical" | "high" | "medium" | "low";
}

interface LegalReference {
  act: string;
  section?: string;
  description: string;
  applicability: string;
}

interface StepByStep {
  step: number;
  title: string;
  description: string;
  details: string[];
  icon: React.ElementType;
}

// --- Data: Privacy & Data Protection ---

const privacyData = {
  processedData: [
    "Content submitted for forensic analysis (images, audio, documents, text)",
    "Technical metadata required for detection algorithms",
    "Account authentication and authorization credentials",
    "Analysis timestamps and processing duration logs",
    "Anonymized usage patterns for platform improvement"
  ],
  neverStored: [
    "Raw content after analysis completion (24-hour auto-deletion)",
    "Personal identification beyond account requirements",
    "Third-party data or unrelated user information",
    "Analysis results without explicit user access permissions",
    "Cross-referenced external database information"
  ],
  encryption: [
    "AES-256 encryption for data at rest",
    "TLS 1.3 for all data in transit",
    "End-to-end encryption for sensitive forensic transfers",
    "Hardware Security Module (HSM) protected key management",
    "Zero-knowledge architecture for content processing"
  ],
  userRights: [
    {
      right: "Right to Privacy",
      description: "Your content is processed in isolated environments with no external access"
    },
    {
      right: "Right to Data Deletion",
      description: "Request immediate deletion of all associated data and analysis history"
    },
    {
      right: "Right to Transparency",
      description: "Access complete logs of how your data was processed and handled"
    },
    {
      right: "Right to Portability",
      description: "Export all your data and analysis reports in standard formats"
    }
  ],
  compliance: [
    {
      framework: "Information Technology Act, 2000",
      alignment: "Section 43A and SPDI Rules compliance for sensitive data protection"
    },
    {
      framework: "Digital Personal Data Protection Act",
      alignment: "Principles of purpose limitation, data minimization, and storage limitation"
    },
    {
      framework: "Global Privacy Standards",
      alignment: "GDPR-aligned privacy-by-design principles without jurisdictional claims"
    }
  ]
};

// --- Data: Security & Abuse Prevention ---

const securityData = {
  preventionMeasures: [
    {
      title: "Result Integrity Protection",
      description: "Cryptographic signing of all forensic reports prevents tampering or falsification"
    },
    {
      title: "False Accusation Safeguards",
      description: "Confidence scoring and uncertainty quantification prevent definitive false claims"
    },
    {
      title: "Anti-Harassment Protocols",
      description: "Rate limiting and pattern detection prevent systematic targeting of individuals"
    }
  ],
  antiAbuse: [
    {
      mechanism: "Rate Limiting",
      description: "Intelligent throttling prevents bulk analysis abuse and API exploitation"
    },
    {
      mechanism: "Human Review Escalation",
      description: "High-stakes analyses flagged for expert forensic reviewer validation"
    },
    {
      mechanism: "Suspicious Usage Monitoring",
      description: "AI-powered detection of anomalous platform usage patterns"
    },
    {
      mechanism: "Account Verification Tiers",
      description: "Progressive trust levels based on identity verification and usage history"
    }
  ]
};

// --- Data: AI Misuse Scenarios ---

const misuseScenarios: MisuseScenario[] = [
  {
    id: "deepfake-harassment",
    title: "Deepfake Harassment",
    description: "Creation and distribution of synthetic media depicting individuals in compromising or false situations without consent",
    harm: "Psychological trauma, reputational destruction, relationship damage, professional consequences",
    affected: "Individuals, public figures, private citizens, women and children",
    action: "Preserve evidence immediately, do not engage with perpetrators, file cybercrime complaint, seek legal injunction",
    icon: UserX,
    severity: "critical"
  },
  {
    id: "fake-videos",
    title: "AI-Generated Fake Videos",
    description: "Fabricated video content showing false events, statements, or actions attributed to real individuals",
    harm: "Misinformation spread, electoral manipulation, corporate sabotage, social unrest",
    affected: "Politicians, celebrities, corporate leaders, ordinary citizens",
    action: "Verify through multiple sources, use AUTHENEX forensic analysis, report to platform and authorities",
    icon: Video,
    severity: "critical"
  },

  {
    id: "fake-documents",
    title: "Fake Legal / Academic Documents",
    description: "AI-generated certificates, court orders, academic credentials, or official correspondence",
    harm: "Educational fraud, legal system abuse, employment deception, immigration fraud",
    affected: "Educational institutions, employers, government agencies, courts",
    action: "Verify document provenance, check authentication features, report issuing authorities",
    icon: FileText,
    severity: "high"
  },
  {
    id: "identity-impersonation",
    title: "Identity Impersonation",
    description: "Synthetic creation of false digital identities or impersonation of real individuals across platforms",
    harm: "Financial fraud, criminal activity attribution, social engineering, trust erosion",
    affected: "Social media users, professionals, vulnerable populations, businesses",
    action: "Monitor digital footprint, enable multi-factor authentication, report impersonation platforms",
    icon: FingerprintIcon,
    severity: "high"
  },
  {
    id: "political-misinformation",
    title: "Political Misinformation",
    description: "Coordinated deployment of AI-generated content to influence elections or political discourse",
    harm: "Democratic process interference, voter manipulation, social polarization, violence incitement",
    affected: "Electoral bodies, political candidates, general electorate, democratic institutions",
    action: "Report to Election Commission, fact-check before sharing, support platform transparency initiatives",
    icon: Globe,
    severity: "critical"
  },
  {
    id: "financial-fraud",
    title: "Financial Fraud Using AI",
    description: "Synthetic market manipulation, fraudulent investment schemes, or AI-powered phishing campaigns",
    harm: "Economic losses, market instability, investor confidence erosion, systemic risk",
    affected: "Retail investors, financial institutions, regulatory bodies, pension funds",
    action: "Report to SEBI/RBI, file economic offense complaint, preserve transaction records",
    icon: CreditCard,
    severity: "critical"
  }
];

// --- Data: Legal Framework ---

const legalFramework: LegalReference[] = [
  {
    act: "Information Technology Act, 2000",
    section: "Section 66C, 66D, 66E",
    description: "Identity theft, cheating by personation, and violation of privacy through digital means",
    applicability: "Directly applicable to AI-generated impersonation and deepfake distribution"
  },
  {
    act: "Bharatiya Nyaya Sanhita, 2023",
    section: "Section 318, 319, 336",
    description: "Cheating, cheating by personation, and forgery of electronic records",
    applicability: "Covers AI-generated fraudulent documents and synthetic identity crimes"
  },
  {
    act: "Copyright Act, 1957",
    section: "Section 51, 63",
    description: "Infringement of copyright and offense of copyright violation",
    applicability: "Unauthorized use of likeness and personality rights in synthetic media"
  },
  {
    act: "Indecent Representation of Women Act, 1986",
    section: "Full Act",
    description: "Prohibition of indecent representation of women through advertisement or publication",
    applicability: "Deepfake pornography and non-consensual synthetic intimate imagery"
  }
];

// --- Data: Step-by-Step Remedies ---

const remedySteps: StepByStep[] = [
  {
    step: 1,
    title: "Preserve Digital Evidence",
    description: "Immediately secure all digital traces without alerting the perpetrator",
    details: [
      "Take screenshots with timestamps and URLs visible",
      "Save original files with metadata intact",
      "Record device information and access logs",
      "Do NOT delete or modify any content",
      "Create cryptographic hashes for integrity verification"
    ],
    icon: Download
  },
  {
    step: 2,
    title: "Verify Content Using AUTHENEX",
    description: "Generate forensic verification report for evidentiary value",
    details: [
      "Upload suspicious content to AUTHENEX platform",
      "Request comprehensive multi-signal analysis",
      "Download signed forensic report with timestamps",
      "Verify report authenticity through platform verification",
      "Store report securely with access controls"
    ],
    icon: ScanIcon
  },
  {
    step: 3,
    title: "Document the Incident",
    description: "Create comprehensive incident record for legal proceedings",
    details: [
      "Maintain chronological log of events",
      "Record all communication attempts",
      "Document impact and harm suffered",
      "Identify potential witnesses",
      "Preserve financial records if applicable"
    ],
    icon: FileText
  },
  {
    step: 4,
    title: "File Cybercrime Complaint",
    description: "Report to National Cyber Crime Reporting Portal",
    details: [
      "Access cybercrime.gov.in reporting portal",
      "Select appropriate crime category",
      "Upload AUTHENEX forensic report as evidence",
      "Provide detailed incident description",
      "Obtain acknowledgment number for tracking"
    ],
    icon: Globe
  },
  {
    step: 5,
    title: "Register FIR if Required",
    description: "Escalate to police for cognizable offenses",
    details: [
      "Visit local police station or cyber cell",
      "Carry printed forensic report and evidence",
      "Request FIR under relevant IT Act sections",
      "Obtain copy of FIR for your records",
      "Follow up with investigating officer regularly"
    ],
    icon: Shield
  },
  {
    step: 6,
    title: "Seek Legal Counsel",
    description: "Engage advocate for complex cases or civil remedies",
    details: [
      "Consult advocate specializing in cyber law",
      "Evaluate civil injunction possibilities",
      "Consider defamation proceedings if applicable",
      "Prepare for potential court testimony",
      "Explore victim compensation schemes"
    ],
    icon: ScaleIcon
  }
];

// --- Data: Action Buttons ---

const actionButtons: ActionButton[] = [
  {
    id: "report-cybercrime",
    label: "Report Cybercrime",
    description: "National Cyber Crime Reporting Portal for all digital offenses",
    authority: "Ministry of Home Affairs, Government of India",
    whenToUse: "Any cybercrime including AI-generated content abuse, identity theft, or online harassment",
    href: "https://cybercrime.gov.in",
    icon: Siren,
    external: true,
    variant: "urgent"
  },
  {
    id: "file-fir",
    label: "File Online FIR",
    description: "State police portals for First Information Report registration",
    authority: "State Police Departments",
    whenToUse: "When physical police station visit is not immediately possible; follow up with in-person visit",
    href: "https://www.digitalpolice.gov.in",
    icon: FileCheck,
    external: true,
    variant: "primary"
  },
  {
    id: "identity-theft",
    label: "Report Identity Theft",
    description: "Dedicated portal for identity-related cybercrimes",
    authority: "Indian Cyber Crime Coordination Centre",
    whenToUse: "Synthetic identity creation, impersonation, or unauthorized use of personal information",
    href: "https://cybercrime.gov.in",
    icon: FingerprintIcon,
    external: true,
    variant: "secondary"
  },
  {
    id: "women-child-safety",
    label: "Women & Child Safety",
    description: "Specialized reporting for gender-based and child-targeted AI abuse",
    authority: "National Commission for Women, NCPCR",
    whenToUse: "Deepfake pornography, non-consensual intimate imagery, child-targeted synthetic content",
    href: "https://cybercrime.gov.in",
    icon: ShieldAlert,
    external: true,
    variant: "urgent"
  },
  {
    id: "cyber-helpline",
    label: "National Cyber Helpline",
    description: "24/7 telephone assistance for cybercrime guidance",
    authority: "Ministry of Electronics and Information Technology",
    whenToUse: "Immediate guidance needed, clarification on reporting process, emergency situations",
    href: "tel:1930",
    icon: PhoneCall,
    external: true,
    variant: "primary"
  },
  {
    id: "sebi-complaint",
    label: "SEBI Complaint Portal",
    description: "Securities market fraud and AI-powered investment scams",
    authority: "Securities and Exchange Board of India",
    whenToUse: "AI-generated market manipulation, fraudulent investment schemes, synthetic corporate communications",
    href: "https://scores.sebi.gov.in",
    icon: Landmark,
    external: true,
    variant: "secondary"
  }
];

// --- Components ---

const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string; subtitle: string; icon: React.ElementType }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center border border-sky-500/20">
        <Icon className="w-6 h-6 text-sky-400" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-slate-400 text-sm">{subtitle}</p>
      </div>
    </div>
    <div className="h-px bg-gradient-to-r from-sky-500/20 via-slate-700 to-transparent" />
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "success" | "warning" | "error" | "info" }) => {
  const variants = {
    default: "bg-slate-800 text-slate-300",
    success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    warning: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    error: "bg-rose-500/10 text-rose-400 border border-rose-500/20",
    info: "bg-sky-500/10 text-sky-400 border border-sky-500/20"
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${variants[variant]}`}>
      {children}
    </span>
  );
};

const ActionButton = ({ button }: { button: ActionButton }) => {
  const variants = {
    primary: "bg-sky-500 hover:bg-sky-400 text-white shadow-lg shadow-sky-500/25",
    secondary: "bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700",
    urgent: "bg-rose-500 hover:bg-rose-400 text-white shadow-lg shadow-rose-500/25",
    outline: "border border-slate-600 hover:border-sky-500 text-slate-400 hover:text-sky-400"
  };

  const content = (
    <div className={`p-5 rounded-xl transition-all group ${variants[button.variant]}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
          <button.icon className="w-5 h-5" />
        </div>
        {button.external && <ExternalLink className="w-4 h-4 opacity-60" />}
      </div>
      <h4 className="font-semibold mb-1">{button.label}</h4>
      <p className="text-sm opacity-80 mb-3">{button.description}</p>
      <div className="space-y-1 text-xs opacity-60">
        <p><span className="font-medium">Authority:</span> {button.authority}</p>
        <p><span className="font-medium">When to use:</span> {button.whenToUse}</p>
      </div>
    </div>
  );

  if (button.external) {
    return (
      <a href={button.href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return (
    <Link href={button.href} className="block">
      {content}
    </Link>
  );
};

const Accordion = ({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border border-slate-800/50 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-slate-900/40 hover:bg-slate-800/40 transition-all text-left"
      >
        <span className="font-medium text-white">{title}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5 text-slate-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 border-t border-slate-800/50">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Timeline = ({ steps }: { steps: StepByStep[] }) => (
  <div className="space-y-6">
    {steps.map((step, index) => (
      <motion.div
        key={step.step}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative pl-8 border-l-2 border-slate-800 last:border-l-0"
      >
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-500" />
        <div className="pb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-sky-500/10 rounded-lg flex items-center justify-center">
              <step.icon className="w-4 h-4 text-sky-400" />
            </div>
            <div>
              <span className="text-sky-400 text-xs font-semibold uppercase tracking-wider">Step {step.step}</span>
              <h4 className="text-white font-semibold">{step.title}</h4>
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-3">{step.description}</p>
          <ul className="space-y-1">
            {step.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    ))}
  </div>
);

// --- Main Page Component ---

export default function TrustCenterPage() {
  return (
    <div className="text-slate-300 relative min-h-screen bg-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>



      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 space-y-24">
        
        {/* 1. Hero Section */}
        <section>
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-center max-w-4xl mx-auto mb-16"
           >
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-400 text-xs font-semibold uppercase tracking-wider mb-6">
               <Shield className="w-3 h-3" />
               National Digital Trust Platform
             </div>
             <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
               Privacy, Security & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Restoration Center</span>
             </h1>
             <p className="text-lg text-slate-400 max-w-2xl mx-auto">
               Your comprehensive resource for understanding AI misuse, protecting your digital rights, 
               and accessing legal remedies. Designed for accuracy, speed, and justice.
             </p>
           </motion.div>
        </section>

        {/* 2. Take Immediate Action (Redesigned & Moved Here) */}
        <section>
          <div className="flex items-center justify-between mb-8">
             <div>
               <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                 <Siren className="w-6 h-6 text-rose-400" />
                 Take Immediate Action
               </h2>
               <p className="text-slate-400 mt-1">Urgent resources for victims of cybercrime and AI misuse</p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {actionButtons.map((btn, idx) => (
                <div key={idx} className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:bg-slate-800/60 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/5">
                   <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                   
                   <div className="relative flex flex-col h-full">
                      <div className="flex items-start justify-between mb-6">
                         <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            btn.variant === 'urgent' ? 'bg-rose-500/10 text-rose-400' : 
                            btn.variant === 'primary' ? 'bg-sky-500/10 text-sky-400' :
                            'bg-slate-800 text-slate-400'
                         }`}>
                            <btn.icon className="w-6 h-6" />
                         </div>
                         {btn.external && <ExternalLink className="w-4 h-4 text-slate-500" />}
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-2">{btn.label}</h3>
                      <p className="text-sm text-slate-400 mb-4 flex-grow">{btn.description}</p>
                      
                      <div className="mt-auto pt-4 border-t border-slate-800/50">
                         <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block mb-1">Authority</span>
                         <span className="text-xs text-slate-300">{btn.authority}</span>
                      </div>

                      <a 
                        href={btn.href} 
                        target={btn.external ? "_blank" : "_self"}
                        className="mt-4 w-full py-2 bg-slate-800 hover:bg-sky-600 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
                      >
                        Access Portal
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                   </div>
                </div>
             ))}
          </div>
        </section>

        {/* 3. Privacy & Security Section */}
        <section className="scroll-mt-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                 <SectionHeader 
                   title="Privacy & Data Protection"
                   subtitle="How we handle your sensitive forensic data"
                   icon={Lock}
                 />
                 <div className="space-y-6">
                    <Card>
                       <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                         <Database className="w-5 h-5 text-sky-400" />
                         Data Minimization
                       </h3>
                       <p className="text-slate-400 text-sm mb-4">
                         We only process what is strictly necessary for forensic analysis, authenticating calls, and detecting manipulation.
                       </p>
                       <ul className="space-y-2">
                         {privacyData.processedData.slice(0, 3).map((item, i) => (
                           <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                             <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                             {item}
                           </li>
                         ))}
                       </ul>
                    </Card>
                    
                    <Card>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <LockKeyhole className="w-5 h-5 text-sky-400" />
                        Encryption Standards
                      </h3>
                      <div className="space-y-3">
                        {privacyData.encryption.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-2 bg-slate-800/30 rounded-lg">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            <p className="text-sm text-slate-300">{item}</p>
                          </div>
                        ))}
                      </div>
                    </Card>
                 </div>
              </div>

              <div>
                 <SectionHeader 
                   title="Security & Abuse Prevention"
                   subtitle="Platform safeguards and integrity measures"
                   icon={ShieldCheck}
                 />
                 <div className="space-y-6">
                    {securityData.preventionMeasures.map((measure, idx) => (
                      <div key={idx} className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/50">
                        <div className="flex items-center gap-3 mb-2">
                           <Shield className="w-5 h-5 text-sky-500" />
                           <h4 className="text-white font-medium">{measure.title}</h4>
                        </div>
                        <p className="text-sm text-slate-400">{measure.description}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                 <h3 className="text-lg font-semibold text-white mb-6">Your Rights</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {privacyData.userRights.map((right, i) => (
                       <div key={i} className="p-3 bg-slate-800/30 rounded-lg">
                          <h4 className="text-white text-sm font-medium mb-1">{right.right}</h4>
                          <p className="text-xs text-slate-400">{right.description}</p>
                       </div>
                    ))}
                 </div>
              </Card>

              <Card>
                  <h3 className="text-lg font-semibold text-white mb-6">Anti-Abuse Mechanisms</h3>
                  <div className="space-y-3">
                     {securityData.antiAbuse.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/30 transition-colors">
                           <div className="w-8 h-8 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 font-bold text-xs">{i+1}</div>
                           <span className="text-slate-300 text-sm">{item.mechanism}</span>
                        </div>
                     ))}
                  </div>
              </Card>
           </div>
        </section>


        {/* 4. Misuse Scenarios */}
        <section>
          <SectionHeader 
            title="Recognizing AI Misuse"
            subtitle="Common scenarios and how they manifest"
            icon={AlertTriangle}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {misuseScenarios.map((scenario) => (
               <div key={scenario.id} className="p-6 bg-slate-900/40 border border-slate-800/50 rounded-xl hover:border-slate-700 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                     <div className="p-3 bg-slate-800 rounded-lg">
                        <scenario.icon className="w-6 h-6 text-sky-400" />
                     </div>
                     <Badge variant={scenario.severity === 'critical' ? 'error' : 'warning'}>{scenario.severity}</Badge>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{scenario.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{scenario.description}</p>
                  <div className="pt-4 border-t border-slate-800/50">
                     <p className="text-emerald-400 text-sm font-medium flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        {scenario.action}
                     </p>
                  </div>
               </div>
            ))}
          </div>
        </section>

        {/* 5. Legal Framework & Remedies */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           <div className="lg:col-span-2">
              <SectionHeader 
                title="Legal Framework"
                subtitle="Indian laws governing digital crimes"
                icon={Scale}
              />
              <div className="space-y-4">
                 {legalFramework.map((law, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
                       <div className="mt-1">
                          <BookOpen className="w-5 h-5 text-sky-500" />
                       </div>
                       <div>
                          <h4 className="text-white font-semibold">{law.act}</h4>
                          <p className="text-sky-400 text-sm mb-1">{law.section}</p>
                          <p className="text-slate-400 text-sm">{law.description}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
           
           <div>
              <SectionHeader 
                title="Remedies"
                subtitle="Steps to justice"
                icon={Gavel}
              />
              <div className="relative border-l border-slate-800 ml-3 space-y-8 pl-8 py-2">
                 {remedySteps.map((step, i) => (
                    <div key={i} className="relative">
                       <span className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-slate-900 border border-sky-500 flex items-center justify-center text-[10px] text-sky-400 font-bold">
                          {step.step}
                       </span>
                       <h4 className="text-white font-medium mb-1">{step.title}</h4>
                       <p className="text-slate-500 text-xs">{step.description}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Disclaimer Section */}
        <section className="border-t border-slate-800/50 pt-12">
          <div className="p-6 bg-slate-900/30 border border-slate-800/50 rounded-2xl">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-sky-400" />
              Legal Disclaimer & Ethical Position
            </h3>
            <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
              <p>
                <strong className="text-slate-300">AUTHENEX is not a court, law enforcement agency, or regulatory authority.</strong> We are a technology platform 
                providing forensic analysis tools and educational resources. Our reports provide technical insights based on 
                algorithmic analysis; they do not constitute legal findings or definitive proof.
              </p>
              <p>
                Final determinations regarding the authenticity, legality, or consequences of digital content rest exclusively 
                with competent judicial authorities, law enforcement agencies, and regulatory bodies. AUTHENEX does not 
                adjudicate disputes, issue binding decisions, or enforce legal remedies.
              </p>
              <p>
                We are committed to ethical AI development and responsible technology deployment. Our platform is designed 
                to support truth, protect vulnerable populations, and strengthen digital trust—but it is one tool among many 
                in the pursuit of justice. We actively cooperate with lawful requests from authorized agencies while maintaining 
                strict privacy protections for all users.
              </p>
              <p className="text-slate-500 text-xs pt-4 border-t border-slate-800/50">
                Last updated: February 2026. This document is subject to revision as laws and platform capabilities evolve.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-500 text-sm pb-8">
          <p>© 2026 Authenex. National Digital Trust Platform.</p>
          <p className="mt-2">Committed to ethical AI, privacy by design, and digital safety for all.</p>
        </footer>

      </div>
    </div>
  );
}
