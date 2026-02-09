
export const translations = {
  en: {
    nav: {
      dashboard: "Dashboard",
      newAnalysis: "New Analysis",
      myCases: "My Cases",
      analytics: "Analytics",
      settings: "Settings",
      help: "Help & Support",
      logout: "Sign Out",
      profile: "Profile",
      legal: "Legal Safeguards"
    },
    header: {
      searchPlaceholder: "Search cases, analyses...",
      systemOnline: "System Online",
      notifications: "Notifications",
      markAllRead: "Mark all read",
      noNotifications: "No notifications",
      viewAll: "View all notifications"
    },
    dashboard: {
      title: "Dashboard",
      subtitle: "Real-time intelligence on cybercrime, deepfakes, and AI security threats.",
      stats: {
        cybercrime: "Cybercrime Cases",
        deepfake: "Deepfake Cases",
        aiFraud: "AI Fraud",
        arrests: "Arrests Made"
      },
      recentActivity: "Recent Activity",
      analysisLink: "Analysis",
      newsFeed: "Live Intelligence Feed",
      recentAnalysis: {
        status: {
          completed: "Analysis Complete",
          processing: "Processing..."
        },
        actions: {
          share: "Share",
          download: "Download Report"
        }
      }
    },
    analyze: {
      title: "Forensic Analysis",
      subtitle: "Select content type and upload files for verification",
      types: {
        image: "Image Forensics",
        video: "Video Analysis",
        document: "Document Check",
        audio: "Audio Forensics",
        email: "Email Verification",
        text: "Text Detection"
      },
      steps: {
        upload: "Upload",
        scanning: "Scanning",
        aiAnalysis: "AI Analysis",
        results: "Results"
      },
      dropzone: {
        dragActive: "Drop files here",
        dragDrop: "Drag & drop files here",
        browse: "or click to browse from your computer",
        selectFiles: "Select Files",
        selectedFiles: "Selected Files"
      },
      button: {
        start: "Start Analysis",
        analyzing: "Analyzing..."
      },
      results: {
        authentic: "Authentic Content",
        aiGenerated: "AI Generated",
        verdict: "Verdict",
        forensicBreakdown: "Forensic Analysis Breakdown",
        detailedFindings: "Detailed Findings",
        newAnalysis: "New Analysis",
        downloadReport: "Download Report",
        processing: "Processing forensic analysis... Please wait"
      },
      report: {
        probability: "Probability",
        human: "Human",
        authenticity: "Authenticity",
        id: "ID",
        risk: "Risk",
        authenticityAssessment: "Authenticity Assessment",
        aiProbability: "AI Probability",
        humanAuthenticity: "Human Authenticity",
        confidenceScore: "Confidence Score",
        syntheticDetected: "Synthetic Content Detected",
        likelyAuthentic: "Content Likely Authentic",
        multiLayerAnalysis: "Multi-Layer Detection Analysis",
        layersAnalyzed: "layers analyzed with weighted scoring",
        overallConfidence: "Overall Confidence",
        layerContribution: "Layer Contribution Analysis (Score × Weight)",
        noLayers: "No Detection Layers Available",
        noLayersDesc: "The AI analysis did not return detailed layer data",
        categoryDistribution: "Category-wise Distribution",
        detectionFindings: "Detection Findings",
        heatmap: "Heatmap Analysis",
        temporal: "Temporal Consistency",
        forensicReport: "Forensic Analysis Report",
        examiner: "Examiner",
        date: "Date",
        conclusion: "Conclusion",
        recommendations: "Recommendations",
        tabs: {
          details: "Analysis Details",
          visual: "Visual Evidence",
          report: "Forensic Report"
        },
        error: {
          title: "No Analysis Data",
          desc: "Upload a file to begin analysis",
          action: "Start Analysis"
        }
      }
    },
    chat: {
      title: "Authenex AI",
      subtitle: "Forensic Intelligence",
      linked: "Linked",
      placeholder: "Ask Authenex AI...",
      listening: "Listening...",
      welcome: "Authenex AI Core Initialized. Ready for forensic analysis.",
      connectionError: "Connection error. Please try again."
    },
    cases: {
      title: "Case Management",
      subtitle: "Manage and review all forensic analyses",
      searchPlaceholder: "Search cases by ID, title, or tags...",
      filters: {
        all: "All Cases",
        completed: "Completed",
        processing: "Processing",
        pending: "Pending"
      },
      table: {
        case: "Case",
        type: "Type",
        date: "Date",
        status: "Status",
        result: "Result",
        confidence: "Confidence",
        actions: "Actions"
      },
      noCases: "No cases found"
    },
    news: {
      top: "Top Stories",
      deepfake: "Deepfakes",
      cybercrime: "Cybercrime",
      ai: "AI Security",
      policy: "Policy",
      cases: "Cases",
      social: "Social"
    },
    scanHistory: {
      title: "Recent Scans",
      noData: "No scan history found.",
      loading: "Loading history...",
      confidence: "Confidence",
      justNow: "Just now",
      ago: "ago"
    },
    profile: {
      tabs: {
        overview: "Overview",
        activity: "Activity",
        achievements: "Achievements"
      },
      edit: "Edit Profile",
      save: "Save Changes",
      cancel: "Cancel",
      role: "Role",
      location: "Location",
      credits: {
        available: "Available Credits",
        refill: "Refill Date",
        add: "Add Credits",
        usage: "Monthly Usage"
      },
      about: "About",
      email: "Email",
      website: "Website",
      memberSince: "Member Since",
      lastActive: "Last Active",
      plan: {
        current: "Current Plan",
        renews: "Renews on",
        upgrade: "Upgrade Plan"
      },
      delete: {
        title: "Delete Account?",
        desc: "This action cannot be undone. All your data will be permanently deleted.",
        confirm: "Delete"
      }
    },
    settings: {
      title: "Settings",
      subtitle: "Manage your account preferences and security.",
      appearance: "Appearance",
      notifications: "Notifications",
      security: "Security & Privacy",
      items: {
        darkMode: "Dark Mode",
        language: "Language",
        emailNotif: "Email Notifications",
        pushNotif: "Push Notifications"
      },
      securityScore: "Security Score",
      dangerZone: "Danger Zone",
      deleteAccount: "Delete Account"
    },
    help: {
      hero: {
        badge: "Help Center",
        title: "How can we help you?",
        subtitle: "Find answers about detection, features, and troubleshooting.",
        search: "Search for answers..."
      },
      sections: {
        overview: "Overview",
        detection: "Detection Methods",
        troubleshooting: "Troubleshooting",
        contact: "Contact Support"
      },
      overview: {
        title: "What is Authenex",
        desc: "AI-powered forensic detection platform for analyzing digital content authenticity."
      },
      faq: {
        title: "Frequently Asked Questions",
        noResults: "No results found"
      },
      channels: {
        email: "Email Support",
        docs: "Documentation",
        report: "Report Issue",
        chat: "Live Chat"
      },
      disclaimer: {
        title: "Disclaimer",
        text: "Results are probabilistic assessments and should be used with human judgment."
      }
    },
    landing: {
      nav: {
        brandTagline: "TrustLens",
        getStarted: "Get Started",
        signIn: "Sign In"
      },
      hero: {
        badge: "Now with GPT-4 Detection",
        title1: "Verify Truth in",
        title2: "Digital Reality",
        description: "Authenex combines neural forensics, quantum-resistant verification, and explainable AI to detect synthetic media with 99.9% accuracy.",
        startAnalysis: "Start Free Analysis",
        watchDemo: "Watch Demo",
        goToDashboard: "Go to Dashboard",
        badges: {
          soc2: "SOC 2 Type II",
          fisma: "FISMA Compliant",
          gdpr: "GDPR Ready"
        },
        stats: {
          verification: "Verification",
          activeUsers: "Active Users"
        }
      },
      features: {
        sectionBadge: "Platform Capabilities",
        sectionTitle: "Six Dimensions of",
        sectionTitleHighlight: "Digital Forensics",
        sectionDescription: "Comprehensive analysis across all digital content types, powered by state-of-the-art neural networks and quantum-resistant verification.",
        imageForensics: {
          title: "Image Forensics",
          description: "Detect AI-generated images, deepfakes, and manipulated photos using advanced GAN fingerprinting and metadata analysis.",
          stat: "99.9% accuracy"
        },
        videoVerification: {
          title: "Video Verification",
          description: "Temporal consistency analysis, frame-level interpolation detection, and lip-sync verification for comprehensive video authenticity.",
          stat: "Real-time"
        },
        documentAuth: {
          title: "Document Authenticity",
          description: "Font forensics, signature verification, layout analysis, and blockchain timestamp validation for legal document integrity.",
          stat: "Court-ready"
        },
        emailIntel: {
          title: "Email Intelligence",
          description: "Header forensics, SPF/DKIM validation, sender reputation analysis, and phishing detection powered by threat intelligence.",
          stat: "ISP-integrated"
        },
        audioAnalysis: {
          title: "Audio Analysis",
          description: "Voice biometric matching, synthetic speech detection, acoustic environment analysis, and deepfake audio identification.",
          stat: "Neural net"
        },
        textDetection: {
          title: "Text Detection",
          description: "Perplexity scoring, burstiness analysis, stylometry matching, and LLM attribution for synthetic text identification.",
          stat: "GPT-4 ready"
        }
      },
      process: {
        badge: "How It Works",
        title: "Forensic Pipeline in",
        titleHighlight: "Three Steps",
        description: "From ingestion to verified report, our automated pipeline ensures accuracy, transparency, and legal admissibility.",
        step1: {
          title: "Secure Ingestion",
          description: "Drag and drop any digital asset. We support 200+ formats with automatic metadata preservation and cryptographic hashing for chain of custody.",
          features: {
            f1: "End-to-end encryption",
            f2: "Metadata extraction",
            f3: "Hash verification"
          }
        },
        step2: {
          title: "Neural Analysis",
          description: "Our ensemble of specialized AI models processes content through 50+ forensic checkpoints, detecting anomalies invisible to human eyes.",
          features: {
            f1: "50+ detection models",
            f2: "Sub-second processing",
            f3: "Confidence scoring"
          }
        },
        step3: {
          title: "Verified Report",
          description: "Receive court-ready documentation with explainable AI insights, anomaly visualization, and reproducible evidence for legal proceedings.",
          features: {
            f1: "PDF export",
            f2: "API integration",
            f3: "Blockchain timestamp"
          }
        }
      },
      testimonials: {
        badge: "Trusted Worldwide",
        title: "Voices of",
        titleHighlight: "Verification",
        item1: {
          quote: "Authenex has become our first line of defense against disinformation. The explainable AI reports are court-ready and have held up in multiple legal proceedings.",
          author: "Sarah Chen",
          role: "Director of Information Security",
          org: "Global News Network"
        },
        item2: {
          quote: "The forensic detail in their analysis is unprecedented. We've integrated their API into our evidence management system with remarkable ease.",
          author: "Marcus Rodriguez",
          role: "Digital Evidence Specialist",
          org: "Federal Bureau of Investigation"
        },
        item3: {
          quote: "We evaluated six different solutions. Authenex was the only platform that could detect the latest diffusion models with consistent accuracy.",
          author: "Dr. Emily Watson",
          role: "Chief Technology Officer",
          org: "SecureVote Inc."
        }
      },
      cta: {
        title: "Ready to Defend",
        titleHighlight: "Digital Truth?",
        description: "Join over 150 enterprises and government agencies using Authenex to combat synthetic media and preserve information integrity.",
        start: "Start Free Trial",
        demo: "Schedule Demo",
        footer: "No credit card required • 14-day free trial • SOC 2 compliant"
      },
      footer: {
        tagline: "Defending digital truth since 2026",
        links: {
          privacy: "Privacy",
          terms: "Terms",
          security: "Security",
          api: "API"
        }
      }
    },
    legal: {
      hero: {
        title: "Legal Safeguards & AI Misuse Protection",
        subtitle: "Your rights, legal pathways, and protection against AI-generated deepfakes, identity theft, and digital fraud under Indian law",
        stats: {
          casesReported: "Cases Reported",
          arrests: "Arrests Made",
          lawsEnforced: "Laws Enforced"
        }
      },
      actionSection: {
        title: "Take Immediate Action",
        subtitle: "Direct access to cybercrime reporting and legal resources",
        buttons: {
          reportCybercrime: {
            label: "Report Cybercrime",
            desc: "National Cyber Crime Reporting Portal for all digital offenses",
            authority: "Ministry of Home Affairs, Government of India",
            when: "Any cybercrime including AI-generated content abuse, identity theft, or online harassment"
          },
          fileFIR: {
            label: "File Online FIR",
            desc: "State police portals for First Information Report registration",
            authority: "State Police Departments",
            when: "When physical police station visit is not immediately possible; follow up with in-person visit"
          },
          identityTheft: {
            label: "Report Identity Theft",
            desc: "Dedicated portal for identity-related cybercrimes",
            authority: "Indian Cyber Crime Coordination Centre",
            when: "Synthetic identity creation, impersonation, or unauthorized use of personal information"
          },
          womenChild: {
            label: "Women & Child Safety",
            desc: "Specialized reporting for gender-based and child-targeted AI abuse",
            authority: "National Commission for Women, NCPCR",
            when: "Deepfake pornography, non-consensual intimate imagery, child-targeted synthetic content"
          },
          helpline: {
            label: "National Cyber Helpline",
            desc: "24/7 telephone assistance for cybercrime guidance",
            authority: "Ministry of Electronics and Information Technology",
            when: "Immediate guidance needed, clarification on reporting process, emergency situations"
          },
          sebi: {
            label: "SEBI Complaint Portal",
            desc: "Securities market fraud and AI-powered investment scams",
            authority: "Securities and Exchange Board of India",
            when: "AI-generated market manipulation, fraudulent investment schemes, synthetic corporate communications"
          }
        }
      },
      privacy: {
        title: "Privacy & Data Protection",
        subtitle: "How we protect your data",
        processedData: {
          title: "Data We Process",
          items: [
            "Content submitted for forensic analysis (images, audio, documents, text)",
            "Technical metadata required for detection algorithms",
            "Account authentication and authorization credentials",
            "Analysis timestamps and processing duration logs",
            "Anonymized usage patterns for platform improvement"
          ]
        },
        neverStored: {
          title: "Never Stored",
          items: [
            "Raw content after analysis completion (24-hour auto-deletion)",
            "Personal identification beyond account requirements",
            "Third-party data or unrelated user information",
            "Analysis results without explicit user access permissions",
            "Cross-referenced external database information"
          ]
        },
        encryption: {
          title: "Encryption & Security",
          items: [
            "AES-256 encryption for data at rest",
            "TLS 1.3 for all data in transit",
            "End-to-end encryption for sensitive forensic transfers",
            "Hardware Security Module (HSM) protected key management",
            "Zero-knowledge architecture for content processing"
          ]
        },
        rights: {
          title: "Your Rights",
          items: {
            privacy: {
              title: "Right to Privacy",
              desc: "Your content is processed in isolated environments with no external access"
            },
            deletion: {
              title: "Right to Data Deletion",
              desc: "Request immediate deletion of all associated data and analysis history"
            },
            transparency: {
              title: "Right to Transparency",
              desc: "Access complete logs of how your data was processed and handled"
            },
            portability: {
              title: "Right to Portability",
              desc: "Export all your data and analysis reports in standard formats"
            }
          }
        },
        compliance: {
          title: "Compliance Alignment",
          items: {
            it: {
              title: "Information Technology Act, 2000",
              desc: "Section 43A and SPDI Rules compliance for sensitive data protection"
            },
            dpdp: {
              title: "Digital Personal Data Protection Act",
              desc: "Principles of purpose limitation, data minimization, and storage limitation"
            },
            gdpr: {
              title: "Global Privacy Standards",
              desc: "GDPR-aligned privacy-by-design principles without jurisdictional claims"
            }
          }
        }
      },
      security: {
        title: "Platform Security & Abuse Prevention",
        prevention: {
          title: "Prevention Measures",
          items: {
            integrity: {
              title: "Result Integrity Protection",
              desc: "Cryptographic signing of all forensic reports prevents tampering or falsification"
            },
            falseAccusation: {
              title: "False Accusation Safeguards",
              desc: "Confidence scoring and uncertainty quantification prevent definitive false claims"
            },
            harassment: {
              title: "Anti-Harassment Protocols",
              desc: "Rate limiting and pattern detection prevent systematic targeting of individuals"
            }
          }
        },
        antiAbuse: {
          title: "Anti-Abuse Mechanisms",
          items: {
            rateLimit: {
              title: "Rate Limiting",
              desc: "Intelligent throttling prevents bulk analysis abuse and API exploitation"
            },
            humanReview: {
              title: "Human Review Escalation",
              desc: "High-stakes analyses flagged for expert forensic reviewer validation"
            },
            monitoring: {
              title: "Suspicious Usage Monitoring",
              desc: "AI-powered detection of anomalous platform usage patterns"
            },
            verification: {
              title: "Account Verification Tiers",
              desc: "Progressive trust levels based on identity verification and usage history"
            }
          }
        }
      },
      misuse: {
        title: "Recognizing AI Misuse",
        subtitle: "Threat scenarios and protective actions",
        scenarios: {
          deepfakeHarassment: {
            title: "Deepfake Harassment",
            desc: "Creation and distribution of synthetic media depicting individuals in compromising or false situations without consent",
            harm: "Psychological trauma, reputational destruction, relationship damage, professional consequences",
            affected: "Individuals, public figures, private citizens, women and children",
            action: "Preserve evidence immediately, do not engage with perpetrators, file cybercrime complaint, seek legal injunction"
          },
          fakeVideos: {
            title: "AI-Generated Fake Videos",
            desc: "Fabricated video content showing false events, statements, or actions attributed to real individuals",
            harm: "Misinformation spread, electoral manipulation, corporate sabotage, social unrest",
            affected: "Politicians, celebrities, corporate leaders, ordinary citizens",
            action: "Verify through multiple sources, use AUTHENEX forensic analysis, report to platform and authorities"
          },
          fakeDocuments: {
            title: "Fake Legal / Academic Documents",
            desc: "AI-generated certificates, court orders, academic credentials, or official correspondence",
            harm: "Educational fraud, legal system abuse, employment deception, immigration fraud",
            affected: "Educational institutions, employers, government agencies, courts",
            action: "Verify document provenance, check authentication features, report issuing authorities"
          },
          identityImpersonation: {
            title: "Identity Impersonation",
            desc: "Synthetic creation of false digital identities or impersonation of real individuals across platforms",
            harm: "Financial fraud, criminal activity attribution, social engineering, trust erosion",
            affected: "Social media users, professionals, vulnerable populations, businesses",
            action: "Monitor digital footprint, enable multi-factor authentication, report impersonation platforms"
          },
          politicalMisinfo: {
            title: "Political Misinformation",
            desc: "Coordinated deployment of AI-generated content to influence elections or political discourse",
            harm: "Democratic process interference, voter manipulation, social polarization, violence incitement",
            affected: "Electoral bodies, political candidates, general electorate, democratic institutions",
            action: "Report to Election Commission, fact-check before sharing, support platform transparency initiatives"
          },
          financialFraud: {
            title: "Financial Fraud Using AI",
            desc: "Synthetic market manipulation, fraudulent investment schemes, or AI-powered phishing campaigns",
            harm: "Economic losses, market instability, investor confidence erosion, systemic risk",
            affected: "Retail investors, financial institutions, regulatory bodies, pension funds",
            action: "Report to SEBI/RBI, file economic offense complaint, preserve transaction records"
          }
        }
      },
      legalFramework: {
        title: "Legal Framework",
        subtitle: "Indian laws governing digital crimes",
        laws: {
          it: {
            act: "Information Technology Act, 2000",
            section: "Section 66C, 66D, 66E",
            desc: "Identity theft, cheating by personation, and violation of privacy through digital means",
            applicability: "Directly applicable to AI-generated impersonation and deepfake distribution"
          },
          bns: {
            act: "Bharatiya Nyaya Sanhita, 2023",
            section: "Section 318, 319, 336",
            desc: "Cheating, cheating by personation, and forgery of electronic records",
            applicability: "Covers AI-generated fraudulent documents and synthetic identity crimes"
          },
          copyright: {
            act: "Copyright Act, 1957",
            section: "Section 51, 63",
            desc: "Infringement of copyright and offense of copyright violation",
            applicability: "Unauthorized use of likeness and personality rights in synthetic media"
          },
          indecent: {
            act: "Indecent Representation of Women Act, 1986",
            section: "Full Act",
            desc: "Prohibition of indecent representation of women through advertisement or publication",
            applicability: "Deepfake pornography and non-consensual synthetic intimate imagery"
          }
        }
      },
      remedies: {
        title: "Remedies",
        subtitle: "Steps to justice",
        steps: {
          preserve: {
            step: "1",
            title: "Preserve Digital Evidence",
            desc: "Immediately secure all digital traces without alerting the perpetrator",
            details: [
              "Take screenshots with timestamps and URLs visible",
              "Save original files with metadata intact",
              "Record device information and access logs",
              "Do NOT delete or modify any content",
              "Create cryptographic hashes for integrity verification"
            ]
          },
          verify: {
            step: "2",
            title: "Verify Content Using AUTHENEX",
            desc: "Generate forensic verification report for evidentiary value",
            details: [
              "Upload suspicious content to AUTHENEX platform",
              "Request comprehensive multi-signal analysis",
              "Download signed forensic report with timestamps",
              "Verify report authenticity through platform verification",
              "Store report securely with access controls"
            ]
          },
          document: {
            step: "3",
            title: "Document the Incident",
            desc: "Create comprehensive incident record for legal proceedings",
            details: [
              "Maintain chronological log of events",
              "Record all communication attempts",
              "Document impact and harm suffered",
              "Identify potential witnesses",
              "Preserve financial records if applicable"
            ]
          },
          complaint: {
            step: "4",
            title: "File Cybercrime Complaint",
            desc: "Report to National Cyber Crime Reporting Portal",
            details: [
              "Access cybercrime.gov.in reporting portal",
              "Select appropriate crime category",
              "Upload AUTHENEX forensic report as evidence",
              "Provide detailed incident description",
              "Obtain acknowledgment number for tracking"
            ]
          },
          fir: {
            step: "5",
            title: "Register FIR if Required",
            desc: "Escalate to police for cognizable offenses",
            details: [
              "Visit local police station or cyber cell",
              "Carry printed forensic report and evidence",
              "Request FIR under relevant IT Act sections",
              "Obtain copy of FIR for your records",
              "Follow up with investigating officer regularly"
            ]
          },
          legal: {
            step: "6",
            title: "Seek Legal Counsel",
            desc: "Engage advocate for complex cases or civil remedies",
            details: [
              "Consult advocate specializing in cyber law",
              "Evaluate civil injunction possibilities",
              "Consider defamation proceedings if applicable",
              "Prepare for potential court testimony",
              "Explore victim compensation schemes"
            ]
          }
        }
      },
      disclaimer: {
        title: "Legal Disclaimer & Ethical Position",
        content: {
          para1: "AUTHENEX is not a court, law enforcement agency, or regulatory authority. We are a technology platform providing forensic analysis tools and educational resources. Our reports provide technical insights based on algorithmic analysis; they do not constitute legal findings or definitive proof.",
          para2: "Final determinations regarding the authenticity, legality, or consequences of digital content rest exclusively with competent judicial authorities, law enforcement agencies, and regulatory bodies. AUTHENEX does not adjudicate disputes, issue binding decisions, or enforce legal remedies.",
          para3: "We are committed to ethical AI development and responsible technology deployment. Our platform is designed to support truth, protect vulnerable populations, and strengthen digital trust—but it is one tool among many in the pursuit of justice. We actively cooperate with lawful requests from authorized agencies while maintaining strict privacy protections for all users.",
          updated: "Last updated: February 2026. This document is subject to revision as laws and platform capabilities evolve."
        }
      },
      footer: {
        copyright: "© 2026 Authenex. National Digital Trust Platform.",
        tagline: "Committed to ethical AI, privacy by design, and digital safety for all."
      }
    },
    auth: {
      welcomeBack: "Welcome Back",
      subtitle: "Sign in to access forensic analysis tools",
      continueGoogle: "Continue with Google",
      continueEmail: "Or continue with email",
      continueGuest: "Continue as Guest (No Setup)",
      emailLabel: "Email Address",
      passwordLabel: "Password",
      signInButton: "Sign In",
      secured: "Secured with 256-bit encryption",
      backHome: "Back to home"
    }
  },
  hi: {
    nav: {
      dashboard: "डैशबोर्ड",
      newAnalysis: "नया विश्लेषण",
      myCases: "मेरे मामले",
      analytics: "एनालिटिक्स",
      settings: "सेटिंग्स",
      help: "सहायता",
      logout: "साइन आउट",
      profile: "प्रोफ़ाइल",
      legal: "कानूनी सुरक्षा"
    },
    header: {
      searchPlaceholder: "मामले, विश्लेषण खोजें...",
      systemOnline: "सिस्टम ऑनलाइन",
      notifications: "सूचनाएं",
      markAllRead: "सभी को पढ़ा हुआ चिह्नित करें",
      noNotifications: "कोई सूचना नहीं",
      viewAll: "सभी सूचनाएं देखें"
    },
    dashboard: {
      title: "डैशबोर्ड",
      subtitle: "साइबर अपराध और एआई सुरक्षा खतरों पर वास्तविक समय की खुफिया जानकारी।",
      stats: {
        cybercrime: "साइबर अपराध मामले",
        deepfake: "डीपफेक मामले",
        aiFraud: "एआई धोखाधड़ी",
        arrests: "गिरफ्तारियां"
      },
      recentActivity: "हाल की गतिविधि",
      analysisLink: "विश्लेषण",
      newsFeed: "लाइव खुफिया फ़ीड",
      recentAnalysis: {
        status: {
          completed: "सत्यापन पूर्ण",
          processing: "प्रक्रिया हो रही है..."
        },
        actions: {
          share: "साझा करें",
          download: "रिपोर्ट डाउनलोड करें"
        }
      }
    },
    analyze: {
      title: "फोरेंसिक विश्लेषण",
      subtitle: "सामग्री प्रकार चुनें और सत्यापन के लिए फ़ाइलें अपलोड करें",
      types: {
        image: "छवि फोरेंसिक",
        video: "वीडियो विश्लेषण",
        document: "दस्तावेज़ जाँच",
        audio: "ऑडियो फोरेंसिक",
        email: "ईमेल सत्यापन",
        text: "पाठ का पता लगाना"
      },
      steps: {
        upload: "अपलोड",
        scanning: "स्कैनिंग",
        aiAnalysis: "एआई विश्लेषण",
        results: "परिणाम"
      },
      dropzone: {
        dragActive: "फ़ाइलें यहाँ छोड़ें",
        dragDrop: "फ़ाइलें यहाँ खींचें और छोड़ें",
        browse: "या अपने कंप्यूटर से ब्राउज़ करने के लिए क्लिक करें",
        selectFiles: "फ़ाइलें चुनें",
        selectedFiles: "चयनित फ़ाइलें"
      },
      button: {
        start: "विश्लेषण शुरू करें",
        analyzing: "विश्लेषण हो रहा है..."
      },
      results: {
        authentic: "प्रामाणिक सामग्री",
        aiGenerated: "एआई द्वारा निर्मित",
        verdict: "निर्णय",
        forensicBreakdown: "फोरेंसिक विश्लेषण विवरण",
        detailedFindings: "विस्तृत निष्कर्ष",
        newAnalysis: "नया विश्लेषण",
        downloadReport: "रिपोर्ट डाउनलोड करें",
        processing: "फोरेंसिक विश्लेषण संसाधित हो रहा है... कृपया प्रतीक्षा करें"
      },
      report: {
        probability: "Probability",
        human: "Human",
        authenticity: "Authenticity",
        id: "ID",
        risk: "Risk",
        authenticityAssessment: "Authenticity Assessment",
        aiProbability: "AI Probability",
        humanAuthenticity: "Human Authenticity",
        confidenceScore: "Confidence Score",
        syntheticDetected: "Synthetic Content Detected",
        likelyAuthentic: "Content Likely Authentic",
        multiLayerAnalysis: "Multi-Layer Detection Analysis",
        layersAnalyzed: "layers analyzed with weighted scoring",
        overallConfidence: "Overall Confidence",
        layerContribution: "Layer Contribution Analysis (Score × Weight)",
        noLayers: "No Detection Layers Available",
        noLayersDesc: "The AI analysis did not return detailed layer data",
        categoryDistribution: "Category-wise Distribution",
        detectionFindings: "Detection Findings",
        heatmap: "Heatmap Analysis",
        temporal: "Temporal Consistency",
        forensicReport: "Forensic Analysis Report",
        examiner: "Examiner",
        date: "Date",
        conclusion: "Conclusion",
        recommendations: "Recommendations",
        tabs: {
          details: "Analysis Details",
          visual: "Visual Evidence",
          report: "Forensic Report"
        },
        error: {
          title: "No Analysis Data",
          desc: "Upload a file to begin analysis",
          action: "Start Analysis"
        }
      }
    },
    chat: {
      title: "ऑथेनेक्स एआई",
      subtitle: "फोरेंसिक इंटेलिजेंस",
      linked: "लिंक्ड",
      placeholder: "ऑथेनेक्स एआई से पूछें...",
      listening: "सुन रहा हूँ...",
      welcome: "ऑथेनेक्स एआई कोर प्रारंभ किया गया। फोरेंसिक विश्लेषण के लिए तैयार।",
      connectionError: "कनेक्शन त्रुटि। कृपया पुन: प्रयास करें।"
    },
    cases: {
      title: "केस प्रबंधन",
      subtitle: "सभी फोरेंसिक विश्लेषणों का प्रबंधन और समीक्षा करें",
      searchPlaceholder: "आईडी, शीर्षक या टैग द्वारा मामले खोजें...",
      filters: {
        all: "सभी मामले",
        completed: "पूरा हुआ",
        processing: "प्रक्रियाधीन",
        pending: "लंबित"
      },
      table: {
        case: "मामला",
        type: "प्रकार",
        date: "तारीख",
        status: "स्थिति",
        result: "परिणाम",
        confidence: "आत्मविश्वास",
        actions: "क्रियाएं"
      },
      noCases: "कोई मामला नहीं मिला"
    },
    news: {
      top: "प्रमुख खबरें",
      deepfake: "डीपफेक",
      cybercrime: "साइबर अपराध",
      ai: "एआई सुरक्षा",
      policy: "नीति",
      cases: "मामले",
      social: "सामाजिक"
    },
    scanHistory: {
      title: "हाल के स्कैन",
      noData: "कोई स्कैन इतिहास नहीं मिला।",
      loading: "इतिहास लोड हो रहा है...",
      confidence: "आत्मविश्वास",
      justNow: "अभी",
      ago: "पहले"
    },
    profile: {
      tabs: {
        overview: "अवलोकन",
        activity: "गतिविधि",
        achievements: "उपलब्धियां"
      },
      edit: "प्रोफ़ाइल संपादित करें",
      save: "परिवर्तन सहेजें",
      cancel: "रद्द करें",
      role: "भूमिका",
      location: "स्थान",
      credits: {
        available: "उपलब्ध क्रेडिट",
        refill: "रीफिल तिथि",
        add: "क्रेडिट जोड़ें",
        usage: "मासिक उपयोग"
      },
      about: "के बारे में",
      email: "ईमेल",
      website: "वेबसाइट",
      memberSince: "सदस्यता तिथि",
      lastActive: "अंतिम सक्रिय",
      plan: {
        current: "वर्तमान योजना",
        renews: "नवीनीकरण",
        upgrade: "योजना अपग्रेड करें"
      },
      delete: {
        title: "खाता हटाएं?",
        desc: "यह कार्रवाई पूर्ववत नहीं की जा सकती। आपका सारा डेटा स्थायी रूप से हटा दिया जाएगा।",
        confirm: "हटाएं"
      }
    },
    settings: {
      title: "सेटिंग्स",
      subtitle: "अपनी खाता प्राथमिकताएं और सुरक्षा प्रबंधित करें।",
      appearance: "दिखावट",
      notifications: "सूचनाएं",
      security: "सुरक्षा और गोपनीयता",
      items: {
        darkMode: "डार्क मोड",
        language: "भाषा",
        emailNotif: "ईमेल सूचनाएं",
        pushNotif: "पुश सूचनाएं"
      },
      securityScore: "सुरक्षा स्कोर",
      dangerZone: "खतरा क्षेत्र",
      deleteAccount: "खाता हटाएं"
    },
    help: {
      hero: {
        badge: "सहायता केंद्र",
        title: "हम आपकी कैसे मदद कर सकते हैं?",
        subtitle: "सत्यापन, सुविधाओं और समस्या निवारण के बारे में उत्तर खोजें।",
        search: "उत्तर खोजें..."
      },
      sections: {
        overview: "अवलोकन",
        detection: "पता लगाने के तरीके",
        troubleshooting: "समस्या निवारण",
        contact: "सहायता से संपर्क करें"
      },
      overview: {
        title: "ऑथेनेक्स क्या है",
        desc: "डिजिटल सामग्री की प्रमाणिकता का विश्लेषण करने के लिए एआई-संचालित फोरेंसिक डिटेक्शन प्लेटफॉर्म।"
      },
      faq: {
        title: "अक्सर पूछे जाने वाले प्रश्न",
        noResults: "कोई परिणाम नहीं मिला"
      },
      channels: {
        email: "ईमेल सहायता",
        docs: "दस्तावेज़ीकरण",
        report: "समस्या की रिपोर्ट करें",
        chat: "लाइव चैट"
      },
      disclaimer: {
        title: "अस्वीकरण",
        text: "परिणाम संभाव्य आकलन हैं और इन्हें मानवीय निर्णय के साथ उपयोग किया जाना चाहिए।"
      },
    },
    landing: {
      nav: {
        brandTagline: "ट्रस्टलेंस",
        getStarted: "शुरू करें",
        signIn: "साइन इन करें"
      },
      hero: {
        badge: "अब GPT-4 का पता लगाने के साथ",
        title1: "सत्य सत्यापित करें",
        title2: "डिजिटल वास्तविकता में",
        description: "Authenex तंत्रिका फोरेंसिक, क्वांटम-प्रतिरोधी सत्यापन और व्याख्यात्मक AI को मिलाकर 99.9% सटीकता के साथ सिंथेटिक मीडिया का पता लगाता है।",
        startAnalysis: "मुफ्त विश्लेषण शुरू करें",
        watchDemo: "डेमो देखें",
        goToDashboard: "डैशबोर्ड पर जाएं",
        badges: {
          soc2: "SOC 2 टाइप II",
          fisma: "FISMA अनुरूप",
          gdpr: "GDPR तैयार"
        },
        stats: {
          verification: "सत्यापन",
          activeUsers: "सक्रिय उपयोगकर्ता"
        }
      },
      features: {
        sectionBadge: "प्लेटफॉर्म क्षमताएं",
        sectionTitle: "छह आयाम",
        sectionTitleHighlight: "डिजिटल फोरेंसिक",
        sectionDescription: "अत्याधुनिक तंत्रिका नेटवर्क और क्वांटम-प्रतिरोधी सत्यापन द्वारा संचालित सभी डिजिटल सामग्री प्रकारों में व्यापक विश्लेषण।",
        imageForensics: {
          title: "छवि फोरेंसिक",
          description: "उन्नत GAN फिंगरप्रिंटिंग और मेटाडेटा विश्लेषण का उपयोग करके AI-जनित छवियों, डीपफेक और हेरफेर की गई तस्वीरों का पता लगाएं।",
          stat: "99.9% सटीकता"
        },
        videoVerification: {
          title: "वीडियो सत्यापन",
          description: "व्यापक वीडियो प्रामाणिकता के लिए अस्थायी संगति विश्लेषण, फ्रेम-स्तरीय इंटरपोलेशन पहचान और लिप-सिंक सत्यापन।",
          stat: "वास्तविक समय"
        },
        documentAuth: {
          title: "दस्तावेज़ प्रामाणिकता",
          description: "कानूनी दस्तावेज़ अखंडता के लिए फ़ॉन्ट फोरेंसिक, हस्ताक्षर सत्यापन, लेआउट विश्लेषण और ब्लॉकचेन टाइमस्टैंप सत्यापन।",
          stat: "अदालत-तैयार"
        },
        emailIntel: {
          title: "ईमेल इंटेलिजेंस",
          description: "हेडर फोरेंसिक, SPF/DKIM सत्यापन, प्रेषक प्रतिष्ठा विश्लेषण और खतरे की खुफिया जानकारी द्वारा संचालित फ़िशिंग पहचान।",
          stat: "ISP-एकीकृत"
        },
        audioAnalysis: {
          title: "ऑडियो विश्लेषण",
          description: "वॉयस बायोमैट्रिक मिलान, सिंथेटिक भाषण पहचान, ध्वनिक पर्यावरण विश्लेषण और डीपफेक ऑडियो पहचान।",
          stat: "तंत्रिका नेट"
        },
        textDetection: {
          title: "पाठ पहचान",
          description: "सिंथेटिक पाठ पहचान के लिए जटिलता स्कोरिंग, उछाल विश्लेषण, स्टाइलोमेट्री मिलान और LLM एट्रिब्यूशन।",
          stat: "GPT-4 तैयार"
        }
      },
      process: {
        badge: "यह कैसे काम करता है",
        title: "तीन चरणों में",
        titleHighlight: "फोरेंसिक पाइपलाइन",
        description: "अंतर्ग्रहण से सत्यापित रिपोर्ट तक, हमारी स्वचालित पाइपलाइन सटीकता, पारदर्शिता और कानूनी स्वीकार्यता सुनिश्चित करती है।",
        step1: {
          title: "सुरक्षित अंतर्ग्रहण",
          description: "किसी भी डिजिटल संपत्ति को खींचें और छोड़ें। हम हिरासत की श्रृंखला के लिए स्वचालित मेटाडेटा संरक्षण और क्रिप्टोग्राफ़िक हैशिंग के साथ 200+ प्रारूपों का समर्थन करते हैं।",
          features: {
            f1: "एंड-टू-एंड एन्क्रिप्शन",
            f2: "मेटाडेटा निष्कर्षण",
            f3: "हैश सत्यापन"
          }
        },
        step2: {
          title: "तंत्रिका विश्लेषण",
          description: "विशिष्ट एआई मॉडल का हमारा पहनावा 50+ फोरेंसिक जांच चौकियों के माध्यम से सामग्री को संसाधित करता है, मानवीय आंखों के लिए अदृश्य विसंगतियों का पता लगाता है।",
          features: {
            f1: "50+ पता लगाने वाले मॉडल",
            f2: "उप-सेकंड प्रसंस्करण",
            f3: "आत्मविश्वास स्कोरिंग"
          }
        },
        step3: {
          title: "सत्यापित रिपोर्ट",
          description: "कानूनी कार्यवाही के लिए व्याख्यात्मक एआई अंतर्दृष्टि, विसंगति दृश्यता और प्रतिलिपि प्रस्तुत करने योग्य साक्ष्य के साथ अदालत के लिए तैयार दस्तावेज प्राप्त करें।",
          features: {
            f1: "पीडीएफ निर्यात",
            f2: "एपीआई एकीकरण",
            f3: "ब्लॉकचेन टाइमस्टैम्प"
          }
        }
      },
      testimonials: {
        badge: "दुनिया भर में विश्वसनीय",
        title: "सत्यापन की",
        titleHighlight: "आवाजें",
        item1: {
          quote: "ऑथेनेक्स दुष्प्रचार के खिलाफ हमारी रक्षा की पहली पंक्ति बन गया है। व्याख्यात्मक एआई रिपोर्टें अदालत के लिए तैयार हैं और कई कानूनी कार्यवाहियों में टिके हुए हैं।",
          author: "सारा चेन",
          role: "सूचना सुरक्षा निदेशक",
          org: "ग्लोबल न्यूज़ नेटवर्क"
        },
        item2: {
          quote: "उनके विश्लेषण में फोरेंसिक विवरण अभूतपूर्व है। हमने उल्लेखनीय आसानी से उनकी एपीआई को हमारे साक्ष्य प्रबंधन प्रणाली में एकीकृत किया है।",
          author: "मार्कस रोड्रिगेज",
          role: "डिजिटल साक्ष्य विशेषज्ञ",
          org: "संघीय जांच ब्यूरो"
        },
        item3: {
          quote: "हमने छह अलग-अलग समाधानों का मूल्यांकन किया। ऑथेनेक्स एकमात्र ऐसा मंच था जो लगातार सटीकता के साथ नवीनतम प्रसार मॉडल का पता लगा सकता था।",
          author: "डॉ एमिली वॉटसन",
          role: "मुख्य प्रौद्योगिकी अधिकारी",
          org: "सिक्योरवोट इंक।"
        }
      },
      cta: {
        title: "डिजिटल सत्य की रक्षा के लिए",
        titleHighlight: "तैयार?",
        description: "सिंथेटिक मीडिया का मुकाबला करने और सूचना अखंडता को संरक्षित करने के लिए ऑथेनेक्स का उपयोग करने वाले 150 से अधिक उद्यमों और सरकारी एजेंसियों में शामिल हों।",
        start: "निःशुल्क परीक्षण शुरू करें",
        demo: "डेमो शेड्यूल करें",
        footer: "क्रेडिट कार्ड की आवश्यकता नहीं • 14 दिन का निःशुल्क परीक्षण • SOC 2 के अनुरूप"
      },
      footer: {
        tagline: "2026 से डिजिटल सत्य की रक्षा",
        links: {
          privacy: "गोपनीयता",
          terms: "शर्तें",
          security: "सुरक्षा",
          api: "API"
        }
      }
    },
    legal: {
      hero: {
        title: "कानूनी सुरक्षा और एआई दुरुपयोग सुरक्षा",
        subtitle: "भारतीय कानून के तहत एआई-जनित डीपफेक, पहचान की चोरी और डिजिटल धोखाधड़ी से आपके अधिकार, कानूनी मार्ग और सुरक्षा",
        stats: {
          casesReported: "रिपोर्ट किए गए मामले",
          arrests: "गिरफ्तारियां",
          lawsEnforced: "लागू कानून"
        }
      },
      actionSection: {
        title: "तत्काल कार्रवाई करें",
        subtitle: "साइबर अपराध रिपोर्टिंग और कानूनी संसाधनों तक सीधी पहुंच",
        buttons: {
          reportCybercrime: {
            label: "साइबर अपराध की रिपोर्ट करें",
            desc: "सभी डिजिटल अपराधों के लिए राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल",
            authority: "गृह मंत्रालय, भारत सरकार",
            when: "एआई-जनित सामग्री के दुरुपयोग, पहचान की चोरी या ऑनलाइन उत्पीड़न सहित कोई भी साइबर अपराध"
          },
          fileFIR: {
            label: "ऑनलाइन एफआईआर दर्ज करें",
            desc: "प्रथम सूचना रिपोर्ट पंजीकरण के लिए राज्य पुलिस पोर्टल",
            authority: "राज्य पुलिस विभाग",
            when: "जब भौतिक पुलिस स्टेशन की यात्रा तुरंत संभव नहीं है; व्यक्तिगत यात्रा के साथ अनुवर्ती कार्रवाई करें"
          },
          identityTheft: {
            label: "पहचान की चोरी की रिपोर्ट करें",
            desc: "पहचान से संबंधित साइबर अपराधों के लिए समर्पित पोर्टल",
            authority: "भारतीय साइबर अपराध समन्वय केंद्र",
            when: "कृत्रिम पहचान निर्माण, प्रतिरूपण, या व्यक्तिगत जानकारी का अनधिकृत उपयोग"
          },
          womenChild: {
            label: "महिला और बाल सुरक्षा",
            desc: "लिंग-आधारित और बच्चों को लक्षित एआई दुरुपयोग के लिए विशेष रिपोर्टिंग",
            authority: "राष्ट्रीय महिला आयोग, एनसीपीसीआर",
            when: "डीपफेक पोर्नोग्राफी, गैर-सहमति वाली अंतरंग छवियां, बच्चों को लक्षित कृत्रिम सामग्री"
          },
          helpline: {
            label: "राष्ट्रीय साइबर हेल्पलाइन",
            desc: "साइबर अपराध मार्गदर्शन के लिए 24/7 टेलीफोन सहायता",
            authority: "इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय",
            when: "तत्काल मार्गदर्शन की आवश्यकता, रिपोर्टिंग प्रक्रिया पर स्पष्टीकरण, आपातकालीन स्थितियां"
          },
          sebi: {
            label: "सेबी शिकायत पोर्टल",
            desc: "प्रतिभूति बाजार धोखाधड़ी और एआई-संचालित निवेश घोटाले",
            authority: "भारतीय प्रतिभूति एवं विनिमय बोर्ड",
            when: "एआई-जनित बाजार हेरफेर, धोखाधड़ी निवेश योजनाएं, कृत्रिम कॉर्पोरेट संचार"
          }
        }
      },
      privacy: {
        title: "गोपनीयता और डेटा सुरक्षा",
        subtitle: "हम आपके डेटा की सुरक्षा कैसे करते हैं",
        processedData: {
          title: "हम जो डेटा प्रोसेस करते हैं",
          items: [
            "फोरेंसिक विश्लेषण के लिए प्रस्तुत सामग्री (चित्र, ऑडियो, दस्तावेज़, टेक्स्ट)",
            "पहचान एल्गोरिदम के लिए आवश्यक तकनीकी मेटाडेटा",
            "खाता प्रमाणीकरण और प्राधिकरण क्रेडेंशियल",
            "विश्लेषण टाइमस्टैम्प और प्रसंस्करण अवधि लॉग",
            "प्लेटफ़ॉर्म सुधार के लिए गुमनाम उपयोग पैटर्न"
          ]
        },
        neverStored: {
          title: "कभी संग्रहीत नहीं",
          items: [
            "विश्लेषण पूर्ण होने के बाद कच्ची सामग्री (24-घंटे स्वतः विलोपन)",
            "खाता आवश्यकताओं से परे व्यक्तिगत पहचान",
            "तृतीय-पक्ष डेटा या असंबद्ध उपयोगकर्ता जानकारी",
            "स्पष्ट उपयोगकर्ता पहुंच अनुमति के बिना विश्लेषण परिणाम",
            "क्रॉस-संदर्भित बाहरी डेटाबेस जानकारी"
          ]
        },
        encryption: {
          title: "एन्क्रिप्शन और सुरक्षा",
          items: [
            "आराम पर डेटा के लिए AES-256 एन्क्रिप्शन",
            "सभी डेटा ट्रांजिट के लिए TLS 1.3",
            "संवेदनशील फोरेंसिक स्थानांतरण के लिए एंड-टू-एंड एन्क्रिप्शन",
            "हार्डवेयर सुरक्षा मॉड्यूल (HSM) संरक्षित कुंजी प्रबंधन",
            "सामग्री प्रसंस्करण के लिए शून्य-ज्ञान वास्तुकला"
          ]
        },
        rights: {
          title: "आपके अधिकार",
          items: {
            privacy: {
              title: "गोपनीयता का अधिकार",
              desc: "आपकी सामग्री को पृथक वातावरण में बिना किसी बाहरी पहुंच के संसाधित किया जाता है"
            },
            deletion: {
              title: "डेटा हटाने का अधिकार",
              desc: "सभी संबद्ध डेटा और विश्लेषण इतिहास के तत्काल विलोपन का अनुरोध करें"
            },
            transparency: {
              title: "पारदर्शिता का अधिकार",
              desc: "आपके डेटा को कैसे संसाधित और संभाला गया, इसके पूर्ण लॉग तक पहुंचें"
            },
            portability: {
              title: "पोर्टेबिलिटी का अधिकार",
              desc: "अपने सभी डेटा और विश्लेषण रिपोर्ट को मानक प्रारूपों में निर्यात करें"
            }
          }
        },
        compliance: {
          title: "अनुपालन संरेखण",
          items: {
            it: {
              title: "सूचना प्रौद्योगिकी अधिनियम, 2000",
              desc: "संवेदनशील डेटा सुरक्षा के लिए धारा 43A और SPDI नियम अनुपालन"
            },
            dpdp: {
              title: "डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम",
              desc: "उद्देश्य सीमा, डेटा न्यूनीकरण और भंडारण सीमा के सिद्धांत"
            },
            gdpr: {
              title: "वैश्विक गोपनीयता मानक",
              desc: "क्षेत्राधिकार दावों के बिना GDPR-संरेखित गोपनीयता-द्वारा-डिज़ाइन सिद्धांत"
            }
          }
        }
      },
      security: {
        title: "प्लेटफ़ॉर्म सुरक्षा और दुरुपयोग रोकथाम",
        prevention: {
          title: "रोकथाम उपाय",
          items: {
            integrity: {
              title: "परिणाम अखंडता सुरक्षा",
              desc: "सभी फोरेंसिक रिपोर्टों के क्रिप्टोग्राफिक हस्ताक्षर छेड़छाड़ या जालसाजी को रोकते हैं"
            },
            falseAccusation: {
              title: "झूठे आरोप सुरक्षा",
              desc: "आत्मविश्वास स्कोरिंग और अनिश्चितता मात्राकरण निश्चित झूठे दावों को रोकते हैं"
            },
            harassment: {
              title: "उत्पीड़न विरोधी प्रोटोकॉल",
              desc: "दर सीमा और पैटर्न पहचान व्यक्तियों के व्यवस्थित लक्ष्यीकरण को रोकते हैं"
            }
          }
        },
        antiAbuse: {
          title: "दुरुपयोग विरोधी तंत्र",
          items: {
            rateLimit: {
              title: "दर सीमा",
              desc: "बुद्धिमान थ्रॉटलिंग थोक विश्लेषण दुरुपयोग और API शोषण को रोकती है"
            },
            humanReview: {
              title: "मानव समीक्षा वृद्धि",
              desc: "उच्च-दांव विश्लेषण विशेषज्ञ फोरेंसिक समीक्षक सत्यापन के लिए चिह्नित"
            },
            monitoring: {
              title: "संदिग्ध उपयोग निगरानी",
              desc: "विषम प्लेटफ़ॉर्म उपयोग पैटर्न का एआई-संचालित पहचान"
            },
            verification: {
              title: "खाता सत्यापन स्तर",
              desc: "पहचान सत्यापन और उपयोग इतिहास के आधार पर प्रगतिशील विश्वास स्तर"
            }
          }
        }
      },
      misuse: {
        title: "एआई दुरुपयोग को पहचानना",
        subtitle: "खतरे के परिदृश्य और सुरक्षात्मक कार्रवाइयां",
        scenarios: {
          deepfakeHarassment: {
            title: "डीपफेक उत्पीड़न",
            desc: "सहमति के बिना व्यक्तियों को समझौता या झूठी स्थितियों में दर्शाने वाले कृत्रिम मीडिया का निर्माण और वितरण",
            harm: "मनोवैज्ञानिक आघात, प्रतिष्ठा विनाश, संबंध क्षति, पेशेवर परिणाम",
            affected: "व्यक्ति, सार्वजनिक हस्तियां, निजी नागरिक, महिलाएं और बच्चे",
            action: "तुरंत साक्ष्य सुरक्षित रखें, अपराधियों से न जुड़ें, साइबर अपराध शिकायत दर्ज करें, कानूनी निषेधाज्ञा की मांग करें"
          },
          fakeVideos: {
            title: "एआई-जनित नकली वीडियो",
            desc: "वास्तविक व्यक्तियों को जिम्मेदार ठहराए गए गलत घटनाओं, बयानों या कार्यों को दिखाने वाली मनगढ़ंत वीडियो सामग्री",
            harm: "गलत सूचना प्रसार, चुनावी हेरफेर, कॉर्पोरेट तोड़फोड़, सामाजिक अशांति",
            affected: "राजनेता, सेलिब्रिटी, कॉर्पोरेट नेता, सामान्य नागरिक",
            action: "कई स्रोतों के माध्यम से सत्यापित करें, AUTHENEX फोरेंसिक विश्लेषण का उपयोग करें, प्लेटफ़ॉर्म और अधिकारियों को रिपोर्ट करें"
          },
          fakeDocuments: {
            title: "नकली कानूनी / शैक्षणिक दस्तावेज़",
            desc: "एआई-जनित प्रमाणपत्र, अदालती आदेश, शैक्षणिक क्रेडेंशियल या आधिकारिक पत्राचार",
            harm: "शैक्षिक धोखाधड़ी, कानूनी प्रणाली दुरुपयोग, रोजगार धोखा, आप्रवासन धोखाधड़ी",
            affected: "शैक्षणिक संस्थान, नियोक्ता, सरकारी एजेंसियां, अदालतें",
            action: "दस्तावेज़ उत्पत्ति सत्यापित करें, प्रमाणीकरण सुविधाओं की जांच करें, जारी करने वाले अधिकारियों को रिपोर्ट करें"
          },
          identityImpersonation: {
            title: "पहचान प्रतिरूपण",
            desc: "झूठी डिजिटल पहचान का कृत्रिम निर्माण या प्लेटफार्मों पर वास्तविक व्यक्तियों का प्रतिरूपण",
            harm: "वित्तीय धोखाधड़ी, आपराधिक गतिविधि का श्रेय, सामाजिक इंजीनियरिंग, विश्वास क्षरण",
            affected: "सोशल मीडिया उपयोगकर्ता, पेशेवर, कमजोर आबादी, व्यवसाय",
            action: "डिजिटल फुटप्रिंट की निगरानी करें, बहु-कारक प्रमाणीकरण सक्षम करें, प्रतिरूपण प्लेटफ़ॉर्म की रिपोर्ट करें"
          },
          politicalMisinfo: {
            title: "राजनीतिक गलत सूचना",
            desc: "चुनाव या राजनीतिक प्रवचन को प्रभावित करने के लिए एआई-जनित सामग्री की समन्वित तैनाती",
            harm: "लोकतांत्रिक प्रक्रिया हस्तक्षेप, मतदाता हेरफेर, सामाजिक ध्रुवीकरण, हिंसा उकसावा",
            affected: "चुनावी निकाय, राजनीतिक उम्मीदवार, सामान्य मतदाता, लोकतांत्रिक संस्थान",
            action: "चुनाव आयोग को रिपोर्ट करें, साझा करने से पहले तथ्य-जांच करें, प्लेटफ़ॉर्म पारदर्शिता पहलों का समर्थन करें"
          },
          financialFraud: {
            title: "एआई का उपयोग करके वित्तीय धोखाधड़ी",
            desc: "कृत्रिम बाजार हेरफेर, धोखाधड़ी निवेश योजनाएं, या एआई-संचालित फ़िशिंग अभियान",
            harm: "आर्थिक नुकसान, बाजार अस्थिरता, निवेशक विश्वास क्षरण, व्यवस्थित जोखिम",
            affected: "खुदरा निवेशक, वित्तीय संस्थान, नियामक निकाय, पेंशन फंड",
            action: "सेबी/आरबीआई को रिपोर्ट करें, आर्थिक अपराध शिकायत दर्ज करें, लेनदेन रिकॉर्ड सुरक्षित रखें"
          }
        }
      },
      legalFramework: {
        title: "कानूनी ढांचा",
        subtitle: "डिजिटल अपराधों को नियंत्रित करने वाले भारतीय कानून",
        laws: {
          it: {
            act: "सूचना प्रौद्योगिकी अधिनियम, 2000",
            section: "धारा 66C, 66D, 66E",
            desc: "पहचान की चोरी, व्यक्तित्व द्वारा धोखा, और डिजिटल साधनों के माध्यम से गोपनीयता का उल्लंघन",
            applicability: "एआई-जनित प्रतिरूपण और डीपफेक वितरण पर सीधे लागू"
          },
          bns: {
            act: "भारतीय न्याय संहिता, 2023",
            section: "धारा 318, 319, 336",
            desc: "धोखा, व्यक्तित्व द्वारा धोखा, और इलेक्ट्रॉनिक रिकॉर्ड की जालसाजी",
            applicability: "एआई-जनित धोखाधड़ी दस्तावेज़ और कृत्रिम पहचान अपराधों को कवर करता है"
          },
          copyright: {
            act: "कॉपीराइट अधिनियम, 1957",
            section: "धारा 51, 63",
            desc: "कॉपीराइट का उल्लंघन और कॉपीराइट उल्लंघन का अपराध",
            applicability: "कृत्रिम मीडिया में समानता और व्यक्तित्व अधिकारों का अनधिकृत उपयोग"
          },
          indecent: {
            act: "महिलाओं के अभद्र प्रतिनिधित्व अधिनियम, 1986",
            section: "पूर्ण अधिनियम",
            desc: "विज्ञापन या प्रकाशन के माध्यम से महिलाओं के अभद्र प्रतिनिधित्व का निषेध",
            applicability: "डीपफेक पोर्नोग्राफी और गैर-सहमति वाली कृत्रिम अंतरंग छवियां"
          }
        }
      },
      remedies: {
        title: "उपचार",
        subtitle: "न्याय के लिए कदम",
        steps: {
          preserve: {
            step: "1",
            title: "डिजिटल साक्ष्य संरक्षित करें",
            desc: "अपराधी को सचेत किए बिना तुरंत सभी डिजिटल निशान सुरक्षित करें",
            details: [
              "टाइमस्टैम्प और URL दृश्यमान के साथ स्क्रीनशॉट लें",
              "मेटाडेटा बरकरार रखते हुए मूल फ़ाइलें सहेजें",
              "डिवाइस जानकारी और पहुंच लॉग रिकॉर्ड करें",
              "किसी भी सामग्री को हटाएं या संशोधित न करें",
              "अखंडता सत्यापन के लिए क्रिप्टोग्राफिक हैश बनाएं"
            ]
          },
          verify: {
            step: "2",
            title: "AUTHENEX का उपयोग करके सामग्री सत्यापित करें",
            desc: "साक्ष्य मूल्य के लिए फोरेंसिक सत्यापन रिपोर्ट जनरेट करें",
            details: [
              "संदिग्ध सामग्री को AUTHENEX प्लेटफ़ॉर्म पर अपलोड करें",
              "व्यापक बहु-संकेत विश्लेषण का अनुरोध करें",
              "टाइमस्टैम्प के साथ हस्ताक्षरित फोरेंसिक रिपोर्ट डाउनलोड करें",
              "प्लेटफ़ॉर्म सत्यापन के माध्यम से रिपोर्ट प्रामाणिकता सत्यापित करें",
              "पहुंच नियंत्रण के साथ रिपोर्ट सुरक्षित रूप से संग्रहीत करें"
            ]
          },
          document: {
            step: "3",
            title: "घटना दस्तावेज़ करें",
            desc: "कानूनी कार्यवाही के लिए व्यापक घटना रिकॉर्ड बनाएं",
            details: [
              "घटनाओं का कालानुक्रमिक लॉग बनाए रखें",
              "सभी संचार प्रयासों को रिकॉर्ड करें",
              "प्रभाव और हानि को दस्तावेज़ित करें",
              "संभावित गवाहों की पहचान करें",
              "यदि लागू हो तो वित्तीय रिकॉर्ड सुरक्षित रखें"
            ]
          },
          complaint: {
            step: "4",
            title: "साइबर अपराध शिकायत दर्ज करें",
            desc: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल पर रिपोर्ट करें",
            details: [
              "cybercrime.gov.in रिपोर्टिंग पोर्टल एक्सेस करें",
              "उपयुक्त अपराध श्रेणी चुनें",
              "साक्ष्य के रूप में AUTHENEX फोरेंसिक रिपोर्ट अपलोड करें",
              "विस्तृत घटना विवरण प्रदान करें",
              "ट्रैकिंग के लिए पावती संख्या प्राप्त करें"
            ]
          },
          fir: {
            step: "5",
            title: "यदि आवश्यक हो तो एफआईआर दर्ज करें",
            desc: "संज्ञेय अपराधों के लिए पुलिस को बढ़ावा दें",
            details: [
              "स्थानीय पुलिस स्टेशन या साइबर सेल पर जाएं",
              "मुद्रित फोरेंसिक रिपोर्ट और साक्ष्य ले जाएं",
              "संबंधित आईटी अधिनियम धाराओं के तहत एफआईआर का अनुरोध करें",
              "अपने रिकॉर्ड के लिए एफआईआर की प्रति प्राप्त करें",
              "जांच अधिकारी के साथ नियमित रूप से अनुवर्ती कार्रवाई करें"
            ]
          },
          legal: {
            step: "6",
            title: "कानूनी सलाह लें",
            desc: "जटिल मामलों या नागरिक उपचार के लिए वकील को नियुक्त करें",
            details: [
              "साइबर कानून में विशेषज्ञता वाले वकील से परामर्श करें",
              "नागरिक निषेधाज्ञा संभावनाओं का मूल्यांकन करें",
              "यदि लागू हो तो मानहानि कार्यवाही पर विचार करें",
              "संभावित अदालत गवाही के लिए तैयारी करें",
              "पीड़ित मुआवजा योजनाओं का पता लगाएं"
            ]
          }
        }
      },
      disclaimer: {
        title: "कानूनी अस्वीकरण और नैतिक स्थिति",
        content: {
          para1: "AUTHENEX एक अदालत, कानून प्रवर्तन एजेंसी या नियामक प्राधिकरण नहीं है। हम फोरेंसिक विश्लेषण उपकरण और शैक्षिक संसाधन प्रदान करने वाला एक प्रौद्योगिकी प्लेटफ़ॉर्म हैं। हमारी रिपोर्टें एल्गोरिदमिक विश्लेषण के आधार पर तकनीकी अंतर्दृष्टि प्रदान करती हैं; वे कानूनी निष्कर्ष या निश्चित प्रमाण नहीं हैं।",
          para2: "डिजिटल सामग्री की प्रामाणिकता, वैधता या परिणामों के बारे में अंतिम निर्णय विशेष रूप से सक्षम न्यायिक प्राधिकरणों, कानून प्रवर्तन एजेंसियों और नियामक निकायों के पास है। AUTHENEX विवादों को निर्णय नहीं देता, बाध्यकारी निर्णय जारी नहीं करता, या कानूनी उपचार लागू नहीं करता।",
          para3: "हम नैतिक एआई विकास और जिम्मेदार प्रौद्योगिकी तैनाती के लिए प्रतिबद्ध हैं। हमारा प्लेटफ़ॉर्म सत्य का समर्थन करने, कमजोर आबादी की सुरक्षा करने और डिजिटल विश्वास को मजबूत करने के लिए डिज़ाइन किया गया है—लेकिन यह न्याय की खोज में कई उपकरणों में से एक है। हम सभी उपयोगकर्ताओं के लिए सख्त गोपनीयता सुरक्षा बनाए रखते हुए अधिकृत एजेंसियों से वैध अनुरोधों के साथ सक्रिय रूप से सहयोग करते हैं।",
          updated: "अंतिम अपडेट: फरवरी 2026. यह दस्तावेज़ कानूनों और प्लेटफ़ॉर्म क्षमताओं के विकास के रूप में संशोधन के अधीन है।"
        }
      },
      footer: {
        copyright: "© 2026 Authenex. राष्ट्रीय डिजिटल ट्रस्ट प्लेटफ़ॉर्म।",
        tagline: "नैतिक एआई, डिजाइन द्वारा गोपनीयता और सभी के लिए डिजिटल सुरक्षा के लिए प्रतिबद्ध।"
      }
    },
    auth: {
      welcomeBack: "वापसी पर स्वागत है",
      subtitle: "फोरेंसिक विश्लेषण उपकरणों तक पहुंचने के लिए साइन इन करें",
      continueGoogle: "Google के साथ जारी रखें",
      continueEmail: "या ईमेल के साथ जारी रखें",
      continueGuest: "अतिथि के रूप में जारी रखें (कोई सेटअप नहीं)",
      emailLabel: "ईमेल पता",
      passwordLabel: "पासवर्ड",
      signInButton: "साइन इन करें",
      secured: "256-बिट एन्क्रिप्शन के साथ सुरक्षित",
      backHome: "वापस घर जाओ"
    },

  },
  mr: {
    nav: {
      dashboard: "डॅशबोर्ड",
      newAnalysis: "नवीन विश्लेषण",
      myCases: "माझी प्रकरणे",
      analytics: "अभ्यास",
      settings: "सेटिंग्ज",
      help: "मदत",
      logout: "बाहेर पडणे",
      profile: "प्रोफाइल",
      legal: "कायदेशीर सुरक्षा"
    },
    header: {
      searchPlaceholder: "प्रकरणे शोधा...",
      systemOnline: "सिस्टम ऑनलाइन",
      notifications: "सूचना",
      markAllRead: "सर्व वाचलेले म्हणून चिन्हांकित करा",
      noNotifications: "कोणतीही सूचना नाही",
      viewAll: "सर्व सूचना पहा"
    },
    dashboard: {
      title: "डॅशबोर्ड",
      subtitle: "सायबर गुन्हे आणि एआय धोक्यांवर रिअल-टाइम माहिती.",
      stats: {
        cybercrime: "सायबर गुन्हे प्रकरणे",
        deepfake: "डीपफेक प्रकरणे",
        aiFraud: "एआई फसवणूक",
        arrests: "अटक"
      },
      recentActivity: "अलीकडील क्रियाकलाप",
      analysisLink: "विश्लेषण",
      newsFeed: "थेट बुद्धिमत्ता फीड",
      recentAnalysis: {
        status: {
          completed: "विश्लेषण पूर्ण",
          processing: "प्रक्रिया होत आहे..."
        },
        actions: {
          share: "शेअर करा",
          download: "रिपोर्ट डाउनलोड करा"
        }
      }
    },
    analyze: {
      title: "फॉरेन्सिक विश्लेषण",
      subtitle: "सामग्री प्रकार निवडा आणि पडताळणीसाठी फाइल्स अपलोड करा",
      types: {
        image: "इमेज फॉरेन्सिक",
        video: "व्हिडिओ विश्लेषण",
        document: "कागदपत्र तपासणी",
        audio: "ऑडिओ फॉरेन्सिक",
        email: "ईमेल पडताळणी",
        text: "मजकूर ओळख"
      },
      steps: {
        upload: "अपलोड",
        scanning: "स्कॅनिंग",
        aiAnalysis: "एआई विश्लेषण",
        results: "परिणाम"
      },
      dropzone: {
        dragActive: "फाईल्स येथे सोडा",
        dragDrop: "फाईल्स येथे ड्रॅग आणि ड्रॉप करा",
        browse: "किंवा आपल्या संगणकावरून ब्राउझ करण्यासाठी क्लिक करा",
        selectFiles: "फाईल्स निवडा",
        selectedFiles: "निवडलेल्या फाईल्स"
      },
      button: {
        start: "विश्लेषण सुरू करा",
        analyzing: "विश्लेषण करत आहे..."
      },
      results: {
        authentic: "अस्सल सामग्री",
        aiGenerated: "एआई निर्मित",
        verdict: "निकाल",
        forensicBreakdown: "फॉरेन्सिक विश्लेषण तपशील",
        detailedFindings: "तपशीलवार निष्कर्ष",
        newAnalysis: "नवीन विश्लेषण",
        downloadReport: "अहवाल डाउनलोड करा",
        processing: "फॉरेन्सिक विश्लेषण प्रक्रिया करत आहे... कृपया प्रतीक्षा करा"
      },
      report: {
        probability: "Probability",
        human: "Human",
        authenticity: "Authenticity",
        id: "ID",
        risk: "Risk",
        authenticityAssessment: "Authenticity Assessment",
        aiProbability: "AI Probability",
        humanAuthenticity: "Human Authenticity",
        confidenceScore: "Confidence Score",
        syntheticDetected: "Synthetic Content Detected",
        likelyAuthentic: "Content Likely Authentic",
        multiLayerAnalysis: "Multi-Layer Detection Analysis",
        layersAnalyzed: "layers analyzed with weighted scoring",
        overallConfidence: "Overall Confidence",
        layerContribution: "Layer Contribution Analysis (Score × Weight)",
        noLayers: "No Detection Layers Available",
        noLayersDesc: "The AI analysis did not return detailed layer data",
        categoryDistribution: "Category-wise Distribution",
        detectionFindings: "Detection Findings",
        heatmap: "Heatmap Analysis",
        temporal: "Temporal Consistency",
        forensicReport: "Forensic Analysis Report",
        examiner: "Examiner",
        date: "Date",
        conclusion: "Conclusion",
        recommendations: "Recommendations",
        tabs: {
          details: "Analysis Details",
          visual: "Visual Evidence",
          report: "Forensic Report"
        },
        error: {
          title: "No Analysis Data",
          desc: "Upload a file to begin analysis",
          action: "Start Analysis"
        }
      }
    },
    chat: {
      title: "ऑथेनेक्स एआई",
      subtitle: "फॉरेन्सिक इंटेलिजन्स",
      linked: "लिंक्ड",
      placeholder: "ऑथेनेक्स एआई ला विचारा...",
      listening: "ऐकत आहे...",
      welcome: "ऑथेनेक्स एआई कोर सुरू झाले. फॉरेन्सिक विश्लेषणासाठी तयार.",
      connectionError: "कनेक्शन त्रुटी. कृपया पुन्हा प्रयत्न करा."
    },
    cases: {
      title: "केस व्यवस्थापन",
      subtitle: "सर्व फॉरेन्सिक विश्लेषणांचे व्यवस्थापन आणि पुनरावलोकन करा",
      searchPlaceholder: "आयडी, शीर्षक किंवा टॅगद्वारे प्रकरणे शोधा...",
      filters: {
        all: "सर्व प्रकरणे",
        completed: "पूर्ण झाले",
        processing: "प्रक्रियेत",
        pending: "प्रलंबित"
      },
      table: {
        case: "प्रकरण",
        type: "प्रकार",
        date: "तारीख",
        status: "स्थिती",
        result: "निकाल",
        confidence: "आत्मविश्वास",
        actions: "क्रिया"
      },
      noCases: "कोणतीही प्रकरणे आढळली नाहीत"
    },
    news: {
      top: "ठळक बातम्या",
      deepfake: "डीपफेक",
      cybercrime: "सायबर गुन्हे",
      ai: "एआई सुरक्षा",
      policy: "धोरण",
      cases: "प्रकरणे",
      social: "सामाजिक"
    },
    scanHistory: {
      title: "अलीकडील स्कॅन",
      noData: "कोणताही स्कॅन इतिहास आढळला नाही.",
      loading: "इतिहास लोड होत आहे...",
      confidence: "आत्मविश्वास",
      justNow: "आत्ताच",
      ago: "पूर्वी"
    },
    profile: {
      tabs: {
        overview: "आढावा",
        activity: "क्रियाकलाप",
        achievements: "उपलब्धी"
      },
      edit: "प्रोफाइल संपादित करा",
      save: "बदल जतन करा",
      cancel: "रद्द करा",
      role: "भूमिका",
      location: "स्थान",
      credits: {
        available: "उपलब्ध क्रेडिट",
        refill: "भरण्याची तारीख",
        add: "क्रेडिट जोडा",
        usage: "मासिक वापर"
      },
      about: "बद्दल",
      email: "ईमेल",
      website: "वेबसाइट",
      memberSince: "सदस्यता तारीख",
      lastActive: "शेवटचे सक्रिय",
      plan: {
        current: "सध्याची योजना",
        renews: "नूतनीकरण",
        upgrade: "योजना अपग्रेड करा"
      },
      delete: {
        title: "खाते हटवायचे?",
        desc: "ही क्रिया पूर्ववत केली जाऊ शकत नाही. तुमचा सर्व डेटा कायमचा हटविला जाईल.",
        confirm: "हटवा"
      }
    },
    settings: {
      title: "सेटिंग्ज",
      subtitle: "तुमची खाते प्राधान्ये आणि सुरक्षा व्यवस्थापित करा.",
      appearance: "दिसणे",
      notifications: "सूचना",
      security: "सुरक्षा आणि गोपनीयता",
      items: {
        darkMode: "डार्क मोड",
        language: "भाषा",
        emailNotif: "ईमेल सूचना",
        pushNotif: "पुश सूचना"
      },
      securityScore: "सुरक्षा गुण",
      dangerZone: "धोकादायक क्षेत्र",
      deleteAccount: "खाते हटवा"
    },
    help: {
      hero: {
        badge: "मदत केंद्र",
        title: "आम्ही तुम्हाला कशी मदत करू शकतो?",
        subtitle: "शोध, वैशिष्ट्ये आणि समस्यानिवारण याबद्दल उत्तरे शोधा.",
        search: "उत्तरे शोधा..."
      },
      sections: {
        overview: "आढावा",
        detection: "शोध पद्धती",
        troubleshooting: "समस्यानिवारण",
        contact: "मदतीशी संपर्क साधा"
      },
      overview: {
        title: "ऑथेनेक्स काय आहे",
        desc: "डिजिटल सामग्रीच्या अधिकृततेचे विश्लेषण करण्यासाठी एआय-संचालित फॉरेन्सिक प्लॅटफॉर्म."
      },
      faq: {
        title: "वारंवार विचारले जाणारे प्रश्न",
        noResults: "काहीही सापडले नाही"
      },
      channels: {
        email: "ईमेल मदत",
        docs: "कागदपत्रे",
        report: "समस्या सांगा",
        chat: "लाइव्ह चॅट"
      },
      disclaimer: {
        title: "अस्वीकरण",
        text: "निकाल संभाव्यतेवर आधारित असतात आणि मानवी निर्णयासोबत वापरले पाहिजेत."
      }
    },
    landing: {
      nav: {
        brandTagline: "TrustLens",
        getStarted: "सुरू करा",
        signIn: "साईन इन",
        brand: "Authenex"
      },
      hero: {
        badge: "आता GPT-4 शोधासह",
        title1: "सत्य सत्यापित करा",
        title2: "डिजिटल वास्तवात",
        description: "Authenex 99.9% अचूकतेसह सिंथेटिक मीडिया शोधण्यासाठी न्यूरल फॉरेन्सिक्स, क्वांटम-प्रतिरोधक पडताळणी आणि स्पष्टीकरणात्मक AI एकत्र करते.",
        startAnalysis: "विनामूल्य विश्लेषण सुरू करा",
        watchDemo: "डेमो पहा",
        goToDashboard: "डॅशबोर्डवर जा",
        badges: {
          soc2: "SOC 2 प्रकार II",
          fisma: "FISMA अनुरूप",
          gdpr: "GDPR तयार"
        },
        stats: {
          verification: "पडताळणी",
          activeUsers: "सक्रिय वापरकर्ते"
        }
      },
      features: {
        sectionBadge: "प्लॅटफॉर्म क्षमता",
        sectionTitle: "सहा आयाम",
        sectionTitleHighlight: "डिजिटल फॉरेन्सिक्स",
        sectionDescription: "अत्याधुनिक न्यूरल नेटवर्क्स आणि पडताळणीद्वारे समर्थित सर्व डिजिटल सामग्री प्रकारांचे व्यापक विश्लेषण.",
        imageForensics: {
          title: "प्रतिमा फॉरेन्सिक्स",
          description: "प्रगत GAN फिंगरप्रिंटिंग आणि मेटाडेटा विश्लेषण वापरून AI-जनरेट केलेल्या प्रतिमा, डीपफेक आणि फेरफार केलेले फोटो शोधा.",
          stat: "99.9% अचूकता"
        },
        videoVerification: {
          title: "व्हिडिओ पडताळणी",
          description: "व्यापक व्हिडिओ सत्यतेसाठी तात्पुरते सातत्य विश्लेषण, फ्रेम-स्तरीय इंटरपोलेशन ओळख आणि लिप-सिंक पडताळणी.",
          stat: "रिअल-टाइम"
        },
        documentAuth: {
          title: "दस्तऐवज सत्यता",
          description: "कायदेशीर दस्तऐवज अखंडतेसाठी फॉन्ट फॉरेन्सिक्स, स्वाक्षरी पडताळणी, लेआउट विश्लेषण आणि ब्लॉकचेन टाइमस्टॅम्प पडताळणी.",
          stat: "न्यायालय-तयार"
        },
        emailIntel: {
          title: "ईमेल इंटेलिजन्स",
          description: "हेडर फॉरेन्सिक्स, SPF/DKIM पडताळणी, प्रेषक प्रतिष्ठा विश्लेषण आणि फिशिंग ओळख.",
          stat: "ISP-एकीकृत"
        },
        audioAnalysis: {
          title: "ऑडिओ विश्लेषण",
          description: "व्हॉइस बायोमेट्रिक जुळणी, सिंथेटिक भाषण ओळख, अकौस्टिक पर्यावरण विश्लेषण आणि डीपफेक ऑडिओ ओळख.",
          stat: "न्यूरल नेट"
        },
        textDetection: {
          title: "मजकूर ओळख",
          description: "सिंथेटिक मजकूर ओळखीसाठी perplexity स्कोअरिंग, burstiness विश्लेषण, शैली शैली जुळणी आणि LLM गुणधर्म.",
          stat: "GPT-4 तयार"
        }
      },
      process: {
        badge: "हे कसे कार्य करते",
        title: "तीन चरणांमध्ये",
        titleHighlight: "फॉरेन्सिक पाइपलाइन",
        description: "इंजेशनपासून सत्यापित अहवालापर्यंत, आमची स्वयंचलित पाइपलाइन अचूकता, पारदर्शकता आणि कायदेशीर स्वीकार्यता सुनिश्चित करते.",
        step1: {
          title: "सुरक्षित इंजेशन",
          description: "कोणतीही डिजिटल मालमत्ता ड्रॅग आणि ड्रॉप करा. आम्ही कस्टडीच्या साखळीसाठी स्वयंचलित मेटाडेटा जतन आणि क्रिप्टोग्राफिक हॅशिंगसह 200+ स्वरूपांना समर्थन देतो.",
          features: {
            f1: "एंड-टू-एंड एन्क्रिप्शन",
            f2: "मेटाडेटा निष्कर्षण",
            f3: "हॅश पडताळणी"
          }
        },
        step2: {
          title: "न्यूरल विश्लेषण",
          description: "विशिष्ट एआय मॉडेल्सचा आमचा समूह 50+ फॉरेन्सिक चेकपॉइंट्सद्वारे सामग्रीवर प्रक्रिया करतो, मानवी डोळ्यांना अदृश्य विसंगती शोधतो.",
          features: {
            f1: "50+ शोध मॉडेल",
            f2: "प्रगत प्रक्रिया",
            f3: "आत्मविश्वास स्कोरिंग"
          }
        },
        step3: {
          title: "सत्यापित अहवाल",
          description: "कायदेशीर कार्यवाहीसाठी स्पष्टीकरणात्मक एआय अंतर्दृष्टी, विसंगती व्हिज्युअलायझेशन आणि पुनरुत्पादित पुराव्यासह कोर्ट-तयार दस्तऐवज प्राप्त करा.",
          features: {
            f1: "पीडीएफ निर्यात",
            f2: "एपीआई एकत्रीकरण",
            f3: "ब्लॉकचेन टाइमस्टॅम्प"
          }
        }
      },
      testimonials: {
        badge: "जगभरात विश्वसनीय",
        title: "पडताळणीचे",
        titleHighlight: "आवाज",
        item1: {
          quote: "ऑथेनेक्स चुकीच्या माहितीविरुद्ध आमची संरक्षणाची पहिली ओळ बनली आहे. स्पष्टीकरणात्मक एआय अहवाल कोर्ट-तयार आहेत आणि अनेक कायदेशीर कार्यवाहीमध्ये टिकून आहेत.",
          author: "सारा चेन",
          role: "माहिती सुरक्षा संचालक",
          org: "ग्लोबल न्यूज नेटवर्क"
        },
        item2: {
          quote: "त्यांच्या विश्लेषणातील फॉरेन्सिक तपशील अभूतपूर्व आहे. आम्ही आमची एपीआई आमच्या पुरावा व्यवस्थापन प्रणालीमध्ये उल्लेखनीय सहजतेने एकत्रित केली आहे.",
          author: "मार्कस रोड्रिगेज",
          role: "डिजिटल पुरावा तज्ञ",
          org: "फेडरल ब्युरो ऑफ इन्व्हेस्टिगेशन"
        },
        item3: {
          quote: "आम्ही सहा वेगवेगळ्या उपायांचे मूल्यांकन केले. ऑथेनेक्स हे एकमेव व्यासपीठ होते जे सतत अचूकतेसह नवीनतम प्रसार मॉडेल शोधू शकत होते.",
          author: "डॉ एमिली वॉटसन",
          role: "मुख्य तंत्रज्ञान अधिकारी",
          org: "सिक्योरवोट इंक."
        }
      },
      cta: {
        title: "डिजिटल सत्याचे रक्षण करण्यास",
        titleHighlight: "तयार?",
        description: "सिंथेटिक मीडियाचा सामना करण्यासाठी आणि माहितीची अखंडता जपण्यासाठी ऑथेनेक्स वापरणार्‍या 150 हून अधिक उपक्रम आणि सरकारी एजन्सीमध्ये सामील व्हा.",
        start: "विनामूल्य चाचणी सुरू करा",
        demo: "डेमो शेड्यूल करा",
        footer: "क्रेडिट कार्ड आवश्यक नाही • 14 दिवसाची विनामूल्य चाचणी • SOC 2 अनुरूप"
      },
      footer: {
        tagline: "2026 पासून डिजिटल सत्याचे रक्षण",
        links: {
          privacy: "गोपनीयता",
          terms: "अटी",
          security: "सुरक्षा",
          api: "API"
        }
      }
    },
    legal: {
      hero: {
        title: "कायदेशीर संरक्षण आणि एआय गैरवापर संरक्षण",
        subtitle: "भारतीय कायद्यानुसार एआय-व्युत्पन्न डीपफेक, ओळख चोरी आणि डिजिटल फसवणुकीपासून आपले अधिकार, कायदेशीर मार्ग आणि संरक्षण",
        stats: {
          casesReported: "नोंदवलेली प्रकरणे",
          arrests: "अटक",
          lawsEnforced: "लागू कायदे"
        }
      },
      actionSection: {
        title: "त्वरित कारवाई करा",
        subtitle: "सायबर गुन्हा रिपोर्टिंग आणि कायदेशीर संसाधनांकडे थेट प्रवेश",
        buttons: {
          reportCybercrime: {
            label: "सायबर गुन्हा नोंदवा",
            desc: "सर्व डिजिटल गुन्ह्यांसाठी राष्ट्रीय सायबर गुन्हा रिपोर्टिंग पोर्टल",
            authority: "गृह मंत्रालय, भारत सरकार",
            when: "एआय-व्युत्पन्न सामग्री गैरवापर, ओळख चोरी किंवा ऑनलाइन छळ यासह कोणताही सायबर गुन्हा"
          },
          fileFIR: {
            label: "ऑनलाइन एफआयआर नोंदवा",
            desc: "प्रथम माहिती अहवाल नोंदणीसाठी राज्य पोलिस पोर्टल",
            authority: "राज्य पोलिस विभाग",
            when: "जेव्हा भौतिक पोलीस स्टेशन भेट त्वरित शक्य नाही; वैयक्तिक भेटीसह पाठपुरावा करा"
          },
          identityTheft: {
            label: "ओळख चोरी नोंदवा",
            desc: "ओळख-संबंधित सायबर गुन्ह्यांसाठी समर्पित पोर्टल",
            authority: "भारतीय सायबर गुन्हा समन्वय केंद्र",
            when: "कृत्रिम ओळख निर्मिती, प्रतिरूपण, किंवा वैयक्तिक माहितीचा अनधिकृत वापर"
          },
          womenChild: {
            label: "महिला आणि बाल सुरक्षा",
            desc: "लिंग-आधारित आणि मुलांना लक्ष्य केलेल्या एआय गैरवापरासाठी विशेष रिपोर्टिंग",
            authority: "राष्ट्रीय महिला आयोग, एनसीपीसीआर",
            when: "डीपफेक पोर्नोग्राफी, गैर-सहमती अंतरंग प्रतिमा, मुलांना लक्ष्य केलेली कृत्रिम सामग्री"
          },
          helpline: {
            label: "राष्ट्रीय सायबर हेल्पलाइन",
            desc: "सायबर गुन्हा मार्गदर्शनासाठी 24/7 दूरध्वनी सहाय्य",
            authority: "इलेक्ट्रॉनिक्स आणि माहिती तंत्रज्ञान मंत्रालय",
            when: "त्वरित मार्गदर्शन आवश्यक, रिपोर्टिंग प्रक्रियेवर स्पष्टीकरण, आपत्कालीन परिस्थिती"
          },
          sebi: {
            label: "सेबी तक्रार पोर्टल",
            desc: "सिक्युरिटीज मार्केट फसवणूक आणि एआय-चालित गुंतवणूक घोटाळे",
            authority: "भारतीय सिक्युरिटीज अँड एक्सचेंज बोर्ड",
            when: "एआय-व्युत्पन्न बाजार हेराफेरी, फसव्या गुंतवणूक योजना, कृत्रिम कॉर्पोरेट संवाद"
          }
        }
      },
      privacy: {
        title: "गोपनीयता आणि डेटा संरक्षण",
        subtitle: "आम्ही आपला डेटा कसा संरक्षित करतो",
        processedData: {
          title: "आम्ही प्रक्रिया करतो तो डेटा",
          items: [
            "फोरेन्सिक विश्लेषणासाठी सबमिट केलेली सामग्री (चित्रे, ऑडिओ, दस्तऐवज, मजकूर)",
            "शोध अल्गोरिदमसाठी आवश्यक तांत्रिक मेटाडेटा",
            "खाते प्रमाणीकरण आणि अधिकृतता क्रेडेन्शियल्स",
            "विश्लेषण टाइमस्टॅम्प आणि प्रक्रिया कालावधी लॉग",
            "प्लॅटफॉर्म सुधारणेसाठी अनामिक वापर पॅटर्न"
          ]
        },
        neverStored: {
          title: "कधीही संग्रहित नाही",
          items: [
            "विश्लेषण पूर्ण झाल्यानंतर कच्ची सामग्री (24-तास स्वयं-हटवणे)",
            "खाते आवश्यकतांच्या पलीकडे वैयक्तिक ओळख",
            "तृतीय-पक्ष डेटा किंवा असंबंधित वापरकर्ता माहिती",
            "स्पष्ट वापरकर्ता प्रवेश परवानगीशिवाय विश्लेषण परिणाम",
            "क्रॉस-संदर्भित बाह्य डेटाबेस माहिती"
          ]
        },
        encryption: {
          title: "एन्क्रिप्शन आणि सुरक्षा",
          items: [
            "विश्रांतीवरील डेटासाठी AES-256 एन्क्रिप्शन",
            "सर्व डेटा ट्रान्झिटसाठी TLS 1.3",
            "संवेदनशील फोरेन्सिक हस्तांतरणासाठी एंड-टू-एंड एन्क्रिप्शन",
            "हार्डवेअर सिक्युरिटी मॉड्यूल (HSM) संरक्षित की व्यवस्थापन",
            "सामग्री प्रक्रियेसाठी शून्य-ज्ञान वास्तुकला"
          ]
        },
        rights: {
          title: "आपले अधिकार",
          items: {
            privacy: {
              title: "गोपनीयतेचा अधिकार",
              desc: "आपली सामग्री कोणत्याही बाह्य प्रवेशाशिवाय वेगळ्या वातावरणात प्रक्रिया केली जाते"
            },
            deletion: {
              title: "डेटा हटवण्याचा अधिकार",
              desc: "सर्व संबंधित डेटा आणि विश्लेषण इतिहासाच्या त्वरित हटवण्याची विनंती करा"
            },
            transparency: {
              title: "पारदर्शकतेचा अधिकार",
              desc: "आपला डेटा कसा प्रक्रिया आणि हाताळला गेला याच्या संपूर्ण लॉगमध्ये प्रवेश करा"
            },
            portability: {
              title: "पोर्टेबिलिटीचा अधिकार",
              desc: "आपला सर्व डेटा आणि विश्लेषण अहवाल मानक स्वरूपात निर्यात करा"
            }
          }
        },
        compliance: {
          title: "अनुपालन संरेखण",
          items: {
            it: {
              title: "माहिती तंत्रज्ञान अधिनियम, 2000",
              desc: "संवेदनशील डेटा संरक्षणासाठी कलम 43A आणि SPDI नियम अनुपालन"
            },
            dpdp: {
              title: "डिजिटल वैयक्तिक डेटा संरक्षण अधिनियम",
              desc: "उद्देश मर्यादा, डेटा कमीकरण आणि संचयन मर्यादेची तत्त्वे"
            },
            gdpr: {
              title: "जागतिक गोपनीयता मानके",
              desc: "अधिकार क्षेत्र दाव्यांशिवाय GDPR-संरेखित गोपनीयता-द्वारे-डिझाइन तत्त्वे"
            }
          }
        }
      },
      security: {
        title: "प्लॅटफॉर्म सुरक्षा आणि गैरवापर प्रतिबंध",
        prevention: {
          title: "प्रतिबंधक उपाय",
          items: {
            integrity: {
              title: "परिणाम अखंडता संरक्षण",
              desc: "सर्व फोरेन्सिक अहवालांचे क्रिप्टोग्राफिक स्वाक्षरी छेडछाड किंवा खोटेपणा प्रतिबंधित करते"
            },
            falseAccusation: {
              title: "खोटे आरोप सुरक्षा",
              desc: "आत्मविश्वास स्कोअरिंग आणि अनिश्चितता परिमाणीकरण निश्चित खोटे दावे प्रतिबंधित करते"
            },
            harassment: {
              title: "छळ विरोधी प्रोटोकॉल",
              desc: "दर मर्यादा आणि पॅटर्न शोध व्यक्तींच्या पद्धतशीर लक्ष्यीकरण प्रतिबंधित करते"
            }
          }
        },
        antiAbuse: {
          title: "गैरवापर विरोधी यंत्रणा",
          items: {
            rateLimit: {
              title: "दर मर्यदा",
              desc: "बुद्धिमान थ्रॉटलिंग मोठ्या प्रमाणात विश्लेषण गैरवापर आणि API शोषण प्रतिबंधित करते"
            },
            humanReview: {
              title: "मानवी पुनरावलोकन वाढ",
              desc: "उच्च-दांव विश्लेषण तज्ञ फोरेन्सिक समीक्षक सत्यापनासाठी चिन्हांकित"
            },
            monitoring: {
              title: "संशयास्पद वापर निरीक्षण",
              desc: "विषम प्लॅटफॉर्म वापर पॅटर्नचे एआय-चालित शोध"
            },
            verification: {
              title: "खाते सत्यापन स्तर",
              desc: "ओळख सत्यापन आणि वापर इतिहासावर आधारित प्रगतीशील विश्वास स्तर"
            }
          }
        }
      },
      misuse: {
        title: "एआय गैरवापर ओळखणे",
        subtitle: "धोका परिदृश्य आणि संरक्षणात्मक क्रिया",
        scenarios: {
          deepfakeHarassment: {
            title: "डीपफेक छळ",
            desc: "संमतीशिवाय व्यक्तींना तडजोड किंवा खोट्या परिस्थितीत दर्शविणार्‍या कृत्रिम मीडियाची निर्मिती आणि वितरण",
            harm: "मानसिक आघात, प्रतिष्ठा नाश, नातेसंबंध नुकसान, व्यावसायिक परिणाम",
            affected: "व्यक्ती, सार्वजनिक व्यक्तिमत्त्वे, खाजगी नागरिक, महिला आणि मुले",
            action: "तत्काळ पुरावा सुरक्षित ठेवा, गुन्हेगारांशी गुंतू नका, सायबर गुन्हा तक्रार नोंदवा, कायदेशीर बंदी मागा"
          },
          fakeVideos: {
            title: "एआय-व्युत्पन्न खोटे व्हिडिओ",
            desc: "वास्तविक व्यक्तींना जबाबदार धरलेल्या खोट्या घटना, विधाने किंवा कृती दर्शविणारी बनावट व्हिडिओ सामग्री",
            harm: "चुकीची माहिती प्रसार, निवडणूक हेराफेरी, कॉर्पोरेट तोडफोड, सामाजिक अशांती",
            affected: "राजकारणी, सेलिब्रिटी, कॉर्पोरेट नेते, सामान्य नागरिक",
            action: "अनेक स्रोतांद्वारे सत्यापित करा, AUTHENEX फोरेन्सिक विश्लेषण वापरा, प्लॅटफॉर्म आणि अधिकार्‍यांना अहवाल द्या"
          },
          fakeDocuments: {
            title: "खोटे कायदेशीर / शैक्षणिक दस्तऐवज",
            desc: "एआय-व्युत्पन्न प्रमाणपत्रे, न्यायालयीन आदेश, शैक्षणिक क्रेडेन्शियल्स किंवा अधिकृत पत्रव्यवहार",
            harm: "शैक्षणिक फसवणूक, कायदेशीर प्रणाली गैरवापर, रोजगार फसवणूक, इमिग्रेशन फसवणूक",
            affected: "शैक्षणिक संस्था, नियोक्ते, सरकारी एजन्सी, न्यायालये",
            action: "दस्तऐवज उत्पत्ती सत्यापित करा, प्रमाणीकरण वैशिष्ट्ये तपासा, जारी करणारे अधिकारी अहवाल द्या"
          },
          identityImpersonation: {
            title: "ओळख प्रतिरूपण",
            desc: "खोट्या डिजिटल ओळखीची कृत्रिम निर्मिती किंवा प्लॅटफॉर्मवर वास्तविक व्यक्तींचा प्रतिरूपण",
            harm: "आर्थिक फसवणूक, गुन्हेगारी क्रियाकलाप श्रेय, सामाजिक अभियांत्रिकी, विश्वास धूप",
            affected: "सोशल मीडिया वापरकर्ते, व्यावसायिक, असुरक्षित लोकसंख्या, व्यवसाय",
            action: "डिजिटल फूटप्रिंटचे निरीक्षण करा, बहु-घटक प्रमाणीकरण सक्षम करा, प्रतिरूपण प्लॅटफॉर्म अहवाल द्या"
          },
          politicalMisinfo: {
            title: "राजकीय चुकीची माहिती",
            desc: "निवडणुका किंवा राजकीय प्रवचन प्रभावित करण्यासाठी एआय-व्युत्पन्न सामग्रीची समन्वित तैनाती",
            harm: "लोकशाही प्रक्रिया हस्तक्षेप, मतदार हेराफेरी, सामाजिक ध्रुवीकरण, हिंसा उत्तेजन",
            affected: "निवडणूक संस्था, राजकीय उमेदवार, सामान्य मतदार, लोकशाही संस्था",
            action: "निवडणूक आयोगाला अहवाल द्या, शेअर करण्यापूर्वी तथ्य-तपासणी करा, प्लॅटफॉर्म पारदर्शकता उपक्रमांना समर्थन द्या"
          },
          financialFraud: {
            title: "एआय वापरून आर्थिक फसवणूक",
            desc: "कृत्रिम बाजार हेराफेरी, फसव्या गुंतवणूक योजना, किंवा एआय-चालित फिशिंग मोहिमा",
            harm: "आर्थिक नुकसान, बाजार अस्थिरता, गुंतवणूकदार विश्वास धूप, पद्धतशीर जोखीम",
            affected: "किरकोळ गुंतवणूकदार, आर्थिक संस्था, नियामक संस्था, पेन्शन फंड",
            action: "सेबी/आरबीआयला अहवाल द्या, आर्थिक गुन्हा तक्रार नोंदवा, व्यवहार रेकॉर्ड सुरक्षित ठेवा"
          }
        }
      },
      legalFramework: {
        title: "कायदेशीर चौकट",
        subtitle: "डिजिटल गुन्ह्यांचे नियमन करणारे भारतीय कायदे",
        laws: {
          it: {
            act: "माहिती तंत्रज्ञान अधिनियम, 2000",
            section: "कलम 66C, 66D, 66E",
            desc: "ओळख चोरी, व्यक्तिमत्त्वाद्वारे फसवणूक आणि डिजिटल माध्यमांद्वारे गोपनीयतेचे उल्लंघन",
            applicability: "एआय-व्युत्पन्न प्रतिरूपण आणि डीपफेक वितरणावर थेट लागू"
          },
          bns: {
            act: "भारतीय न्याय संहिता, 2023",
            section: "कलम 318, 319, 336",
            desc: "फसवणूक, व्यक्तिमत्त्वाद्वारे फसवणूक आणि इलेक्ट्रॉनिक रेकॉर्डची खोटेपणा",
            applicability: "एआय-व्युत्पन्न फसवे दस्तऐवज आणि कृत्रिम ओळख गुन्हे समाविष्ट करते"
          },
          copyright: {
            act: "कॉपीराइट अधिनियम, 1957",
            section: "कलम 51, 63",
            desc: "कॉपीराइटचे उल्लंघन आणि कॉपीराइट उल्लंघनाचा गुन्हा",
            applicability: "कृत्रिम मीडियामध्ये समानता आणि व्यक्तिमत्त्व अधिकारांचा अनधिकृत वापर"
          },
          indecent: {
            act: "महिलांचे अशोभनीय प्रतिनिधित्व अधिनियम, 1986",
            section: "संपूर्ण अधिनियम",
            desc: "जाहिरात किंवा प्रकाशनाद्वारे महिलांच्या अशोभनीय प्रतिनिधित्वावर बंदी",
            applicability: "डीपफेक पोर्नोग्राफी आणि गैर-सहमती कृत्रिम अंतरंग प्रतिमा"
          }
        }
      },
      remedies: {
        title: "उपाय",
        subtitle: "न्यायासाठी पायऱ्या",
        steps: {
          preserve: {
            step: "1",
            title: "डिजिटल पुरावा जतन करा",
            desc: "गुन्हेगाराला सावध न करता तत्काळ सर्व डिजिटल ट्रेस सुरक्षित करा",
            details: [
              "टाइमस्टॅम्प आणि URL दृश्यमान असलेले स्क्रीनशॉट घ्या",
              "मेटाडेटा अबाधित ठेवून मूळ फाइल्स जतन करा",
              "डिव्हाइस माहिती आणि प्रवेश लॉग रेकॉर्ड करा",
              "कोणतीही सामग्री हटवू किंवा सुधारू नका",
              "अखंडता सत्यापनासाठी क्रिप्टोग्राफिक हॅशेस तयार करा"
            ]
          },
          verify: {
            step: "2",
            title: "AUTHENEX वापरून सामग्री सत्यापित करा",
            desc: "साक्षी मूल्यासाठी फोरेन्सिक सत्यापन अहवाल तयार करा",
            details: [
              "संशयास्पद सामग्री AUTHENEX प्लॅटफॉर्मवर अपलोड करा",
              "व्यापक बहु-सिग्नल विश्लेषणाची विनंती करा",
              "टाइमस्टॅम्पसह स्वाक्षरी केलेला फोरेन्सिक अहवाल डाउनलोड करा",
              "प्लॅटफॉर्म सत्यापनाद्वारे अहवाल प्रामाणिकता सत्यापित करा",
              "प्रवेश नियंत्रणांसह अहवाल सुरक्षितपणे संग्रहित करा"
            ]
          },
          document: {
            step: "3",
            title: "घटना दस्तऐवजीकरण करा",
            desc: "कायदेशीर कार्यवाहीसाठी व्यापक घटना रेकॉर्ड तयार करा",
            details: [
              "घटनांचा कालक्रमानुसार लॉग ठेवा",
              "सर्व संवाद प्रयत्न रेकॉर्ड करा",
              "प्रभाव आणि हानी दस्तऐवजीकरण करा",
              "संभाव्य साक्षीदार ओळखा",
              "लागू असल्यास आर्थिक रेकॉर्ड जतन करा"
            ]
          },
          complaint: {
            step: "4",
            title: "सायबर गुन्हा तक्रार नोंदवा",
            desc: "राष्ट्रीय सायबर गुन्हा रिपोर्टिंग पोर्टलवर अहवाल द्या",
            details: [
              "cybercrime.gov.in रिपोर्टिंग पोर्टल प्रवेश करा",
              "योग्य गुन्हा श्रेणी निवडा",
              "पुराव्याम्हणून AUTHENEX फोरेन्सिक अहवाल अपलोड करा",
              "तपशीलवार घटना वर्णन प्रदान करा",
              "ट्रॅकिंगसाठी पोचपावती क्रमांक मिळवा"
            ]
          },
          fir: {
            step: "5",
            title: "आवश्यक असल्यास एफआयआर नोंदवा",
            desc: "संज्ञेय गुन्ह्यांसाठी पोलिसांकडे वाढवा",
            details: [
              "स्थानिक पोलीस स्टेशन किंवा सायबर सेलला भेट द्या",
              "मुद्रित फोरेन्सिक अहवाल आणि पुरावा घेऊन जा",
              "संबंधित आयटी अधिनियम कलमांतर्गत एफआयआर विनंती करा",
              "आपल्या रेकॉर्डसाठी एफआयआरची प्रत मिळवा",
              "तपास अधिकार्‍यासोबत नियमितपणे पाठपुरावा करा"
            ]
          },
          legal: {
            step: "6",
            title: "कायदेशीर सल्ला घ्या",
            desc: "जटिल प्रकरणे किंवा नागरी उपायांसाठी वकील गुंतवा",
            details: [
              "सायबर कायद्यात विशेषज्ञ असलेल्या वकिलाचा सल्ला घ्या",
              "नागरी बंदी शक्यतांचे मूल्यांकन करा",
              "लागू असल्यास मानहानी कार्यवाही विचारात घ्या",
              "संभाव्य न्यायालय साक्षीसाठी तयारी करा",
              "पीडित भरपाई योजना शोधा"
            ]
          }
        }
      },
      disclaimer: {
        title: "कायदेशीर अस्वीकरण आणि नैतिक स्थिती",
        content: {
          para1: "AUTHENEX एक न्यायालय, कायदा अंमलबजावणी एजन्सी किंवा नियामक प्राधिकरण नाही. आम्ही फोरेन्सिक विश्लेषण साधने आणि शैक्षणिक संसाधने प्रदान करणारे तंत्रज्ञान प्लॅटफॉर्म आहोत. आमचे अहवाल अल्गोरिदमिक विश्लेषणावर आधारित तांत्रिक अंतर्दृष्टी प्रदान करतात; ते कायदेशीर निष्कर्ष किंवा निश्चित पुरावे नाहीत.",
          para2: "डिजिटल सामग्रीच्या प्रामाणिकता, वैधता किंवा परिणामांबद्दल अंतिम निर्धार केवळ सक्षम न्यायिक अधिकारी, कायदा अंमलबजावणी एजन्सी आणि नियामक संस्थांकडे असतात. AUTHENEX विवाद निकाली काढत नाही, बंधनकारक निर्णय जारी करत नाही किंवा कायदेशीर उपाय लागू करत नाही.",
          para3: "आम्ही नैतिक एआय विकास आणि जबाबदार तंत्रज्ञान तैनातीसाठी वचनबद्ध आहोत. आमचे प्लॅटफॉर्म सत्याला समर्थन देण्यासाठी, असुरक्षित लोकसंख्येचे संरक्षण करण्यासाठी आणि डिजिटल विश्वास मजबूत करण्यासाठी डिझाइन केलेले आहे—परंतु ते न्यायाच्या शोधातील अनेक साधनांपैकी एक आहे. आम्ही सर्व वापरकर्त्यांसाठी कठोर गोपनीयता संरक्षण राखताना अधिकृत एजन्सींच्या कायदेशीर विनंत्यांसह सक्रियपणे सहकार्य करतो.",
          updated: "शेवटचे अद्यतन: फेब्रुवारी 2026. हा दस्तऐवज कायदे आणि प्लॅटफॉर्म क्षमता विकसित होत असताना सुधारणाच्या अधीन आहे."
        }
      },
      footer: {
        copyright: "© 2026 Authenex. राष्ट्रीय डिजिटल ट्रस्ट प्लॅटफॉर्म.",
        tagline: "नैतिक एआय, डिझाइनद्वारे गोपनीयता आणि सर्वांसाठी डिजिटल सुरक्षेसाठी वचनबद्ध."
      }
    },
    auth: {
      welcomeBack: "वापसी पर स्वागत है",
      subtitle: "फॉरेंसिक विश्लेषण टूल का उपयोग करने के लिए साइन इन करें",
      continueGoogle: "Google के साथ जारी रखें",
      continueEmail: "या ईमेल के साथ जारी रखें",
      continueGuest: "अतिथि के रूप में जारी रखें (कोई सेटअप नहीं)",
      emailLabel: "ईमेल पता",
      passwordLabel: "पासवर्ड",
      signInButton: "साइन इन करें",
      secured: "256-बिट एन्क्रिप्शन के साथ सुरक्षित",
      backHome: "घर वापस"
    }
  },
  ta: {
    nav: {
      dashboard: "டாஷ்போர்டு",
      newAnalysis: "புதிய பகுப்பாய்வு",
      myCases: "எனது வழக்குகள்",
      analytics: "பகுப்பாய்வு",
      settings: "அமைப்புகள்",
      help: "உதவி",
      logout: "வெளியேறு",
      profile: "சுயவிவரம்"
    },
    header: {
      searchPlaceholder: "வழக்குகளைத் தேடுங்கள்...",
      systemOnline: "சிஸ்டம் ஆன்லைன்",
      notifications: "அறிவிப்புகள்",
      markAllRead: "எல்லாவற்றையும் படித்ததாகக் குறிக்கவும்",
      noNotifications: "அறிவிப்புகள் இல்லை",
      viewAll: "அனைத்தையும் காண்க"
    },
    dashboard: {
      title: "டாஷ்போர்டு",
      subtitle: "சைபர் கிரைம் மற்றும் AI அச்சுறுத்தல்கள் பற்றிய நிகழ்நேர நுண்ணறிவு.",
      stats: {
        cybercrime: "சைபர் கிரைம் வழக்குகள்",
        deepfake: "டீப் பேக் வழக்குகள்",
        aiFraud: "AI மோசடி",
        arrests: "கைதுகள்"
      },
      recentActivity: "சமீபத்திய செயல்பாடு",
      analysisLink: "பகுப்பாய்வு",
      newsFeed: "நேரடி நுண்ணறிவு ஊட்டல்",
      recentAnalysis: {
        status: {
          completed: "பகுப்பாய்வு முடிந்தது",
          processing: "செயலாக்கப்படுகிறது..."
        },
        actions: {
          share: "பகிரவும்",
          download: "அறிக்கையைப் பதிவிறக்கவும்"
        }
      }
    },
    analyze: {
      title: "தடயவியல் பகுப்பாய்வு",
      subtitle: "உள்ளடக்க வகையைத் தேர்ந்தெடுத்து சரிபார்ப்புக்கு கோப்புகளைப் பதிவேற்றவும்",
      types: {
        image: "பட பகுப்பாய்வு",
        video: "வீடியோ பகுப்பாய்வு",
        document: "ஆவணச் சரிபார்ப்பு",
        audio: "ஆடியோ பகுப்பாய்வு",
        email: "மின்னஞ்சல் சரிபார்ப்பு",
        text: "உரை கண்டறிதல்"
      },
      steps: {
        upload: "பதிவேற்றம்",
        scanning: "ஸ்கேனிங்",
        aiAnalysis: "AI பகுப்பாய்வு",
        results: "முடிவுகள்"
      },
      dropzone: {
        dragActive: "கோப்புகளை இங்கே விடவும்",
        dragDrop: "கோப்புகளை இங்கே இழுக்கவும்",
        browse: "அல்லது உங்கள் கணினியிலிருந்து உலாவ கிளிக் செய்யவும்",
        selectFiles: "கோப்புகளைத் தேர்ந்தெடுக்கவும்",
        selectedFiles: "தேர்ந்தெடுக்கப்பட்ட கோப்புகள்"
      },
      button: {
        start: "பகுப்பாய்வைத் தொடங்கவும்",
        analyzing: "பகுப்பாய்வு செய்கிறது..."
      },
      results: {
        authentic: "உண்மையான உள்ளடக்கம்",
        aiGenerated: "AI உருவாக்கப்பட்டது",
        verdict: "தீர்ப்பு",
        forensicBreakdown: "தடயவியல் பகுப்பாய்வு முறிவு",
        detailedFindings: "விரிவான முடிவுகள்",
        newAnalysis: "புதிய பகுப்பாய்வு",
        downloadReport: "அறிக்கையைப் பதிவிறக்கவும்",
        processing: "தடயவியல் பகுப்பாய்வு செயலாக்கப்படுகிறது... காத்திருக்கவும்"
      },
      report: {
        probability: "Probability",
        human: "Human",
        authenticity: "Authenticity",
        id: "ID",
        risk: "Risk",
        authenticityAssessment: "Authenticity Assessment",
        aiProbability: "AI Probability",
        humanAuthenticity: "Human Authenticity",
        confidenceScore: "Confidence Score",
        syntheticDetected: "Synthetic Content Detected",
        likelyAuthentic: "Content Likely Authentic",
        multiLayerAnalysis: "Multi-Layer Detection Analysis",
        layersAnalyzed: "layers analyzed with weighted scoring",
        overallConfidence: "Overall Confidence",
        layerContribution: "Layer Contribution Analysis (Score × Weight)",
        noLayers: "No Detection Layers Available",
        noLayersDesc: "The AI analysis did not return detailed layer data",
        categoryDistribution: "Category-wise Distribution",
        detectionFindings: "Detection Findings",
        heatmap: "Heatmap Analysis",
        temporal: "Temporal Consistency",
        forensicReport: "Forensic Analysis Report",
        examiner: "Examiner",
        date: "Date",
        conclusion: "Conclusion",
        recommendations: "Recommendations",
        tabs: {
          details: "Analysis Details",
          visual: "Visual Evidence",
          report: "Forensic Report"
        },
        error: {
          title: "No Analysis Data",
          desc: "Upload a file to begin analysis",
          action: "Start Analysis"
        }
      }
    },
    chat: {
      title: "ஆதெனெக்ஸ் AI",
      subtitle: "தடயவியல் நுண்ணறிவு",
      linked: "இணைக்கப்பட்டது",
      placeholder: "ஆதெனெக்ஸ் AI இடம் கேளுங்கள்...",
      listening: "கேட்கிறது...",
      welcome: "ஆதெனெக்ஸ் AI கோர் தொடங்கப்பட்டது. தடயவியல் பகுப்பாய்வுக்குத் தயார்.",
      connectionError: "இணைப்பு பிழை. மீண்டும் முயற்சிக்கவும்."
    },
    cases: {
      title: "வழக்கு மேலாண்மை",
      subtitle: "அனைத்து தடயவியல் பகுப்பாய்வுகளையும் நிர்வகிக்கவும் மற்றும் மதிப்பாய்வு செய்யவும்",
      searchPlaceholder: "ஐடி, தலைப்பு அல்லது குறிச்சொற்கள் மூலம் வழக்குகளைத் தேடுங்கள்...",
      filters: {
        all: "அனைத்து வழக்குகள்",
        completed: "முடிந்தது",
        processing: "செயலாக்கம்",
        pending: "நிலுவையில்"
      },
      table: {
        case: "வழக்கு",
        type: "வகை",
        date: "தேதி",
        status: "நிலை",
        result: "முடிவு",
        confidence: "நம்பிக்கை",
        actions: "செயல்கள்"
      },
      noCases: "வழக்குகள் எதுவும் காணப்படவில்லை"
    },
    news: {
      top: "முக்கிய செய்திகள்",
      deepfake: "டீப்ப்பேக்",
      cybercrime: "சைபர் கிரைம்",
      ai: "AI பாதுகாப்பு",
      policy: "கொள்கை",
      cases: "வழக்குகள்",
      social: "சமூகம்"
    },
    scanHistory: {
      title: "சமீபத்திய ஸ்கேன்கள்",
      noData: "ஸ்கேன் வரலாறு எதுவும் காணப்படவில்லை.",
      loading: "வரலாற்றை ஏற்றுகிறது...",
      confidence: "நம்பிக்கை",
      justNow: "இப்போது",
      ago: "முன்பு"
    },
    profile: {
      tabs: {
        overview: "கண்ணோட்டம்",
        activity: "செயல்பாடு",
        achievements: "சாதனைகள்"
      },
      edit: "சுயவிவரத்தைத் திருத்து",
      save: "மாற்றங்களைச் சேமி",
      cancel: "ரத்து செய்",
      role: "பங்கு",
      location: "இடம்",
      credits: {
        available: "கிடைக்கும் புள்ளிகள்",
        refill: "நிரப்பும் தேதி",
        add: "புள்ளிகளைச் சேர்க்கவும்",
        usage: "மாதாந்திர பயன்பாடு"
      },
      about: "பற்றி",
      email: "மின்னஞ்சல்",
      website: "இணையதளம்",
      memberSince: "உறுப்பினர்",
      lastActive: "கடைசியாக செயலில்",
      plan: {
        current: "தற்போதைய திட்டம்",
        renews: "புதுப்பிக்கிறது",
        upgrade: "திட்டத்தை மேம்படுத்தவும்"
      },
      delete: {
        title: "கணக்கை நீக்கவா?",
        desc: "இந்த செயலை மாற்ற முடியாது. உங்கள் தரவு அனைத்தும் நிரந்தரமாக நீக்கப்படும்.",
        confirm: "நீக்கு"
      }
    },
    settings: {
      title: "அமைப்புகள்",
      subtitle: "உங்கள் கணக்கு முன்னுரிமைகள் மற்றும் பாதுகாப்பை நிர்வகிக்கவும்.",
      appearance: "தோற்றம்",
      notifications: "அறிவிப்புகள்",
      security: "பாதுகாப்பு மற்றும் தனியுரிமை",
      items: {
        darkMode: "டார்க் மோட்",
        language: "மொழி",
        emailNotif: "மின்னஞ்சல் அறிவிப்புகள்",
        pushNotif: "புஷ் அறிவிப்புகள்"
      },
      securityScore: "பாதுகாப்பு மதிப்பெண்",
      dangerZone: "ஆபத்து மண்டலம்",
      deleteAccount: "கணக்கை நீக்கு"
    },
    help: {
      hero: {
        badge: "உதவி மையம்",
        title: "நாங்கள் உங்களுக்கு எப்படி உதவ முடியும்?",
        subtitle: "கண்டறிதல், அம்சங்கள் மற்றும் சரிசெய்தல் பற்றிய பதில்களைக் கண்டறியவும்.",
        search: "பதில்களைத் தேடுங்கள்..."
      },
      sections: {
        overview: "கண்ணோட்டம்",
        detection: "கண்டறிதல் முறைகள்",
        troubleshooting: "சரிசெய்தல்",
        contact: "ஆதரவைத் தொடர்பு கொள்ளுங்கள்"
      },
      overview: {
        title: "ஆதெனெக்ஸ் என்றால் என்ன",
        desc: "டிஜிட்டல் உள்ளடக்கத்தின் நம்பகத்தன்மையை பகுப்பாய்வு செய்வதற்கான AI-இயங்கும் தடயவியல் தளம்."
      },
      faq: {
        title: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
        noResults: "முடிவுகள் எதுவும் இல்லை"
      },
      channels: {
        email: "மின்னஞ்சல் ஆதரவு",
        docs: "ஆவணங்கள்",
        report: "சிக்கலைப் புகாரளிக்கவும்",
        chat: "நேரடி அரட்டை"
      },
      disclaimer: {
        title: "மறுப்பு",
        text: "முடிவுகள் நிகழ்தகவு மதிப்பீடுகள் மற்றும் மனித தீர்ப்புடன் பயன்படுத்தப்பட வேண்டும்."
      }
    },
    landing: {
      nav: {
        brandTagline: "TrustLens",
        getStarted: "தொடங்குங்கள்",
        signIn: "உள்நுழையவும்",
        brand: "Authenex"
      },
      hero: {
        badge: "இப்போது GPT-4 கண்டறிதலுடன்",
        title1: "உண்மையைச் சரிபார்க்கவும்",
        title2: "டிஜிட்டல் ரியாலிட்டியில்",
        description: "ஆதெனெக்ஸ் 99.9% துல்லியத்துடன் செயற்கை ஊடகங்களைக் கண்டறிய நியூரல் தடயவியல், குவாண்டம்-எதிர்ப்பு சரிபார்ப்பு மற்றும் விளக்கக்கூடிய AI ஆகியவற்றை இணைக்கிறது.",
        startAnalysis: "இலவச பகுப்பாய்வைத் தொடங்கவும்",
        watchDemo: "டெமோவைப் பார்க்கவும்",
        goToDashboard: "டாஷ்போர்டுக்குச் செல்லவும்",
        badges: {
          soc2: "SOC 2 வகை II",
          fisma: "FISMA இணக்கம்",
          gdpr: "GDPR தயார்"
        },
        stats: {
          verification: "சரிபார்ப்பு",
          activeUsers: "செயலில் உள்ள பயனர்கள்"
        }
      },
      features: {
        sectionBadge: "தள திறன்கள்",
        sectionTitle: "ஆறு பரிமாணங்கள்",
        sectionTitleHighlight: "டிஜிட்டல் தடயவியல்",
        sectionDescription: "அதிநவீன நியூரல் நெட்வொர்க்குகள் மற்றும் சரிபார்ப்பால் இயக்கப்படும் அனைத்து டிஜிட்டல் உள்ளடக்க வகைகளின் விரிவான பகுப்பாய்வு.",
        imageForensics: {
          title: "பட தடயவியல்",
          description: "மேம்பட்ட GAN கைரேகை மற்றும் மெட்டாடேட்டா பகுப்பாய்வைப் பயன்படுத்தி AI-உருவாக்கிய படங்கள், டீப்ஃபேக்குகள் மற்றும் கையாளப்பட்ட புகைப்படங்களைக் கண்டறியவும்.",
          stat: "99.9% துல்லியம்"
        },
        videoVerification: {
          title: "வீடியோ சரிபார்ப்பு",
          description: "விரிவான வீடியோ நம்பகத்தன்மைக்கான தற்காலிக நிலைத்தன்மை பகுப்பாய்வு, பிரேம்-நிலை இடைக்கணிப்பு கண்டறிதல் மற்றும் லிப்-ஒத்திசைவு சரிபார்ப்பு.",
          stat: "நிகழ்நேரம்"
        },
        documentAuth: {
          title: "ஆவண நம்பகத்தன்மை",
          description: "சட்ட ஆவண ஒருமைப்பாட்டிற்கான எழுத்துரு தடயவியல், கையொப்ப சரிபார்ப்பு, தளவமைப்பு பகுப்பாய்வு மற்றும் பிளாக்செயின் நேர முத்திரை சரிபார்ப்பு.",
          stat: "நீதிமன்றம் தயார்"
        },
        emailIntel: {
          title: "மின்னஞ்சல் நுண்ணறிவு",
          description: "தலைப்பு தடயவியல், SPF/DKIM சரிபார்ப்பு, அனுப்புநர் நற்பெயர் பகுப்பாய்வு மற்றும் ஃபிஷிங் கண்டறிதல்.",
          stat: "ISP-ஒருங்கிணைக்கப்பட்டது"
        },
        audioAnalysis: {
          title: "ஆடியோ பகுப்பாய்வு",
          description: "குரல் பயோமெட்ரிக் பொருத்தம், செயற்கை பேச்சு கண்டறிதல், ஒலி சூழல் பகுப்பாய்வு மற்றும் டீப்ஃபேக் ஆடியோ அடையாளம்.",
          stat: "நியூரல் நெட்"
        },
        textDetection: {
          title: "உரை கண்டறிதல்",
          description: "செயற்கை உரை அங்கீகாரத்திற்கான குழப்ப மதிப்பெண், வெடிப்பு பகுப்பாய்வு, ஒப்படைப்பு பாணி பொருத்தம் மற்றும் LLM பண்பு.",
          stat: "GPT-4 தயார்"
        }
      },
      process: {
        badge: "இது எப்படி வேலை செய்கிறது",
        title: "மூன்று படிகளில்",
        titleHighlight: "தடயவியல் பைப்லைன்",
        description: "உட்செலுத்துதல் முதல் சரிபார்க்கப்பட்ட அறிக்கை வரை, எங்கள் தானியங்கி பைப்லைன் துல்லியம், வெளிப்படைத்தன்மை மற்றும் சட்டப்பூர்வ ஏற்புடைமையை உறுதி செய்கிறது.",
        step1: {
          title: "பாதுகாப்பான உட்செலுத்துதல்",
          description: "எந்த டிஜிட்டல் சொத்தையும் இழுத்து விடவும். ஆவணச் சங்கிலிக்கு தானியங்கி மெட்டாடேட்டா பாதுகாப்பு மற்றும் கிரிப்டோகிராஃபிக் ஹாஷிங் உடன் 200+ வடிவங்களை நாங்கள் ஆதரிக்கிறோம்.",
          features: {
            f1: "முழுமையான குறியாக்கம்",
            f2: "மெட்டாடேட்டா பிரித்தெடுத்தல்",
            f3: "ஹாஷ் சரிபார்ப்பு"
          }
        },
        step2: {
          title: "நரம்பியல் பகுப்பாய்வு",
          description: "சிறப்பு AI மாடல்களின் எங்கள் குழு 50+ தடயவியல் சோதனைச் சாவடிகள் மூலம் உள்ளடக்கத்தை செயலாக்குகிறது, மனித கண்களுக்குத் தெரியாத முரண்பாடுகளைக் கண்டறிகிறது.",
          features: {
            f1: "50+ கண்டறிதல் மாதிரிகள்",
            f2: "துரித செயலாக்கம்",
            f3: "நம்பிக்கை மதிப்பெண்"
          }
        },
        step3: {
          title: "சரிபார்க்கப்பட்ட அறிக்கை",
          description: "சட்ட நடவடிக்கைகளுக்கான விளக்கக்கூடிய AI நுண்ணறிவு, முரண்பாடு காட்சிப்படுத்தல் மற்றும் மீண்டும் உருவாக்கக்கூடிய ஆதாரங்களுடன் நீதிமன்றத்திற்குத் தயாரான ஆவணங்களைப் பெறுங்கள்.",
          features: {
            f1: "PDF ஏற்றுமதி",
            f2: "API ஒருங்கிணைப்பு",
            f3: "பிளாக்செயின் நேரமுத்திரை"
          }
        }
      },
      testimonials: {
        badge: "உலகளவில் நம்பப்படுகிறது",
        title: "சரிபார்ப்பின்",
        titleHighlight: "குரல்கள்",
        item1: {
          quote: "தவறான தகவல்களுக்கு எதிரான எங்கள் பாதுகாப்பின் முதல் வரிசையாக ஆதெனெக்ஸ் மாறியுள்ளது. விளக்கக்கூடிய AI அறிக்கைகள் நீதிமன்றத்திற்குத் தயாராக உள்ளன மற்றும் பல சட்ட நடவடிக்கைகளில் நிலைத்து நிற்கின்றன.",
          author: "சாரா சென்",
          role: "தகவல் பாதுகாப்பு இயக்குனர்",
          org: "குளோபல் நியூஸ் நெட்வொர்க்"
        },
        item2: {
          quote: "அவர்களின் பகுப்பாய்வில் தடயவியல் விவரம் முன்னோடியில்லாதது. குறிப்பிடத்தக்க எளிதாக எங்கள் ஆதார மேலாண்மை அமைப்பில் அவர்களின் API ஐ ஒருங்கிணைத்துள்ளோம்.",
          author: "மார்கஸ் ரோட்ரிகஸ்",
          role: "டிஜிட்டல் ஆதாரம் நிபுணர்",
          org: "ஃபெடரல் பீரோ ஆஃப் இன்வெஸ்டிகேஷன்"
        },
        item3: {
          quote: "நாங்கள் ஆறு வெவ்வேறு தீர்வுகளை மதிப்பீடு செய்தோம். சமீபத்திய பரவல் மாடல்களை நிலையான துல்லியத்துடன் கண்டறியக்கூடிய ஒரே தளம் ஆதெனெக்ஸ் மட்டுமே.",
          author: "டாக்டர் எமிலி வாட்சன்",
          role: "தலைமை தொழில்நுட்ப அதிகாரி",
          org: "செக்யூர்வோட் இன்க்."
        }
      },
      cta: {
        title: "டிஜிட்டல் உண்மையை பாதுகாக்க",
        titleHighlight: "தயாரா?",
        description: "செயற்கை ஊடகங்களை எதிர்த்துப் போராடவும் தகவல் ஒருமைப்பாட்டைப் பாதுகாக்கவும் ஆதெனெக்ஸ் பயன்படுத்தும் 150 க்கும் மேற்பட்ட நிறுவனங்கள் மற்றும் அரசு நிறுவனங்களில் சேரவும்.",
        start: "இலவச சோதனையைத் தொடங்கவும்",
        demo: "டெமோவைத் திட்டமிடவும்",
        footer: "கிரெடிட் கார்டு தேவையில்லை • 14 நாள் இலவச சோதனை • SOC 2 இணக்கம்"
      },
      footer: {
        tagline: "2026 முதல் டிஜிட்டல் உண்மையைப் பாதுகாத்தல்",
        links: {
          privacy: "தனியுரிமை",
          terms: "விதிமுறைகள்",
          security: "பாதுகாப்பு",
          api: "API"
        }
      }
    },
    legal: {
      hero: {
        title: "சட்ட பாதுகாப்புகள் & AI தவறு பயன்பாட்டிலிருந்து பாதுகாப்பு",
        subtitle: "இந்திய சட்டத்தின் கீழ் AI-உருவாக்கப்பட்ட டீப்ஃபேக்ஸ், அடையாள திருட்டு மற்றும் டிஜிட்டல் மோசடியிலிருந்து உங்கள் உரிமைகள், சட்ட வழிமுறைகள் மற்றும் பாதுகாப்பு",
        stats: {
          casesReported: "அறிவிக்கப்பட்ட வழக்குகள்",
          arrests: "கைதுகள்",
          lawsEnforced: "அமல்படுத்தப்பட்ட சட்டங்கள்"
        }
      },
      actionSection: {
        title: "உடனடி நடவடிக்கை எடுங்கள்",
        subtitle: "சைபர் குற்ற அறிவிப்பு மற்றும் சட்ட வளங்களுக்கு நேரடி அணுகல்",
        buttons: {
          reportCybercrime: {
            label: "சைபர் குற்றத்தை புகார் செய்யுங்கள்",
            desc: "அனைத்து டிஜிட்டல் குற்றங்களுக்கும் தேசிய சைபர் குற்ற அறிவிப்பு போர்டல்",
            authority: "உள்துறை அமைச்சகம், இந்திய அரசு",
            when: "AI-உருவாக்கப்பட்ட உள்ளடக்க தவறுபயன்பாடு, அடையாள திருட்டு அல்லது ஆன்லைன் துன்புறுத்தல் உட்பட எந்த சைபர் குற்றமும்"
          },
          fileFIR: {
            label: "ஆன்லைன் FIR பதிவு செய்யவும்",
            desc: "முதல் தகவல் அறிக்கை பதிவுக்கான மாநில காவல்துறை போர்டல்",
            authority: "மாநில காவல்துறை துறைகள்",
            when: "உடல் காவல் நிலைய வருகை உடனடியாக சாத்தியமில்லாதபோது; நேரில் வருகையுடன் பின்தொடரவும்"
          },
          identityTheft: {
            label: "அடையாள திருட்டை புகார் செய்யுங்கள்",
            desc: "அடையாள தொடர்பான சைபர் குற்றங்களுக்கான பிரத்யேக போர்டல்",
            authority: "இந்திய சைபர் குற்ற ஒருங்கிணைப்பு மையம்",
            when: "செயற்கை அடையாள உருவாக்கம், ஆள்மாறாட்டம், அல்லது தனிப்பட்ட தகவலின் அங்கீகரிக்கப்படாத பயன்பாடு"
          },
          womenChild: {
            label: "பெண்கள் & குழந்தை பாதுகாப்பு",
            desc: "பாலின அடிப்படையிலான மற்றும் குழந்தைகளை இலக்காகக் கொண்ட AI தவறுபயன்பாட்டிற்கான சிறப்பு அறிவிப்பு",
            authority: "தேசிய பெண்கள் ஆயோக்கம், NCPCR",
            when: "டீப்ஃபேக் ஆபாசம், சம்மதமில்லாத நெருக்கமான படங்கள், குழந்தைகளை இலக்காகக் கொண்ட செயற்கை உள்ளடக்கம்"
          },
          helpline: {
            label: "தேசிய சைபர் ஹெல்ப்லைன்",
            desc: "சைபர் குற்ற வழிகாட்டுதலுக்கு 24/7 தொலைபேசி உதவி",
            authority: "மின்னணுவியல் மற்றும் தகவல் தொழில்நுட்ப அமைச்சகம்",
            when: "உடனடி வழிகாட்டுதல் தேவை, அறிவிப்பு செயல்முறையில் தெளிவுபடுத்தல், அவசர சூழ்நிலைகள்"
          },
          sebi: {
            label: "SEBI புகார் போர்டல்",
            desc: "பத்திரங்கள் சந்தை மோசடி மற்றும் AI-இயக்கப்பட்ட முதலீட்டு மோசடிகள்",
            authority: "இந்திய பத்திரங்கள் மற்றும் பரிவர்த்தனை வாரியம்",
            when: "AI-உருவாக்கப்பட்ட சந்தை கையாளுதல், மோசடி முதலீட்டு திட்டங்கள், செயற்கை நிறுவன தொடர்புகள்"
          }
        }
      },
      privacy: {
        title: "தனியுரிமை & தரவு பாதுகாப்பு",
        subtitle: "நாங்கள் உங்கள் தரவை எவ்வாறு பாதுகாக்கிறோம்",
        processedData: {
          title: "நாங்கள் செயல்படுத்தும் தரவு",
          items: [
            "தடயவியல் பகுப்பாய்வுக்கு சமர்ப்பிக்கப்பட்ட உள்ளடக்கம் (படங்கள், ஆடியோ, ஆவணங்கள், உரை)",
            "கண்டறிதல் அல்காரிதங்களுக்கு தேவையான தொழில்நுட்ப மெட்டாடேட்டா",
            "கணக்கு அங்கீகாரம் மற்றும் அங்கீகரிப்பு நற்சான்றிதழ்கள்",
            "பகுப்பாய்வு நேர முத்திரைகள் மற்றும் செயலாக்க கால பதிவுகள்",
            "தளம் மேம்பாட்டிற்கான அநாமதேய பயன்பாடு முறைகள்"
          ]
        },
        neverStored: {
          title: "ஒருபோதும் சேமிக்கப்படாதது",
          items: [
            "பகுப்பாய்வு முடிந்த பிறகு மூல உள்ளடக்கம் (24-மணி நேர தானாக-நீக்குதல்)",
            "கணக்கு தேவைகளுக்கு அப்பால் தனிப்பட்ட அடையாளம்",
            "மூன்றாம் தரப்பு தரவு அல்லது தொடர்பில்லாத பயனர் தகவல்",
            "வெளிப்படையான பயனர் அணுகல் அனுமதி இல்லாமல் பகுப்பாய்வு முடிவுகள்",
            "குறுக்கு-குறிப்பிடப்பட்ட வெளிப்புற தரவுத்தள தகவல்"
          ]
        },
        encryption: {
          title: "குறியாக்கம் & பாதுகாப்பு",
          items: [
            "ஓய்வில் உள்ள தரவுக்கு AES-256 குறியாக்கம்",
            "அனைத்து தரவு பரிமாற்றத்திற்கும் TLS 1.3",
            "உணர்திறன் வாய்ந்த தடயவியல் பரிமாற்றங்களுக்கு இறுதி-முதல்-முடிவு குறியாக்கம்",
            "வன்பொருள் பாதுகாப்பு தொகுதி (HSM) பாதுகாக்கப்பட்ட விசை நிர்வாகம்",
            "உள்ளடக்க செயலாக்கத்திற்கு பூஜ்யம்-அறிவு கட்டமைப்பு"
          ]
        },
        rights: {
          title: "உங்கள் உரிமைகள்",
          items: {
            privacy: {
              title: "தனியுரிமை உரிமை",
              desc: "உங்கள் உள்ளடக்கம் வெளிப்புற அணுகல் இல்லாமல் தனிமைப்படுத்தப்பட்ட சூழல்களில் செயலாக்கப்படுகிறது"
            },
            deletion: {
              title: "தரவு நீக்க உரிமை",
              desc: "அனைத்து தொடர்புடைய தரவு மற்றும் பகுப்பாய்வு வரலாற்றின் உடனடி நீக்கத்தைக் கோரவும்"
            },
            transparency: {
              title: "வெளிப்படைத்தன்மை உரிமை",
              desc: "உங்கள் தரவு எவ்வாறு செயலாக்கப்பட்டது மற்றும் கையாளப்பட்டது என்பதற்கான முழு பதிவுகளை அணுகவும்"
            },
            portability: {
              title: "இடமாற்றுதல் உரிமை",
              desc: "உங்கள் அனைத்து தரவு மற்றும் பகுப்பாய்வு அறிக்கைகளை நிலையான வடிவங்களில் ஏற்றுமதி செய்யவும்"
            }
          }
        },
        compliance: {
          title: "இணக்க சீரமைப்பு",
          items: {
            it: {
              title: "தகவல் தொழில்நுட்ப சட்டம், 2000",
              desc: "உணர்திறன் தரவு பாதுகாப்புக்கான பிரிவு 43A மற்றும் SPDI விதிகள் இணக்கம்"
            },
            dpdp: {
              title: "டிஜிட்டல் தனிப்பட்ட தரவு பாதுகாப்பு சட்டம்",
              desc: "நோக்கம் வரம்பு, தரவு குறைப்பு மற்றும் சேமிப்பு வரம்பு கொள்கைகள்"
            },
            gdpr: {
              title: "உலகளாவிய தனியுரிமை தரநிலைகள்",
              desc: "அதிகார வரம்பு கோரிக்கைகள் இல்லாமல் GDPR-சீரமைக்கப்பட்ட தனியுரிமை-மூலம்-வடிவமைப்பு கொள்கைகள்"
            }
          }
        }
      },
      security: {
        title: "தளம் பாதுகாப்பு & தவறு பயன்பாடு தடுப்பு",
        prevention: {
          title: "தடுப்பு நடவடிக்கைகள்",
          items: {
            integrity: {
              title: "முடிவு ஒருமைப்பாடு பாதுகாப்பு",
              desc: "அனைத்து தடயவியல் அறிக்கைகளின் குறியாக்க கையொப்பங்கள் சேதம் அல்லது போலியிலிருந்து தடுக்கின்றன"
            },
            falseAccusation: {
              title: "தவறான குற்றச்சாட்டு பாதுகாப்புகள்",
              desc: "நம்பிக்கை மதிப்பெண் மற்றும் நிச்சயமின்மை அளவீடு உறுதியான தவறான கூற்றுக்களைத் தடுக்கிறது"
            },
            harassment: {
              title: "துன்புறுத்தல் எதிர்ப்பு நெறிமுறைகள்",
              desc: "விகித வரம்பு மற்றும் முறை கண்டறிதல் தனிநபர்களின் முறைசார் இலக்காக்குதலைத் தடுக்கிறது"
            }
          }
        },
        antiAbuse: {
          title: "தவறு பயன்பாடு எதிர்ப்பு பொறிமுறைகள்",
          items: {
            rateLimit: {
              title: "விகித வரம்பு",
              desc: "புத்திசாலித்தனமான த்ரோட்டிலிங் மொத்த பகுப்பாய்வு தவறுபயன்பாடு மற்றும் API சுரண்டலைத் தடுக்கிறது"
            },
            humanReview: {
              title: "மனித மதிப்பாய்வு உயர்வு",
              desc: "உயர்-பங்கு பகுப்பாய்வுகள் நிபுணர் தடயவியல் மதிப்பாய்வாளர் சரிபார்ப்புக்காக குறிக்கப்பட்டுள்ளன"
            },
            monitoring: {
              title: "சந்தேகத்திற்கிடமான பயன்பாடு கண்காணிப்பு",
              desc: "ஒழுங்கற்ற தளம் பயன்பாடு முறைகளின் AI-இயக்கப்பட்ட கண்டறிதல்"
            },
            verification: {
              title: "கணக்கு சரிபார்ப்பு நிலைகள்",
              desc: "அடையாள சரிபார்ப்பு மற்றும் பயன்பாடு வரலாற்றின் அடிப்படையில் முன்னேற்ற நம்பிக்கை நிலைகள்"
            }
          }
        }
      },
      misuse: {
        title: "AI தவறு பயன்பாட்டை அடையாளம் காணுதல்",
        subtitle: "அச்சுறுத்தல் காட்சிகள் மற்றும் பாதுகாப்பு நடவடிக்கைகள்",
        scenarios: {
          deepfakeHarassment: {
            title: "டீப்ஃபேக் துன்புறுத்தல்",
            desc: "சம்மதமின்றி தனிநபர்களை சமரசம் அல்லது தவறான சூழ்நிலைகளில் காட்டும் செயற்கை ஊடகத்தை உருவாக்குதல் மற்றும் விநியோகம்",
            harm: "உளவியல் காயம், நற்பெயர் சேதம், உறவு இழப்பு, தொழில்முறை விளைவுகள்",
            affected: "தனிநபர்கள், பொது நபர்கள், தனியார் குடிமக்கள், பெண்கள் மற்றும் குழந்தைகள்",
            action: "உடனடியாக ச ாட்சியங்களைப் பாதுகாக்கவும், குற்றவாளிகளுடன் ஈடுபட வேண்டாம், சைபர் க்ரைம் புகாரைப் பதிவு செய்யவும், சட்ட தடைகளைக் கோரவும்"
          },
          fakeVideos: {
            title: "AI-உருவாக்கிய போலி வீடியோக்கள்",
            desc: "உண்மையான நபர்களுக்குக் காரணமான தவறான நிகழ்வுகள், அறிக்கைகள் அல்லது செயல்களைக் காட்டும் போலி வீடியோ உள்ளடக்கம்",
            harm: "தவறான தகவல் பரவல், தேர்தல் கையாளுதல், கார்ப்பரேட் நாசவேலை, சமூக அமைதியின்மை",
            affected: "அரசியல் தலைவர்கள், பிரபலங்கள், கார்ப்பரேட் தலைவர்கள், சாதாரண குடிமக்கள்",
            action: "பல ஆதாரங்கள் மூலம் சரிபார்க்கவும், AUTHENEX தடயவியல் பகுப்பாய்வைப் பயன்படுத்தவும், தளங்கள் மற்றும் அதிகாரிகளுக்கு அறிக்கை செய்யவும்"
          },
          fakeDocuments: {
            title: "போலி சட்ட / கல்வி ஆவணங்கள்",
            desc: "AI-உருவாக்கிய சான்றிதழ்கள், நீதிமன்ற உத்தரவுகள், கல்வி நற்சான்றிதழ்கள் அல்லது அதிகாரப்பூர்வ லிதத்தொடர்புகள்",
            harm: "கல்வி மோசடி, சட்ட அமைப்பு துஷ்பிரயோகம், வேலை மோசடி, குடிவரவு மோசடி",
            affected: "கல்வி நிறுவனங்கள், முதலாளிகள், அரசு நிறுவனங்கள், நீதிமன்றங்கள்",
            action: "ஆவண மூலத்தை சரிபார்க்கவும், அங்கீகார அம்சங்களைச் சரிபார்க்கவும், வழங்கும் அதிகாரிகளுக்கு அறிக்கை செய்யவும்"
          },
          identityImpersonation: {
            title: "அடையாள ஆள்மாறாட்டம்",
            desc: "தவறான டிஜிட்டல் அடையாளங்களை செயற்கையாக உருவாக்குதல் அல்லது தளங்களில் உண்மையான நபர்களின் ஆள்மாறாட்டம்",
            harm: "நிதி மோசடி, குற்றவியல் நடத்தை ஆரோபணம், சமூக பொறியியல், நம்பிக்கை சிதைவு",
            affected: "சமூக ஊடக பயனர்கள், தொழில் வல்லுநர்கள், பாதிக்கப்படக்கூடிய மக்கள், வணிகங்கள்",
            action: "டிஜிட்டல் தடயத்தை கண்காணிக்கவும், பல-காரணி அங்கீகாரத்தை இயக்கவும், ஆள்மாறாட்ட தளங்களுக்கு அறிக்கை செய்யவும்"
          },
          politicalMisinfo: {
            title: "அரசியல் தவறான தகவல்",
            desc: "தேர்தல்கள் அல்லது அரசியல் சொற்பொழிவை பாதிக்க AI-உருவாக்கிய உள்ளடக்கத்தின் ஒருங்கிணைந்த பரப்புதல்",
            harm: "ஜனநாயக செயல்முறை குறுக்கீடு, வாக்காளர் கையாளுதல், சமூகக் களுத்துவம், வன்முறையைத் தூண்டுதல்",
            affected: "தேர்தல் அமைப்புகள், அரசியல் வேட்பாளர்கள், சாதாரண வாக்காளர்கள், ஜனநாயக நிறுவனங்கள்",
            action: "தேர்தல் ஆணையத்திற்கு அறிக்கை செய்யவும், பகிர்வதற்கு முன் உண்மை-சரிபார்க்கவும், தள வெளிப்படைத்தன்மை முன்முயற்சிகளை ஆதரிக்கவும்"
          },
          financialFraud: {
            title: "AI பயன்படுத்தி நிதி மோசடி",
            desc: "செயற்கை சந்தை கையாளுதல், மோசடி முதலீட்டு திட்டங்கள், அல்லது AI-இயக்கப்படும் ஃபிஷிங் பிரச்சாரங்கள்",
            harm: "நிதி இழப்பு, சந்தை நிலையற்ற தன்மை, முதலீட்டாளர் நம்பிக்கை சிதைவு, முறைசார் ஆபத்து",
            affected: "தனியார் முதலீட்டாளர்கள், நிதி நிறுவனங்கள், ஒழுங்குபடுத்தும் நிறுவனங்கள், ஓய்வூதிய நிதிகள்",
            action: "SEBI/RBIக்கு அறிக்கை செய்யவும், நிதி குற்ற புகாரைப் பதிவு செய்யவும், பரிவர்த்தனை பதிவுகளைப் பாதுகாக்கவும்"
          }
        },
      },
      legalFramework: {
        title: "சட்ட கட்டமைப்பு",
        subtitle: "டிஜிட்டல் குற்றங்களை நி governmentயமிக்கும் இந்திய சட்டங்கள்",
        laws: {
          it: {
            act: "தகவல் தொழில்நுட்ப சட்டம், 2000",
            section: "பிரிவு 66C, 66D, 66E",
            desc: "அடையாள திருட்டு, ஆள்மாறாட்டம் மூலம் மோசடி மற்றும் டிஜிட்டல் ஊடகம் மூலம் தனியுரிமை மீறல்",
            applicability: "AI-உருவாக்கிய ஆள்மாறாட்டம் மற்றும் டீப்ஃபேக் விநியோகத்திற்கு நேரடியாக பொருந்தும்"
          },
          bns: {
            act: "பாரதிய நியாய சம்ஹிதா, 2023",
            section: "பிரிவு 318, 319, 336",
            desc: "மோசடி, ஆள்மாறாட்டம் மூலம் மோசடி மற்றும் மின்னணு பதிவுகளின் போலியெழுதுதல்",
            applicability: "AI-உருவாக்கிய மோசடி ஆவணங்கள் மற்றும் செயற்கை அடையாள குற்றங்களை உள்ளடக்குகிறது"
          },
          copyright: {
            act: "பதிப்புரிமை சட்டம், 1957",
            section: "பிரிவு 51, 63",
            desc: "பதிப்புரிமை மீறல் மற்றும் பதிப்புரிமை மீறல் குற்றங்கள்",
            applicability: "செயற்கை ஊடகத்தில் சாயல் மற்றும் ஆளுமை உரிமைகளின் அங்கீகரிக்கப்படாத பயன்பாடு"
          },
          indecent: {
            act: "பெண்களின் அநாகரீக பிரதிநிதித்துவ தடைச் சட்டம், 1986",
            section: "முழு சட்டம்",
            desc: "விளம்பரங்கள் அல்லது பிரசுரங்கள் மூலம் பெண்களின் அநாகரீக பிரதிநிதித்துவத்தின் மீதான தடை",
            applicability: "டீப்ஃபேக் ஆபாசம் மற்றும் சம்மதமற்ற செயற்கை நெருக்கமான படங்கள்"
          }
        },
      },
      remedies: {
        title: "தீர்வுகள்",
        subtitle: "நீதிக்கான படிகள்",
        steps: {
          preserve: {
            step: "1",
            title: "டிஜிட்டல் சான்றுகளைப் பாதுகாக்கவும்",
            desc: "குற்றவாளியை எச்சரிக்காமல் உடனடியாக அனைத்து டிஜிட்டல் தடயங்களையும் பாதுகாக்கவும்",
            details: [
              "நேர முத்திரைகள் மற்றும் URLகள் காட்டும் திரைப்பிடிப்புகளை எடுக்கவும்",
              "மெட்டாடேட்டாவை மாற்றாமல் அசல் கோப்புகளைப் பாதுகாக்கவும்",
              "சாதன தகவல் மற்றும் அணுகல் பதிவுகளைப் பதிவு செய்யவும்",
              "எந்த உள்ளடக்கத்தையும் நீக்காதீர்கள் அல்லது திருத்தாதீர்கள்",
              "ஒருமைப்பாடு சரிபார்ப்புக்கான க்ரிப்டோகிராஃபிக் ஹாஷ்களை உருவாக்கவும்"
            ]
          },
          verify: {
            step: "2",
            title: "AUTHENEX பயன்படுத்தி உள்ளடக்கத்தை சரிபார்க்கவும்",
            desc: "சாட்சிய மதிப்பிற்காக தடயவியல் சரிபார்ப்பு அறிக்கையை உருவாக்கவும்",
            details: [
              "சந்தேகத்திற்குரிய உள்ளடக்கத்தை AUTHENEX தளத்தில் பதிவேற்றவும்",
              "விரிவான பல-சமிக்ஞை பகுப்பாய்வைக் கோரவும்",
              "நேர முத்திரையுடன் கையொப்பமிட்ட தடயவியல் அறிக்கையைப் பதிவிறக்கவும்",
              "தள சரிபார்ப்பு மூலம் அறிக்கை நம்பகத்தன்மையை உறுதிப்படுத்தவும்",
              "அணுகல் கட்டுப்பாடுகளுடன் அறிக்கையை பாதுகாப்பாக சேமிக்கவும்"
            ]
          },
          document: {
            step: "3",
            title: "சம்பவத்தை ஆவணப்படுத்தவும்",
            desc: "சட்ட நடவடிக்கைகளுக்கான விரிவான சம்பவ பதிவை உருவாக்கவும்",
            details: [
              "காலவரிசை நிகழ்வு பதிவை பராமரிக்கவும்",
              "அனைத்து தொடர்பு முயற்சிகளையும் பதிவு செய்யவும்",
              "தாக்கம் மற்றும் சேதத்தை ஆவணப்படுத்தவும்",
              "சாத்தியமான சாட்சிகளை அடையாளம் காணவும்",
              "பொருந்தினால் நிதி பதிவுகளைப் பாதுகாக்கவும்"
            ]
          },
          complaint: {
            step: "4",
            title: "சைபர் க்ரைம் புகாரை பதிவு செய்யவும்",
            desc: "தேசிய சைபர் க்ரைம் அறிக்கையிடல் போர்ட்டலில் அறிக்கையிடவும்",
            details: [
              "cybercrime.gov.in அறிக்கையிடல் போர்ட்டலை அணுகவும்",
              "பொருத்தமான குற்ற வகையை தேர்ந்தெடுக்கவும்",
              "சான்றாக AUTHENEX தடயவியல் அறிக்கையைப் பதிவேற்றவும்",
              "விரிவான சம்பவ விவரத்தை வழங்கவும்",
              "கண்காணிப்புக்கான ரசீது எண்ணைப் பெறவும்"
            ]
          },
          fir: {
            step: "5",
            title: "தேவைப்பட்டால் FIR பதிவு செய்யவும்",
            desc: "அறிவிக்கக்கூடிய குற்றங்களுக்கு காவல்துறைக்கு உயர்த்தவும்",
            details: [
              "உள்ளூர் காவல் நிலையம் அல்லது சைபர் செல்லை பார்வையிடவும்",
              "அச்சிடப்பட்ட தடயவியல் அறிக்கைகள் மற்றும் சான்றுகளை எடுத்துச் செல்லவும்",
              "தொடர்புடைய IT சட்டப் பிரிவுகளின் கீழ் FIR கோரவும்",
              "உங்கள் பதிவுகளுக்காக FIR நகலைப் பெறவும்",
              "விசாரணை அதிகாரியுடன் தவறாமல் தொடர்பில் இருங்கள்"
            ]
          },
          legal: {
            step: "6",
            title: "சட்ட ஆலோசனை பெறுங்கள்",
            desc: "சிக்கலான வழக்குகள் அல்லது சிவில் தீர்வுகளுக்கு வழக்கறிஞரை ஈடுபடுத்தவும்",
            details: [
              "சைபர் சட்டத்தில் நிபுணத்துவம் பெற்ற வழக்கறிஞரை அணுகவும்",
              "சிவில் தடை வாய்ப்புகளை மதிப்பீடு செய்யவும்",
              "பொருந்தினால் அவதூறு வழக்குகளை பரிசீலிக்கவும்",
              "சாத்தியமான நீதிமன்ற சான்றுக்கு தயாராகவும்",
              "பாதிக்கப்பட்டவர் இழப்பீட்டு திட்டங்களை ஆராயவும்"
            ]
          }
        },
      },
      disclaimer: {
        title: "சட்ட பொறுப்பு மறுப்பு & நெறிமுறை நிலைப்பாடு",
        content: {
          para1: "AUTHENEX ஒரு நீதிமன்றம், சட்ட அமலாக்க நிறுவனம் அல்லது கட்டுப்பாட்டு அதிகாரம் அல்ல. நாங்கள் தடயவியல் பகுப்பாய்வு கருவிகள் மற்றும் கல்வி வளங்களை வழங்கும் தொழில்நுட்ப தளம். எங்கள் அறிக்கைகள் அல்காரிதம் பகுப்பாய்வின் அடிப்படையில் தொழில்நுட்ப தெரிவிப்புகளை வழங்குகின்றன; அவை சட்ட கண்டுபிடிப்புகள் அல்லது உறுதியான சான்றுகள் அல்ல.",
          para2: "டிஜிட்டல் உள்ளடக்கத்தின் நம்பகத்தன்மை, சட்டபூர்வத்தன்மை அல்லது விளைவுகள் குறித்த இறுதி நிர்ணயங்கள் பிரத்யேகமாக திறமையான நீதித்துறை அதிகாரிகள், சட்ட அமலாக்க நிறுவனங்கள் மற்றும் கட்டுப்பாட்டு அமைப்புகளிடம் உள்ளன.",
          para3: "நாங்கள் நெறிமுறை AI வளர்ச்சி மற்றும் பொறுப்பான தொழில்நுட்ப பயன்பாட்டிற்கु வாக்குறுதி அளிக்கிறோம். எங்கள் தளம் உண்மையை ஆதரிக்க, பாதிக்கப்படக்கூடிய மக்களைப் பாதுகாக்க மற்றும் டிஜிட்டல் நம்பிக்கையை வலுப்படுத்த வடிவமைக்கப்பட்டுள்ளது.",
          updated: "கடைசியாக புதுப்பிக்கப்பட்டது: பிப்ரவரி 2026. இந்த ஆவணம் சட்டங்கள் மற்றும் தளம் திறன்கள் பரிணாமம் அடையும்போது திருத்தத்திற்கு உட்பட்டது."
        }
      },
      footer: {
        copyright: "© 2026 Authenex. தேசிய டிஜிட்டல் நம்பிக்கை தளம்.",
        tagline: "நெறிமுறை AI, வடிவமைப்பு மூலம் தனியுரிமை மற்றும் அனைவருக்கும் டிஜிட்டல் பாதுகாப்புக்கு அர்ப்பணிக்கப்பட்டுள்ளது."
      }
    },
    auth: {
      welcomeBack: "மீண்டும் வருக",
      subtitle: "தடயவியல் ஆய்வு கருவிகளை அணுக உள்நுழையவும்",
      continueGoogle: "Google உடன் தொடரவும்",
      continueEmail: "அல்லது மின்னஞ்சலுடன் தொடரவும்",
      continueGuest: "விருந்தினராக தொடரவும் (அமைப்பு இல்லை)",
      emailLabel: "மின்னஞ்சல் முகவரி",
      passwordLabel: "கடவுச்சொல்",
      signInButton: "உள்நுழையவும்",
      secured: "256-பிட் குறியாக்கத்துடன் பாதுகாக்கப்பட்டது",
      backHome: "முகப்புக்குத் திரும்பு"
    }
  },
  te: {
    nav: {
      dashboard: "డాష్‌బోర్డ్",
      newAnalysis: "కొత్త విశ్లేషణ",
      myCases: "నా కేసులు",
      analytics: "విశ్లేషణలు",
      settings: "సెట్టింగ్‌లు",
      help: "సహాయం",
      logout: "సైన్ అవుట్",
      profile: "ప్రొఫైల్"
    },
    header: {
      searchPlaceholder: "కేసులను శోధించండి...",
      systemOnline: "సిస్టమ్ ఆన్‌లైన్",
      notifications: "నోటిఫికేషన్లు",
      markAllRead: "అన్నీ చదివినట్లు గుర్తు పెట్టు",
      noNotifications: "నోటిఫికేషన్లు లేవు",
      viewAll: "అన్నీ చూడండి"
    },
    dashboard: {
      title: "డాష్‌బోర్డ్",
      subtitle: "సైబర్ క్రైమ్ మరియు AI ముప్పులపై రియల్-టైమ్ సమాచారం.",
      stats: {
        cybercrime: "సైబర్ క్రైమ్ కేసులు",
        deepfake: "డీప్‌ఫేక్ కేసులు",
        aiFraud: "AI మోసం",
        arrests: "అరెస్టులు"
      },
      recentActivity: "ఇటీవలి కార్యకలాపాలు",
      analysisLink: "విశ్లేషణ",
      newsFeed: "లైవ్ న్యూస్ ఫీడ్",
      recentAnalysis: {
        status: {
          completed: "విశ్లేషణ పూర్తయింది",
          processing: "ప్రాసెస్ చేయబడుతోంది..."
        },
        actions: {
          share: "భాగస్వామ్యం చేయండి",
          download: "నివేదికను డౌన్‌లోడ్ చేయండి"
        }
      }
    },
    analyze: {
      title: "ఫోరెన్సిక్ విశ్లేషణ",
      subtitle: "కంటెంట్ రకాన్ని ఎంచుకోండి మరియు ధృవీకరణ కోసం ఫైల్‌లను అప్‌లోడ్ చేయండి",
      types: {
        image: "చిత్ర విశ్లేషణ",
        video: "వీడియో విశ్లేషణ",
        document: "పత్ర తనిఖీ",
        audio: "ఆడియో విశ్లేషణ",
        email: "ఇమెయిల్ ధృవీకరణ",
        text: "వచన గుర్తింపు"
      },
      steps: {
        upload: "అప్‌లోడ్",
        scanning: "స్కానింగ్",
        aiAnalysis: "AI విశ్లేషణ",
        results: "ఫలితాలు"
      },
      dropzone: {
        dragActive: "ఫైల్‌లను ఇక్కడ వదలండి",
        dragDrop: "ఫైల్‌లను ఇక్కడ లాగండి",
        browse: "లేదా మీ కంప్యూటర్ నుండి బ్రౌజ్ చేయడానికి క్లిక్ చేయండి",
        selectFiles: "ఫైల్‌లను ఎంచుకోండి",
        selectedFiles: "ఎంచుకున్న ఫైళ్లు"
      },
      button: {
        start: "విశ్లేషణ ప్రారంభించండి",
        analyzing: "విశ్లేషిస్తోంది..."
      },
      results: {
        authentic: "అసలైన కంటెంట్",
        aiGenerated: "AI రూపొందించినది",
        verdict: "తీర్పు",
        forensicBreakdown: "ఫోరెన్సిక్ విశ్లేషణ వివరాలు",
        detailedFindings: "విస్తృతమైన ఫలితాలు",
        newAnalysis: "కొత్త విశ్లేషణ",
        downloadReport: "నివేదికను డౌన్‌లోడ్ చేయండి",
        processing: "ఫోరెన్సిక్ విశ్లేషణ ప్రాసెస్ చేయబడుతోంది... వేచి ఉండండి"
      },
      report: {
        probability: "Probability",
        human: "Human",
        authenticity: "Authenticity",
        id: "ID",
        risk: "Risk",
        authenticityAssessment: "Authenticity Assessment",
        aiProbability: "AI Probability",
        humanAuthenticity: "Human Authenticity",
        confidenceScore: "Confidence Score",
        syntheticDetected: "Synthetic Content Detected",
        likelyAuthentic: "Content Likely Authentic",
        multiLayerAnalysis: "Multi-Layer Detection Analysis",
        layersAnalyzed: "layers analyzed with weighted scoring",
        overallConfidence: "Overall Confidence",
        layerContribution: "Layer Contribution Analysis (Score × Weight)",
        noLayers: "No Detection Layers Available",
        noLayersDesc: "The AI analysis did not return detailed layer data",
        categoryDistribution: "Category-wise Distribution",
        detectionFindings: "Detection Findings",
        heatmap: "Heatmap Analysis",
        temporal: "Temporal Consistency",
        forensicReport: "Forensic Analysis Report",
        examiner: "Examiner",
        date: "Date",
        conclusion: "Conclusion",
        recommendations: "Recommendations",
        tabs: {
          details: "Analysis Details",
          visual: "Visual Evidence",
          report: "Forensic Report"
        },
        error: {
          title: "No Analysis Data",
          desc: "Upload a file to begin analysis",
          action: "Start Analysis"
        }
      }
    },
    chat: {
      title: "ఆథెనెక్స్ AI",
      subtitle: "ఫోరెన్సిక్ ఇంటిలిజెన్స్",
      linked: "లింక్ చేయబడింది",
      placeholder: "ఆథెనెక్స్ AIని అడగండి...",
      listening: "వింటోంది...",
      welcome: "ఆథెనెక్స్ AI కోర్ ప్రారంభించబడింది. ఫోరెన్సిక్ విశ్లేషణకు సిద్ధంగా ఉంది.",
      connectionError: "కనెక్షన్ లోపం. దయచేసి మళ్లీ ప్రయత్నించండి."
    },
    cases: {
      title: "కేసు నిర్వహణ",
      subtitle: "అన్ని ఫోరెన్సిక్ విశ్లేషణలను నిర్వహించండి మరియు సమీక్షించండి",
      searchPlaceholder: "ఐడి, శీర్షిక లేదా ట్యాగ్‌ల ద్వారా కేసులను శోధించండి...",
      filters: {
        all: "అన్ని కేసులు",
        completed: "పూర్తయింది",
        processing: "ప్రాసెసింగ్",
        pending: "పెండింగ్‌లో ఉంది"
      },
      table: {
        case: "కేసు",
        type: "రకం",
        date: "తేదీ",
        status: "స్థితి",
        result: "ఫలితం",
        confidence: "కాన్ఫిడెన్స్",
        actions: "చర్యలు"
      },
      noCases: "కేసులు కనుగొనబడలేదు"
    },
    news: {
      top: "ముఖ్య వార్తలు",
      deepfake: "డీప్‌ఫేక్",
      cybercrime: "సైబర్ క్రైమ్",
      ai: "AI భద్రత",
      policy: "విధానం",
      cases: "కేసులు",
      social: "సామాజిక"
    },
    scanHistory: {
      title: "ఇటీవలి స్కాన్లు",
      noData: "స్కాన్ చరిత్ర కనుగొనబడలేదు.",
      loading: "చరిత్ర లోడ్ అవుతోంది...",
      confidence: "కాన్ఫిడెన్స్",
      justNow: "ఇప్పుడే",
      ago: "క్రితం"
    },
    profile: {
      tabs: {
        overview: "అవలోకనం",
        activity: "కార్యకలాపం",
        achievements: "విజయాలు"
      },
      edit: "ప్రొఫైల్ సవరించండి",
      save: "మార్పులను lưu చేయండి",
      cancel: "రద్దు చేయండి",
      role: "పాత్ర",
      location: "స్థానం",
      credits: {
        available: "అందుబాటులో ఉన్న క్రెడిట్స్",
        refill: "రీఫిల్ తేదీ",
        add: "క్రెడిట్స్ జోడించండి",
        usage: "నెలవారీ వినియోగం"
      },
      about: "గురించి",
      email: "ఇమెయిల్",
      website: "వెబ్‌సైట్",
      memberSince: "సభ్యత్వం",
      lastActive: "చివరి సక్రియ",
      plan: {
        current: "ప్రస్తుత ప్రణాళిక",
        renews: "పునరుద్ధరణ",
        upgrade: "ప్లాన్ అప్‌గ్రేడ్ చేయండి"
      },
      delete: {
        title: "ఖాతాను తొలగించాలా?",
        desc: "ఈ చర్యను రద్దు చేయలేము. మీ డేటా అంతా శాశ్వతంగా తొలగించబడుతుంది.",
        confirm: "తొలగించు"
      }
    },
    settings: {
      title: "సెట్టింగ్‌లు",
      subtitle: "మీ ఖాతా ప్రాధాన్యతలు మరియు భద్రతను నిర్వహించండి.",
      appearance: "రూపం",
      notifications: "నోటిఫికేషన్లు",
      security: "భద్రత మరియు గోప్యత",
      items: {
        darkMode: "డార్క్ మోడ్",
        language: "భాష",
        emailNotif: "ఇమెయిల్ నోటిఫికేషన్లు",
        pushNotif: "పుష్ నోటిఫికేషన్లు"
      },
      securityScore: "భద్రతా స్కోరు",
      dangerZone: "ప్రమాదకర జోన్",
      deleteAccount: "ఖాతాను తొలగించు"
    },
    help: {
      hero: {
        badge: "సహాయ కేంద్రం",
        title: "మేము మీకు ఎలా సహాయపడగలము?",
        subtitle: "కనుగొనడం, ఫీచర్లు మరియు ట్రబుల్షూటింగ్ గురించి సమాధానాలు కనుగొనండి.",
        search: "సమాధానాల కోసం వెతకండి..."
      },
      sections: {
        overview: "అవలోకనం",
        detection: "కనుగొనే పద్ధతులు",
        troubleshooting: "ట్రబుల్షూటింగ్",
        contact: "మద్దతును సంప్రదించండి"
      },
      overview: {
        title: "ఆథెనెక్స్ అంటే ఏమిటి",
        desc: "డిజిటల్ కంటెంట్ ప్రామాణికతను విశ్లేషించడానికి AI-ఆధారిత ఫోరెన్సిక్ ప్లాట్‌ఫారమ్."
      },
      faq: {
        title: "తరచుగా అడిగే ప్రశ్నలు",
        noResults: "ఫలితాలు కనుగొనబడలేదు"
      },
      channels: {
        email: "ఇమెయిల్ మద్దతు",
        docs: "డాక్యుమెంటేషన్",
        report: "సమస్యను నివేదించండి",
        chat: "లైవ్ చాట్"
      },
      disclaimer: {
        title: "నిరాకరణ",
        text: "ఫలితాలు సంభావ్య అంచనాలు మరియు మానవ తీర్పుతో ఉపయోగించాలి."
      }
    },
    landing: {
      nav: {
        brandTagline: "TrustLens",
        getStarted: "ప్రారంభించండి",
        signIn: "సైన్ ఇన్",
        brand: "Authenex"
      },
      hero: {
        badge: "ఇప్పుడు GPT-4 గుర్తింపుతో",
        title1: "నిజాన్ని ధృవీకరించండి",
        title2: "డిజిటల్ రియాలిటీ",
        description: "ఆథెనెక్స్ 99.9% ఖచ్చితత్వంతో సింథటిక్ మీడియాను గుర్తించడానికి న్యూరల్ ఫోరెన్సిక్స్, క్వాంటం-నిరోధక ధృవీకరణ మరియు వివరించదగిన AIని మిళితం చేస్తుంది.",
        startAnalysis: "ఉచిత విశ్లేషణ ప్రారంభించండి",
        watchDemo: "డెమో చూడండి",
        goToDashboard: "డాష్‌బోర్డ్‌కి వెళ్ళండి",
        badges: {
          soc2: "SOC 2 టైప్ II",
          fisma: "FISMA కంప్లైంట్",
          gdpr: "GDPR సిద్ధం"
        },
        stats: {
          verification: "ధృవీకరణ",
          activeUsers: "క్రియాశీల వినియోగదారులు"
        }
      },
      features: {
        sectionBadge: "ప్లాట్‌ఫారమ్ సామర్థ్యాలు",
        sectionTitle: "ఆరు కోణాలు",
        sectionTitleHighlight: "డిజిటల్ ఫోరెన్సిక్స్",
        sectionDescription: "అత్యాధునిక న్యూరల్ నెట్‌వర్క్‌లు మరియు ధృవీకరణ ద్వారా ఆధారితమైన అన్ని డిజిటల్ కంటెంట్ రకాల సమగ్ర విశ్లేషణ.",
        imageForensics: {
          title: "మేజ్ ఫోరెన్సిక్స్",
          description: "అధునాతన GAN వేలిముద్ర మరియు మెటాడేటా విశ్లేషణను ఉపయోగించి AI-ఉత్పత్తి చేసిన చిత్రాలు, డీప్‌ఫేక్‌లు మరియు తారుమారు చేసిన ఫోటోలను గుర్తించండి.",
          stat: "99.9% ఖచ్చితత్వం"
        },
        videoVerification: {
          title: "వీడియో ధృవీకరణ",
          description: "సమగ్ర వీడియో ప్రామాణికత కోసం తాత్కాలిక స్థిరత్వ విశ్లేషణ, ఫ్రేమ్-స్థాయి ఇంటర్‌పోలేషన్ గుర్తింపు మరియు లిప్-సింక్ ధృవీకరణ.",
          stat: "నిజ సమయం"
        },
        documentAuth: {
          title: "పత్ర ధృవీకరణ",
          description: "చట్టపరమైన పత్ర సమగ్రత కోసం ఫాంట్ ఫోరెన్సిక్స్, సంతకం ధృవీకరణ, లేఅవుట్ విశ్లేషణ మరియు బ్లాక్‌చెయిన్ టైమ్‌స్టాంప్ ధృవీకరణ.",
          stat: "కోర్ట్-రెడీ"
        },
        emailIntel: {
          title: "ఇమెయిల్ ఇంటెలిజెన్స్",
          description: "హెడర్ ఫోరెన్సిక్స్, SPF/DKIM ధృవీకరణ, పంపేవాళ్ళ కీర్తి విశ్లేషణ మరియు ఫిషింగ్ గుర్తింపు.",
          stat: "ISP-ఇంటిగ్రేటెడ్"
        },
        audioAnalysis: {
          title: "ఆడియో విశ్లేషణ",
          description: "వాయిస్ బయోమెట్రిక్ మ్యాచింగ్, సింథటిక్ స్పీచ్ గుర్తింపు, అకౌస్టిక్ పర్యావరణ విశ్లేషణ మరియు డీప్‌ఫేక్ ఆడియో గుర్తింపు.",
          stat: "న్యూరల్ నెట్"
        },
        textDetection: {
          title: "వచన గుర్తింపు",
          description: "సింథటిక్ వచన గుర్తింపు కోసం గందరగోళ స్కోరింగ్, పేలుడు విశ్లేషణ, శైలి శైలి సరిపోలిక మరియు LLM గుణం.",
          stat: "GPT-4 సిద్ధం"
        }
      },
      process: {
        badge: "ఇది ఎలా పనిచేస్తుంది",
        title: "మూడు దశల్లో",
        titleHighlight: "ఫోరెన్సిక్ పైప్‌లైన్",
        description: "తీసుకోవడం నుండి ధృవీకరించబడిన నివేదిక వరకు, మా ఆటోమేటెడ్ పైప్‌లైన్ ఖచ్చితత్వం, పారదర్శకత మరియు చట్టపరమైన ఆమోదయోగ్యతను నిర్ధారిస్తుంది.",
        step1: {
          title: "సురక్షిత తీసుకోవడం",
          description: "ఏదైనా డిజిటల్ ఆస్తిని లాగండి మరియు వదలండి. కస్టడీ గొలుసు కోసం ఆటోమేటిక్ మెటాడేటా సంరక్షణ మరియు క్రిప్టోగ్రాఫిక్ హాషింగ్‌తో మేము 200+ ఫార్మాట్‌లకు మద్దతు ఇస్తున్నాము.",
          features: {
            f1: "ఎండ్-టు-ఎండ్ ఎన్‌క్రిప్షన్",
            f2: "మెటాడేటా వెలికితీత",
            f3: "హాష్ ధృవీకరణ"
          }
        },
        step2: {
          title: "న్యూరల్ విశ్లేషణ",
          description: "మా ప్రత్యేక AI మోడల్స్ కంటెంట్‌ను 50+ ఫోరెన్సిక్ చెక్‌పాయింట్‌ల ద్వారా ప్రాసెస్ చేస్తాయి, మానవ కళ్ళకు కనిపించని అసాధారణతలను గుర్తిస్తాయి.",
          features: {
            f1: "50+ గుర్తింపు నమూనాలు",
            f2: "ఉప-సెకండ్ ప్రాసెసింగ్",
            f3: "నమ్మక స్కోరింగ్"
          }
        },
        step3: {
          title: "ధృవీకరించబడిన నివేదిక",
          description: "చట్టపరమైన कार्यवाही కోసం వివరించదగిన AI అంతర్దృష్టులు, అసాధారణ విజువలైజేషన్ మరియు పునరుత్పాదక సాక్ష్యాలతో కోర్టుకు సిద్ధంగా ఉన్న పత్రాలను స్వీకరించండి.",
          features: {
            f1: "PDF ఎగుమతి",
            f2: "API ఇంటిగ్రేషన్",
            f3: "బ్లాక్‌చెయిన్ టైమ్‌స్టాంప్"
          }
        }
      },
      testimonials: {
        badge: "ప్రపంచవ్యాప్తంగా విశ్వసనీయమైనది",
        title: "ధృవీకరణ యొక్క",
        titleHighlight: "స్వరాలు",
        item1: {
          quote: "తప్పుడు సమాచారానికి వ్యతిరేకంగా ఆథెనెక్స్ మా మొదటి రక్షణ వరుసగా మారింది. వివరించదగిన AI నివేదికలు కోర్టుకు సిద్ధంగా ఉన్నాయి మరియు అనేక చట్టపరమైన చర్యలలో నిలిచాయి.",
          author: "సారా చెన్",
          role: "సమాచార భద్రతా డైరెక్టర్",
          org: "గ్లోబల్ న్యూస్ నెట్‌వర్క్"
        },
        item2: {
          quote: "వారి విశ్లేషణలో ఫోరెన్సిక్ వివరాలు అపూర్వమైనవి. మేము వారి API ని మా సాక్ష్యం నిర్వహణ వ్యవస్థలో విశేషమైన సౌలభ్యంతో విలీనం చేసాము.",
          author: "మార్కస్ రోడ్రిగ్జ్",
          role: "డిజిటల్ సాక్ష్యం నిపుణుడు",
          org: "ఫెడరల్ బ్యూరో ఆఫ్ ఇన్వెస్టిగేషన్"
        },
        item3: {
          quote: "మేము ఆరు వేర్వేరు పరిష్కారాలను విశ్లేషించాము. స్థిరమైన ఖచ్చితత్వంతో తాజా వ్యాప్తి నమూనా (diffusion models) లను గుర్తించగలిగే ఏకైక ప్లాట్‌ఫారమ్ ఆథెనెక్స్.",
          author: "డాక్టర్ ఎమిలీ వాట్సన్",
          role: "చీఫ్ టెక్నాలజీ ఆఫీసర్",
          org: "సెక్యూర్ వోట్ ఇంక్."
        }
      },
      cta: {
        title: "డిజిటల్ నిజాన్ని రక్షించడానికి",
        titleHighlight: "సిద్ధమా?",
        description: "సింథటిక్ మీడియాతో పోరాడటానికి మరియు సమాచార సమగ్రతను కాపాడటానికి ఆథెనెక్స్ ఉపయోగిస్తున్న 150 కి పైగా సంస్థలు మరియు ప్రభుత్వ ఏజెన్సీలలో చేరండి.",
        start: "ఉచిత ట్రయల్ ప్రారంభించండి",
        demo: "డెమో షెడ్యూల్ చేయండి",
        footer: "క్రెడిట్ కార్డ్ అవసరం లేదు • 14-రోజుల ఉచిత ట్రయల్ • SOC 2 కంప్లైంట్"
      },

      footer: {
        tagline: "2026 నుండి డిజిటల్ నిజాన్ని రక్షించడం",
        links: {
          privacy: "గోప్యత",
          terms: "నిబంధనలు",
          security: "భద్రత",
          api: "API"
        }
      }
    },
    legal: {
      hero: {
        title: "చట్టపరమైన రక్షణలు & AI దుర్వినియోగ రక్షణ",
        subtitle: "భారతీయ చట్టం ప్రకారం AI-ఉత్పత్తి చేసిన డీప్‌ఫేక్స్, గుర్తింపు దొంగతనం మరియు డిజిటల్ మోసం నుండి మీ హక్కులు, చట్టపరమైన మార్గాలు మరియు రక్షణలు",
        stats: {
          casesReported: "నివేదించబడిన కేసులు",
          arrests: "అరెస్టులు",
          lawsEnforced: "అమలు చేయబడిన చట్టాలు"
        }
      },
      actionSection: {
        title: "తక్షణ చర్య తీసుకోండి",
        subtitle: "సైబర్ క్రైమ్ రిపోర్టింగ్ మరియు చట్టపరమైన వనరులకు నేరుగా యాక్సెస్",
        buttons: {
          reportCybercrime: {
            label: "సైబర్ క్రైమ్ నివేదించండి",
            desc: "అన్ని డిజిటల్ నేరాల కోసం జాతీయ సైబర్ క్రైమ్ రిపోర్టింగ్ పోర్టల్",
            authority: "హోం మినిస్ట్రీ, భారత ప్రభుత్వం",
            when: "AI-ఉత్పత్తి చేసిన కంటెంట్ దుర్వినియోగం, గుర్తింపు దొంగతనం లేదా ఆన్‌లైన్ వేధింపులతో సహా ఏదైనా సైబర్ నేరం"
          },
          fileFIR: {
            label: "ఆన్‌లైన్ FIR ఫైల్ చేయండి",
            desc: "మొదటి సమాచార నివేదిక నమోదు కోసం రాష్ట్ర పోలీస్ పోర్టల్‌లు",
            authority: "రాష్ట్ర పోలీస్ విభాగాలు",
            when: "భౌతిక పోలీస్ స్టేషన్ సందర్శన తక్షణమే సాధ్యం కానప్పుడు; వ్యక్తిగత సందర్శనతో ఫాలో-అప్ చేయండి"
          },
          identityTheft: {
            label: "గుర్తింపు దొంగతనాన్ని నివేదించండి",
            desc: "గుర్తింపు-సంబంధిత సైబర్ నేరాల కోసం అంకితమైన పోర్టల్",
            authority: "ఇండియన్ సైబర్ క్రైమ్ కోఆర్డినేషన్ సెంటర్",
            when: "కృత్రిమ గుర్తింపు సృష్టి, ఆలకింపు, లేదా వ్యక్తిగత సమాచారం యొక్క అనధికార ఉపయోగం"
          },
          womenChild: {
            label: "మహిళలు & పిల్లల భద్రత",
            desc: "లింగ ఆధారిత మరియు పిల్లలను లక్ష్యంగా చేసుకునే AI దుర్వినియోగం కోసం ప్రత్యేక రిపోర్టింగ్",
            authority: "జాతీయ మహిళా కమిషన్, NCPCR",
            when: "డీప్‌ఫేక్ అశ్లీలత, సమ్మతి లేని సన్నిహిత చిత్రాలు, పిల్లలను లక్ష్యంగా చేసుకున్న కృత్రిమ కంటెంట్"
          },
          helpline: {
            label: "జాతీయ సైబర్ హెల్ప్‌లైన్",
            desc: "సైబర్ క్రైమ్ మార్గదర్శకత్వం కోసం 24/7 టెలిఫోన్ సహాయం",
            authority: "ఎలక్ట్రానిక్స్ మరియు సమాచార సాంకేతికత మంత్రిత్వ శాఖ",
            when: "తక్షణ మార్గదర్శకత్వం అవసరం, రిపోర్టింగ్ ప్రక్రియపై స్పష్టత, అత్యవసర పరిస్థితులు"
          },
          sebi: {
            label: "SEBI ఫిర్యాదు పోర్టల్",
            desc: "సెక్యూరిటీల మార్కెట్ మోసం మరియు AI-నడిచే పెట్టుబడి స్కామ్‌లు",
            authority: "సెక్యూరిటీస్ అండ్ ఎక్స్ఛేంజ బోర్డ్ ఆఫ్ ఇండియా",
            when: "AI-ఉత్పత్తి చేసిన మార్కెట్ తారుమారు, మోసపూరిత పెట్టుబడి పథకాలు, కృత్రిమ కార్పొరేట్ కమ్యూనికేషన్‌లు"
          }
        }
      },
      privacy: {
        title: "గోప్యత & డేటా రక్షణ",
        subtitle: "మేము మీ డేటాను ఎలా రక్షిస్తాము",
        processedData: {
          title: "మేము ప్రాసెస్ చేసే డేటా",
          items: [
            "ఫోరెన్సిక్ విశ్లేషణ కోసం సమర్పించిన కంటెంట్ (చిత్రాలు, ఆడియో, పత్రాలు, టెక్స్ట్)",
            "డిటెక్షన్ అల్గారిథమ్‌లకు అవసరమైన సాంకేతిక మెటాడేటా",
            "ఖాతా ప్రామాణీకరణ మరియు అధికార ఆధారాలు",
            "విశ్లేషణ టైమ్‌స్టాంప్‌లు మరియు ప్రాసెసింగ్ వ్యవధి లాగ్‌లు",
            "ప్లాట్‌ఫారమ్ మెరుగుదల కోసం అనామక వినియోగ నమూనాలు"
          ]
        },
        neverStored: {
          title: "ఎప్పుడూ నిల్వ చేయబడదు",
          items: [
            "విశ్లేషణ పూర్తయిన తర్వాత ముడి కంటెంట్ (24-గంట స్వీయ-తొలగింపు)",
            "ఖాతా అవసరాలకు మించిన వ్యక్తిగత గుర్తింపు",
            "మూడవ-పక్ష డేటా లేదా సంబంధం లేని వినియోగదారు సమాచారం",
            "స్పష్టమైన వినియోగదారు యాక్సెస్ అనుమతి లేకుండా విశ్లేషణ ఫలితాలు",
            "క్రాస్-రిఫరెన్స్డ్ బాహ్య డేటాబేస్ సమాచారం"
          ]
        },
        encryption: {
          title: "ఎన్క్రిప్షన్ & భద్రత",
          items: [
            "విశ్రాంతిలో ఉన్న డేటా కోసం AES-256 ఎన్క్రిప్షన్",
            "అన్ని డేటా ట్రాన్సిట్ కోసం TLS 1.3",
            "సున్నితమైన ఫోరెన్సిక్ బదిలీల కోసం ఎండ్-టు-ఎండ్ ఎన్క్రిప్షన్",
            "హార్డ్‌వేర్ సెక్యూరిటీ మాడ్యూల్ (HSM) సంరక్షిత కీ నిర్వహణ",
            "కంటెంట్ ప్రాసెసింగ్ కోసం జీరో-నాలెడ్జ్ ఆర్కిటెక్చర్"
          ]
        },
        rights: {
          title: "మీ హక్కులు",
          items: {
            privacy: {
              title: "గోప్యత హక్కు",
              desc: "మీ కంటెంట్ బాహ్య యాక్సెస్ లేకుండా వేరుచేయబడిన వాతావరణాలలో ప్రాసెస్ చేయబడుతుంది"
            },
            deletion: {
              title: "డేటా తొలగింపు హక్కు",
              desc: "అన్ని సంబంధిత డేటా మరియు విశ్లేషణ చరిత్ర యొక్క తక్షణ తొలగింపును అభ్యర్థించండి"
            },
            transparency: {
              title: "పారదర్శకత హక్కు",
              desc: "మీ డేటా ఎలా ప్రాసెస్ చేయబడింది మరియు నిర్వహించబడిందనే దాని యొక్క పూర్తి లాగ్‌లను యాక్సెస్ చేయండి"
            },
            portability: {
              title: "పోర్టబిలిటీ హక్కు",
              desc: "మీ అన్ని డేటా మరియు విశ్లేషణ నివేదికలను ప్రామాణిక ఫార్మాట్‌లలో ఎగుమతి చేయండి"
            }
          }
        },
        compliance: {
          title: "సమ్మతి అమరిక",
          items: {
            it: {
              title: "సమాచార సాంకేతికత చట్టం, 2000",
              desc: "సున్నితమైన డేటా రక్షణ కోసం సెక్షన్ 43A మరియు SPDI నియమాల సమ్మతి"
            },
            dpdp: {
              title: "డిజిటల్ వ్యక్తిగత డేటా రక్షణ చట్టం",
              desc: "ప్రయోజన పరిమితి, డేటా తగ్గింపు మరియు నిల్వ పరిమితి సూత్రాలు"
            },
            gdpr: {
              title: "ప్రపంచ గోప్యత ప్రమాణాలు",
              desc: "అధికార పరిధి దావాలు లేకుండా GDPR-సంలగ్నమైన గోప్యత-ద్వారా-డిజైన్ సూత్రాలు"
            }
          }
        }
      },
      security: {
        title: "ప్లాట్‌ఫారమ్ భద్రత & దుర్వినియోగ నివారణ",
        prevention: {
          title: "నివారణ చర్యలు",
          items: {
            integrity: {
              title: "ఫలిత సమగ్రత రక్షణ",
              desc: "అన్ని ఫోరెన్సిక్ నివేదికల క్రిప్టోగ్రాఫిక్ సంతకాలు టాంపరింగ్ లేదా ఫోర్జరీని నిరోధిస్తాయి"
            },
            falseAccusation: {
              title: "తప్పుడు ఆరోపణ రక్షణలు",
              desc: "నమ్మకం స్కోరింగ్ మరియు అనిశ్చితత పరిమాణీకరణ ఖచ్చితమైన తప్పుడు వాదనలను నిరోధిస్తాయి"
            },
            harassment: {
              title: "వేధింపుల వ్యతిరేక ప్రోటోకాల్‌లు",
              desc: "రేటు పరిమితి మరియు నమూనా గుర్తింపు వ్యక్తుల క్రమబద్ధమైన లక్ష్యాన్ని నిరోధిస్తాయి"
            }
          }
        },
        antiAbuse: {
          title: "దుర్వినియోగ వ్యతిరేక యంత్రాంగాలు",
          items: {
            rateLimit: {
              title: "రేటు పరిమితి",
              desc: "తెలివైన థ్రాటిలింగ్ భారీ విశ్లేషణ దుర్వినియోగం మరియు API దోపిడీని నిరోధిస్తుంది"
            },
            humanReview: {
              title: "మానవ సమీక్ష పెంపు",
              desc: "అధిక-స్టేక్స్ విశ్లేషణలు నిపుణుల ఫోరెన్సిక్ సమీక్షకుల ధృవీకరణ కోసం ఫ్లాగ్ చేయబడతాయి"
            },
            monitoring: {
              title: "అనుమానాస్పద వినియోగ పర్యవేక్షణ",
              desc: "అసాధారణ ప్లాట్‌ఫారమ్ వినియోగ నమూనాల AI-నడిచే గుర్తింపు"
            },
            verification: {
              title: "ఖాతా ధృవీకరణ స్థాయిలు",
              desc: "గుర్తింపు ధృవీకరణ మరియు వినియోగ చరిత్ర ఆధారంగా ప్రగతిశీల విశ్వాస స్థాయిలు"
            }
          }
        }
      },
      misuse: {
        title: "AI దుర్వినియోగాన్ని గుర్తించడం",
        subtitle: "ముప్పు దృశ్యాలు మరియు రక్షణాత్మక చర్యలు",
        scenarios: {
          deepfakeHarassment: {
            title: "డీప్‌ఫేక్ వేధింపులు",
            desc: "సమ్మతి లేకుండా వ్యక్తులను సమ్మతిలో లేదా తప్పుడు పరిస్థితులలో చూపించే కృత్రిమ మీడియా సృష్టి మరియు పంపిణీ",
            harm: "మానసిక గాయం, ప్రతిష్ట నష్టం, సంబంధ నష్టం, వృత్తిపరమైన పర్యవసానాలు",
            affected: "వ్యక్తులు, ప్రజా వ్యక్తులు, ప్రైవేట్ పౌరులు, మహిళలు మరియు పిల్లలు",
            action: "తక్షణమే సాక్ష్యాలను భద్రపరచండి, నేరస్థులను నిమగ్నం చేయవద్దు, సైబర్ క్రైమ్ ఫిర్యాదును నమోదు చేయండి, చట్టపరమైన నిషేధాలు కోరండి"
          },
          fakeVideos: {
            title: "AI-ఉత్పత్తి చేసిన నకిలీ వీడియోలు",
            desc: "నిజమైన వ్యక్తులకు జవాబుదారీతనం వహించే తప్పుడు సంఘటనలు, ప్రకటనలు లేదా చర్యలను చూపించే నకిలీ వీడియో కంటెంట్",
            harm: "తప్పుడు సమాచార వ్యాప్తి, ఎన్నికల తారుమారు, కార్పొరేట్ విధ్వంసం, సామాజిక అశాంతి",
            affected: "రాజకీయ నాయకులు, ప్రముఖులు, కార్పొరేట్ నాయకులు, సాధారణ పౌరులు",
            action: "బహుళ మూలాల ద్వారా ధృవీకరించండి, AUTHENEX ఫోరెన్సిక్ విశ్లేషణను ఉపయోగించండి, ప్లాట్‌ఫారమ్‌లు మరియు అధికారులకు నివేదించండి"
          },
          fakeDocuments: {
            title: "నకిలీ చట్టపరమైన / విద్యా పత్రాలు",
            desc: "AI-ఉత్పత్తి చేసిన సర్టిఫికేట్లు, కోర్టు ఆర్డర్లు, విద్యా ఆధారాలు లేదా అధికారిక కరస్పాండెన్స్",
            harm: "విద్యా మోసం, చట్టపరమైన వ్యవస్థ దుర్వినియోగం, ఉపాధి మోసం, ఇమ్మిగ్రేషన్ మోసం",
            affected: "విద్యా సంస్థలు, యజమానులు, ప్రభుత్వ ఏజెన్సీలు, న్యాయస్థానాలు",
            action: "పత్ర మూలాన్ని ధృవీకరించండి, ప్రామాణీకరణ లక్షణాలను తనిఖీ చేయండి, జారీ చేసే అధికారులకు నివేదించండి"
          },
          identityImpersonation: {
            title: "గుర్తింపు ఆలకింపు",
            desc: "తప్పుడు డిజిటల్ గుర్తింపుల కృత్రిమ సృష్టి లేదా ప్లాట్‌ఫారమ్‌లలో నిజమైన వ్యక్తుల ఆలకింపు",
            harm: "ఆర్థిక మోసం, నేరపూరితచర్య ఆపాదించడం, సామాజిక ఇంజనీరింగ్, విశ్వాస క్షీణత",
            affected: "సోషల్ మీడియా వినియోగదారులు, వృత్తిపరులు, హాని కలిగించే జనాభా, వ్యాపారాలు",
            action: "డిజిటల్ ఫుట్‌ప్రింట్‌ని పర్యవేక్షించండి, బహుళ-కారక ప్రామాణీకరణను ప్రారంభించండి, ఆలకింపు ప్లాట్‌ఫారమ్‌లకు నివేదించండి"
          },
          politicalMisinfo: {
            title: "రాజకీయ తప్పుడు సమాచారం",
            desc: "ఎన్నికలు లేదా రాజకీయ సంభాషణను ప్రభావితం చేయడానికి AI-ఉత్పత్తి చేసిన కంటెంట్ యొక్క సమన్వయ విధానం",
            harm: "ప్రజాస్వామ్య ప్రక్రియ జోక్యం, ఓటరు తారుమారు, సామాజికధ్రువణం, హింసను ప్రేరేపించడం",
            affected: "ఎన్నికల సంస్థలు, రాజకీయ అభ్యర్థులు, సాధారణ ఓటర్లు, ప్రజాస్వామిక సంస్థలు",
            action: "ఎన్నికల కమిషన్‌కు నివేదించండి, భాగస్వామ్యం చేయడానికి ముందు వాస్తవ-తనిఖీ చేయండి, ప్లాట్‌ఫారమ్ పారదర్శకత చొరవలకు మద్దతు ఇవ్వండి"
          },
          financialFraud: {
            title: "AI ఉపయోగించి ఆర్థిక మోసం",
            desc: "కృత్రిమ మార్కెట్ తారుమారు, మోసపూరిత పెట్టుబడి పథకాలు, లేదా AI-నడిచే ఫిషింగ్ ప్రచారాలు",
            harm: "ఆర్థిక నష్టం, మార్కెట్ అస్థిరత, పెట్టుబడిదారుల విశ్వాస క్షీణత, వ్యవస్థాగత ప్రమాదం",
            affected: "చిల్లర పెట్టుబడిదారులు, ఆర్థిక సంస్థలు, నియంత్రణ సంస్థలు, పెన్షన్ ఫండ్‌లు",
            action: "SEBI/RBIకి నివేదించండి, ఆర్థిక నేర ఫిర్యాదును నమోదు చేయండి, లావాదేవీ రికార్డులను భద్రపరచండి"
          }
        }
      },
      legalFramework: {
        title: "చట్టపరమైన ఫ్రేమ్‌వర్క్",
        subtitle: "డిజిటల్ నేరాలను నియంత్రించే భారతీయ చట్టాలు",
        laws: {
          it: {
            act: "సమాచార సాంకేతికత చట్టం, 2000",
            section: "సెక్షన్ 66C, 66D, 66E",
            desc: "గుర్తింపు దొంగతనం, ఆలకింపు ద్వారా మోసం మరియు డిజిటల్ మాధ్యమాల ద్వారా గోప్యత ఉల్లంఘన",
            applicability: "AI-ఉత్పత్తి చేసిన ఆలకింపు మరియు డీప్‌ఫేక్ పంపిణీకి నేరుగా వర్తిస్తుంది"
          },
          bns: {
            act: "భారతీయ న్యాయ సంహిత, 2023",
            section: "సెక్షన్ 318, 319, 336",
            desc: "మోసం, ఆలకింపు ద్వారా మోసం మరియు ఎలక్ట్రానిక్ రికార్డుల ఫోర్జరీ",
            applicability: "AI-ఉత్పత్తి చేసిన మోసపూరిత పత్రాలు మరియు కృత్రిమ గుర్తింపు నేరాలను కవర్ చేస్తుంది"
          },
          copyright: {
            act: "కాపీరైట్ చట్టం, 1957",
            section: "సెక్షన్ 51, 63",
            desc: "కాపీరైట్ ఉల్లంఘన మరియు కాపీరైట్ ఉల్లంఘన నేరాలు",
            applicability: "కృత్రిమ మీడియాలో సారూప్యత మరియు వ్యక్తిత్వ హక్కుల అనధికార ఉపయోగం"
          },
          indecent: {
            act: "మహిళల అశోభన ప్రాతినిధ్య నిషేధ చట్టం, 1986",
            section: "పూర్తి చట్టం",
            desc: "ప్రకటనలు లేదా పబ్లికేషన్ల ద్వారా మహిళల అశోభన ప్రాతినిధ్యంపై నిషేధం",
            applicability: "డీప్‌ఫేక్ అశ్లీలత మరియు సమ్మతి లేని కృత్రిమ సన్నిహిత చిత్రాలు"
          }
        }
      },
      remedies: {
        title: "పరిహారాలు",
        subtitle: "న్యాయం కోసం దశలు",
        steps: {
          preserve: {
            step: "1",
            title: "డిజిటల్ సాక్ష్యాలను భద్రపరచండి",
            desc: "నేరస్థుడికి హెచ్చరిక ఇవ్వకుండా తక్షణమే అన్ని డిజిటల్ జాడలను భద్రపరచండి",
            details: [
              "టైమ్‌స్టాంప్‌లు మరియు URLలు కనిపించే స్క్రీన్‌షాట్‌లను తీయండి",
              "మెటాడేటా చెక్కుచెదరకుండా ఉంచుతూ అసలు ఫైళ్లను భద్రపరచండి",
              "పరికర సమాచారం మరియు యాక్సెస్ లాగ్‌లను రికార్డ్ చేయండి",
              "ఏదైనా కంటెంట్‌ను తొలగించవద్దు లేదా సవరించవద్దు",
              "సమగ్రత ధృవీకరణ కోసం క్రిప్టోగ్రాఫిక్ హ్యాష్‌లను జనరేట్ చేయండి"
            ]
          },
          verify: {
            step: "2",
            title: "AUTHENEX ఉపయోగించి కంటెంట్‌ను ధృవీకరించండి",
            desc: "సాక్షి విలువ కోసం ఫోరెన్సిక్ ధృవీకరణ నివేదికను రూపొందించండి",
            details: [
              "అనుమానాస్పద కంటెంట్‌ను AUTHENEX ప్లాట్‌ఫారమ్‌కు అప్‌లోడ్ చేయండి",
              "సమగ్ర బహుళ-సిగ్నల్ విశ్లేషణను అభ్యర్థించండి",
              "టైమ్‌స్టాంప్‌తో సంతకం చేసిన ఫోరెన్సిక్ నివేదికను డౌన్‌లోడ్ చేయండి",
              "ప్లాట్‌ఫారమ్ ధృవీకరణ ద్వారా నివేదిక ప్రామాణికతను ధృవీకరించండి",
              "యాక్సెస్ నియంత్రణలతో నివేదికను సురక్షితంగా నిల్వ చేయండి"
            ]
          },
          document: {
            step: "3",
            title: "సంఘటనను డాక్యుమెంట్ చేయండి",
            desc: "చట్టపరమైన కార్యవాహుల కోసం సమగ్ర సంఘటన రికార్డును రూపొందించండి",
            details: [
              "కాలక్రమానుసారం సంఘటనల లాగ్‌ను నిర్వహించండి",
              "అన్ని కమ్యూనికేషన్ ప్రయత్నాలను రికార్డ్ చేయండి",
              "ప్రభావం మరియు హాని డాక్యుమెంట్ చేయండి",
              "సంభావ్య సాక్షులను గుర్తించండి",
              "వర్తించినట్లయితే ఆర్థిక రికార్డులను భద్రపరచండి"
            ]
          },
          complaint: {
            step: "4",
            title: "సైబర్ క్రైమ్ ఫిర్యాదును నమోదు చేయండి",
            desc: "జాతీయ సైబర్ క్రైమ్ రిపోర్టింగ్ పోర్టల్‌పై నివేదించండి",
            details: [
              "cybercrime.gov.in రిపోర్టింగ్ పోర్టల్‌ను యాక్సెస్ చేయండి",
              "తగిన నేర వర్గాన్ని ఎంచుకోండి",
              "సాక్ష్యంగా AUTHENEX ఫోరెన్సిక్ నివేదికను అప్‌లోడ్ చేయండి",
              "వివరణాత్మక సంఘటన వివరణను అందించండి",
              "ట్రాకింగ్ కోసం రసీదు సంఖ్యను పొందండి"
            ]
          },
          fir: {
            step: "5",
            title: "అవసరమైతే FIR ఫైల్ చేయండి",
            desc: "సంఙ్ఞేయ నేరాల కోసం పోలీసులకు పెంచండి",
            details: [
              "స్థానిక పోలీస్ స్టేషన్ లేదా సైబర్ సెల్‌ను సందర్శించండి",
              "ముద్రిత ఫోরెన్సిక్ నివేదికలు మరియు సాక్ష్యాలను తీసుకెళ్లండి",
              "సంబంధిత IT చట్టం విభాగాల క్రింద FIRని అభ్యర్థించండి",
              "మీ రికార్డుల కోసం FIR కాపీని పొందండి",
              "విచారణ అధికారితో క్రమం తప్పకుండా ఫాలో-అప్ చేయండి"
            ]
          },
          legal: {
            step: "6",
            title: "చట్టపరమైన సలహా తీసుకోండి",
            desc: "సంక్లిష్ట కేసులు లేదా పౌర పరిహారాల కోసం న్యాయవాదిని నిమగ్నం చేయండి",
            details: [
              "సైబర్ చట్టంలో నైపుణ్యం కలిగిన న్యాయవాదిని సంప్రదించండి",
              "పౌర నిషేధ అవకాశాలను అంచనా వేయండి",
              "వర్తించినట్లయితే పరువు నష్టం కార్యవాహులను పరిగణించండి",
              "సంభావ్య న్యాయస్థాన సాక్ష్యం కోసం సిద్ధం చేయండి",
              "బాధిత పరిహార పధకాలను అన్వేషించండి"
            ]
          }
        }
      },
      disclaimer: {
        title: "చట్టపరమైన నిరాకరణ & నైతిక స్థానం",
        content: {
          para1: "AUTHENEX న్యాయస్థానం, చట్ట అమలు ఏజెన్సీ లేదా నియంత్రణ అధికారం కాదు. మేము ఫోరెన్సిక్ విశ్లేషణ సాధనాలు మరియు విద్యా వనరులను అందించే సాంకేతిక ప్లాట్‌ఫారమ్. మా నివేదికలు అల్గారిథమిక్ విశ్లేషణ ఆధారంగా సాంకేతిక అంతర్దృష్టులను అందిస్తాయి; అవి చట్టపరమైన కనుగొనులు లేదా ఖచ్చితమైన రుజువులు కాదు.",
          para2: "డిజిటల్ కంటెంట్ యొక్క ప్రామాణికత, చట్టబద్ధత లేదా పర్యవసానాలపై చివరి నిర్ణయాలు ప్రత్యేకంగా సమర్థ న్యాయ అధికారులు, చట్ట అమలు ఏజెన్సీలు మరియు నియంత్రణ సంస్థల వద్ద ఉన్నాయి.",
          para3: "మేము నైతిక AI అభివృద్ధి మరియు బాధ్యతాయుత సాంకేతిక విధానానికి కట్టుబడి ఉన్నాము. మా ప్లాట్‌ఫారమ్ సత్యానికి మద్దతు ఇవ్వడానికి, హాని కలిగించే జనాభాను రక్షించడానికి మరియు డిజిటల్ విశ్వాసాన్ని బలోపేతం చేయడానికి రూపొందించబడింది.",
          updated: "చివరిగా నవీకరించబడింది: ఫిబ్రవరి 2026. ఈ పత్రం చట్టాలు మరియు ప్లాట్‌ఫారమ్ సామర్థ్యాలు అభివృద్ధి చెందుతున్నప్పుడు సవరణకు లోబడి ఉంటుంది."
        }
      },
      footer: {
        copyright: "© 2026 Authenex. జాతీయ డిజిటల్ ట్రస్ట్ ప్లాట్‌ఫారమ్.",
        tagline: "నైతిక AI, డిజైన్ ద్వారా గోప్యత మరియు అందరికీ డిజిటల్ భద్రతతో కట్టుబడి ఉంది."
      }
    },
    auth: {
      welcomeBack: "తిరిగి స్వాగతం",
      subtitle: "ఫోరెన్సిక్ విశ్లేషణ సాధనాలను యాక్సెస్ చేయడానికి సైన్ ఇన్ చేయండి",
      continueGoogle: "Google తో కొనసాగించండి",
      continueEmail: "లేదా ఇమెయిల్‌తో కొనసాగించండి",
      continueGuest: "అతిథిగా కొనసాగించండి (సెటప్ లేదు)",
      emailLabel: "ఇమెయిల్ చిరునామా",
      passwordLabel: "పాస్‌వర్డ్",
      signInButton: "సైన్ ఇన్ చేయండి",
      secured: "256-బిట్ ఎన్‌క్రిప్షన్‌తో సురక్షితం",
      backHome: "హోమ్‌కు తిరిగి వెళ్ళు"
    }
  },
  gu: {
    nav: {
      dashboard: "ડેશબોર્ડ",
      newAnalysis: "નવું વિશ્લેષણ",
      myCases: "મારા કેસો",
      analytics: "એનાલિટિક્સ",
      settings: "સેટિંગ્સ",
      help: "મદદ",
      logout: "સાઇન આઉટ",
      profile: "પ્રોફાઇલ"
    },
    header: {
      searchPlaceholder: "કેસ શોધો...",
      systemOnline: "સિસ્ટમ ઓનલાઇન",
      notifications: "સૂચનાઓ",
      markAllRead: "બધું વાંચેલું ચિહ્નિત કરો",
      noNotifications: "કોઈ સૂચના નથી",
      viewAll: "બધું જુઓ"
    },
    dashboard: {
      title: "ડેશબોર્ડ",
      subtitle: "સાયબર ક્રાઇમ અને AI જોખમો પર રીઅલ-ટાઇમ માહિતી.",
      stats: {
        cybercrime: "સાયબર ક્રાઇમ કેસો",
        deepfake: "ડીપફેક કેસો",
        aiFraud: "AI છેતરપિંડી",
        arrests: "ધરપકડ"
      },
      recentActivity: "તાજેતરની પ્રવૃત્તિ",
      analysisLink: "વિશ્લેષણ",
      newsFeed: "લાઇવ ઇન્ટેલિજેન્સ ફીડ",
      recentAnalysis: {
        status: {
          completed: "વિશ્લેષણ પૂર્ણ",
          processing: "પ્રક્રિયા થઈ રહી છે..."
        },
        actions: {
          share: "શેર કરો",
          download: "રિપોર્ટ ડાઉનલોડ કરો"
        }
      }
    },
    analyze: {
      title: "ફોરેન્સિક વિશ્લેષણ",
      subtitle: "સામગ્રીનો પ્રકાર પસંદ કરો અને ચકાસણી માટે ફાઇલો અપલોડ કરો",
      types: {
        image: "ઇમેજ ફોરેન્સિક્સ",
        video: "વિડિઓ વિશ્લેષણ",
        document: "દસ્તાવેજ તપાસ",
        audio: "ઓડિયો ફોરેન્સિક્સ",
        email: "ઇમેઇલ ચકાસણી",
        text: "લખાણ તપાસ"
      },
      steps: {
        upload: "અપલોડ",
        scanning: "સ્કેનિંગ",
        aiAnalysis: "AI વિશ્લેષણ",
        results: "પરિણામો"
      },
      dropzone: {
        dragActive: "ફાઇલો અહીં મૂકો",
        dragDrop: "ફાઇલો અહીં ખેંચો અને મૂકો",
        browse: "અથવા તમારા કમ્પ્યુટરથી બ્રાઉઝ કરવા માટે ક્લિક કરો",
        selectFiles: "ફાઇલો પસંદ કરો",
        selectedFiles: "પસંદ કરેલી ફાઇલો"
      },
      button: {
        start: "વિશ્લેષણ શરૂ કરો",
        analyzing: "વિશ્લેષણ કરી રહ્યું છે..."
      },
      results: {
        authentic: "અસલ સામગ્રી",
        aiGenerated: "AI જનરેટેડ",
        verdict: "ચુકાદો",
        forensicBreakdown: "ફોરેન્સિક વિશ્લેષણ વિગતો",
        detailedFindings: "વિગતવાર તારણો",
        newAnalysis: "નવું વિશ્લેષણ",
        downloadReport: "રિપોર્ટ ડાઉનલોડ કરો",
        processing: "ફોરેન્સિક વિશ્લેષણ પ્રક્રિયા કરી રહ્યું છે... કૃપા કરીને રાહ જુઓ"
      },
      report: {
        probability: "Probability",
        human: "Human",
        authenticity: "Authenticity",
        id: "ID",
        risk: "Risk",
        authenticityAssessment: "Authenticity Assessment",
        aiProbability: "AI Probability",
        humanAuthenticity: "Human Authenticity",
        confidenceScore: "Confidence Score",
        syntheticDetected: "Synthetic Content Detected",
        likelyAuthentic: "Content Likely Authentic",
        multiLayerAnalysis: "Multi-Layer Detection Analysis",
        layersAnalyzed: "layers analyzed with weighted scoring",
        overallConfidence: "Overall Confidence",
        layerContribution: "Layer Contribution Analysis (Score × Weight)",
        noLayers: "No Detection Layers Available",
        noLayersDesc: "The AI analysis did not return detailed layer data",
        categoryDistribution: "Category-wise Distribution",
        detectionFindings: "Detection Findings",
        heatmap: "Heatmap Analysis",
        temporal: "Temporal Consistency",
        forensicReport: "Forensic Analysis Report",
        examiner: "Examiner",
        date: "Date",
        conclusion: "Conclusion",
        recommendations: "Recommendations",
        tabs: {
          details: "Analysis Details",
          visual: "Visual Evidence",
          report: "Forensic Report"
        },
        error: {
          title: "No Analysis Data",
          desc: "Upload a file to begin analysis",
          action: "Start Analysis"
        }
      }
    },
    chat: {
      title: "ઓથેનેક્સ AI",
      subtitle: "ફોરેન્સિક ઇન્ટેલિજન્સ",
      linked: "લિંક થયેલ",
      placeholder: "ઓથેનેક્સ AI ને પૂછો...",
      listening: "સાંભળી રહ્યું છે...",
      welcome: "ઓથેનેક્સ AI કોર શરૂ થયું. ફોરેન્સિક વિશ્લેષણ માટે તૈયાર.",
      connectionError: "કનેક્શન ભૂલ. કૃપા કરીને ફરી પ્રયાસ કરો."
    },
    cases: {
      title: "કેસ મેનેજમેન્ટ",
      subtitle: "તમામ ફોરેન્સિક વિશ્લેષણનું સંચાલન અને સમીક્ષા કરો",
      searchPlaceholder: "આઈડી, શીર્ષક અથવા ટૅગ્સ દ્વારા કેસ શોધો...",
      filters: {
        all: "બધા કેસો",
        completed: "પૂર્ણ",
        processing: "પ્રક્રિયામાં",
        pending: "બાકી"
      },
      table: {
        case: "કેસ",
        type: "પ્રકાર",
        date: "તારીખ",
        status: "સ્થિતિ",
        result: "પરિણામ",
        confidence: "આત્મવિશ્વાસ",
        actions: "ક્રિયાઓ"
      },
      noCases: "કોઈ કેસ મળ્યા નથી"
    },
    news: {
      top: "મુખ્ય સમાચાર",
      deepfake: "ડીપફેક",
      cybercrime: "સાયબર ક્રાઇમ",
      ai: "AI સુરક્ષા",
      policy: "નીતિ",
      cases: "કેસો",
      social: "સામાજિક"
    },
    scanHistory: {
      title: "તાજેતરના સ્કેન",
      noData: "કોઈ સ્કેન ઇતિહાસ મળ્યો નથી.",
      loading: "ઇતિહાસ લોડ કરી રહ્યું છે...",
      confidence: "આત્મવિશ્વાસ",
      justNow: "હમણાં જ",
      ago: "પહેલાં"
    },
    profile: {
      tabs: {
        overview: "ઝાંખી",
        activity: "પ્રવૃત્તિ",
        achievements: "સિદ્ધિઓ"
      },
      edit: "પ્રોફાઇલ સંપાદિત કરો",
      save: "ફેરફારો સાચવો",
      cancel: "રદ કરો",
      role: "ભૂમિકા",
      location: "સ્થાન",
      credits: {
        available: "ઉપલબ્ધ ક્રેડિટ્સ",
        refill: "રિફિલ તારીખ",
        add: "ક્રેડિટ્સ ઉમેરો",
        usage: "માસિક વપરાશ"
      },
      about: "વિશે",
      email: "ઇમેઇલ",
      website: "વેબસાઇટ",
      memberSince: "સભ્યપદ",
      lastActive: "છેલ્લે સક્રિય",
      plan: {
        current: "વર્તમાન યોજના",
        renews: "નવીકરણ",
        upgrade: "યોજના અપગ્રેડ કરો"
      },
      delete: {
        title: "ખાતું કાઢી નાખવું?",
        desc: "આ ક્રિયાને પૂર્વવત કરી શકાતી નથી. તમારો બધો ડેટા કાયમી રીતે કાઢી નાખવામાં આવશે.",
        confirm: "કાઢી નાખો"
      }
    },
    settings: {
      title: "સેટિંગ્સ",
      subtitle: "તમારી એકાઉન્ટ પસંદગીઓ અને સુરક્ષાનું સંચાલન કરો.",
      appearance: "દેખાવ",
      notifications: "સૂચનાઓ",
      security: "સુરક્ષા અને ગોપનીયતા",
      items: {
        darkMode: "ડાર્ક મોડ",
        language: "ભાષા",
        emailNotif: "ઇમેઇલ સૂચનાઓ",
        pushNotif: "પુશ સૂચનાઓ"
      },
      securityScore: "સુરક્ષા સ્કોર",
      dangerZone: "ખતરા ઝોન",
      deleteAccount: "ખાતું કાઢી નાખો"
    },
    help: {
      hero: {
        badge: "મદદ કેન્દ્ર",
        title: "અમે તમને કેવી રીતે મદદ કરી શકીએ?",
        subtitle: "શોધ, સુવિધાઓ અને મુશ્કેલીનિવારણ વિશે જવાબો શોધો.",
        search: "જવાબો શોધો..."
      },
      sections: {
        overview: "ઝાંખી",
        detection: "શોધ પદ્ધતિઓ",
        troubleshooting: "મુશ્કેલીનિવારણ",
        contact: "સપોર્ટનો સંપર્ક કરો"
      },
      overview: {
        title: "ઓથેનેક્સ શું છે",
        desc: "ડિજિટલ સામગ્રીની અધિકૃતતાનું વિશ્લેષણ કરવા માટે AI-સંચાલિત ફોરેન્સિક પ્લેટફોર્મ."
      },
      faq: {
        title: "વારંવાર પૂછાતા પ્રશ્નો",
        noResults: "કોઈ પરિણામો મળ્યા નથી"
      },
      channels: {
        email: "ઇમેઇલ સપોર્ટ",
        docs: "દસ્તાવેજીકરણ",
        report: "સમસ્યાની જાણ કરો",
        chat: "લાઇવ ચેટ"
      },
      disclaimer: {
        title: "ડિસક્લેમર",
        text: "પરિણામો સંભવિત મૂલ્યાંકનો છે અને માનવ નિર્ણય સાથે ઉપયોગમાં લેવા જોઈએ."
      }
    },
    landing: {
      nav: {
        brandTagline: "TrustLens",
        getStarted: "શરૂ કરો",
        signIn: "સાઇન ઇન",
        brand: "Authenex"
      },
      hero: {
        badge: "હવે GPT-4 તપાસ સાથે",
        title1: "સત્યની પુષ્ટિ કરો",
        title2: "ડિજિટલ રિયાલિટી",
        description: "ઓથેનેક્સ 99.9% ચોકસાઈ સાથે કૃત્રિમ મીડિયાને શોધવા માટે ન્યુરલ ફોરેન્સિક્સ, ક્વોન્ટમ-પ્રતિરોધક ચકાસણી અને સમજાવી શકાય તેવા AI ને જોડે છે.",
        startAnalysis: "મફત વિશ્લેષણ શરૂ કરો",
        watchDemo: "ડેમો જુઓ",
        goToDashboard: "ડેશબોર્ડ પર જાઓ",
        badges: {
          soc2: "SOC 2 Type II",
          fisma: "FISMA સુસંગત",
          gdpr: "GDPR તૈયાર"
        },
        stats: {
          verification: "ચકાસણી",
          activeUsers: "સક્રિય વપરાશકર્તાઓ"
        }
      },
      features: {
        sectionBadge: "પ્લેટફોર્મ ક્ષમતાઓ",
        sectionTitle: "છ પરિમાણો",
        sectionTitleHighlight: "ડિજિટલ ફોરેન્સિક્સ",
        sectionDescription: "અત્યાધુનિક ન્યુરલ નેટવર્ક્સ અને ચકાસણી દ્વારા સંચાલિત તમામ ડિજિટલ સામગ્રી પ્રકારોનું વ્યાપક વિશ્લેષણ.",
        imageForensics: {
          title: "ઇમેજ ફોરેન્સિક્સ",
          description: "અદ્યતન GAN ફિંગરપ્રિન્ટિંગ અને મેટાડેટા વિશ્લેષણનો ઉપયોગ કરીને AI-જનરેટેડ છબીઓ, ડીપફેક્સ અને ચેડા કરેલા ફોટા શોધો.",
          stat: "99.9% ચોકસાઈ"
        },
        videoVerification: {
          title: "વિડિઓ ચકાસણી",
          description: "વ્યાપક વિડિઓ અધિકૃતતા માટે કામચલાઉ સુસંગતતા વિશ્લેષણ, ફ્રેમ-સ્તરની ઇન્ટરપોલેશન શોધ અને લિપ-સિંક ચકાસણી.",
          stat: "રીઅલ ટાઇમ"
        },
        documentAuth: {
          title: "દસ્તાવેજ અધિકૃતતા",
          description: "કાાનૂની દસ્તાવેજ અખંડિતતા માટે ફોન્ટ ફોરેન્સિક્સ, હસ્તાક્ષર ચકાસણી, લેઆઉટ વિશ્લેષણ અને બ્લોકચેન ટાઇમસ્ટેમ્પ ચકાસણી.",
          stat: "કોર્ટ માટે તૈયાર"
        },
        emailIntel: {
          title: "ઇમેઇલ ઇન્ટેલિજન્સ",
          description: "હેડર ફોરેન્સિક્સ, SPF/DKIM ચકાસણી, મોકલનાર પ્રતિષ્ઠા વિશ્લેષણ અને ફિશિંગ શોધ.",
          stat: "ISP-સંકલિત"
        },
        audioAnalysis: {
          title: "ઓડિયો વિશ્લેષણ",
          description: "વોઇસ બાયોમેટ્રિક મેચિંગ, કૃત્રિમ ભાષણ શોધ, એકોસ્ટિક પર્યાવરણ વિશ્લેષણ અને ડીપફેક ઓડિયો ઓળખ.",
          stat: "ન્યુરલ નેટ"
        },
        textDetection: {
          title: "લખાણ શોધ",
          description: "કૃત્રિમ લખાણ ઓળખ માટે મૂંઝવણ સ્કોરિંગ, વિસ્ફોટકતા વિશ્લેષણ, શૈલી શૈલી મેચિંગ અને LLM લક્ષણ.",
          stat: "GPT-4 તૈયાર"
        }
      },
      process: {
        badge: "તે કેવી રીતે કાર્ય કરે છે",
        title: "ત્રણ પગલાંમાં",
        titleHighlight: "ફોરેન્સિક પાઇપલાઇન",
        description: "ઇન્જેશનથી લઈને ચકાસાયેલ રિપોર્ટ સુધી, અમારી સ્વચાલિત પાઇપલાઇન ચોકસાઈ, પારદર્શિતા અને કાનૂની સ્વીકાર્યતાની ખાતરી આપે છે.",
        step1: {
          title: "સુરક્ષિત ઇન્જેશન",
          description: "કોઈપણ ડિજિટલ સંપત્તિને ખેંચો અને છોડો. અમે કસ્ટડીની સાંકળ માટે સ્વચાલિત મેટાડેટા જાળવણી અને ક્રિપ્ટોગ્રાફિક હેશિંગ સાથે 200+ ફોર્મેટ્સને સમર્થન આપીએ છીએ.",
          features: {
            f1: "એન્ડ-ટુ-એન્ડ એન્ક્રિપ્શન",
            f2: "મેટાડેટા નિષ્કર્ષણ",
            f3: "હેશ ચકાસણી"
          }
        },
        step2: {
          title: "ન્યુરલ વિશ્લેષણ",
          description: "વિશિષ્ટ AI મોડેલોનો અમારો સમૂહ 50+ ફોરેન્સિક ચેકપોઇન્ટ્સ દ્વારા સામગ્રી પર પ્રક્રિયા કરે છે, જે માનવ આંખો માટે અદ્રશ્ય વિસંગતતાઓ શોધી કાઢે છે.",
          features: {
            f1: "50+ તપાસ મોડલ",
            f2: "સબ-સેકન્ડ પ્રોસેસિંગ",
            f3: "માત્મવિશ્વાસ સ્કોરિંગ"
          }
        },
        step3: {
          title: "ચકાસાયેલ રિપોર્ટ",
          description: "કાનૂની કાર્યવાહી માટે સ્પષ્ટ AI આંતરદૃષ્ટિ, વિસંગતતા વિઝ્યુલાઇઝેશન અને પુનઃઉત્પાદન કરી શકાય તેવા પુરાવા સાથે કોર્ટ-તૈયાર દસ્તાવેજીકરણ પ્રાપ્ત કરો.",
          features: {
            f1: "PDF નિકાસ",
            f2: "API એકીકરણ",
            f3: "બ્લોકચેન ટાઇમસ્ટેમ્પ"
          }
        }
      },
      testimonials: {
        badge: "વિશ્વભરમાં વિશ્વસનીય",
        title: "ચકાસણીના",
        titleHighlight: "અવાજો",
        item1: {
          quote: "ઓથેનેક્સ ખોટી માહિતી સામે અમારા સંરક્ષણની પ્રથમ હરોળ બની ગયું છે. સમજાવી શકાય તેવા AI અહેવાલો કોર્ટ માટે તૈયાર છે અને બહુવિધ કાનૂની કાર્યવાહીમાં ટકી રહ્યા છે.",
          author: "સારા ચેન",
          role: "માહિતી સુરક્ષા નિયામક",
          org: "ગ્લોબલ ન્યૂઝ નેટવર્ક"
        },
        item2: {
          quote: "તેમના વિશ્લેષણમાં ફોરેન્સિક વિગત અભૂતપૂર્વ છે. અમે નોંધપાત્ર સરળતા સાથે અમારી પુરાવા વ્યવસ્થાપન સિસ્ટમમાં તેમના APIને એકીકૃત કર્યા છે.",
          author: "માર્કસ રોડ્રિગ્સ",
          role: "ડિજિટલ પુરાવા નિષ્ણાત",
          org: "ફેડરલ બ્યુરો ઓફ ઇન્વેસ્ટિગેશન્સ"
        },
        item3: {
          quote: "અમે છ અલગ અલગ ઉકેલોનું મૂલ્યાંકન કર્યું છે. ઓથેનેક્સ એકમાત્ર પ્લેટફોર્મ હતું જે સતત ચોકસાઈ સાથે નવીનતમ પ્રસાર મોડેલો શોધી શકે છે.",
          author: "ડો એમિલી વોટસન",
          role: "મુખ્ય ટેકનોલોજી અધિકારી",
          org: "સિક્યોરવોટ ઇન્ક."
        }
      },
      cta: {
        title: "ડિજિટલ સત્યના બચાવ માટે",
        titleHighlight: "તૈયાર?",
        description: "સિન્થેટીક મીડિયાનો સામનો કરવા અને માહિતીની અખંડિતતા જાળવવા માટે ઓથેનેક્સનો ઉપયોગ કરતા 150 થી વધુ સાહસો અને સરકારી એજન્સીઓમાં જોડાઓ.",
        start: "મફત અજમાયશ શરૂ કરો",
        demo: "ડેમો શેડ્યૂલ કરો",
        footer: "ક્રેડિટ કાર્ડની જરૂર નથી • 14-દિવસની મફત અજમાયશ • SOC 2 સુસંગત"
      },
      footer: {
        tagline: "2026 થી ડિજિટલ સત્યનું રક્ષણ",
        links: {
          privacy: "ગોપનીયતા",
          terms: "શરતો",
          security: "સુરક્ષા",
          api: "API"
        }
      }
    },
    legal: {
      hero: {
        title: "કાનૂની સુરક્ષા & AI દુરુપયોગ સંરક્ષણ",

        subtitle: "ભારતીય કાયદા હેઠળ AI-જનરેટેડ ડીપફેક્સ, ઓળખ ચોરી અને ડિજિટલ છેતરપિંડી સામે તમારા અધિકારો, કાનૂની માર્ગો અને સુરક્ષા",
        stats: {
          casesReported: "નોંધાયેલા કેસો",
          arrests: "ધરપકડો",
          lawsEnforced: "લાગુ કાયદાઓ"
        }
      },
      actionSection: {
        title: "તાત્કાલિક પગલાં લો",
        subtitle: "સાયબર ક્રાઇમ રિપોર્ટિંગ અને કાનૂની સંસાધનોની સીધી પહોંચ",
        buttons: {
          reportCybercrime: {
            label: "સાયબર ક્રાઇમ રિપોર્ટ કરો",
            desc: "તમામ ડિજિટલ અપરાધો માટે રાષ્ટ્રીય સાયબર ક્રાઇમ રિપોર્ટિંગ પોર્ટલ",
            authority: "ગૃહ મંત્રાલય, ભારત સરકાર",
            when: "AI-જનરેટેડ સામગ્રી દુરુપયોગ, ઓળખ ચોરી અથવા ઑનલાઇન ઉત્પીડન સહિત કોઈપણ સાયબર ગુનો"
          },
          fileFIR: {
            label: "ઑનલાઇન FIR ફાઇલ કરો",
            desc: "પ્રથમ માહિતી અહેવાલ નોંધણી માટે રાજ્ય પોલીસ પોર્ટલ્સ",
            authority: "રાજ્ય પોલીસ વિભાગો",
            when: "જ્યારે શારીરિક પોલીસ સ્ટેશન મુલાકાત તરત શક્ય ન હોય; વ્યક્તિગત મુલાકાત સાથે ફોલો-અપ કરો"
          },
          identityTheft: {
            label: "ઓળખ ચોરી રિપોર્ટ કરો",
            desc: "ઓળખ-સંબંધિત સાયબર અપરાધો માટે સમર્પિત પોર્ટલ",
            authority: "ઇન્ડિયન સાયબર ક્રાઇમ કોઓર્ડિનેશન સેન્ટર",
            when: "કૃત્રિમ ઓળખ નિર્માણ, ધારણા, અથવા વ્યક્તિગત માહિતીનો અનધિકૃત ઉપયોગ"
          },
          womenChild: {
            label: "મહિલા & બાળ સુરક્ષા",
            desc: "જાતિ આધારિત અને બાળકોને લક્ષ્યાંકિત AI દુરુપયોગ માટે વિશેષ રિપોર્ટિંગ",
            authority: "રાષ્ટ્રીય મહિલા આયોગ, NCPCR",
            when: "ડીપફેક પોર્નોગ્રાફી, સંમતિ વગરની આંતરંગ છબીઓ, બાળકોને લક્ષ્યાંકિત કૃત્રિમ સામગ્રી"
          },
          helpline: {
            label: "રાષ્ટ્રીય સાયબર હેલ્પલાઇન",
            desc: "સાયબર ક્રાઇમ માર્ગદર્શન માટે 24/7 ટેલિફોન સહાય",
            authority: "ઇલેક્ટ્રોનિક્સ અને માહિતી તકનીકી મંત્રાલય",
            when: "તાત્કાલિક માર્ગદર્શન જરૂરી, રિપોર્ટિંગ પ્રક્રિયા પર સ્પષ્ટતા, કટોકટીની પરિસ્થિતિઓ"
          },
          sebi: {
            label: "SEBI ફરિયાદ પોર્ટલ",
            desc: "સિક્યોરિટીઝ માર્કેટ છેતરપિંડી અને AI-સંચાલિત રોકાણ કૌભાંડો",
            authority: "સિક્યોરિટીઝ એન્ડ એક્સચેન્જ બોર્ડ ઑફ ઇન્ડિયા",
            when: "AI-જનરેટેડ માર્કેટ મેનિપ્યુલેશન, છેતરપિંડીની રોકાણ યોજનાઓ, કૃત્રિમ કોર્પોરેટ સંચાર"
          }
        }
      },
      privacy: {
        title: "ગોપનીયતા & ડેટા સંરક્ષણ",
        subtitle: "અમે તમારી ડેટાને કેવી રીતે સુરક્ષિત કરીએ છીએ",
        processedData: {
          title: "અમે પ્રોસેસ કરીએ છીએ તે ડેટા",
          items: [
            "ફોરેન્સિક વિશ્લેષણ માટે સબમિટ કરેલી સામગ્રી (છબીઓ, ઑડિઓ, દસ્તાવેજો, ટેક્સ્ટ)",
            "ડિટેક્શન અલ્ગોરિધમ્સ માટે જરૂરી તકનીકી મેટાડેટા",
            "એકાઉન્ટ પ્રમાણીકરણ અને અધિકૃતતા ઓળખપત્રો",
            "વિશ્લેષણ ટાઈમસ્ટેમ્પ અને પ્રોસેસિંગ અવધિ લોગ્સ",
            "પ્લેટફોર્મ સુધારણા માટે અનામી ઉપયોગ પેટર્ન"
          ]
        },
        neverStored: {
          title: "ક્યારેય સંગ્રહિત નહીં",
          items: [
            "વિશ્લેષણ પૂર્ણ થયા પછી કાચી સામગ્રી (24-કલાક સ્વ-કાઢવું)",
            "એકાઉન્ટ જરૂરિયાતોથી આગળ વ્યક્તિગત ઓળખ",
            "ત્રીજા-પક્ષ ડેટા અથવા અસંબંધિત વપરાશકર્તા માહિતી",
            "સ્પષ્ટ વપરાશકર્તા પહોંચ પરવાનગી વગર વિશ્લેષણ પરિણામો",
            "ક્રોસ-રેફરન્સ્ડ બાહ્ય ડેટાબેસ માહિતી"
          ]
        },
        encryption: {
          title: "એન્ક્રિપ્શન & સુરક્ષા",
          items: [
            "આરામ પરના ડેટા માટે AES-256 એન્ક્રિપ્શન",
            "તમામ ડેટા ટ્રાન્ઝિટ માટે TLS 1.3",
            "સંવેદનશીલ ફોરેન્સિક સ્થાનાંતરણો માટે એન્ડ-ટુ-એન્ડ એન્ક્રિપ્શન",
            "હાર્ડવેર સુરક્ષા મોડ્યુલ (HSM) સંરક્ષિત કી મેનેજમેન્ટ",
            "સામગ્રી પ્રક્રિયા માટે ઝીરો-નોલેજ આર્કિટેક્ચર"
          ]
        },
        rights: {
          title: "તમારા અધિકારો",
          items: {
            privacy: {
              title: "ગોપનીયતાનો અધિકાર",
              desc: "તમારી સામગ્રી કોઈપણ બાહ્ય પહોંચ વિના અલગ વાતાવરણમાં પ્રક્રિયા કરવામાં આવે છે"
            },
            deletion: {
              title: "ડેટા કાઢવાનો અધિકાર",
              desc: "તમામ સંબંધિત ડેટા અને વિશ્લેષણ ઇતિહાસના તાત્કાલિક કાઢી નાખવાની વિનંતી કરો"
            },
            transparency: {
              title: "પારદર્શિતાનો અધિકાર",
              desc: "તમારું ડેટા કેવી રીતે પ્રક્રિયા અને હેન્ડલ કરવામાં આવ્યું તેના સંપૂર્ણ લોગ્સ ઍક્સેસ કરો"
            },
            portability: {
              title: "પોર્ટેબિલિટીનો અધિકાર",
              desc: "તમારો તમામ ડેટા અને વિશ્લેષણ અહેવાલો માનક ફોર્મેટમાં નિકાસ કરો"
            }
          }
        },
        compliance: {
          title: "અનુપાલન ગોઠવણી",
          items: {
            privacy: "ગોપનીયતા",
            it: {
              title: "માહિતી તકનીકી અધિનિયમ, 2000",
              desc: "સંવેદનશીલ ડેટા સંરક્ષણ માટે કલમ 43A અને SPDI નિયમો અનુપાલન"
            },
            dpdp: {
              title: "ડિજિટલ વ્યક્તિગત ડેટા સંરક્ષણ અધિનિયમ",
              desc: "હેતુ મર્યાદા, ડેટા ઘટાડો અને સંગ્રહ મર્યાદાના સિદ્ધાંતો"
            },
            gdpr: {
              title: "વૈશ્વિક ગોપનીયતા ધોરણો",
              desc: "અધિકાર ક્ષેત્ર દાવાઓ વગર GDPR-ગોઠવાયેલા ગોપનીયતા-દ્વારા-ડિઝાઇન સિદ્ધાંતો"
            }
          }
        }
      },
      security: {
        title: "પ્લેટફોર્મ સુરક્ષા & દુરુપયોગ નિવારણ",
        prevention: {
          title: "નિવારણ પગલાં",
          items: {
            integrity: {
              title: "પરિણામ અખંડિતતા સંરક્ષણ",
              desc: "તમામ ફોરેન્સિક અહેવાલોના ક્રિપ્ટોગ્રાફિક હસ્તાક્ષરો છેડછાડ અથવા બનાવટીતા નિવારે છે"
            },
            falseAccusation: {
              title: "ખોટા આરોપ સંરક્ષણ",
              desc: "વિશ્વાસ સ્કોરિંગ અને અનિશ્ચિતતા પરિમાણીકરણ ખચિત ખોટા દાવાઓને નિવારે છે"
            },
            harassment: {
              title: "ઉત્પીડન વિરોધી પ્રોટોકોલ્સ",
              desc: "દર મર્યાદા અને પેટર્ન શોધ વ્યક્તિઓના વ્યવસ્થિત લક્ષ્યીકરણને નિવારે છે"
            }
          }
        },
        antiAbuse: {
          title: "દુરુપયોગ વિરોધી તંત્રો",
          items: {
            rateLimit: {
              title: "દર મર્યાદા",
              desc: "બુદ્ધિશાળી થ્રોટલિંગ જથ્થાબંધ વિશ્લેષણ દુરુપયોગ અને API શોષણને નિવારે છે"
            },
            humanReview: {
              title: "માનવ સમીક્ષા વૃદ્ધિ",
              desc: "ઉચ્ચ-દાવ વિશ્લેષણો નિષ્ણાત ફોરેન્સિક સમીક્ષક ચકાસણી માટે ફ્લેગ થયેલ"
            },
            monitoring: {
              title: "શંકાસ્પદ ઉપયોગ નિરીક્ષણ",
              desc: "અસાધારણ પ્લેટફોર્મ ઉપયોગ પેટર્નનું AI-સંચાલિત શોધ"
            },
            verification: {
              title: "એકાઉન્ટ ચકાસણી સ્તરો",
              desc: "ઓળખ ચકાસણી અને ઉપયોગ ઇતિહાસ આધારિત પ્રગતિશીલ વિશ્વાસ સ્તરો"
            }
          }
        }
      },
      misuse: {
        title: "AIદુરુપયોગ ઓળખવું",
        subtitle: "ધમકી પરિદ્દશ્યો અને સંરક્ષણાત્મક ક્રિયાઓ",
        scenarios: {
          deepfakeHarassment: {
            title: "ડીપફેક ઉત્પીડન",
            desc: "સંમતિ વિના વ્યક્તિઓને સમાધાનકારી અથવા ખોટી પરિસ્થિતિઓમાં દર્શાવતા કૃત્રિમ મીડિયાની રચના અને વિતરણ",
            harm: "મનોવૈજ્ઞાનિક ઈજા, પ્રતિષ્ઠાને નુકસાન, સંબંધ નુકસાન, વ્યાવસાયિક પરિણામો",
            affected: "વ્યક્તિઓ, જાહેર વ્યક્તિઓ, ખાનગી નાગરિકો, મહિલાઓ અને બાળકો",
            action: "તાત્કાલિક પુરાવા સુરક્ષિત કરો, અ પરાધીઓ સાથે જોડાશો નહીં, સાયબર ક્રાઇમ ફરિયાદ નોંધાવો, કાનૂની પ્રતિબંધની માંગ કરો"
          },
          fakeVideos: {
            title: "AI-જનરેટેડ નકલી વીડિયો",
            desc: "વાસ્તવિક વ્યક્તિઓને જવાબદાર ઠેરવતા ખોટા ઘટનાઓ, નિવેદનો અથવા ક્રિયાઓ દર્શાવતી નકલી વીડિયો સામગ્રી",
           harm: "ખોટી માહિતી પ્રસારfetch, ચૂંટણી છેડછાડ, કોર્પોરેટ તોડફોડ, સામાજિક અશાંતિ",
            affected: "રાજકીય નેતાઓ, સેલિબ્રિટી, new companies",
            action: "બહુવિધ સ્રોતો દ્વારા ચકાસો, AUTHENEX ફોરેન્સિક વિશ્લેષણ વાપરો, પ્લેટફોર્મ અને અધિકારીઓને રિપોર્ટ કરો"
          },
          fakeDocuments: {
            title: "નકલી કાનૂની / શૈક્ષણિક દસ્તાવેજો",
            desc: "AI-જનરેટેડ પ્રમાણપત્રો, કોર્ટ આદેશો, શૈક્ષણિક ઓળખપત્રો અથવા સત્તાવાર પત્રવ્યવહાર",
            harm: "શૈક્ષણિક છેતરપિંડી, કાનૂની પ્રણાલી દુરુપયોગ, રોજગાર છેતરપિંડી, ઇમિગ્રેશન છેતરpinडી",
            affected: "શૈક્ષણિક સંસ્થાઓ, યોજક, સરકારી એજન્સીઓ, અદાલતો",
            action: "દસ્તાવેજ સ્રોત ચકાસો, અધિકૃતતા લક્ષણો તપાસો, જારી કરતા અધિકારીઓને રિપોર્ટ કરો"
          },
          identityImpersonation: {
            title: "ઓળખ નકલ",
            desc: "ખોટી ડિજિટલ ઓળખની કૃત્રિમ રચના અથવા પ્લેટફોર્મ પર વાસ્તવિક વ્યક્તિઓનું નકલ",
            harm: "નાણાકીય છેતરપિંડી, ગુનાહિત આચરણ સાંલગનકારી, સામાજિક the engineering, વિશ્વાસ ક્ષરણ",
            affected: "સોશિયલ મીડિયા વપરાશકર્તાઓ, વ્યાવસાયિકો, સંવેદનશીલ વસતિ, વ્યવ સાયો",
            action: "ડીજિટલ પદચિહ્ન નિહાળો, બહુ-પરિબળ પ્રમાણીકરણ સક્ષમ કરો, નકલ પ્લેટફોર્મને રિપોર્ટ કરો"
          },
          politicalMisinfo: {
            title: "રાજકીય ખોટી માહિતી",
            desc: "ચૂંટણી અથવા રાજકીય પ્રવચનને પ્રભાવિત કરવા માટે AIજનેરટેડ રચનાનો માત્ર પ્રસાર",
            harm: "લોકશાહી પ્રક્રિયા હસ્તક્ષેપ, મતદાર છેડછાડ, સામાજિક polarization, હિંસા ઉશકેરવી",
            affected: "ચૂંટણી સંસ્થાઓ,રાજકीય ઉમેદવારો, સામાન્ય મતદારો, લોકશાહી સંસ્થાઓ",
            action: "ચૂંટણી યોગ્યતા આયોગને રિપોર્ટ કરો, શેરિંગ પહેલાં તથ્ય-ચકાસો, પ્લેટફોર્મ પારદર્શિતા પહેલને ટેકો આપો"
          },
          financialFraud: {
            title: "AIનો ઉપયોગ કરીને નાણાકીય છેતરપિંડી",
           desc: "કૃત્રिમ બજાર હેરફેર, છેતરપિંડીની રોકાણ યોજનાઓ, અથવા AI-સંચાલિત ફિશિંગ ઝુંબેશ",
            harm: "નાણાકીય નુકસાન, બજાર અસ્થિરતા, રોકાણકાર વિશ્વાસ ક્ષرણ, સિસ્ટેમિક જોખમ",
            affected: "ચામડલ રોકાણકારો, નાણાકીય સંસ્થાઓ, નિયમનકારી સંસ્થાઓ, પેન્શન ફંડ",
            action: "SEBI/RBIને રિપોર્ટ કરો, નાણાકીય અપરાધ ફરિયાદ નોંધાવો, lena-દેન રેકોર્ડ સુરક્ષિત કરો"
          }
        },
      },
      legalFramework: {
        title: "કાનૂની રૂપરેખા",
        subtitle: "ડિજિટલ અપરાધોને નિયંત્રિત કરતા ભારતીય કાયદાઓ",
        laws: {
          it: {
            act: "માહિતી તકનીકી અધિનિયમ, 2000",
            section: "કલમ 66C, 66D, 66E",
            desc: "ઓળખ ચોરી, નકલ દ્વારા છેતરપિંડી અને ડિજિટલ માધ્યમ દ્વારા ગોપનીયતા ઉલ્લંઘન",
            applicability: "AI-જનરેટેડ નકલ અને ડીપફેક વિતરણ માટે સીધું લાગુ પડે છે"
          },
          bns: {
            act: "ભારતીય ન્યાય સંહિતા, 2023",
            section: "કલમ 318, 319, 336",
            desc: "છેતરપિંડી, નકલ દ્વારા છેતરપિંડી અને ઇલેક્ટ્રોનિક રેકોર્ડની બનાવટી",
            applicability: "AI-જનરેટેડ છેતરપિંડી દસ્તાવેજો અને કૃત્રિમ ઓળખ અપરાધોને આવરી લે છે"
          },
          copyright: {
            act: "કોપીરાઇટ અધિનિયમ, 1957",
            section: "કલમ 51, 63",
            desc: "કોપીરાઇટ ઉલ્લંઘન અને કોપીરાઇટ ઉલ્લંઘન અપરાધો",
            applicability: "કૃત્રિમ મીડિયામાં સાદ્રશ્ય અને વ્યક્તિત્વ અધિકારોનો અનધિકૃત ઉપયોગ"
          },
          indecent: {
            act: "મહિલાઓની અશોभન પ્રતિનિધિત્વ પ્રતિબંધ અધિનિયમ, 1986",
            section: "સંપूર્ણ અધિનિયમ",
            desc: "જાહેરાતો અથવા પ્રકાશનો દ્વારા મહિલાઓના અશોભન પ્રતિનિધિત્વ પર પ્રતિબંધ",
            applicability: "ડીપફેક પોર્નોગ્રાફી અને સંમતિ વિના કૃત્રિમ આંતરંગ છબીઓ"
          }
        },
      },
      remedies: {
        title: "ઉપાયો",
        subtitle: "ન્યાય માટેના પગલાં",
        steps: {
          preserve: {
            step: "1",
            title: "ડિજિટલ પુરાવા સુરક્ષિત કરો",
            desc: "અપરાધીને ચેતવણી આપ્યા વિના તરત બધા ડિજિટલ ટ્રેલ સુરક્ષિત કરો",
            details: ["ટાઇમસ્ટેમ્પ અને URL દર્શાવતા સ્ક્રીનશોટ લો", "મેટાડેટા કોઈપણ એકબજીકેન્દિત કરવા વિના મૂળ ફાઇલો સુરક્ષિત કરો", "ઉપકરણ માહિતી અને  માનિતઍક્સેસ લોગનો રેકોર્ડ કરો", "કોઈ પરે અંતર્વસ્તુને કાઢો અથવા સંપાદિત કરશો નહીં", "અખંડિતતા ચકાસણી માટે કળી રિક્ટોગ્રાફિક હેશ જનરેટ કરો"]
          },
          verify: {
            step: "2",
            title: "AUTHENEX ઉપયોગ કરીને સામગ્રી ચકાસો",
            desc: "સાક્ષી મूલ્ય માટે ફોરેન્સિક ચકાસણી અહેવાલ જનરેટ કરો",
            details: ["AUTHENEX પ્લેટફોર્મ પર શંકાસ્પદ સામગ્રી અપલોડ કરો", "વ્યાપક બહુ-સિગ્નલ વિશ્લેષણ માંગો", "ટાઇમસ્ટેમ્પ સાથે હસ્તાક્ષરિત ફોરેન્સિક assignmentsહેવાલ ડાઉનલોડ કરો", "પ્લેટફોર્મ ચકાસણી દ્વારા કિસાલો વિશ્વસનીયતા ચકાસો", "ઍક્સેસ નિયંત્રણો સાથે અહેવાલને સુરક્ષિત રીતે સંગ્રહિત કરો"]
          },
          document: {
            step: "3",
            title: "ઘટનાનું દસ્તાવેજીકરણ કરો",
            desc: "કાનૂની કાર્યવાહી માટે વ્યаકક ઘટના રેકોર્ડ બનાવો",
            details: ["કાલાન્ક્રમ ઘટના લોગ જાળવો", "બધા સંપાવાน્ક પ્રયાસો રેકોર્ડ કરોકરો", "માર અને નુકસાનનું દસ્તાવેજીકરણ કરો", "સંભવિત સાક્ષી ઓળખો", "લાગુ પડતું હોય કારेણાકીય રેકોર્ડ સુરક્ષિત કરો"]
          },
          complaint: {
            step: "4",
            title: "સાયબર ક્રાઇમ ફરિયાદ નોંધાવો",
            desc: "રাષ્ટ્રીય સાયબર ક્રાઇમ રિપોર્ટિંગ પોર્ટલ પર રિપોર્ટ કરો",
            details: ["cybercrime.gov.in અહેવાલ પોર્ટલ ઍક્સેસ કરો", "યોગ્ય અપરાધ શ્રેણી પસંદ કરો", "પુરાવા તરીકે AUTHENEX ફોરેન્સિક અહેવાલ અપલોડ કરો", "વિગતાન્તર ઘટના વર્ણન પ્રદાન  કરો", "ટ્રૅકિંગ માટે રસીદ નંબર પ્રાપ્ત કરોદેરાપ્ત કરો"]
          },
          fir: {
            step: "5",
            title: "જરૂર પડે તો FIR ફાઇલ કરો",
            desc: "અસ્વીકાર્ય અપરાધો માટે પોલીસ પાસે ઉન્નત કરો",
            details: ["સ્થાનિક પોલીસ સ્ટેશન અથવા સાયબર સેલની મુલાકાત લો", "છાપેલ ફોરેન્સિક અહેવાલો અને પુરાવા લાવો", "સંબંધિત IT કાયદો વિભાગો હેઠળ FIRની માંગ કરો", "તમારા રેકોર્ડ માટે FIR કોપી પ્રાપ્ત કરો", "તપાસ અધિકારી સાથેનિয়મિત ફોલો-અપ કરો"]
          },
          legal: {
            step: "6",
            title: "કાનૂની સલાહ લો",
            desc: "જટિલ કેસો અથવા સિવિલ ઉપાયો માટે વકીલ જોડો",
            details: ["સાયબર કાયદામાં નિષ્ણાત વકીલનો સંપર્ક કરો", "સિવિલ પ્રતિબંધ અવકાશનું મूલ્યાંકન કરો", "લાગુ પડતું હોય તો બદનામીની કાર્યવાહીનો વિચાર કરો", "સંभવિત કોર્ટ પુરાવા માટે તૈયારી કરો", "પીડિત વળતર યોજનાઓ શોધો"]
          }
        },
      },
      disclaimer: {
        title: "કાનૂની અસ્વીકરણ & નૈતિક સ્થિતિ",
        content: {
          para1: "AUTHENEX અદાલત, કાયદા અમલીકરણ એજન્સી અથવા નિયમનકારી અધિકાર નથી. અમે ફોરેન્સિક વિશ્લેષણ ઉપકરણો અને શૈક્ષણિક સંસાધનો પ્રદાન કરતું તકનીકી પ્લેટફોર્મ છીએ.",
          para2: "ડિજિટલ સામગ્રીની સત્યતા, કાયદેસરતા અથવા પરિણામો અંગેના અંતિમ નિર્ધારો ફક્ત સક્ષમ ન્યાયિક અધિકારીઓ, કાયદા અમલીકરણ એજન્સીઓ અને નિયમનકારી સંસ્થાઓ પાસે છે.",
          para3: "અમે નૈતિક AI વિકાસ અને જવાબદાર તકનીકી જમાવટ માટે પ્રતિબદ્ધ છીએ.",
          updated: "છેલ્લે અપડેટ: ફેબ્રુઆરી 2026. કાયદાઓ અને પ્લેટફોર્મ ક્ષમતાઓ વિકસિત થતાં આ દસ્તાવેજ સુધારણાને આધીન છે."
        }
      },
      footer: {
        copyright: "© 2026 Authenex. રાષ્ટ્રીય ડિજિટલ ટ્રસ્ટ પ્લેટફોર્મ.",
        tagline: "નૈતિક AI, ડિઝાઇન દ્વારા ગોપનીયતા અને બધા માટે ડિજિટલ સુરક્ષા પ્રતિબદ્ધ."
      }
    },
    auth: {
      welcomeBack: "પાછા સ્વાગત છે",
      subtitle: "ફોરેન્સિક વિશ્લેષણ સાધનોને ઍક્સેસ કરવા માટે સાઇન ઇન કરો",
      continueGoogle: "Google સાથે ચાલુ રાખો",
      continueEmail: "અથવા ઇમેઇલ સાથે ચાલુ રાખો",
      continueGuest: "અતિથિ તરીકે ચાલુ રાખો (કોઈ સેટઅપ નથી)",
      emailLabel: "ઇમેઇલ સરનામું",
      passwordLabel: "પાસવર્ડ",
      signInButton: "સાઇન ઇન કરો",
      secured: "256-બીટ એન્ક્રિપ્શન સાથે સુરક્ષિત",
      backHome: "ઘરે પાછા"
    }
  },
  kn: {
    nav: {
      dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      newAnalysis: "ಹೊಸ ವಿಶ್ಲೇಷಣೆ",
      myCases: "ನನ್ನ ಪ್ರಕರಣಗಳು",
      analytics: "ವಿಶ್ಲೇಷಣೆ",
      settings: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
      help: "ಸಹಾಯ",
      logout: "ಸೈನ್ ಔಟ್",
      profile: "ಪ್ರೊಫೈಲ್"
    },
    header: {
      searchPlaceholder: "ಪ್ರಕರಣಗಳನ್ನು ಹುಡುಕಿ...",
      systemOnline: "ಸಿಸ್ಟಮ್ ಆನ್‌ಲೈನ್",
      notifications: "ಸೂಚನೆಗಳು",
      markAllRead: "ಎಲ್ಲವನ್ನೂ ಓದಿದಂತೆ ಗುರುತಿಸಿ",
      noNotifications: "ಯಾವುದೇ ಸೂಚನೆಗಳಿಲ್ಲ",
      viewAll: "ಎಲ್ಲವನ್ನೂ ವೀಕ್ಷಿಸಿ"
    },
    dashboard: {
      title: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      subtitle: "ಸೈಬರ್ ಅಪರಾಧ ಮತ್ತು AI ಬೆದರಿಕೆಗಳ ಬಗ್ಗೆ ನೈಜ- ಸಮಯದ ಮಾಹಿತಿ.",
      stats: {
        cybercrime: "ಸೈಬರ್ ಅಪರಾಧ ಪ್ರಕರಣಗಳು",
        deepfake: "ಡೀಪ್‌ಫೇಕ್ ಪ್ರಕರಣಗಳು",
        aiFraud: "AI ವಂಚನೆ",
        arrests: "ಬಂಧನಗಳು"
      },
      recentActivity: "ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆ",
      analysisLink: "ವಿಶ್ಲೇಷಣೆ",
      newsFeed: "ಲೈವ್ ಇಂಟೆಲಿಜೆನ್ಸ್ ಫೀಡ್",
      recentAnalysis: {
        status: {
          completed: "ವಿಶ್ಲೇಷಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ",
          processing: "ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿದೆ..."
        },
        actions: {
          share: "ಹಂಚಿಕೊಳ್ಳಿ",
          download: "ವರದಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ"
        }
      }
    },
     analyze: {
      title: "ಫೊರೆನ್ಸಿಕ್ ವಿಶ್ಲೇಷಣೆ",
      subtitle: "ವಿಷಯ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ ಮತ್ತು ಪರಿಶೀಲನೆಗಾಗಿ ಫೈಲ್‌ಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
      types: {
        image: "ಚಿತ್ರ ಫೊರೆನ್ಸಿಕ್ಸ್",
        video: "ವಿಡಿಯೋ ವಿಶ್ಲೇಷಣೆ",
        document: "ದಾಖಲೆ ಪರಿಶೀಲನೆ",
        audio: "ಆಡಿಯೋ ಫೊರೆನ್ಸಿಕ್ಸ್",
        email: "ಇಮೇಲ್ ಪರಿಶೀಲನೆ",
        text: "ಪಠ್ಯ ಪತ್ತೆ"
      },
      steps: {
        upload: "ಅಪ್‌ಲೋಡ್",
        scanning: "ಸ್ಕ್ಯಾನಿಂಗ್",
        aiAnalysis: "AI ವಿಶ್ಲೇಷಣೆ",
        results: "ಫಲಿತಾಂಶಗಳು"
      },
      dropzone: {
        dragActive: "ಫೈಲ್‌ಗಳನ್ನು ಇಲ್ಲಿ ಹಾಕಿ",
        dragDrop: "ಫೈಲ್‌ಗಳನ್ನು ಇಲ್ಲಿ ಎಳೆಯಿರಿ",
        browse: "ಅಥವಾ ನಿಮ್ಮ ಕಂಪ್ಯೂಟರ್‌ನಿಂದ ಬ್ರೌಸ್ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
        selectFiles: "ಫೈಲ್‌ಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        selectedFiles: "ಆಯ್ಕೆಮಾಡಿದ ಫೈಲ್‌ಗಳು"
      },
      button: {
        start: "ವಿಶ್ಲೇಷಣೆ ಪ್ರಾರಂಭಿಸಿ",
        analyzing: "ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ..."
      },
      results: {
        authentic: "ಅಧಿಕೃತ ವಿಷಯ",
        aiGenerated: "AI ರಚಿತ",
        verdict: "ತೀರ್ಪು",
        forensicBreakdown: "ಫೊರೆನ್ಸಿಕ್ ವಿಶ್ಲೇಷಣೆ ವಿವರಗಳು",
        detailedFindings: "ವಿವರವಾದ ಸಂಶೋಧನೆಗಳು",
        newAnalysis: "ಹೊಸ ವಿಶ್ಲೇಷಣೆ",
        downloadReport: "ವರದಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
        processing: "ಫೊರೆನ್ಸಿಕ್ ವಿಶ್ಲೇಷಣೆ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುತ್ತಿದೆ... ದಯವಿಟ್ಟು ನಿರೀಕ್ಷಿಸಿ"
      },
      report: {
        probability: "Probability",
        human: "Human",
        authenticity: "Authenticity",
        id: "ID",
        risk: "Risk",
        authenticityAssessment: "Authenticity Assessment",
        aiProbability: "AI Probability",
        humanAuthenticity: "Human Authenticity",
        confidenceScore: "Confidence Score",
        syntheticDetected: "Synthetic Content Detected",
        likelyAuthentic: "Content Likely Authentic",
        multiLayerAnalysis: "Multi-Layer Detection Analysis",
        layersAnalyzed: "layers analyzed with weighted scoring",
        overallConfidence: "Overall Confidence",
        layerContribution: "Layer Contribution Analysis (Score × Weight)",
        noLayers: "No Detection Layers Available",
        noLayersDesc: "The AI analysis did not return detailed layer data",
        categoryDistribution: "Category-wise Distribution",
        detectionFindings: "Detection Findings",
        heatmap: "Heatmap Analysis",
        temporal: "Temporal Consistency",
        forensicReport: "Forensic Analysis Report",
        examiner: "Examiner",
        date: "Date",
        conclusion: "Conclusion",
        recommendations: "Recommendations",
        tabs: {
          details: "Analysis Details",
          visual: "Visual Evidence",
          report: "Forensic Report"
        },
        error: {
          title: "No Analysis Data",
          desc: "Upload a file to begin analysis",
          action: "Start Analysis"
        }
      }
    },
    chat: {
      title: "ಅಥೆನೆಕ್ಸ್ AI",
      subtitle: "ಫೊರೆನ್ಸಿಕ್ ಇಂಟೆಲಿಜೆನ್ಸ್",
      linked: "ಲಿಂಕ್ ಮಾಡಲಾಗಿದೆ",
      placeholder: "ಅಥೆನೆಕ್ಸ್ AI ಅನ್ನು ಕೇಳಿ...",
      listening: "ಆಲಿಸಲಾಗುತ್ತಿದೆ...",
      welcome: "ಅಥೆನೆಕ್ಸ್ AI ಕೋರ್ ಪ್ರಾರಂಭಿಸಲಾಗಿದೆ. ಫೊರೆನ್ಸಿಕ್ ವಿಶ್ಲೇಷಣೆಗೆ ಸಿದ್ಧವಾಗಿದೆ.",
      connectionError: "ಸಂಪರ್ಕ ದೋಷ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ."
    },
    cases: {
      title: "ಪ್ರಕರಣ ನಿರ್ವಹಣೆ",
      subtitle: "ಎಲ್ಲಾ ಫೊರೆನ್ಸಿಕ್ ವಿಶ್ಲೇಷಣೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ ಮತ್ತು ಪರಿಶೀಲಿಸಿ",
      searchPlaceholder: "ಐಡಿ, ಶೀರ್ಷಿಕೆ ಅಥವಾ ಟ್ಯಾಗ್‌ಗಳ ಮೂಲಕ ಪ್ರಕರಣಗಳನ್ನು ಹುಡುಕಿ...",
      filters: {
        all: "ಎಲ್ಲಾ ಪ್ರಕರಣಗಳು",
        completed: "ಪೂರ್ಣಗೊಂಡಿದೆ",
        processing: "ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿದೆ",
        pending: "ಬಾಕಿ ಉಳಿದಿದೆ"
      },
      table: {
        case: "ಪ್ರಕರಣ",
        type: "ಪ್ರಕಾರ",
        date: "ದಿನಾಂಕ",
        status: "ಸ್ಥಿತಿ",
        result: "ಫಲಿತಾಂಶ",
        confidence: "ನಾಂಬಿಕೆ",
        actions: "ಕ್ರಿಯೆಗಳು"
      },
      noCases: "ಯಾವುದೇ ಪ್ರಕರಣಗಳು ಕಂಡುಬಂದಿಲ್ಲ"
    },
    news: {
      top: "ಪ್ರಮುಖ ಸುದ್ದಿಗಳು",
      deepfake: "ಡೀಪ್‌ಫೇಕ್",
      cybercrime: "ಸೈಬರ್ ಅಪರಾಧ",
      ai: "AI ಭದ್ರತೆ",
      policy: "ನೀತಿ",
      cases: "ಪ್ರಕರಣಗಳು",
      social: "ಸಾಮಾజಿಕ"
    },
    scanHistory: {
      title: "ಇತ್ತೀಚಿನ ಸ್ಕ್ಯಾನ್‌ಗಳು",
      noData: "ಯಾವುದೇ ಸ್ಕ್ಯಾನ್ ಇತಿಹಾಸ ಕಂಡುಬಂದಿಲ್ಲ.",
      loading: "ಇತಿಹಾಸ ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
      confidence: "ನಾಂಬಿಕೆ",
      justNow: "ಈಗಷ್ಟೇ",
      ago: "ಹಿಂದೆ"
    },
    profile: {
      tabs: {
        overview: "ಅವಲೋಕನ",
        activity: "ಚಟುವಟಿಕೆ",
        achievements: "ಸಾಧನೆಗಳು"
      },
      edit: "ಪ್ರೊಫೈಲ್ ಸಂಪಾದಿಸಿ",
      save: "ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಿ",
      cancel: "ರದ್ದುಮಾಡಿ",
      role: "ಪಾತ್ರ",
      location: "ಸ್ಥಳ",
      credits: {
        available: "ಲಭ್ಯವಿರುವ ಕ್ರೆಡಿಟ್‌ಗಳು",
        refill: "ಮರುಪೂರಣ ದಿನಾಂಕ",
        add: "ಕ್ರೆಡಿಟ್‌ಗಳನ್ನು ಸೇರಿಸಿ",
        usage: "ಮಾಸಿಕ ಬಳಕೆ"
      },
      about: "ಬಗ್ಗೆ",
      email: "ಇಮೇಲ್",
      website: "ವೆಬ್‌ಸೈಟ್",
      memberSince: "ಸದಸ್ಯತ್ವ",
      lastActive: "ಕೊನೆಯ ಸಕ್ರಿಯ",
      plan: {
        current: "ಪ್ರಸ್ತುತ ಯೋಜನೆ",
        renews: "ನವೀಕರಣ",
        upgrade: "ಯೋಜನೆ ಅಪ್‌ಗ್ರೇಡ್ ಮಾಡಿ"
      },
      delete: {
        title: "ಖಾತೆಯನ್ನು ಅಳಿಸುವುದೇ?",
        desc: "ಈ ಕ್ರಿಯೆಯನ್ನು ರದ್ದುಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ. ನಿಮ್ಮ ಎಲ್ಲಾ ಡೇಟಾವನ್ನು ಶಾಶ್ವತವಾಗಿ ಅಳಿಸಲಾಗುತ್ತದೆ.",
        confirm: "ಅಳಿಸಿ"
      }
    },
    settings: {
      title: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
      subtitle: "ನಿಮ್ಮ ಖಾತೆ ಆದ್ಯತೆಗಳು ಮತ್ತು ಸುರಕ್ಷತೆಯನ್ನು ನಿರ್ವಹಿಸಿ.",
      appearance: "ಗೋಚರತೆ",
      notifications: "ಸೂಚನೆಗಳು",
      security: "ಸುರಕ್ಷತೆ ಮತ್ತು ಗೌಪ್ಯತೆ",
      items: {
        darkMode: "ಡಾರ್ಕ್ ಮೋಡ್",
        language: "ಭಾಷೆ",
        emailNotif: "ಇಮೇಲ್ ಸೂಚನೆಗಳು",
        pushNotif: "ಪುಶ್ ಸೂಚನೆಗಳು"
      },
      securityScore: "ಸುರಕ್ಷತಾ ಸ್ಕೋರ್",
      dangerZone: "ಅಪಾಯ ವಲಯ",
      deleteAccount: "ಖಾತೆ ಅಳಿಸಿ"
    },
    help: {
      hero: {
        badge: "ಸಹಾಯ ಕೇಂದ್ರ",
        title: "ನಾವು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
        subtitle: "ಪತ್ತೆ, ವೈಶಿಷ್ಟ್ಯಗಳು ಮತ್ತು ದೋಷನಿವಾರಣೆ ಬಗ್ಗೆ ಉತ್ತರಗಳನ್ನು ಹುಡುಕಿ.",
        search: "ಉತ್ತರಗಳನ್ನು ಹುಡುಕಿ..."
      },
      sections: {
        overview: "ಅವಲೋಕನ",
        detection: "ಪತ್ತೆ ವಿಧಾನಗಳು",
        troubleshooting: "ದೋಷನಿವಾರಣೆ",
        contact: "ಬೆಂಬಲವನ್ನು ಸಂಪರ್ಕಿಸಿ"
      },
      overview: {
        title: "ಅಥೆನೆಕ್ಸ್ ಎಂದರೇನು",
        desc: "ಡಿಜಿಟಲ್ ವಿಷಯದ ಅಧಿಕೃತತೆಯನ್ನು ವಿಶ್ಲೇಷಿಸಲು AI-ಚಾಲಿತ ಫೊರೆನ್ಸಿಕ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್."
      },
      faq: {
        title: "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",
        noResults: "ಯಾವುದೇ ಫಲಿತಾಂಶಗಳು ಕಂಡುಬಂದಿಲ್ಲ"
      },
      channels: {
        email: "ಇಮೇಲ್ ಬೆಂಬಲ",
        docs: "ದಾಖಲಾತಿ",
        report: "ಸಮಸ್ಯೆಯನ್ನು ವರದಿ ಮಾಡಿ",
        chat: "ಲೈವ್ ಚಾಟ್"
      },
      disclaimer: {
        title: "ಹಕ್ಕು ನಿರಾಕರಣೆ",
        text: "ಫಲಿತಾಂಶಗಳು ಸಂಭವನೀಯತೆಯ ಆಧಾರದ ಮೇಲೆ ಮತ್ತು ಮಾನವ ನಿರ್ಧಾರದೊಂದಿಗೆ ಬಳಸಬೇಕು."
      }
    },
    landing: {
      nav: {
        brandTagline: "TrustLens",
        getStarted: "ಪ್ರಾರಂಭಿಸಿ",
        signIn: "ಸೈನ್ ಇನ್",
        brand: "Authenex"
      },
      hero: {
        badge: "ಈಗ GPT-4 ಪತ್ತೆಯೊಂದಿಗೆ",
        title1: "ಸತ್ಯವನ್ನು ಪರಿಶೀಲಿಸಿ",
        title2: "ಡಿಜಿಟಲ್ ರಿಯಾಲಿಟಿ",
        description: "ಅಥೆನೆಕ್ಸ್ 99.9% ನಿಖರತೆಯೊಂದಿಗೆ ಸಿಂಥೆಟಿಕ್ ಮಾಧ್ಯಮವನ್ನು ಪತ್ತೆಹಚ್ಚಲು ನ್ಯೂರಲ್ ಫೊರೆನ್ಸಿಕ್ಸ್, ಕ್ವಾಂಟಮ್-ನಿರೋಧಕ ಪರಿಶೀಲನೆ ಮತ್ತು ವಿವರಿಸಬಹುದಾದ AI ಅನ್ನು ಸಂಯೋಜಿಸುತ್ತದೆ.",
        startAnalysis: "ಉಚಿತ ವಿಶ್ಲೇಷಣೆ ಪ್ರಾರಂಭಿಸಿ",
        watchDemo: "ಡೆಮೊ ವೀಕ್ಷಿಸಿ",
        goToDashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹೋಗಿ",
        badges: {
          soc2: "SOC 2 ಟೈಪ್ II",
          fisma: "FISMA ಕಂಪ್ಲೈಂಟ್",
          gdpr: "GDPR ಸಿದ್ಧ"
        },
        stats: {
          verification: "ಪರಿಶೀಲನೆ",
          activeUsers: "ಸಕ್ರಿಯ ಬಳಕೆದಾರರು"
        }
      },
      features: {
        sectionBadge: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಸಾಮರ್ಥ್ಯಗಳು",
        sectionTitle: "ಆರು ಆಯಾಮಗಳು",
        sectionTitleHighlight: "ಡಿಜಿಟಲ್ ಫೊರೆನ್ಸಿಕ್ಸ್",
        sectionDescription: "ಅತ್ಯಾಧುನಿಕ ನ್ಯೂರಲ್ ನೆಟ್‌ವರ್ಕ್‌ಗಳು ಮತ್ತು ಪರಿಶೀಲನೆಯಿಂದ ಚಾಲಿತವಾಗಿರುವ ಎಲ್ಲಾ ಡಿಜಿಟಲ್ ವಿಷಯ ಪ್ರಕಾರಗಳ ಸಮಗ್ರ ವಿಶ್ಲೇಷಣೆ.",
        imageForensics: {
          title: "ಚಿತ್ರ ಫೊರೆನ್ಸಿಕ್ಸ್",
          description: "ಸುಧಾರಿತ GAN ಫಿಂಗರ್‌ಪ್ರಿಂಟಿಂಗ್ ಮತ್ತು ಮೆಟಾಡೇಟಾ ವಿಶ್ಲೇಷಣೆ ಬಳಸಿ AI-ರಚಿತ ಚಿತ್ರಗಳು, ಡೀಪ್‌ಫೇಕ್‌ಗಳು ಮತ್ತು ತಿದ್ದಿದ ಫೋಟೋಗಳನ್ನು ಪತ್ತೆ ಮಾಡಿ.",
          stat: "99.9% ನಿಖರತೆ"
        },
        videoVerification: {
          title: "ವಿಡಿಯೋ ಪರಿಶೀಲನೆ",
          description: "ಸಮಗ್ರ ವಿಡಿಯೋ ದೃಢೀಕರಣಕ್ಕಾಗಿ ತಾತ್ಕಾಲಿಕ ಸ್ಥಿರತೆ ವಿಶ್ಲೇಷಣೆ, ಫ್ರೇಮ್-ಮಟ್ಟದ ಇಂಟರ್ಪೋಲೇಷನ್ ಪತ್ತೆ ಮತ್ತು ಲಿಪ್-ಸಿಂಕ್ ಪರಿಶೀಲನೆ.",
          stat: "ನೈಜ ಸಮಯ"
        },
        documentAuth: {
          title: "ದಾಖಲೆ ದೃಢೀಕರಣ",
          description: "ಕಾನೂನು ದಾಖಲೆ ಸಮಗ್ರತೆಗಾಗಿ ಫಾಂಟ್ ಫೊರೆನ್ಸಿಕ್ಸ್, ಸಹಿ ಪರಿಶೀಲನೆ, ಲೇಔಟ್ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಬ್ಲಾಕ್‌ಚೈನ್ ಟೈಮ್‌ಸ್ಟ್ಯಾಂಪ್ ಪರಿಶೀಲನೆ.",
          stat: "ನ್ಯಾಯಾಲಯ ಸಿದ್ಧ"
        },
        emailIntel: {
          title: "ಇಮೇಲ್ ಇಂಟೆಲಿಜೆನ್ಸ್",
          description: "ಹೆಡರ್ ಫೊರೆನ್ಸಿಕ್ಸ್, SPF/DKIM ಪರಿಶೀಲನೆ, ಕಳುಹಿಸುವವರ ಖ್ಯಾತಿ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಫಿಶಿಂಗ್ ಪತ್ತೆ.",
          stat: "ISP-ಏಕೀಕೃತ"
        },
        audioAnalysis: {
          title: "ಆಡಿಯೋ ವಿಶ್ಲೇಷಣೆ",
          description: "ಧ್ವನಿ ಬಯೋಮೆಟ್ರಿಕ್ ಹೊಂದಾಣಿಕೆ, ಸಿಂಥೆಟಿಕ್ ಭಾಷಣ ಪತ್ತೆ, ಅಕೌಸ್ಟಿಕ್ ಪರಿಸರ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಡೀಪ್‌ಫೇಕ್ ಆಡಿಯೋ ಗುರುತಿಸುವಿಕೆ.",
          stat: "ನ್ಯೂರಲ್ ನೆಟ್"
        },
        textDetection: {
          title: "ಪಠ್ಯ ಪತ್ತೆ",
          description: "ಸಿಂಥೆಟಿಕ್ ಪಠ್ಯ ಗುರುತಿಸುವಿಕೆಗಾಗಿ ಗೊಂದಲ ಸ್ಕೋರಿಂಗ್, ಬರ್ಸ್ಟಿನೆಸ್ ವಿಶ್ಲೇಷಣೆ, ಶೈಲಿ ಶೈಲಿ ಹೊಂದಾಣಿಕೆ ಮತ್ತು LLM ಗುಣಲಕ್ಷಣ.",
          stat: "GPT-4 ಸಿದ್ಧ"
        }
      },
      process: {
        badge: "ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
        title: "ಮೂರು ಹಂತಗಳಲ್ಲಿ",
        titleHighlight: "ಫೊರೆನ್ಸಿಕ್ ಪೈಪ್‌ಲೈನ್",
        description: "ಇಂಜೆಶನ್‌ನಿಂದ ಪರಿಶೀಲಿಸಿದ ವರದಿಯವರೆಗೆ, ನಮ್ಮ ಸ್ವಯಂಚಾಲಿತ ಪೈಪ್‌ಲೈನ್ ನಿಖರತೆ, ಪಾರದರ್ಶಕತೆ ಮತ್ತು ಕಾನೂನು ಸ್ವೀಕಾರಾರ್ಹತೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.",
        step1: {
          title: "ಸುರಕ್ಷಿತ ಇಂಜೆಶನ್",
          description: "ಯಾವುದೇ ಡಿಜಿಟಲ್ ಆಸ್ತಿಯನ್ನು ಡ್ರ್ಯಾಗ್ ಮತ್ತು ಡ್ರಾಪ್ ಮಾಡಿ. ಕಸ್ಟಡಿ ಸರಪಳಿಗಾಗಿ ನಾವು ಸ್ವಯಂಚಾಲಿತ ಮೆಟಾಡೇಟಾ ಸಂರಕ್ಷಣೆ ಮತ್ತು ಕ್ರಿಪ್ಟೋಗ್ರಾಫಿಕ್ ಹ್ಯಾಶಿಂಗ್‌ನೊಂದಿಗೆ 200+ ಸ್ವರೂಪಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತೇವೆ.",
          features: {
            f1: "ಎಂಡ್-ಟು-ಎಂಡ್ ಗೂಢಲಿಪೀಕರಣ",
            f2: "ಮೆಟಾಡೇಟಾ ಹೊರತೆಗೆಯುವಿಕೆ",
            f3: "ಹ್ಯಾಶ್ ಪರಿಶೀಲನೆ"
          }
        },
        step2: {
          title: "ನರಮಂಡಲದ ವಿಶ್ಲೇಷಣೆ",
          description: "ನಮ್ಮ ವಿಶೇಷ AI ಮಾದರಿಗಳ ಸಮೂಹವು ವಿಷಯವನ್ನು 50+ ಫೊರೆನ್ಸಿಕ್ ಚೆಕ್‌పಾಯಿಂಟ್‌ಗಳ ಮೂಲಕ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತದೆ, ಮಾನವ ಕಣ್ಣುಗಳಿಗೆ ಕಾಣದ ಅಸಹಜತೆಗಳನ್ನು ಪತ್ತೆ ಮಾಡುತ್ತದೆ.",
          features: {
            f1: "50+ ಪತ್ತೆ ಮಾದರಿಗಳು",
            f2: "ಉಪ-ಸೆಕೆಂಡ್ ಪ್ರಕ್ರಿಯೆ",
            f3: "ವಿಶ್ವಾಸಾರ್ಹ ಸ್ಕೋರಿಂಗ್"
          }
        },
        step3: {
          title: "ಪರಿಶೀಲಿಸಿದ ವರದಿ",
          description: "ಕಾನೂನು ಪ್ರಕ್ರಿಯೆಗಳಿಗಾಗಿ ವಿವರಿಸಬಹುದಾದ AI ಒಳನೋಟಗಳು, ಅಸಹಜ ದೃಶ್ಯೀಕರಣ ಮತ್ತು ಪುನರುತ್ಪಾದಿಸಬಹುದಾದ ಸಾಕ್ಷ್ಯಗಳೊಂದಿಗೆ ನ್ಯಾಯಾಲಯಕ್ಕೆ ಸಿದ್ಧವಾದ ದಾಖಲೆಗಳನ್ನು ಪಡೆಯಿರಿ.",
          features: {
            f1: "PDF ರಫ್ತು",
            f2: "API ಏಕೀಕರಣ",
            f3: "ಬ್ಲಾಕ್‌ಚೈನ್ ಟೈಮ್‌ಸ್ಟ್ಯಾಂಪ್"
          }
        }
      },
      testimonials: {
        badge: "ಪ್ರಪಂಚದಾದ್ಯಂತ ವಿಶ್ವಾಸಾರ್ಹ",
        title: "ಪರಿಶೀಲನೆಯ",
        titleHighlight: "ಧ್ವನಿಗಳು",
        item1: {
          quote: "ಆಥೆನೆಕ್ಸ್ ತಪ್ಪು ಮಾಹಿತಿಯ ವಿರುದ್ಧ ನಮ್ಮ ರಕ್ಷಣೆಯ ಮೊದಲ ಸಾಲಾಗಿದೆ. ವಿವರಿಸಬಹುದಾದ AI ವರದಿಗಳು ನ್ಯಾಯಾಲಯಕ್ಕೆ ಸಿದ್ಧವಾಗಿವೆ ಮತ್ತು ಅನೇಕ ಕಾನೂನು ಪ್ರಕ್ರಿಯೆಗಳಲ್ಲಿ ನಿಂತಿವೆ.",
          author: "ಾರಾ ಚೆನ್",
          role: "ಮಾಹಿತಿ ಭದ್ರತಾ ನಿರ್ದೇಶಕಿ",
          org: "ಗ್ಲೋಬಲ್ ನ್ಯೂಸ್ ನೆಟ್‌ವರ್ಕ್"
        },
        item2: {
          quote: "ಅವರ ವಿಶ್ಲೇಷಣೆಯಲ್ಲಿನ ಫೊರೆನ್ಸಿಕ್ ವಿವರ ಅಭೂತಪೂರ್ವವಾಗಿದೆ. ನಾವು ನಮ್ಮ ಸಾಕ್ಷ್ಯ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ಅವರ API ಅನ್ನು ಗಮನಾರ್ಹ ಸುಲಭವಾಗಿ ಸಂಯೋಜಿಸಿದ್ದೇವೆ.",
          author: "ಮಾರ್ಕಸ್ ರೋಡ್ರಿಗಸ್",
          role: "ಡಿಜಿಟಲ್ ಸಾಕ್ಷ್ಯ ತಜ್ಞ",
          org: "ಫೆడరಲ್ ಬ್ಯೂರೋ ಆಫ್ ಇನ್ವೆಸ್ಟಿಗೇಷನ್"
        },
        item3: {
          quote: "ನಾವು ಆರು ವಿಭಿನ್ನ ಪರಿಹಾರಗಳನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡಿದ್ದೇವೆ. ಆಥೆನೆಕ್ಸ್ ಮಾತ್ರ ಸ್ಥಿರ ನಿಖರತೆಯೊಂದಿಗೆ ಇತ್ತೀಚಿನ ಪ್ರಸರಣ ಮಾದರಿಗಳನ್ನು ಪತ್ತೆಹಚ್ಚುವ ಏಕೈಕ ವೇದಿಕೆಯಾಗಿದೆ.",
          author: "ಡಾ. ಎಮಿಲಿ ವ್ಯಾಟ್ಸನ್",
          role: "ಮುಖ್ಯ ತಂತ್ರಜ್ಞಾನ ಅಧಿಕಾರಿ",
          org: "ಸೆಕ್ಯೂರ್‌ವೋಟ್ ಇಂಕ್."
        }
      },
      cta: {
        title: "ಡಿಜಿಟಲ್ ಸತ್ಯವನ್ನು ರಕ್ಷಿಸಲು",
        titleHighlight: "ಸಿದ್ಧರಿದ್ದೀರಾ?",
        description: "ಾಸಂಶ್ಲೇಷಿತ ಮಾಧ್ಯಮವನ್ನು ಎದುರಿಸಲು ಮತ್ತು ಮಾಹಿತಿ ಸಮಗ್ರತೆಯನ್ನು ಕಾಪಾಡಲು ಆಥೆನೆಕ್ಸ್ ಬಳಸುವ 150 ಕ್ಕೂ ಹೆಚ್ಚು ಉದ್ಯಮಗಳು ಮತ್ತು ಸರ್ಕಾರಿ ಏಜೆನ್ಸಿಗಳೊಂದಿಗೆ ಸೇರಿ.",
        start: "ಉಚಿತ ಪ್ರಯೋಗವನ್ನು ಪ್ರಾರಂಭಿಸಿ",
        demo: "ಡೆಮೊ ನಿಗದಿಪಡಿಸಿ",
        footer: "ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಅಗತ್ಯವಿಲ್ಲ • 14 ದಿನಗಳ ಉಚಿತ ಪ್ರಯೋಗ • SOC 2 ಕಂಪ್ಲೈಂಟ್"
      },
      footer: {
        tagline: "2026 ರಿಂದ ಡಿಜಿಟಲ್ ಸತ್ಯವನ್ನು ರಕ್ಷಿಸುವುದು",
        links: {
          privacy: "ಗೌಪ್ಯತೆ",
          terms: "ನಿಯಮಗಳು",
          security: "ಭದ್ರತೆ",
          api: "API"
        }
      }
    },
    legal: {
      hero: {
        title: "ಕಾನೂನು ರಕ್ಷಣೆಗಳು & AI ದುರುಪಯೋಗ ಸಂರಕ್ಷಣೆ",
        subtitle: "ಭಾರತೀಯ ಕಾನೂನಿನ ಅಡಿಯಲ್ಲಿ AI-ರಚಿತ ಡೀಪ್‌ಫೇಕ್‌ಗಳು, ಗುರುತು ಕಳ್ಳತನ ಮತ್ತು ಡಿಜಿಟಲ್ ವಂಚನೆಯಿಂದ ನಿಮ್ಮ ಹಕ್ಕುಗಳು, ಕಾನೂನು ಉಪಾಯಗಳು ಮತ್ತು ಸಂರಕ್ಷಣೆಗಳು",
        stats: {
          casesReported: "ವರದಿ ಮಾಡಿದ ಪ್ರಕರಣಗಳು",
          arrests: "ಬಂಧನಗಳು",
          lawsEnforced: "ಜಾರಿಗೆ ತಂದ ಕಾಯ್ದೆಗಳು"
        }
      },
      actionSection: {
        title: "ತತ್ಕಾಲ ಕ್ರಮ ತೆಗೆದುಕೊಳ್ಳಿ",
        subtitle: "ಸೈಬರ್ ಅಪರಾಧ ವರದಿ ಮಾಡುವಿಕೆ ಮತ್ತು ಕಾನೂನು ಸಂಪನ್ಮೂಲಗಳಿಗೆ ನೇರ ಪ್ರವೇಶ",
        buttons: {
         repertCybercrime: {
            label: "ಸೈಬರ್ ಅಪರಾಧ ವರದಿ ಮಾಡಿ",
            desc: "ಎಲ್ಲಾ ಡಿಜಿಟಲ್ ಅಪರಾಧಗಳಿಗಾಗಿ ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಅಪರಾಧ ವರದಿ ಮಾಡುವ ಪೋರ್ಟಲ್",
            authority: "ಗೃಹ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ",
            when: "AI-ರಚಿತ ವಿಷಯ ದುರುಪಯೋಗ, ಗುರುತು ಕ್ಳತನ ಅಥವಾ ಆನ್‌ಲೈನ್ ಕಿರುಕುಳ ಸೇ ಸೆರಿದಂತೆ ಯಾವುದೇ ಸೈಬರ್ ಅಪರಾಧ"
          },
          fileFIR: {
            label: "ಆನ್‌ಲೈನ್ FIR ದಾಖಲಿಸಿ",
            desc: "ಮೊದಲ ಮಾಹಿತಿ ವರದಿ ನೋಂದಣಿಗಾಗಿ ರಾಜ್ಯ ಪೊಲೀಸ್ ಪೋರ್ಟಲ್‌ಗಳು",
            authority: "ರಾಜ್ಯ ಪೊಲೀಸ್ ವಿಭಾಗಗಳು",
            when: "ಭೌತಿಕ ಪೊಲೀಸ್ ಠಾಣೆ ಭೇಟಿ ತಕ್ಷಣ ಸಾಧ್ಯವಿಲ್ಲದಿದ್ದಾಗ; ವ್ಯಕ್ತಿಗತ ಭೇಟಿಯೊಂದಿಗೆ ಅನುಸರಿಸಿ"
          },
          identityTheft: {
            label: "ಗುರುತು ಕಳ್ಳತನ ವರದಿ ಮಾಡಿ",
            desc: "ಗುರುತು-ಸಂಬಂಧಿತ ಸೈಬರ್ ಅಪರಾಧಗಳಿಗಾಗಿ ಸಮರ್ಪಿತ ಪೋರ್ಟಲ್",
            authority: "ಇಂಡಿಯನ್ ಸೈಬರ್ ಕ್ರೈಮ್ ಕೋಆರ್ಡಿನೇಷನ್ ಸೆಂಟರ್",
            when: "ಕೃತ್ರಿಮ ಗುರುತು ಸೃಷ್ಟಿ, ಸಾರೂಪ್ಯcción, ಅಥವಾ ವ್ಯಕ್ತಿಗತ ಮಾಹಿತಿಯ ಅನಧಿಕೃತ ಬಳಕೆ"
          },
          womenChild: {
            label: "ಮಹಿಳೆಯರು & ಮಕ್ಕಳ ಸುರಕ್ಷತೆ",
            desc: "ಲಿಂಗ ಆಧಾರಿತ ಮತ್ತು ಮಕ್ಕಳನ್ನು ಗುರಿಯಾಗಿರಿಸಿಕೊಂಡ AI ದುರುಪಯೋಗಕ್ಕಾಗಿ ವಿಶೇಷ ವರದಿ ಮಾಡುವಿಕೆ",
            authority: "ರಾಷ್ಟ್ರೀಯ ಮಹಿಳಾ ಆಯೋಗ, NCPCR",
            when: "ಡೀಪ್‌ಫೇಕ್ ಅಶ್ಲೀಲತೆ, ಒಪ್ಪಿಗೆಯಿಲ್ಲದ ಅಂತರಂಗ ಚಿತ್ರಗಳು, ಮಕ್ಕಳನ್ನು ಗುರಿಯಾಗಿಟ್ಟ ಕೃತ್ರಿಮ ವಿಷಯ"
          },
          helpline: {
            label: "ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಸಹಾಯವಾಣಿ",
            desc: "ಸೈಬರ್ ಅಪರಾಧ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ 24/7 ದೂರವಾಣಿ ಬೆಂಬಲ",
            authority: "ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಮತ್ತು ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ ಸಚಿವಾಲಯ",
            when: "ತತ್ಕಾಲ ಮಾರ್ಗದರ್ಶನ ಅಗತ್ಯ, ವರದಿ ಮಾಡುವ ಪ್ರಕ್ರಿಯೆಯ ಸ್ಪಷ್ಟತೆ, ತುರ್ತು ಸಂದರ್ಭಗಳು"
          },
          sebi: {
            label: "SEBI ದೂರು ಪೋರ್ಟಲ್",
            desc: "ಸಿಕ್ಯೂರಿಟೀಸ್ ಮಾರ್ಕೆಟ್ ವಂಚನೆ ಮತ್ತು AI-ಚಾಲಿತ ಹೂಡಿಕೆ ಹಗರಣಗಳು",
            authority: "ಸೆಕ್ಯೂರಿಟೀಸ್ ಅಂಡ್ ಎಕ್ಸ್‌ಚೇಂಜ್ ಬೋರ್ಡ್ ಆಫ್ ಇಂಡಿಯಾ",
            when: "AI-ರಚಿತ ಮಾರ್ಕೆಟ್ manipulation, ವಂಚಕ ಹೂಡಿಕೆ ಯೋಜನೆಗಳು, ಕೃತ್ರಿಮ ಕಾರ್ಪೊರೇಟ್ ಸಂವಹನ"
          }
        }
      },
      privacy: {
        title: "ಗೌಪ್ಯತೆ & ಡೇಟಾ ಸಂರಕ್ಷಣೆ",
        subtitle: "ನಾವು ನಿಮ್ಮ ಡೇಟಾವನ್ನು ಹೇಗೆ ರಕ್ಷಿಸುತ್ತೇವೆ",
        processedData: {
          title: "ನಾವು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವ ಡೇಟಾ",
          items: []
        },
        neverStored: {
          title: "ಎಂದಿಗೂ ಸಂಗ್ರಹಿಸಲಾಗುವುದಿಲ್ಲ",
          items: []
        },
        encryption: {
          title: "ಎನ್‌ಕ್ರಿಪ್ಶನ್ & ಸುರಕ್ಷತೆ",
          items: []
        },
        rights: {
          title: "ನಿಮ್ಮ ಹಕ್ಕುಗಳು",
          items: {}
        },
        compliance: {
          title: "ಅನುಸರಣೆ ಜೋಡಣೆ",
          items: {}
        }
      },
      security: {
        title: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಸುರಕ್ಷತೆ & ದುರುಪಯೋಗ ತಡೆಗಟ್ಟುವಿಕೆ",
        prevention: {
          title: "ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳು",
          items: {}
        },
        antiAbuse: {
          title: "ದುರुಪಯೋಗ ವಿರೋಧಿ ಯಾಂತ್ರಿಕತೆಗಳು",
          items: {}
        }
      },
      misuse: {
        title: "AI ದುರುಪಯೋಗವನ್ನು ಗುರುತಿಸುವುದು",
        subtitle: "ಬೆದರಿಕೆ ಸನ್ನಿವೇಶಗಳು ಮತ್ತು ರಕ್ಷಣಾತ್ಮಕ ಕ್ರಿಯೆಗಳು",
        scenarios: {
          deepfakeHarassment: { title: "ಡೀಪ್‌ಫೇಕ್ ಕಿರುಕುಳ", desc: "ಸಮ್ಮತಿಯಿಲ್ಲದೆ ವ್ಯಕ್ತಿಗಳನ್ನು ಸಮಾರ್ಪಕ ಅಥವಾ ತಪ್ಪು ಸನ್ನಿವೇಶಗಳಲ್ಲಿ ತೋರಿಸುವ ಕೃತ್ರಿಮ ಮಾಧ್ಯಮದ ಸೃಷ್ಟಿ ಮತ್ತು ವಿತರಣೆ", harm: "ಮಾನಸಿಕ ಗಾಯ, ಖ್ಯಾತಿ ಹಾನಿ, ಸಂಬಂಧ ನಷ್ಟ, ವೃತ್ತಿಪರ ಪರಿಣಾಮಗಳು", affected: "ವ್ಯಕ್ತಿಗಳು, ಸಾರ್ವಜನಿಕ ವ್ಯಕ್ತಿಗಳು, ಖಾಸಗಿ ನಾಗರಿಕರು, ಮಹಿಳೆಯರು ಮತ್ತು ಮಕ್ಕಳು", action: "ತಕ್ಷಣ ಸಾಕ್ಷ್ಯಗಳನ್ನು ಸಂರಕ್ಷಿಸಿ, ಅಪರಾಧಿಗಳೊಂದಿಗೆ ತೊಡಗಬೇಡಿ, ಸೈಬರ್ ಕ್ರೈಮ್ ದೂರು ಸಲ್ಲಿಸಿ, ಕಾನೂನು ನಿರ್ಬಂಧಗಳನ್ನು ಬೇಡಿ" },
          fakeVideos: { title: "AI-ಉತ್ಪತ್ತಿಯಾದ ನಕಲಿ ವೀಡಿಯೊಗಳು", desc: "ನಿಜವಾದ ವ್ಯಕ್ತಿಗಳಿಗೆ ಕಾರಣವಾದ ತಪ್ಪು ಪ್ರಸಂಗಗಳು, ಹೇಳಿಕೆಗಳು ಅಥವಾ ಕ್ರಿಯೆಗಳನ್ನು ತೋರಿಸುವ ನಕಲಿ ವೀಡಿಯೊ ವಿಷಯ", harm: "ತಪ್ಪು ಮಾಹಿತಿ ಪ್ರಸಾರ, ಚುನಾವಣೆ ಮ್ಯಾನಿಪುಲೇಶನ್, ಕಾರ್ಪೊರেట్ ಹಾಳುಮಾಡುವಿಕೆ, ಸಾಮಾಜಿಕ ಅಸ್ವಸ್ಥತೆ", affected: "ರಾಜಕೀಯ ನೇತಾರರು, ಸೆಲೆಬ್ರಿಟಿಗಳು, ಕಾರ್ಪೊರେట್ ಮುಖಂಡರು, ಸಾಮಾನ್ಯ ನಾಗರಿಕರು", action: "ಅನେಕ ಮೂಲಗಳ ಮೂಲಕ ಪರಿಶೀಲಿಸಿ, AUTHENEX ತಪಾಸಣಾ ವಿಶ್ಲೇಷಣೆಯನ್ನು ಬಳಸಿ, ವೇದಿಕೆಗಳು ಮತ್ತು ಅಧಿಕಾರಿಗಳಿಗೆ ವರದಿ ಮಾಡಿ" },
          fakeDocuments: { title: "ನಕಲಿ ಕಾನೂನು / ಶೈಕ್ಷಣಿಕ ದಾಖಲೆಗಳು", desc: "AI-ಉತ್ಪತ್ತಿಯಾದ ಪ್ರಮಾಣಪತ್ರಗಳು, ನ್ಯಾಯಾಲಯ ಆದೇಶಗಳು, ಶೈಕ್ಷಣಿಕ ರುಜುವಾತುಗಳು ಅಥವಾ ಅಧಿಕೃತ ಪತ್ರವ್ಯವಹಾರ", harm: "ಶೈಕ್ಷಣಿಕ ವಂಚನೆ, ಕಾನೂನು ವ್ಯವಸ್ಥೆ ದುರುಪಯೋಗ, ಉದ್ಯೋಗ ವಂಚನೆ, ವಲಸೆ ವಂಚನೆ", affected: "ಶೈಕ್ಷಣಿಕ ಸಂಸ್ಥೆಗಳು, ಉದ್ಯೋಗದಾತರು, ಸರ್ಕಾರಿ ಏಜೆನ್ಸಿಗಳು, ನ್ಯಾಯಾಲಯಗಳು", action: "ದಾಖಲೆ ಮೂಲವನ್ನು ಪರಿಶೀಲಿಸಿ, ದೃಢೀಕರಣ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಪರಿಶೀಲಿಸಿ, ನೀಡುವ ಅಧಿಕಾರಿಗಳಿಗೆ ವರದಿ ಮಾಡಿ" },
          identityImpersonation: { title: "ಗುರುತಿನ ಮೋಸ", desc: "ತಪ್ಪು ಡಿಜಿಟಲ್ ಗುರುತುಗಳನ್ನು ಕೃತ್ರಿಮವಾಗಿ ರಚಿಸುವುದು ಅಥವಾ ವೇದಿಕೆಗಳಲ್ಲಿ ನಿಜವಾದ ವ್ಯಕ್ತಿಗಳ ಮೋಸ", harm: "ಹಣಕಾಸು ವಂಚನೆ, ಕ್ರಿಮಿನಲ್ ನಡವಳಿಕೆ ಆರೋಪಣೆ, ಸಾಮಾಜಿಕ ಎಂಜಿನಿಯರಿಂಗ್, ವಿಶ್ವಾಸ ಸವೆತ", affected: "ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ಬಳಕೆದಾರರು, ವೃತ್ತಿಪರರು, ದುರ್ಬಲ ಜನಸಂಖ್ಯೆ, ವ್ಯವಹಾರಗಳು", action: "ಡಿಜಿಟಲ್ ಹೆಜ್ಜೆಗುರುತನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ, ಬಹು-ಅಂಶ ದೃಢೀಕರಣವನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ, ಮೋಸದ ವೇದಿಕೆಗಳಿಗೆ ವರದಿ ಮಾಡಿ" },
          politicalMisinfo: { title: "ರಾಜಕೀಯ ತಪ್ಪು ಮಾಹಿತಿ", desc: "ಚುನಾವಣೆಗಳು ಅಥವಾ ರಾಜಕೀಯ ಪ್ರವಚನವ Liam್ನು ಪ್ರಭಾವಿಸಲು AI-ಉತ್ಪತ್ತಿಯಾದ ವಿಷಯದ ಸಂಘಟಿತ ಪ್ರಸಾರ", harm: "ಪ್ರಜಾಪ್ರಭುತ್ವ ಪ್ರಕ್ರಿಯೆ ಹಸ್ತಕ್ಷೇಪ, ಮತದಾರ ಮ್ಯಾನಿಪುಲೇಶನ್, ಸಾಮಾಜಿಕ ಧ್ರುವೀಕರಣ, ಹಿಂಸೆಯನ್ನು ಪ್ರಚೋದಿಸುವುದು", affected: "ಚುನಾವಣಾ ಸಂಸ್ಥೆಗಳು, ರಾಜಕೀಯ ಅಭ್ಯರ್ಥಿಗಳು, ಸಾಮಾನ್ಯ ಮತದಾರರು, ಪ್ರಜಾಪ್ರಭುತ್ವ ಸಂಸ್ಥೆಗಳು", action: "ಚುನಾವಣಾ ಆಯೋಗಕ್ಕೆ ವರದಿ ಮಾಡಿ, ಹಂಚಿಕೊಳ್ಳುವ ಮೊದಲು ಸತ್ಯ-ಪರಿಶೀಲಿಸಿ, ವೇದಿಕೆ ಪಾರದರ್ಶಕತೆ ಉಪಕ್ರಮಗಳನ್ನು ಬೆಂಬಲಿಸಿ" },
          financialFraud: { title: "AI ಬಳಸಿ ಹಣಕಾಸು ವಂಚನೆ", desc: "ಕೃತ್ರಿಮ ಮಾರುಕಟ್ಟೆ ಮ್ಯಾನಿಪುಲೇಶನ್, ವಂಚನಾ ಹೂಡಿಕೆ ಯೋಜನೆಗಳು, ಅಥವಾ AI-ಚಾಲಿತ ಫಿಶಿಂಗ ಅಭಿಯಾನಗಳು", harm: "ಹಣಕಾಸು ನಷ್ಟ, ಮಾರುಕಟ್ಟೆ ಅಸ್ಥಿರತೆ, ಹೂಡಿಕೆದಾರ ವಿಶ್ವಾಸ ಸವೆತ, ವ್ಯವಸ್ಥಿತ ಅಪಾಯ", affected: "ಖಾಸಗಿ ಹೂಡಿಕೆದಾರರು, ಹಣಕಾಸು ಸಂಸ্ಥೆಗಳು, ನಿಯಂತ್ರಕ ಸಂಸ್ಥೆಗಳು, ಪಿಂಚಣಿ ನಿಧಿಗಳು", action: "SEBI/RBIಗೆ ವರದಿ ಮಾಡಿ, ಹಣಕಾಸು ಅಪರಾಧ ದೂರು ಸಲ್ಲಿಸಿ, ವಹಿವಾಟು ದಾಖಲೆಗಳನ್ನು ಸಂರಕ್ಷಿಸಿ" }
        }
      },
      legalFramework: {
        title: "ಕಾನೂನು ಚೌಕಟ್ಟು",
        subtitle: "ಡಿಜಿಟಲ್ ಅಪರಾಧಗಳನ್ನು ನಿಯಂತ್ರಿಸುವ ಭಾರತೀಯ ಕಾನೂನುಗಳು",
        laws: {
          it: { act: "ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ ಕಾಯಿದೆ, 2000", section: "ವಿಭಾಗ 66C, 66D, 66E", desc: "ಗುರುತಿನ ಕಳ್ಳತನ, ಮೋಸದ ಮೂಲಕ ವಂಚನೆ ಮತ್ತು ಡಿಜಿಟಲ್ ಮಾಧ್ಯಮದ ಮೂಲಕ ಗೌಪ್ಯತೆ ಉಲ್ಲಂಘನೆ", applicability: "AI-ಉತ್ಪತ್ತಿಯಾದ ಮೋಸ ಮತ್ತು ಡೀಪ್‌ಫೇಕ್ ವಿತರಣೆಗೆ ನೇರವಾಗಿ ಅನ್ವಯವಾಗುತ್ತದೆ" },
          bns: { act: "ಭಾರತೀಯ ನ್ಯಾಯ ಸಂಹಿತೆ, 2023", section: "ವಿಭಾಗ 318, 319, 336", desc: "ವಂಚನೆ, ಮೋಸದ ಮೂಲಕ ವಂಚನೆ ಮತ್ತು ಎಲೆಕ್ಟ್ರಾನಿಕ್ ದಾಖಲೆಗಳ ನಕಲಿ", applicability: "AI-ಉತ್ಪತ್ತಿಯಾದ ವಂಚನಾ ದಾಖಲೆಗಳು ಮತ್ತು ಕೃತ್ರಿಮ ಗುರುತಿನ ಅಪರಾಧಗಳನ್ನು ಒಳಗೊಳ್ಳುತ್ತದೆ" },
          copyright: { act: "ಹಕ್ಕುಸ್ವಾಮ್ಯ ಕಾಯಿದೆ, 1957", section: "ವಿಭಾಗ 51, 63", desc: "ಹಕ್ಕುಸ್ವಾಮ್ಯ ಉಲ್ಲಂಘನೆ ಮತ್ತು ಹಕ್ಕುಸ್ವಾಮ್ಯ ಅಪರಾಧಗಳು", applicability: "ಕೃತ್ರಿಮ ಮಾಧ್ಯಮದಲ್ಲಿ ಸಾದೃಶ್ಯ ಮತ್ತು ವ್ಯಕ್ತಿತ್ವ ಹಕ್ಕುಗಳ ಅನಧಿಕೃತ ಬಳಕೆ" },
          indecent: { act: "ಮಹಿಳೆಯರ ಅಸಭ್ಯ ಪ್ರಾತಿನಿಧ್ಯ ನಿಷೇಧ ಕಾಯಿದೆ, 1986", section: "ಸಂಪೂರ್ಣ ಕಾಯಿದೆ", desc: "ಜಾಹೀರಾತುಗಳು ಅಥವಾ ಪ್ರಕಟಣೆಗಳ ಮೂಲಕ ಮಹಿಳೆಯರ ಅಸಭ್ಯ ಪ್ರಾತಿನಿಧ್ಯದ ಮೇಲಿನ ನಿಷೇಧ", applicability: "ಡೀಪ್‌ಫೇಕ್ ಅಶ್ಲೀಲತೆ ಮತ್ತು ಸಮ್ಮతಿಯಿಲ್ಲದ ಕೃತ್ರಿಮ ಅಂತರಂಗ ಚಿತ್ರಗಳು" }
        }
      },
      remedies: {
        title: "ಪರಿಹಾರಗಳು",
        subtitle: "ನ್ಯಾಯಕ್ಕಾಗಿ ಹಂತಗಳು",
        steps: {
          preserve: { step: "1", title: "ಡಿಜಿಟಲ್ ಸಾಕ್ಷ್ಯಗಳನ್ನು ಸಂರಕ್ಷಿಸಿ", desc: "ಅಪರಾಧಿಗೆ ಎಚ್ಚರಿಕೆ ನೀಡದೆ ತಕ್ಷಣ ಎಲ್ಲಾ ಡಿಜಿಟಲ್ ಜಾಡುಗಳನ್ನು ಸಂರಕ್ಷಿಸಿ", details: ["ಸಮಯ ಮುದ್ರೆಗಳು ಮತ್ತು URL ತೋರಿಸುವ ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ", "ಮೆಟಾಡೇಟಾವನ್ನು ಬದಲಾಯಿಸದೆ ಮೂಲ ಫೈಲ್‌ಗಳನ್ನು ಸಂರಕ್ಷಿಸಿ", "ಸಾಧನ ಮಾಹಿತಿ ಮತ್ತು ಪ್ರವೇಶ ದಾಖಲೆಗಳನ್ನು ದಾಖಲಿಸಿ", "ಯಾವುದೇ ವಿಷಯವನ್ನು ಅಳಿಸಬೇಡಿ ಅಥವಾ ಸಂಪಾದಿಸಬೇಡಿ", "ಸಮಗ್ರತೆ ಪರಿಶೀಲನೆಗಾಗಿ ಕ್ರಿಪ್ಟೋಗ್ರಾಫಿಕ್ ಹ್ಯಾಶ್‌ಗಳನ್ನು ಉತ್ಪತ್ತಿ ಮಾಡಿ"] },
          verify: { step: "2", title: "AUTHENEX ಬಳಸಿ ವಿಷಯವನ್ನು ಪರಿಶೀಲಿಸಿ", desc: "ಸಾಕ್ಷ್ಯ ಮೌಲ್ಯಕ್ಕಾಗಿ ತಪಾಸಣಾ ಪರಿಶೀಲನಾ ವರದಿಯನ್ನು ಉತ್ಪತ್ತಿ ಮಾಡಿ", details: ["ಶಂಕಿತ ವಿಷಯವನ್ನು AUTHENEX ವೇದಿಕೆಯಲ್ಲಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ", "ವಿಸ್ತೃತ ಬಹು-ಸಿಗ್ನಲ್ ವಿಶ್ಲೇಷಣೆಯನ್ನು ವಿನಂತಿಸಿ", "ಸಮಯ ಮುದ್ರೆಯೊಂದಿಗೆ ಸಹಿ ಮಾಡಿದ ತಪಾಸಣಾ ವರದಿಯನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ", "ವೇದಿಕೆ ಪರಿಶೀಲನೆಯ ಮೂಲಕ ವರದಿ ದೃಢೀಕರಣವನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ", "ಪ್ರವೇಶ ನಿಯಂತ್ರಣಗಳೊಂದಿಗೆ ವರದಿಯನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಸಂಗ್ರಹಿಸಿ"] },
          document: { step: "3", title: "ಘಟನೆಯನ್ನು ದಾಖಲಿಸಿ", desc: "ಕಾನೂನು ಕಾರ್ಯವಿಧಾನಗಳಿಗಾಗಿ ವಿಸ್ತೃತ ಘಟನಾ ದಾಖಲೆಯನ್ನು ರಚಿಸಿ", details: ["ಕಾಲಾನುಕ್ರಮದ ಘಟನಾ ದಾಖಲೆಯನ್ನು ನಿರ್ವಹಿಸಿ", "ಎಲ್ಲಾ ಸಂಪರ್ಕ ಪ್ರಯತ್ನಗಳನ್ನು ದಾಖಲಿಸಿ", "ಪರಿಣಾಮ ಮತ್ತು ಹಾನಿಯನ್ನು ದಾಖಲಿಸಿ", "ಸಂಭವನೀಯ ಸಾಕ್ಷಿಗಳನ್ನು ಗುರುತಿಸಿ", "ಅನ್ವಯವಾದರೆ ಹಣಕಾಸು ದಾಖಲೆಗಳನ್ನು ಸಂರಕ್ಷಿಸಿ"] },
          complaint: { step: "4", title: "ಸೈಬರ್ ಕ್ರೈಮ್ ದೂರು ಸಲ್ಲಿಸಿ", desc: "ರಾಷ್ಟ್ರीಯ ಸೈಬರ್ ಕ್ರೈಮ್ ವರದಿ ಮಾಡುವ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ವರದಿ ಮಾಡಿ", details: ["cybercrime.gov.in ವರದಿ ಪೋರ್ಟಲ್ ಅನ್ನು ಪ್ರವೇಶಿಸಿ", "ಸೂಕ್ತ isNaN್ಮವಾದ ಅಪರಾಧ ವರ್ಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ", "ಸಾಕ್ಷ್ಯವಾಗಿ AUTHENEXతಪಾಸಣಾ ವರದಿಯನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ", "ವಿಸ್ತೃತ ಘಟನಾ ವಿವರಣೆಯನ್ನು ಒದಗಿಸಿ", "ಟ್ರ್ಯಾಕಿಂಗ್‌ಗಾಗಿ ರಸೀದಿ ಸಂಖ್ಯೆಯನ್ನು ಪಡೆದುಕೊಳ್ಳಿ"] },
          fir: { step: "5", title: "ಅಗತ್ಯವಿದ್ದರೆ FIR ದಾಖಲಿಸಿ", desc: "ಅರಿತ್ಯೂಚಿಸಬಹುದಾದ ಅಪರಾಧಗಳಿಗೆ ಪೊಲೀಸರಿಗೆ ಏರಿಸಿ", details: ["ಸ್ಥಳೀಯ ಪೊಲೀಸ್ ಠಾಣೆ ಅಥವಾ ಸೈಬರ್ ಸೆಲ್ ಭೇಟಿ ಮಾಡಿ", "ಮುದ್ರಿತ ತಪಾಸಣಾ ವರದಿಗಳು ಮತ್ತು ಸಾಕ್ಷ್ಯಗಳನ್ನು ತರುವುದು", "ಸಂಬಂಧಿತ IT ಕಾಯಿದೆ ವಿಭಾಗಗಳ ಅಡಿಯಲ್ಲಿ FIR ವಿನಂತಿಸಿ", "ನಿಮ್ಮ ದಾಖಲೆಗಳಿಗಾಗಿ FIR ಪ್ரತಿಯನ್ನು ಪಡೆದುಕೊಳ್ಳಿ", "ತನಿಖಾ ಅಧಿಕಾರಿಯೊಂದಿಗೆ ನಿಯಮಿತವಾಗಿ ಸಂಪರ್ಕದಲ್ಲಿರಿ"] },
          legal: { step: "6", title: "ಕಾನೂನು ಸಲಹೆಯನ್ನು ಪಡೆಯಿರಿ", desc: "ಸಂಕೀರ್ಣ ಪ್ರಕರಣಗಳು ಅಥವಾ ನಾಗರಿಕ ಪರಿಹಾರಗಳಿಗಾಗಿ ವಕೀಲರನ್ನು ತೊಡಗಿಸಿಕೊಳ್ಳಿ", details: ["ಸೈಬರ್ ಕಾನೂನಿನಲ್ಲಿ ಪರಿಣತಿಯನ್ನು ಹೊಂದಿರುವ ವಕೀಲರನ್ನು ಸಂಪರ್ಕಿಸಿ", "ನಾಗರಿಕ ನಿರ್ಬಂಧ ಆಯ್ಕೆಗಳನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ", "ಅನ್ವಯವಾದರೆ ಮಾನನಷ್ಟ ಪ್ರಕರಣಗಳನ್ನು ಪರಿಗಣಿಸಿ", "ಸಂಭಾವ್ಯ ನ್ಯಾಯಾಲಯ ಸಾಕ್ಷ್ಯಕ್ಕಾಗಿ ತಯಾರಿ ಮಾಡಿ", "ಬಲಿಪಶುವಿನ ಪರಿಹಾರ ಯೋಜನೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ"] }
        }
      },
      disclaimer: {
        title: "ಕಾನೂನು ನಿರಾಕರಣೆ & ನೈತಿಕ ನಿಲುವು",
        content: {
          para1: "AUTHENEX ನ್ಯಾಯಾಲಯ, ಕಾನೂನು ಜಾರಿ ಸಂಸ್ಥೆ ಅಥವಾ ನಿಯಂತ್ರಕ ಅಧಿಕಾರವಲ್ಲ.",
          para2: "ಡಿಜಿಟಲ್ ವಿಷಯದ ಪ್ರಾಮಾಣಿಕತೆ, ಕಾನೂನುಬದ್ಧತೆ ಅಥವಾ ಪರಿಣಾಮಗಳ ಬಗ್ಗೆ ಅಂತಿಮ ನಿರ್ಧಾರಗಳು ಸಮರ್ಥ ನ್ಯಾಯಾಂಗ ಅಧಿಕಾರಿಗಳ ಬಳಿ ಮಾತ್ರ ಇವೆ.",
          para3: "ನಾವು ನೈತಿಕ AI ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಜವಾಬ್ದಾರಿಯುತ ತಂತ್ರಜ್ಞಾನ ನಿಯೋಜನೆಗೆ ಬದ್ಧರಾಗಿದ್ದೇವೆ.",
          updated: "ಕೊನೆಯ ನವೀಕರಣ: ಫೆಬ್ರವರಿ 2026."
        }
      },
      footer: {
        copyright: "© 2026 Authenex. ರಾಷ್ಟ್ರೀಯ ಡಿಜಿಟಲ್ ಟ್ರಸ್ಟ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್.",
        tagline: "ನೈತಿಕ AI, ವಿನ್ಯಾಸದ ಮೂಲಕ ಗೌಪ್ಯತೆ ಮತ್ತು ಎಲ್ಲರಿಗೂ ಡಿಜಿಟಲ್ ಸುರಕ್ಷತೆಗೆ ಬದ್ಧರಾಗಿದ್ದೇವೆ."
      }
    },
    auth: {
      welcomeBack: "ಮತ್ತೆ ಸ್ವಾಗತ",
      subtitle: "ಫೊರೆನ್ಸಿಕ್ ವಿಶ್ಲೇಷಣೆ ಪರಿಕರಗಳನ್ನು ಪ್ರವೇಶಿಸಲು ಸೈನ್ ಇನ್ ಮಾಡಿ",
      continueGoogle: "Google ನೊಂದಿಗೆ ಮುಂದುವರಿಯಿರಿ",
      continueEmail: "ಅಥವಾ ಇಮೇಲ್‌ನೊಂದಿಗೆ ಮುಂದುವರಿಯಿರಿ",
      continueGuest: "ಅತಿಥಿಯಾಗಿ ಮುಂದುವರಿಯಿರಿ (ಯಾವುದೇ ಸೆಟಪ್ ಇಲ್ಲ)",
      emailLabel: "ಇಮೇಲ್ ವಿಳಾಸ",
      passwordLabel: "ಪಾಸ್‌ವರ್ಡ್",
      signInButton: "ಸೈನ್ ಇನ್ ಮಾಡಿ",
      secured: "256-ಬಿಟ್ ಎನ್‌ಕ್ರಿಪ್ಶನ್‌ನೊಂದಿಗೆ ಸುರಕ್ಷಿತವಾಗಿದೆ",
      backHome: "ಮನೆಗೆ ಹಿಂತಿರುಗಿ"
    }
  }
};
