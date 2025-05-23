export const submitToSheet = async (data: Record<string, any>) => {
  const webhookURL = "https://script.google.com/macros/s/AKfycbyJFr8sqcD3xv2rxrPGYETwTsYdY1i0pL30CnyeyWKEW5wgNHvb03JViaR2TWwIctZJ/exec";

  try {
    const res = await fetch(webhookURL, {
      method: "POST",
      body: new URLSearchParams(data as any).toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      mode: "no-cors"
    });
  } catch (err) {
    console.error("Error submitting to sheet:", err);
    throw err;
  }
};