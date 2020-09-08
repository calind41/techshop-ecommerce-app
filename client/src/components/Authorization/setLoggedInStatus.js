export default function setLoggedInStatus(status) {
    localStorage.setItem('userLoggedIn', status);
}