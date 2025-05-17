import { isPast, isToday, isThisWeek, isThisMonth, isThisYear } from "date-fns";

export class todoCard {
  constructor(
    title = "no title",
    description = "no description",
    dueDate = new Date(2025, 4, 14).toDateString(),
    priority = "medium",
    project = "default"
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }

  getCardInfo() {
    return {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      project: this.project,
    };
  }
}

export function createCardElement(newCard) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  const card = document.createElement("div");
  card.classList.add("card");
  card.todoCardInstance = newCard;
  cardContainer.appendChild(card);
  const topBar = document.createElement("div");
  topBar.classList.add("top-bar");
  card.appendChild(topBar);
  const reminderTitle = document.createElement("p");
  reminderTitle.innerText = newCard.title;
  reminderTitle.classList.add("reminder-title");
  const dropdownArrow = document.createElement("span");
  dropdownArrow.classList.add("material-symbols-outlined");
  dropdownArrow.innerText = "keyboard_arrow_down";
  dropdownArrow.addEventListener("click", () => {
    switch (dropdownArrow.innerText) {
      case "keyboard_arrow_down":
        dropdownArrow.innerText = "keyboard_arrow_up";
        reminderDescription.classList.toggle("hidden");
        reminderDate.classList.toggle("hidden");
        break;

      case "keyboard_arrow_up":
        dropdownArrow.innerText = "keyboard_arrow_down";
        reminderDescription.classList.toggle("hidden");
        reminderDate.classList.toggle("hidden");
        break;
    }
  });

  topBar.appendChild(reminderTitle);
  topBar.appendChild(dropdownArrow);
  const reminderDescription = document.createElement("p");
  reminderDescription.classList.add("reminder-description");
  reminderDescription.innerText = newCard.description;
  card.appendChild(reminderDescription);
  const reminderDateContainer = document.createElement("div");
  reminderDateContainer.classList.add("date-container");
  const reminderDate = document.createElement("p");
  reminderDate.classList.add("date");
  console.log(newCard.dueDate);
  reminderDate.innerText = newCard.dueDate;
  card.appendChild(reminderDateContainer);
  reminderDateContainer.appendChild(reminderDate);
  const bottomBar = document.createElement("div");
  bottomBar.classList.add("bottom-bar");
  card.appendChild(bottomBar);
  const editCard = document.createElement("span");
  editCard.classList.add("material-symbols-outlined");
  editCard.innerText = "edit";
  editCard.addEventListener("click", (e) => {
    const cardElement = e.target.closest(".card");
    const cardInfo = cardElement.todoCardInstance.getCardInfo();
    const newReminderInput = document.getElementById("title");
    newReminderInput.value = cardInfo.title;
    const newDescriptionInput = document.getElementById("description");
    newDescriptionInput.value = cardInfo.description;
    const newDateInput = document.getElementById("dueDate");
    newDateInput.value = cardInfo.dueDate;
    const newPriorityInput = document.getElementById("priority");
    newPriorityInput.value = cardInfo.priority;
    const cardContainer = e.target.closest(".card-container");
    cardContainer.remove();
  });
  bottomBar.appendChild(editCard);
  const blankSpace = document.createElement("span");
  bottomBar.appendChild(blankSpace);
  const flagCard = document.createElement("span");
  flagCard.classList.add("material-symbols-outlined");
  console.log(newCard.priority);
  if (newCard.priority === "high") {
    flagCard.classList.add("high-priority");
    flagCard.style.color = "red";
  } else if (newCard.priority === "low") {
    flagCard.style.color = "black";
  }
  flagCard.innerText = "flag";
  bottomBar.appendChild(flagCard);
  flagCard.addEventListener("click", (e) => {
    const cardElement = e.target.closest(".card");
    const cardInstance = cardElement.todoCardInstance;
    switch (flagCard.style.color) {
      case "black":
        flagCard.style.color = "red";
        flagCard.classList.remove("low");
        flagCard.classList.add("high");
        cardInstance.priority = "high";
        break;

      case "red":
        flagCard.style.color = "black";
        flagCard.classList.remove("high");
        flagCard.classList.add("low");
        cardInstance.priority = "low";
    }
  });
  const completeCard = document.createElement("span");
  completeCard.classList.add("material-symbols-outlined");
  completeCard.innerText = "check";
  bottomBar.appendChild(completeCard);
  completeCard.addEventListener("click", (e) => {
    e.target.closest(".card-container").remove();
  });
  const heroContainer = document.querySelector(".hero-container");
  heroContainer.appendChild(cardContainer);
  console.log(isPast(newCard.dueDate));
  if (isToday(newCard.dueDate) === true) {
    const bottom = document.querySelector(".bottom-daily");
    bottom.appendChild(cardContainer);
  } else if (isPast(newCard.dueDate)) {
    const bottom = document.querySelector(".bottom-overdue");
    bottom.appendChild(cardContainer);
  } else if (isThisWeek(newCard.dueDate) === true) {
    const bottom = document.querySelector(".bottom-weekly");
    bottom.appendChild(cardContainer);
  } else if (isThisMonth(newCard.dueDate) === true) {
    const bottom = document.querySelector(".bottom-monthly");
    bottom.appendChild(cardContainer);
  } else if (isThisYear(newCard.dueDate) === true) {
    const bottom = document.querySelector(".bottom-yearly");
    bottom.appendChild(cardContainer);
  } else {
    const bottom = document.querySelector(".bottom-misc");
    bottom.appendChild(cardContainer);
  }
}
