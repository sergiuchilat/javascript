/*
*
* Launch APP
*
*
* func launchApp
*   get All items
*   get Data from server
*   add Items from Data
*
*
* func getData
*   fetch
*   return
*
* Add some comment
* */

startApp();

function startApp(){
  getAllItems();
  for (const item of getData()){
    addItem(item);
  }
}

/*==================================*/

function getAllItems () {
  const items = document.querySelectorAll('#students li');
  for (const item of  items){
    attachClickEvent(item);
  }
}

function addItem (item) {
  const newItem = document.createElement("li");
  const newContent = document.createTextNode(item.name);
  newItem.appendChild(newContent);
  document.getElementById("students").appendChild(newItem);
  attachClickEvent(newItem);
}

function attachClickEvent(item){
  item.addEventListener('click', function (event) {
    removeItem(item);
  })
}

function removeItem (item) {
  item.remove();
}

function getData () {
  return [
    {
      name: 'Ion',
      age: 123
    },
    {
      name: 'Mihai',
      age: 123
    }
  ];
}
