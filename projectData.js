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
        title: "ArbiFlash Bot - DeFi Arbitrage Tool for Cross-Exchange Flash Loan Trading",
        description: "ArbiFlash Bot automates cryptocurrency arbitrage trading using flash loans. Monitor price differences across multiple DEXs, execute profitable trades automatically, and analyze performance with real-time metrics - all in one intuitive dashboard.",
        videoSrc: "https://drive.google.com/file/d/1ogtRepUyOsAZle2866aeKd0yCc-C_eGq/preview?pli=1",
        techName: ["Smart Contracts", "React", "Decentralized Finance"],
        category: "dApps",
    },
    {
        title: "Vegan Rob's DAO: Decentralized Governance Platform",
        description: "Vegan Rob's DAO enables token holders to govern via a blockchain platform, offering election creation, voting, and membership tracking with transparency.",     
        videoSrc: "https://drive.google.com/file/d/1KxKpQvCNre8-EiCPp0qZ1ARf7IgM3RjT/preview?pli=1",
        techName: ["Ethereum Smart Contract", "React", "Decentralized Governance"],
        category: "dApps",
    }
];

const ProjectCategory = [
    { value: "all", label: "All Projects" },
    { value: "desktop", label: "dApps" }
];

export { projectsData, ProjectCategory };
