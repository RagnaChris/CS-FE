const setCookies = async (accessToken: string, refreshToken: string) => {
  try {
    const response = await fetch("/api/auth/set-cookies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accessToken, refreshToken }),
    });

    if (!response.ok) {
      throw new Error("Failed to set cookies");
    }

    console.log("Cookies set successfully");
  } catch (error) {
    console.error("Error setting cookies:", error);
  }
};

export default setCookies;