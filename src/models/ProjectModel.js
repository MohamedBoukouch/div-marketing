// src/models/ProjectModel.js
class ProjectModel {
    static getProjects() {
      return [
        {
          id: 1,
          title: "FinTech Revolution App",
          description: "Application bancaire nouvelle génération avec technologie de pointe.",
          stats: [
            { label: "Users", value: "2M+" },
            { label: "Rating", value: "4.8" },
            { label: "Downloads", value: "5M+" }
          ]
        },
        {
          id: 2,
          title: "E-commerce Luxury Platform",
          description: "Plateforme e-commerce haut de gamme avec AR/VR.",
          stats: [
            { label: "Conversion", value: "+340%" },
            { label: "Traffic", value: "+250%" },
            { label: "Users", value: "500K+" }
          ]
        },
        {
          id: 3,
          title: "Healthcare AI Dashboard",
          description: "Dashboard médical avec intelligence artificielle.",
          stats: [
            { label: "Accuracy", value: "99.2%" },
            { label: "Variables", value: "100+" },
            { label: "Data Points", value: "1M+" }
          ]
        },
        {
          id: 4,
          title: "Corporate Web Portal",
          description: "Portail web d'entreprise avec intégration CRM.",
          stats: [
            { label: "Efficiency", value: "+75%" },
            { label: "Adoption", value: "90%" },
            { label: "Satisfaction", value: "4.9/5" }
          ]
        }
      ];
    }
  }
  
  export { ProjectModel };