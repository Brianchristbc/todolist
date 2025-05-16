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
}

export function createCardElement(newCard) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  const card = document.createElement("div");
  card.classList.add("card");
  cardContainer.appendChild(card);
  const topBar = document.createElement("div");
  topBar.classList.add("top-bar");
  card.appendChild(topBar);
  const reminderTitle = document.createElement("p");
  //fill this in
  reminderTitle.innerText = newCard.title;
  reminderTitle.classList.add("reminder-title");
  const dropdownArrow = document.createElement("span");
  dropdownArrow.classList.add("material-symbols-outlined");
  //add and remove class of keyboard arrow up and down
  dropdownArrow.innerText = "keyboard_arrow_down";
  topBar.appendChild(reminderTitle);
  topBar.appendChild(dropdownArrow);
  const reminderDescription = document.createElement("p");
  //add reminder description here
  reminderDescription.classList.add("reminder-description");
  reminderDescription.innerText = newCard.description;
  card.appendChild(reminderDescription);
  //add hidden class here
  const reminderDateContainer = document.createElement("div");
  reminderDateContainer.classList.add("date-container");
  const reminderDate = document.createElement("p");
  reminderDate.classList.add("date");
  reminderDate.innerText = newCard.dueDate;
  //add date value here
  card.appendChild(reminderDateContainer);
  reminderDateContainer.appendChild(reminderDate);
  const bottomBar = document.createElement("div");
  bottomBar.classList.add("bottom-bar");
  card.appendChild(bottomBar);
  const deleteCard = document.createElement("span");
  deleteCard.classList.add("material-symbols-outlined");
  deleteCard.innerText = "delete";
  bottomBar.appendChild(deleteCard);
  const editCard = document.createElement("span");
  editCard.classList.add("material-symbols-outlined");
  editCard.innerText = "edit";
  bottomBar.appendChild(editCard);
  const blankSpace = document.createElement("span");
  bottomBar.appendChild(blankSpace);
  const flagCard = document.createElement("span");
  flagCard.classList.add("material-symbols-outlined");
  if (newCard.priority === "high") {
    flagCard.classList.add("flag");
  }
  flagCard.innerText = "flag";
  bottomBar.appendChild(flagCard);
  const completeCard = document.createElement("span");
  completeCard.classList.add("material-symbols-outlined");
  completeCard.innerText = "check";
  bottomBar.appendChild(completeCard);
  // card display = none if this is clicked
  const heroContainer = document.querySelector(".hero-container");
  heroContainer.appendChild(cardContainer);
  const bottom = document.querySelector(".bottom-daily");
  bottom.appendChild(cardContainer);
}
