export async function getMe() {
  const token = localStorage.getItem("collab_auth_token");
  if (!token) return null;

  const res = await fetch("http://13.60.3.39:4000/auth/me", { 
    headers: { Authorization: `Bearer ${token}` }
  });

  if (!res.ok) return null;
  return res.json();
}