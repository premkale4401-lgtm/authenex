
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
      profile: "Profile"
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
      profile: "प्रोफ़ाइल"
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
      profile: "प्रोफाइल"
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
