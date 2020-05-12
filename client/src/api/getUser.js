export async function getUser(userId) {
  const response = await fetch(`('api/users')/${userId}`);
  const user = await response.json();
  return user;
}

export async function addUser(user) {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const createdUser = await response.json();
  return createdUser;
}
