export const users = [
    { email: 'registered@example.com', password: 'correctpassword', google: false },
    { email: 'googleuser@example.com', password: '', google: true },
    { email: 'haile19@gmail.com', password: '12345678', google: false}
  ];
  
  export function findUserByEmail(email) {
    return users.find(user => user.email === email);
  }
  
  export function addUser(email, password, google = false) {
    users.push({ email, password, google });
  }
  
  export function isGoogleUser(email) {
    const user = findUserByEmail(email);
    return user ? user.google : false;
  }