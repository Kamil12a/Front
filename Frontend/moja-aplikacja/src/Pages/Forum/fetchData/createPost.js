export async function createPostFunc() {
  await fetch("https://localhost:5001/Forum/AddPost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ownerId: 1,
      description: "string",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
