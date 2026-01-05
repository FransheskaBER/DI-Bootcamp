// Daily Challenge: Create a Book Library System
interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

interface BookLibrary {
  addBook(book: Book): void;
  getBookDetails(isbn: string): string;
  getAllBooks(): Book[];
}

class Library implements BookLibrary {
  private books: Book[];
  
  constructor() {
    this.books = [];
  }

  public addBook(newBook: Book): void {
    this.books.push(newBook);
  }

  public getBookDetails(isbn: string): string {
     const selectedBook = this.books.find(book => book.isbn === isbn);
     return selectedBook 
      ? `${selectedBook.title} by ${selectedBook.author} published in ${selectedBook.publishedYear}`
      : "Book not found";
  }

  public getAllBooks(): Book[] {
      return [...this.books];
  }
}

class DigitalLibrary extends Library {
  readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  public listBooksTitles(): string[] {
    return this.getAllBooks().map(book => book.title);
  }
}

const myLibrary = new DigitalLibrary("https://mydigitallibrary.com");
myLibrary.addBook({
  title: "1984",
  author: "George Orwell",
  isbn: "1234567890",
  publishedYear: 1949
});
myLibrary.addBook({
  title: "Animal Farm",
  author: "George Orwell",
  isbn: "1234567891",
  publishedYear: 1945
});
console.log(myLibrary.getBookDetails("1234567890"));
console.log(myLibrary.listBooksTitles());
console.log(myLibrary.website);
console.log(myLibrary.getAllBooks());


const favBook: Book = {
  title: "Brave New World",
  author: "Aldous Huxley",
  isbn: "0987654321",
  publishedYear: 1932,
  genre: "Dystopian"
}
myLibrary.addBook(favBook);
console.log(myLibrary.getAllBooks());


// DAY 3 - TypeScript Advanced Types Recap
// npm create vite@latest typescript-day3 -- --template vanilla-ts

// static in classes
class Student1 {
  static count: number = 0;

  static getCount(): number {
    return Student1.count;
  }

  name: string;
  id: number;
  
  constructor(name: string) {
    this.name = name;
    this.id = ++Student1.count;
  }
}
const s1 = new Student1("Alice");
const s2 = new Student1("Bob");
console.log(s1);
console.log(s2);
console.log(Student1.getCount());


// Index Signatures/ keys

interface Employee {
  // if you dont want to specific name the keys like "name", "age" or "role" you can use index signature like:
  [key: string | number]: string | number;
  name: string;
  age: number;
  role: string;
}

const employee1: Employee = {
  name: "John",
  age: 33,
  role: "developer",
}

for(const key in employee1) {
  console.log(key, employee1[key as keyof Employee]);
  console.log(key, employee1[key as keyof typeof employee1]);  
}

const prop1: string = "name";
const obj = {
  [prop1]: "abc", // the one in [] is dynamic key
}
console.log(obj);
console.log(obj.name);
console.log(employee1.name);
console.log(employee1["name"]);
console.log(employee1[prop1 as keyof Employee]);


// Record Type = create types from types
type User = {
  name: string;
  age: number;
}
const u1: User = {
  name: "Alice",
  age: 25,
}
const u2: User = {
  name: "John",
  age: 35,
}

type Keys = "name" | "age" | "gender";
type UserR = Record<Keys, string | number>;

const us2: UserR = {
  name: "Bob",
  age: 30,
  gender: "male",
}

// Generics - create reusable components
const strEcho = (value: string): string => value;
const numEcho = (value: number): number => value;
const bolEcho = (value: boolean): boolean => value;

const echoGeneric = <T>(value: T): T => value;
echoGeneric<string>("Hello");
echoGeneric<number>(123);
echoGeneric<boolean>(true);

const echoGeneric2 = <T, K>(value: T, value2: K): T | K => value;
echoGeneric2<string, number>("hello", 123);


// get the first element of an array
const getFirstElement = <T>(arr: T[]): T => {
  return arr[0];
}
console.log(getFirstElement<number>([10, 20, 30, 40, 50]));
console.log(getFirstElement<string>(["hello", "world", "bye"]));
console.log(getFirstElement<User>([u1, u2]));


// Generics with interfaces and classes
interface Person<T> {
  id: number;
  name: string;
  age: number;
  info: T;
}

const p1: Person<string> = {
  id: 1,
  name: "Alice",
  age: 45,
  info: "Some info about Alice",
}

type Info = {
  city: string;
  address: string;
  zipcode: number;
}

const p2: Person<Info> = {
  id: 2,
  name: "Bob",
  age: 50,
  info: {
    city: "New York",
    address: "123 Main St",
    zipcode: 10001,
  }
}

console.log(p1);
console.log(p2);


// example with more than one generic:

const mergeArray = <T, K, Z>(arr1: T[], arr2: K[], arr3: Z[]): (T | K | Z)[] => {
  return [...arr1, ...arr2, ...arr3];
}

const nums: number[] = [1, 2, 3];
const strs: string[] = ["a", "b", "c"];
const bools: boolean[] = [true, false, true];

console.log(mergeArray(nums, strs, bools));


// Exercise with generics:

interface BoolCheck<T> {
  arg: T;
  is: boolean;
}

const isObj = <T>(arg: T): BoolCheck<T> => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null
    ? { arg, is: true }
    : { arg, is: false };

}

console.log(isObj<User>(u1));
console.log(isObj<string>("hello"));
console.log(isObj<number>(34));

// Utility Types - Partial, Required, Readonly, Pick, Omit

type Post = {
  id: number;
  title: string;
  body: string;
};

// i want to create a partial type of Post where all properties are optional
type PartialPost = Partial<Post>;

const post1: Post = {
  id: 1,
  title: "My First Post",
  body: "This is the body of my first post.",
}
const post2: PartialPost = {
  id: 1,
  title: "Partial Post",
};

// If i want to create a type where all properties are required:
type RequiredPost = Required<PartialPost>;
const post3: RequiredPost = {
  id: 2,
  title: "Required Post",
  body: "This post has all properties required.",
}

// If i want to create a type where all properties are readonly:
type ReadonlyPost = Readonly<Post>;
const post4: ReadonlyPost = {
  id: 3,
  title: "Readonly Post",
  body: "This post has all properties readonly.",
}
// post4.title = "New Title"; // Error: Cannot assign to 'title' because it is a read-only property.

// If i want to create a type by picking some properties from Post:
type PostTitleAndBody = Pick<Post, "title" | "body">;
const post5: PostTitleAndBody = {
  title: "Picked Post",
  body: "This post has only title and body.",
}

// If i want to create a type by omitting some properties from Post:
type PostWithoutBody = Omit<Post, "body">;
const post6: PostWithoutBody = {
  id: 4,
  title: "Omitted Post",
};  

const updatePost = (post: Post, propertyToUpdated: PartialPost): Post => {
  return {...post, ...propertyToUpdated};
}
console.log(post1);
console.log(updatePost(post1, {id: 45}));


// Exclude or Extract
type Grade = "A" | "B" | "C" | "D" | "E" | "F";
type PassingGrade = Exclude<Grade, "D" | "E" | "F">;
type FailingGrade = Extract<Grade, "D" | "E" | "F">;


// NonNullable
type MaybeString = string | null | undefined;
type DefinitelyString = NonNullable<MaybeString>;
// OR
type DefinitelyString2 = Extract<MaybeString, string>;


// Return type
const createUser = (name: string, age: number) => {
  return { name, age, active: true };
}
type UserT = ReturnType<typeof createUser>


// Parameters type
type CreateUserParams = Parameters<typeof createUser>;
const newUser: CreateUserParams = ["Alice", 30];
console.log(createUser(...newUser));



// Promise:
type Robot = {
  id: number;
  name: string;
}
async function fetchData<T>(url: string): Promise<T[]> {
  const res =  await fetch(url);
  const data = (await res.json()) as T[]; // so it will pass only those that have for example if and name as in Robot type
  return data;
}
const robotsData: Robot[] = await fetchData<Robot>(
  "https://jsonplaceholder.typicode.com/users"
);
console.log(robotsData);


// lower the object to the type - like if i want only id and name from the json im fetching
const robotNamesOnly: Robot[] = robotsData.map((item: Robot) => {
  return { name: item.name };
});
console.log(robotNamesOnly);

// ZOD library for validation - https://zod.dev/
