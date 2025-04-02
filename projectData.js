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
    },
     {
        title: "Stakify Crypto Wallet: Hold, Purchase, Trade, and Earn Through Staking",
        description: "A secure crypto wallet for storing, trading, and staking digital assets with decentralized governance.",
        videoSrc: "https://drive.google.com/file/d/1MP-380kJqNHSxNFmnZ88y8huMn31f0cm/preview?pli=1",
        techName: ["Blockchain", "React", "Decentralized Finance"],
        category: "dApps",
    }

];

const ProjectCategory = [
    { value: "all", label: "All Projects" },
    { value: "desktop", label: "dApps" }
];

export { projectsData, ProjectCategory };
