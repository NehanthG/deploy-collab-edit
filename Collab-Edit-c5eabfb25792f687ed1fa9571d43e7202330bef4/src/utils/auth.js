export async function getMe() {
  const token = localStorage.getItem("collab_auth_token");
  if (!token) return null;

  const res = await fetch("https://13.60.3.39/api/auth/me", { 
    headers: { Authorization: `Bearer ${token}` }
  });

  if (!res.ok) return null;
  return res.json();
}