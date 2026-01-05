import FullList from "../model/FullList";
import type ListItem from "../model/ListItem";

export interface DOMList {
    ul: HTMLUListElement;
    clear(): void;
    render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {
    public ul: HTMLUListElement;
    static instance: ListTemplate = new ListTemplate();

    constructor() {
        this.ul = document.getElementById("listItems") as HTMLUListElement;
    }

    clear(): void {
        this.ul.innerHTML = "";
    }

    render(fullList: FullList): void {
        this.clear();
        fullList.list.forEach((item: ListItem) => {
            const li = document.createElement("li") as HTMLLIElement;
            li.className = "list-item";

            const checkedInput = document.createElement("input") as HTMLInputElement;
            checkedInput.type = "checkbox";
            checkedInput.id = item.id;
            checkedInput.checked = item.isChecked;
            checkedInput.addEventListener("change", () => {
                item.toggleChecked();
                fullList.save();
            });
            li.appendChild(checkedInput);

            const label = document.createElement("label") as HTMLLabelElement;
            label.textContent = item.item;
            label.htmlFor = item.id; // Connects the label to the checkbox - it is for accessibility 
            li.appendChild(label);

            const button = document.createElement("button") as HTMLButtonElement;
            button.className = "remove-button";
            button.textContent = "X";
            button.addEventListener("click", () => {
                fullList.removeItem(item.id);
                this.render(fullList);
            })
            li.appendChild(button);

            this.ul.appendChild(li);
        })
    }


}