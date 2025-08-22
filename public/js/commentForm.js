const addCommentButton = document.getElementById("commentButton");
addCommentButton === null || addCommentButton === void 0 ? void 0 : addCommentButton.addEventListener("click", () => addCommentForm);
function addCommentForm() {
    const main = document.querySelector("main");
    const formContainer = document.createElement("div");
    formContainer.id = "formContainer";
    formContainer.classList.add("form-container");
    formContainer.addEventListener("click", closeCommentForm);
    const commentForm = document.createElement("form");
    commentForm.classList.add("comment-form");
    commentForm.addEventListener("click", (e) => {
        e.stopPropagation();
    });
    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const userName = userInput.value.trim();
        const userComment = userCommentInput.value.trim();
        const userNote = userNoteSelect.value;
        const recipeIdRegex = /\d{1,}$/;
        const recipeNumber = recipeIdRegex.exec(window.location.href);
        if (!recipeNumber || !userName || !userComment)
            return;
        sendCommentToServer(userName, userComment, userNote, recipeNumber[0]);
        console.log(userName, userComment, userNote, recipeNumber[0]);
    });
    const userLabel = document.createElement("label");
    userLabel.htmlFor = "user-name";
    userLabel.textContent = "Nom d’utilisateur :";
    userLabel.classList.add("form-label");
    const userInput = document.createElement("input");
    userInput.type = "text";
    userInput.id = "user-name";
    userInput.name = "user-name";
    userInput.placeholder = "FoodLover";
    userInput.classList.add("form-input");
    userInput.required = true;
    const userCommentLabel = document.createElement("label");
    userCommentLabel.htmlFor = "user-comment";
    userCommentLabel.textContent = "Votre commentaire :";
    userCommentLabel.classList.add("form-label");
    const userCommentInput = document.createElement("textarea");
    userCommentInput.cols = 1;
    userCommentInput.rows = 5;
    userCommentInput.id = "user-comment";
    userCommentInput.name = "user-comment";
    userCommentInput.placeholder = "Saisissez votre commentaire ici…";
    userCommentInput.classList.add("form-input");
    userCommentInput.required = true;
    const userNoteLabel = document.createElement("label");
    userNoteLabel.htmlFor = "user-note";
    userNoteLabel.textContent = "Votre note :";
    userNoteLabel.classList.add("form-label");
    const userNoteSelect = document.createElement("select");
    userNoteSelect.id = "user-note";
    userNoteSelect.name = "user-note";
    userNoteSelect.classList.add("form-input");
    for (let i = 1; i <= 5; i++) {
        const option = document.createElement("option");
        option.value = i.toString();
        option.text = i.toString();
        userNoteSelect.appendChild(option);
    }
    const formButtonContainer = document.createElement("div");
    formButtonContainer.classList.add("form-button-container");
    const postCommentButton = document.createElement("input");
    postCommentButton.type = "submit";
    postCommentButton.value = "Envoyer";
    postCommentButton.classList.add("form-button");
    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.innerText = "Annuler";
    cancelButton.classList.add("form-button");
    cancelButton.onclick = closeCommentForm;
    formButtonContainer.append(cancelButton, postCommentButton);
    commentForm.append(userLabel, userInput, userCommentLabel, userCommentInput, userNoteLabel, userNoteSelect, formButtonContainer);
    formContainer.append(commentForm);
    main === null || main === void 0 ? void 0 : main.append(formContainer);
}
function closeCommentForm() {
    const formContainer = document.getElementById("formContainer");
    formContainer === null || formContainer === void 0 ? void 0 : formContainer.remove();
}
function validateFormData(name, comment, note, recipeNumber) {
    let errors = [];
    let isValidName = true;
    let isValidComment = true;
    let isValidNote = true;
    let isValidRecipeNumber = true;
    if (!/^[a-zA-Z0-9]+$/.test(name) || name.length < 3 || name.length > 20) {
        isValidName = false;
    }
    if (!/^[a-zA-ZÀ-ÖØ-öø-ÿ0-9\s'’,.!]+$/.test(comment) || comment.length < 10 || comment.length > 250) {
        isValidComment = false;
    }
    for (const character of recipeNumber) {
        if (Number.isNaN(character)) {
            isValidRecipeNumber = false;
        }
    }
    if (Number.isNaN(note) || note > 5 || note < 0) {
        isValidNote = false;
    }
    if (!isValidName) {
        errors.push("Le nom d'utlisateur doit comprendre entre 3 et 20 caractères (majuscules, minuscules ou chiffres).");
    }
    if (!isValidComment) {
        errors.push("Le commentaire doit comprendre entre 10 et 250 caractères.");
    }
    if (!isValidNote) {
        errors.push("Note incorrecte.");
    }
    if (!isValidRecipeNumber) {
        errors.push("Numéro de recette incorrect.");
    }
    if (errors.length > 0) {
        throw new Error(errors.join("\n"));
    }
}
function sendCommentToServer(name, comment, note, recipeNumber) {
    try {
        validateFormData(name, comment, parseInt(note), recipeNumber);
    }
    catch (error) {
        alert(error);
        return;
    }
    fetch("/recipes/byId/:id", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: name,
            message: comment,
            note: note,
            id: recipeNumber
        })
    })
        .then(response => {
        if (!response.ok)
            throw new Error("Erreur lors de l’envoi");
        return response.json();
    })
        .then(data => {
        console.log("Commentaire envoyé :", data);
        location.reload();
    })
        .catch(error => {
        console.error("Erreur :", error);
        alert("Une erreur est survenue lors de l’envoi du commentaire.");
    });
}
//# sourceMappingURL=commentForm.js.map
