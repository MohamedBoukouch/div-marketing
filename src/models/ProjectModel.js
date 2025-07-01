// src/models/ProjectModel.js
class ProjectModel {
  static getProjects() {
    return [
      {
        id: 1,
        title: "FinTech Revolution App",
        description: "Application bancaire nouvelle génération avec technologie de pointe.",
        detailedDescription: "Une solution bancaire complète avec prédictions financières, gestion de portefeuille et assistant virtuel. Cette application a révolutionné le secteur FinTech avec son interface intuitive et ses algorithmes avancés.",
        type: "mobile",
        category: "fintech",
        imageUrl: "../assets/sliders/slide1.jpeg",
        gallery: [
          "../assets/sliders/slide1.jpeg",
          "/images/fintech-2.jpg",
          "/images/fintech-3.jpg"
        ],
      },
      {
        id: 2,
        title: "E-commerce Luxury Platform",
        description: "Plateforme e-commerce haut de gamme avec AR/VR.",
        detailedDescription: "Une expérience d'achat immersive avec réalité augmentée pour essayer virtuellement les produits avant achat. Intégration avec les principaux fournisseurs de paiement et système de recommandation IA.",
        type: "web",
        category: "ecommerce",
        imageUrl: "/images/ecommerce-platform.jpg",
        gallery: [
          "/images/ecommerce-1.jpg",
          "/images/ecommerce-2.jpg"
        ],
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