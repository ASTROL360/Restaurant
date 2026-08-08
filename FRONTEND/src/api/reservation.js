const API_BASE_URL = "http://localhost:4000/api/v1";

export async function sendReservation(payload) {
  const response = await fetch(`${API_BASE_URL}/reservation/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }

  return data;
}
