function wrapValue<T>(inputValue: T): { value: T } {
    return { value: inputValue };
}
console.log(wrapValue(123));
console.log(wrapValue("hello"));
console.log(wrapValue(true));


type ApiResponse<T> = {
    data: T;
    success: boolean;
}

const response1: ApiResponse<string> = {
    data: "success",
    success: true
};

interface DataResponse {
    id: number;
    title: string;
}
const response2: ApiResponse<DataResponse> = {
    data: { id: 400, title: "something went wrong" },
    success: false
}
console.log(response1);
console.log(response2);

class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift(); // shift removes the first item, a single T or undefined
    }

    peek(): T | undefined {
        return this.items[0];
    }

    size(): number {
        return this.items.length;
    }

}

const numberQueue = new Queue<number>();
numberQueue.enqueue(10);
numberQueue.enqueue(20);
numberQueue.enqueue(30);
console.log(numberQueue.peek());
console.log(numberQueue.dequeue());
console.log(numberQueue.size());

