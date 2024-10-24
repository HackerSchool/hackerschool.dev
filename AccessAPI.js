const BASE_URL = 'http://0.0.0.0:5100/hackerschool.dev/api';

async function getAllMembers() {
    try {
        const response = await fetch(`${BASE_URL}/members`);
        const data = await response.json();
        console.log(data);  // Output the list of all members
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}
  
async function getMember(username) {
    try {
        const response = await fetch(`${BASE_URL}/members/${username}`);
        const data = await response.json();
        console.log(data);  // Output the member details
    } catch (error) {
        console.error(`Error fetching member ${username}:`, error);
    }
}
  

  