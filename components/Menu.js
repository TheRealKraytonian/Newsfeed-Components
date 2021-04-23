// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
const header = document.querySelector(".header");
function menuMaker(anArray) {
  const divMain = document.createElement("div");
  const unorderedList = document.createElement("ul");
  const listItem0 = document.createElement("li");
  const listItemOne = document.createElement("li");
  const listItemTwo = document.createElement("li");
  const listItemThree = document.createElement("li");
  const listItemFour = document.createElement("li");
  const listItemFive = document.createElement("li");
  const menuButton = document.querySelector(".menu-button");

  divMain.classList.add("menu");

  listItem0.textContent = anArray[0];
  listItemOne.textContent = anArray[1];
  listItemTwo.textContent = anArray[2];
  listItemThree.textContent = anArray[3];
  listItemFour.textContent = anArray[4];
  listItemFive.textContent = anArray[5];

  anArray.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.append(item);
  });

  // for (let i = 0; i < anArray.length; i++) {
  //   let anArray = document.createElement("li");
  //   anArray.append(anArray[i]);
  //   return anArray;
  // }

  menuButton.addEventListener("click", (event) => {
    divMain.classList.toggle("menu--open");
  });

  divMain.appendChild(unorderedList);
  unorderedList.appendChild(listItem0);
  unorderedList.appendChild(listItemOne);
  unorderedList.appendChild(listItemTwo);
  unorderedList.appendChild(listItemThree);
  unorderedList.appendChild(listItemFour);
  unorderedList.appendChild(listItemFive);

  return divMain;
}
header.append(menuMaker(menuItems));
