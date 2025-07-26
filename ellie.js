async function askEllie(prompt) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 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",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are Ellie, an assistant that creates apps and tools for your master." },
        { role: "user", content: prompt }
      ]
    })
  });
  const data = await response.json();
  return data.choices?.[0]?.message?.content || "No response.";
}
