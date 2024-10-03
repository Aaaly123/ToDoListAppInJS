let createNewNotebtn = document.querySelector("#createNewNoteBtn");
let container = document.querySelector("#container");

let i = 0;

createNewNoteBtn.onclick = () => {
  let noteName = document.querySelector("#noteTitle").value;
  let noteContent = document.querySelector("#noteDescription").value;

  if (noteName === "" || noteContent === "") {
    alert("Please fill in both fields.");
    return;
  }

  i++;

  // Create a new div for a note
  const newDiv = document.createElement("div");
  newDiv.classList.add("noteCard"); // Add the noteCard class for styling

  // Append the new div to the container
  container.append(newDiv);

  const randomColor = `hsl(${Math.random() * 360}, 70%, 90%)`; // Light colors

  newDiv.classList.add("noteCard"); // Add the noteCard class for styling

  // Apply styles using JavaScript
  newDiv.style.backgroundColor = randomColor; // Set random background color
  newDiv.style.marginBottom = "10px";
  newDiv.style.padding = "15px";
  newDiv.style.borderRadius = "5px";
  newDiv.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
  newDiv.style.fontFamily = "Arial, sans-serif";

  // Create and style a title
  let title = document.createElement("h3");
  title.textContent = noteName;
  title.style.margin = "0 0 10px 0";
  title.style.fontSize = "18px";
  title.style.color = "teal";

  // Create and style a paragraph
  let noteText = document.createElement("p");
  noteText.textContent = noteContent;
  noteText.style.fontSize = "14px";
  noteText.style.color = "teal";

  // Append the title and paragraph to the new div
  newDiv.appendChild(title);
  newDiv.appendChild(noteText);

  newDiv.addEventListener("dblclick", () => {
    newDiv.remove("div");
  });
};
