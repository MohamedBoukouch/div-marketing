// src/controllers/ProjectController.js
const ProjectController = () => {
    const viewProject = (projectId) => {
      // In a real app, this would navigate to a project detail page
      console.log(`Viewing project ${projectId}`);
      alert(`Viewing project ${projectId}`);
    };
  
    return { viewProject };
  };
  
  export { ProjectController };