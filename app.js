// Declearation of variable
const form = document.querySelector("#addForm");
// ul (list item) variable declearation
const itemList = document.getElementById("items");

// add eventlistener
itemList.addEventListener("click", updateItem);

// add eventlistener to ul element (itemList)
itemList.addEventListener("click", deleteItem);

// Add EventListener to add button (submit)
form.addEventListener("submit", addExpense);

// function for Add Expense
function addExpense(e) {
  e.preventDefault();

  // Declear varaible for budget Title
  const budgetTitle = document.querySelector("#InputBudgetTitle").value;

  // Declear varaible for budget Amount
  const budgetAmount = document.querySelector("#InputAmount").value;

  // Create li Element
  const li = document.createElement("li");

  //   Add class to li element
  li.className = "list-group-item";

  //   append value from budget title (text node) to li
  li.appendChild(document.createTextNode(budgetTitle));

  //   append li to parent element ul

  itemList.appendChild(li);

  //   Create Element Span
  const span = document.createElement("span");

  console.log(span);

  //   Add classname to span
  span.className = "budgetAmount ms-3 me-3 d-inline";

  //   Append value of Amount budget to span
  li.appendChild(document.createTextNode(budgetAmount));

  //   Create Update Button element
  const updateBtn = document.createElement("button");
  console.log(updateBtn);

  //   Add ClassName to Update Button
  updateBtn.className = "btn btn-success btn-sm float-right update ms-3 me-3";

  //   Add text node to update button
  const updateText = document.createTextNode("Update");
  console.log(updateText);

  //   Append text to update button
  updateBtn.appendChild(updateText);

  //   append update button  to li (parentelement)
  li.appendChild(updateBtn);

  //   Create Update Button element
  const deleteBtn = document.createElement("button");
  console.log(deleteBtn);

  //   Add ClassName to Update Button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete ms-3 me-3";

  //   Add text node to update button
  const deleteText = document.createTextNode("Delete");
  console.log(deleteText);

  //   Append text to update button
  deleteBtn.appendChild(deleteText);

  //   append update button  to li (parentelement)
  li.appendChild(deleteBtn);

  //   form Reset
  form.reset();
}

//  update functionality
function updateItem(e) {
  if (e.target.classList.contains("update")) {
    console.log("update me");
  }
  //   console.log("update");
}

// delete button
function deleteItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure ")) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
