// Menu data
const menuItems = [
  "Margherita Pizza",
  "Butter Chicken",
  "Pasta Alfredo",
  "Veg Biryani",
  "Tandoori Chicken",
  "Garlic Bread",
  "Chocolate Lava Cake"
];

// Display items
const menuList = document.getElementById("menu-items");

menuItems.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  menuList.appendChild(li);
});
