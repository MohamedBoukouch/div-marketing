// src/models/ServiceModel.js
class ServiceModel {
    static getServices() {
      return [
        {
          title: "Mobile Premium",
          description: "Apps natives iOS/Android avec IA intégrée",
          features: [
            "React Native Expert",
            "Future Advanced",
            "AI integration",
            "App Store Optimization"
          ]
        },
        {
          title: "Web Avancé",
          description: "Applications web haute performance",
          features: [
            "Next.js 14",
            "Performance 100/100",
            "SEO Advanced",
            "PWA Ready"
          ]
        },
        {
          title: "Design Innovation",
          description: "Identités visuelles révolutionnaires",
          features: [
            "Smart Strategy",
            "UX/UI Premium",
            "Motion Design",
            "3D Graphics"
          ]
        },
        {
          title: "Social Media Pro",
          description: "Stratégies social media qui convertissent",
          features: [
            "Content Strategy",
            "Influencer Network",
            "Analytics AI",
            "Growth Hacking"
          ]
        }
      ];
    }
  }
  
  export { ServiceModel };