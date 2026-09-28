// Week 4 JavaScript Portfolio Project - Data Organization
// Students will learn to organize their portfolio data using JavaScript objects and arrays

// TODO: Fill in your personal information
const portfolio = {
    // Personal information object

    owner: {
        name: "Darlene Zhang",

        title: "Data Science & Software Engineering Student",

        email: "darlenezhang@berkeley.edu",

        location: "Berkeley, CA",

        bio: "I'm a UC Berkeley student studying Data Science and Cognitive Science with interests in software engineering, artificial intelligence, and machine learning."
    },
    // Skills as an array
    skills: [
        "Python",
        "Java",
        "JavaScript",
        "SQL",
        "Machine Learning",
        "Data Analysis",
        "React"
    ],
    // Projects as array of objects
    projects: [

        {
            title: "Portal Prowler",
            description: "Built a 2D procedurally generated world using advanced data structures and algorithms including A*, MST, and Disjoint Sets.",
            technologies: ["Java", "A*", "MST", "Disjoint Sets"],
            completionDate: "2024-05-01",
            featured: true
        },

        {
            title: "Vision Transformer & Masked Autoencoder",
            description: "Implemented Vision Transformer and Masked Autoencoder models for CIFAR-10 image classification using GPU acceleration and deep learning techniques.",
            technologies: ["Python", "PyTorch", "TensorFlow", "AdamW"],
            completionDate: "2024-10-01",
            featured: true
        },

        {
            title: "Email Classification",
            description: "Built a logistic regression classifier with feature engineering, tokenization, and vectorization, achieving 92% accuracy.",
            technologies: ["Python", "scikit-learn", "NumPy"],
            completionDate: "2024-11-01",
            featured: false
        }

    ],
    // Contact and availability information
    availability: {
        freelance: false,
        fullTime: false,
        partTime: true
    }
};

// Let's explore our data structure in the console
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

// TODO: During class, we'll add more console.log() statements to explore the data
// Examples students will try:
console.log("Owner name:", portfolio.owner.name);
console.log("First skill:", portfolio.skills[0]);
console.log("Number of projects:", portfolio.projects.length);

// TODO: Students will learn to access nested properties
console.log("Email:", portfolio.owner.email);
console.log("Second project:", portfolio.projects[1]);
console.log("Available for freelance?", portfolio.availability.freelance);

// TODO: Students will create summary strings using template literals
let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills.`;
console.log("Summary:", summary);

// Step 4.1: Data Analysis

console.log("Portfolio Summary:");
console.log(`${portfolio.owner.name} has ${portfolio.skills.length} skills`);
console.log(`and ${portfolio.projects.length} projects`);

for (let i = 0; i < portfolio.projects.length; i++) {
    if (portfolio.projects[i].featured === true) {
        console.log("⭐ Featured:", portfolio.projects[i].title);
    }
}

// Step 4.2: JSON Exploration

let dataAsJSON = JSON.stringify(portfolio, null, 2);
console.log("Portfolio as JSON:", dataAsJSON);