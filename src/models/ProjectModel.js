// src/models/ProjectModel.js
class ProjectModel {
  static getProjects() {
    return [
      {
        id: 1,
        title: "Maroc Concours",
        description: "Plateforme d’aide à la préparation des concours d’accès à l’enseignement supérieur.",
        detailedDescription: "Une solution bancaire complète avec prédictions financières, gestion de portefeuille et assistant virtuel. Cette application a révolutionné le secteur FinTech avec son interface intuitive et ses algorithmes avancés.",
        type: "web",
        category: "fintech",
        imageUrl: "../assets/projects/maroconcours.png",
        link:"https://www.maroconcours.space/",
        gallery: [
          "../assets/sliders/slide1.jpeg",
          "/images/fintech-2.jpg",
          "/images/fintech-3.jpg"
        ],
      },
      {
        id: 2,
        title: "LeafSense_AI",
        description: "Application d’analyse intelligente dédiée à la détection des maladies des plantes via des images.",
        detailedDescription: "Une expérience d'achat immersive avec réalité augmentée pour essayer virtuellement les produits avant achat. Intégration avec les principaux fournisseurs de paiement et système de recommandation IA.",
        type: "mobile",
        category: "ecommerce",
        imageUrl: "/images/ecommerce-platform.jpg",
        link:"",
        gallery: [
          "/images/ecommerce-1.jpg",
          "/images/ecommerce-2.jpg"
        ],
      },
      {
        id: 3,
        title: "Siya9a 2025 - تعليم السياقة",
        description:"Application marocaine pour apprendre à conduire et se préparer à l’examen du permis de conduire (catégories B et A)",
        detailedDescription: "Une expérience d'achat immersive avec réalité augmentée pour essayer virtuellement les produits avant achat. Intégration avec les principaux fournisseurs de paiement et système de recommandation IA.",
        type: "mobile",
        category: "ecommerce",
        imageUrl: "/images/ecommerce-platform.jpg",
        link:"",
        gallery: [
          "/images/ecommerce-1.jpg",
          "/images/ecommerce-2.jpg"
        ],
      },
      {
        id: 4,
        title: "Learn English For Kids",
        description:"Appli éducative pour initier les enfants à l’anglais de manière amusante.",
        detailedDescription: "Une expérience d'achat immersive avec réalité augmentée pour essayer virtuellement les produits avant achat. Intégration avec les principaux fournisseurs de paiement et système de recommandation IA.",
        type: "mobile",
        imageUrl: "/images/ecommerce-platform.jpg",
        link:"",
      },
      {
        id: 5,
        title: "Landing Page",
        description:"landing page professionnelle et attractive pour une marque d’huile naturelle fortifiante pour cheveux.",
        detailedDescription: "Une expérience d'achat immersive avec réalité augmentée pour essayer virtuellement les produits avant achat. Intégration avec les principaux fournisseurs de paiement et système de recommandation IA.",
        type: "brand-design",
        imageUrl: "/images/ecommerce-platform.jpg",
        link:"",
      },
      {
        id: 6,
        title: "Landing Page",
        description:"landing page professionnelle et attractive pour une marque d’huile naturelle fortifiante pour cheveux.",
        type: "brand-design",
        imageUrl: "/images/ecommerce-platform.jpg",
        link:"",
      }
    ];
  }

  static getProjectById(id) {
    return this.getProjects().find(project => project.id === parseInt(id));
  }

  static getProjectTypes() {
    return [
      { id: 'all', name: 'Tous les projets' },
      { id: 'brand-design', name: 'Design de Marque' },
      { id: 'web', name: 'Sites Web' },
      { id: 'mobile', name: 'Applications Mobile' },
      { id: 'problem-solving', name: 'Solutions Technologiques' }
    ];
  }

  static getProjectCategories() {
    return [
      { id: 'all', name: 'Tous secteurs' },
      { id: 'fintech', name: 'FinTech' },
      { id: 'ecommerce', name: 'E-commerce' },
      { id: 'healthcare', name: 'Santé' },
      { id: 'corporate', name: 'Entreprise' }
    ];
  }
}

export { ProjectModel };