import "./style.css";
import { createCardElement, todoCard } from "./create.js";

const card1 = new todoCard(
  "Do homework",
  "math and science",
  new Date(2025, 4, 22).toDateString(),
  "high"
);

console.log(card1);

const card2 = new todoCard();
console.log(card2);

const formButton = document.getElementById("submit-form");
const reminderForm = document.getElementById("reminder-form");

formButton.addEventListener("click", (event) => {
  event.preventDefault();

  const title = reminderForm.title.value;
  const description = reminderForm.description.value;
  const dueDate = reminderForm.dueDate.value;
  const priority = reminderForm.priority.value;
  const newCard = new todoCard(title, description, dueDate, priority);

  createCardElement(newCard);

  reminderForm.reset();
});
