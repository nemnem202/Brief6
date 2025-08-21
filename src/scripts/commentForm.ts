const addCommentButton: HTMLElement | null = document.getElementById("commentButton");
addCommentButton?.addEventListener("click", addCommentForm);

function addCommentForm() {
  const main: HTMLElement | null = document.querySelector("main");

  const formContainer: HTMLDivElement = document.createElement("div");
  formContainer.classList.add("form-container");

  const commentForm: HTMLFormElement = document.createElement("form");
  commentForm.classList.add("comment-form");

  const userLabel: HTMLLabelElement = document.createElement("label");
  userLabel.htmlFor = "user-name";
  userLabel.textContent = "Nom d’utilisateur :";
  userLabel.classList.add("form-label");

  const userInput: HTMLInputElement = document.createElement("input");
  userInput.type = "text";
  userInput.id = "user-name";
  userInput.name = "user-name";
  userInput.placeholder = "FoodLover";
  userInput.classList.add("form-input");

  const userCommentLabel: HTMLLabelElement = document.createElement("label");
  userCommentLabel.htmlFor = "user-comment";
  userCommentLabel.textContent = "Votre commentaire :";
  userCommentLabel.classList.add("form-label");

  const userCommentInput: HTMLTextAreaElement = document.createElement("textarea");
  userCommentInput.cols = 1;
  userCommentInput.rows = 5;
  userCommentInput.id = "user-comment";
  userCommentInput.name = "user-comment";
  userCommentInput.placeholder = "Saisissez votre commentaire ici…";
  userCommentInput.classList.add("form-input");

  const formButtonContainer: HTMLDivElement = document.createElement("div");
  formButtonContainer.classList.add("form-button-container");

  const postCommentButton: HTMLInputElement = document.createElement("input");
  postCommentButton.type = "submit";
  postCommentButton.value = "Envoyer";
  postCommentButton.classList.add("form-button");

  const cancelButton: HTMLButtonElement = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.innerText = "Annuler";
  cancelButton.classList.add("form-button");

  formButtonContainer.append(cancelButton, postCommentButton)
  commentForm.append(userLabel, userInput, userCommentLabel, userCommentInput, formButtonContainer);
  formContainer.append(commentForm);
  main?.append(formContainer);
}