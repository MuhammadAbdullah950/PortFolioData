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
        description: "Automated crypto arbitrage bot using flash loans to track DEX prices and execute profitable trades in real time.",
        videoSrc: "./Arbitrage_FlashLoan_bot_updated2.mp4",
        techName: ["Smart Contracts", "React", "Decentralized Finance"],
        category: "dApps",
    },
   

];

const ProjectCategory = [
    { value: "all", label: "All Projects" },
    { value: "desktop", label: "dApps" }
];

export { projectsData, ProjectCategory };
