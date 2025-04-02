const projectsData = [
    {
        title: "ProofAI - Blockchain Integrated AI Training",
        description: "An innovative platform integrating blockchain’s proof-of-work mechanism with AI model training.",
        imgSrc: "https://raw.githubusercontent.com/MuhammadAbdullah950/PortFolioData/main/ProofAI/proofai_up.png",
        githubLink: "https://github.com/MuhammadAbdullah950/ProofAI",
        hostUrl: "https://github.com/MuhammadAbdullah950/ProofAI/releases/tag/v1.0.0-beta",
        techIcon: [
            "https://raw.githubusercontent.com/MuhammadAbdullah950/PortFolioData/main/ProofAI/ipfs.svg",
            "https://raw.githubusercontent.com/MuhammadAbdullah950/PortFolioData/main/ProofAI/Go.svg",
            "https://raw.githubusercontent.com/MuhammadAbdullah950/PortFolioData/main/ProofAI/react-icon.svg"
        ],
        techIconAlt: ["IPFS", "Go", "React"],
        techName: ["IPFS", "Go", "React", "Decentralized"],
        category: "desktop",
    },
    {
        title: "AI Video Processor",
        description: "A tool for AI-powered video editing and enhancements.",
        videoSrc: "https://drive.google.com/uc?export=download&id=1ogtRepUyOsAZle2866aeKd0yCc-C_eGq",  // Replace YOUR_VIDEO_ID
        
        techName: ["AI", "OpenCV", "Machine Learning"],
        category: "video",
    }
];

const ProjectCategory = [
    { value: "all", label: "All Projects" },
    { value: "desktop", label: "dApps" },
    { value: "video", label: "AI Video Processing" }
];

export { projectsData, projectCategories };
