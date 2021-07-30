const TOKEN = 'token';
const USER_ROLE = 'userRole';

const isAuthenticated = () => {
   return localStorage.getItem(TOKEN) !== null;
};

const getUserRole = () => {
   return localStorage.getItem(USER_ROLE);
};

const logout = (history) => {
   localStorage.removeItem(TOKEN);
   localStorage.removeItem(USER_ROLE);
   history.push('/');
};

export { isAuthenticated, getUserRole, logout };
