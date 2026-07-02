export function useAuth() {
  try {
    const userStr = localStorage.getItem("user");
    const user = userStr ? JSON.parse(userStr) : null;
    const accessToken = localStorage.getItem("accessToken");
    
    return {
      user,
      accessToken,
      isAuthenticated: !!accessToken,
    };
  } catch (error) {
    console.error("Failed to parse user from localStorage", error);
    return {
      user: null,
      accessToken: null,
      isAuthenticated: false,
    };
  }
}
