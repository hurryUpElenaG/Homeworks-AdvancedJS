/*# Homework 1

## Reminder App

Tasks:
- Create inputs for title, priority, color, description
- Create buttons to add and show reminders
- Store reminders in an array
- Display reminders in a table
- Title color should match the reminder color

🤖 AI Assistance:
- Ask AI how to structure objects
- Ask AI how to generate tables dynamically

✅ Validation:
- Are reminders stored correctly?
- Does the table render properly?
- Are colors applied as expected?*/

let reminderTitleInput = document.getElementById("reminderTitleInput");
let reminderPriorityInput = document.getElementById("reminderPriorityInput");
let reminderColorInput = document.getElementById("reminderColorInput");
let reminderDescriptionInput = document.getElementById("reminderDescriptionInput");

let addReminderButton = document.getElementById("addReminderBtn");
let showReminderButton = document.getElementById("showRemindersBtn");

let reminders = [];

function Reminder(title, priority, color, description) {
  this.title = title ? title : "No Title";
  this.priority = priority ? priority : "Normal";
  this.color = color ? color : "#000000";
  this.description = description ? description : "No Description";
}

addReminderButton.addEventListener("click", function () {
  // Basic validation in case there is no required in the tags in html
  if (
    !reminderTitleInput.value ||
    !reminderPriorityInput.value ||
    !reminderColorInput.value ||
    !reminderDescriptionInput.value
  ) {
    console.log("Please fill in all fields.");
    return;
  }

  let reminder = new Reminder(
    reminderTitleInput.value,
    reminderPriorityInput.value,
    reminderColorInput.value,
    reminderDescriptionInput.value,
  );

  reminders.push(reminder);
  console.log("Reminder added:", reminder);

  reminderTitleInput.value = "";
  reminderPriorityInput.value = "";
  reminderColorInput.value = "#000000";
  reminderDescriptionInput.value = "";
});


//1st way
showReminderButton.addEventListener("click", function () {
  let container = document.getElementById("reminderTableContainer");
  container.innerHTML = ""; // clear old table

  let table = document.createElement("table");

  let headerRow = document.createElement("tr");
  headerRowTitles = ["Title", "Priority", "Description"];

  for (let headerRowTitle of headerRowTitles) {
    let th = document.createElement("th");
    th.textContent = headerRowTitle;
    headerRow.appendChild(th);
  }

  table.appendChild(headerRow);

  for (let reminder of reminders) {
    let row = document.createElement("tr");

    let titleCell = document.createElement("td");
    titleCell.textContent = reminder.title;
    titleCell.style.color = reminder.color;

    let priorityCell = document.createElement("td");
    priorityCell.textContent = reminder.priority;

    let descriptionCell = document.createElement("td");
    descriptionCell.textContent = reminder.description;

    row.appendChild(titleCell);
    row.appendChild(priorityCell);
    row.appendChild(descriptionCell);

    table.appendChild(row);
  }

  container.appendChild(table);
});


//2nd way
/*showReminderButton.addEventListener('click', function() {
   let tableHTML = '<table><tr><th>Title</th><th>Priority</th><th>Description</th></tr>';
   for (let reminder of reminders) {
    tableHTML += `
        <tr>
            <td style="color: ${reminder.color};">${reminder.title}</td>
            <td>${reminder.priority}</td>
            <td>${reminder.description}</td>
        </tr>
    `;
}
        
    tableHTML += '</table>';
    document.getElementById('reminderTableContainer').innerHTML = tableHTML;
});*/

