// src/models/ContactModel.js
class ContactModel {
    static submitForm(data) {
      // In a real app, this would send data to your backend
      console.log("Form submitted:", data);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true, message: "Merci pour votre message! Nous vous contacterons bientôt." });
        }, 1000);
      });
    }
  }
  
  export { ContactModel };