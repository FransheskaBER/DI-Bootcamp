export interface Item {
    id: string;
    item: string;
    isChecked: boolean;
}

export default class ListItem implements Item {
    private _id: string;
    private _item: string;
    private _isChecked: boolean;

    constructor(id: string, item: string, isChecked: boolean) {
        this._id = id;
        this._item = item;
        this._isChecked = isChecked;
    }

    get id(): string {
        return this._id;
    }

    get item(): string {
        return this._item;
    }

    get isChecked(): boolean {
        return this._isChecked;
    }

    set id(newId: string) {
        this._id = newId;
    }

    set item(newItem: string) {
        this._item = newItem;
    }
    
    toggleChecked(): void {
        this._isChecked = !this._isChecked;
    }
}