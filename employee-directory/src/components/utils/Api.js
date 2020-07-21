import axios from "axios";

// API random request to get 20 employees
export default {
  findPeople: function() {
      return axios.get('https://randomuser.me/api/?results=20&nat=us');
  }
}