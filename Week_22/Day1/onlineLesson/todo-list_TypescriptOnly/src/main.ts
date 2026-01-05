import FullList from "./model/FullList";
import ListItem from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";
import { v4 as uuidv4 } from "uuid";

const initApp = (): void => {
  // const fullListInstance = new FullList();
  const fullListInstance = FullList.instance;
  const templateInstance = ListTemplate.instance;
  
  const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement;
  itemEntryForm.addEventListener("submit", (e: SubmitEvent): void => {
    e.preventDefault();

    // get value from the input
    const itemInput = document.getElementById("newItem") as HTMLInputElement;
    const newEntryText: string = itemInput.value.trim();
    if (!newEntryText) return;

    // create a new ListItem
    const newItem = new ListItem(uuidv4(), newEntryText, false);

    // add the new ListItem to the FullList
    fullListInstance.addItem(newItem);
    
    // clear the input
    itemInput.value = "";

    // re-render the list
    templateInstance.render(fullListInstance);  
  });

  const clearListButton = document.getElementById("clearListButton") as HTMLButtonElement;
  clearListButton.addEventListener("click", (): void => {
    fullListInstance.clearList();
    templateInstance.render(fullListInstance);
  });

  // initial load and render
  fullListInstance.load();
  templateInstance.render(fullListInstance);
}

initApp();