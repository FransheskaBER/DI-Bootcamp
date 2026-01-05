import ListItem, { type Item } from "./ListItem";

export interface List {
    list: ListItem[];
    addItem: (itemObj: ListItem) => void;
    removeItem: (id: string) => void;
    load: () => void;
    save: () => void;
    clearList: () => void;
}

export default class FullList implements List {
    private _list: ListItem[];
    static instance: FullList = new FullList(); // Singleton pattern which is a way to ensure a class has only one instance and provide a global point of access to it.
    
    constructor(list: ListItem[] = []) {
        this._list = list;
    }

    get list(): ListItem[] {
        return this._list;
    }

    addItem (itemObj: ListItem): void {
        this._list.push(itemObj);
        this.save();
    }

    removeItem (id: string): void {
        // this._list.filter((item) => item.id !== id);
        const index = this._list.findIndex((item) => item.id === id);
        this._list.splice(index, 1);
        this.save();
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("myList");
        if(typeof storedList !== "string") return;

        const parsedList: Item[] = JSON.parse(storedList);
        parsedList.forEach((itemObj) => {
            const newListItem = new ListItem(itemObj.id, itemObj.item, itemObj.isChecked);
            this._list.push(newListItem);
        }); 
    }

    save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list));
    }

    clearList(): void {
        this._list = [];
        this.save();
    }
}