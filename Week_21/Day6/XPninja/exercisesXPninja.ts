interface FavNums<T> {
    favNum: T
}
interface FavWords<K> {
    favWord: K;
}
type CombinedType<T, K> = FavNums<T> & FavWords<K>;
class Container<T, K> {
    protected items: CombinedType<T, K>[] = [];

    add(item: CombinedType<T, K>): void {
        this.items.push(item);
    }

    // remove "an item" by predicate so it works for both primitives + objects
    remove(match: (item: CombinedType<T, K>) => boolean): CombinedType<T, K> | undefined {
        const index = this.items.findIndex(match);
        if (index === -1) return undefined;
        const [removed] = this.items.splice(index, 1);
        return removed;
    }

    list(): CombinedType<T, K>[] {
        return [...this.items];
    }
}
const c = new Container<number, string>();
c.add({ favNum: 45, favWord: "Welcome"});
c.add({ favNum: 55, favWord: "Thanks"});
console.log(c.list());
c.remove((idx) => idx.favNum === 45);
console.log(c.list());




interface Response<T> {
    data: T;
}
function parseResponse<T>(input: string | unknown): Response<T> {
    const raw = typeof input === "string" ? JSON.parse(input) : input;
    return { data: raw as T };
}
type Dog = {
    name: string;
    age: number;
}
const json = '{"name": "Pepper", "age": 3}';
console.log(parseResponse<Dog>(json));


interface ApiResult<T> {
    payload: T;
    receivedAt: Date;
}
function parseApiResult<T>(json: string): ApiResult<T> {
    const parsed = JSON.parse(json) as T;
    return { payload: parsed, receivedAt: new Date() }
}
type User = {
    id: number;
    username: string;
    isAdmin: boolean;
}
const jsonUser = '{"id":1,"username":"fransheska","isAdmin":false}'
const result = parseApiResult<User>(jsonUser);
result.payload.isAdmin;
result.receivedAt.getTime();
result.payload.id;




class Repository<T> {
    protected items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    retrieve(index: number): T | undefined {
        const value = this.items[index] as T | undefined;
        return value;
    }

    list(): T[] {
        return [...this.items];
    }
}
const r = new Repository<number>();
r.add(10);
r.add(20);
r.add(30);
console.log(r.retrieve(0)); // 10
console.log(r.retrieve(99)); // undefined
console.log(r.list());