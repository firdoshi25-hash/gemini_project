const questionInput = document.getElementById("questionInput");
const askButton = document.getElementById("askButton");
const answer = document.getElementById("answer");

askButton.addEventListener("click", async () => {
  const question = questionInput.value.trim();
  if (question === "") {
    answer.textContent = "Please enter a question.";
    return;
  }

  answer.textContent = "Loading...";

  try {

    const response = await fetch("/api/ask", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        question: question
      })
    });

    const data = await response.json();

    answer.textContent = data.answer;

  } catch (error) {

    console.error(error);

    answer.textContent =
      `error: ${error}`

  }

});