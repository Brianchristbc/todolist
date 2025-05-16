import "./style.css";
import { createCardElement, todoCard } from "./create.js";

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
