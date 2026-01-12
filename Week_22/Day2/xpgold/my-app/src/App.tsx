import './App.css';
import RegistrationForm from './components/RegistrationForm';
import { DataTable, type TableColumn} from './components/DataTable';
import { UserList } from './components/UserList';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}


const users: User[] = [
  { id: 1, firstName: "Ada", lastName: "Lovelace", email: "ada@code.com", age: 36 },
  { id: 2, firstName: "Alan", lastName: "Turing", email: "alan@code.com", age: 41 },
  { id: 3, firstName: "Grace", lastName: "Hopper", email: "grace@code.com", age: 85 },
];

const columns: TableColumn<User>[] = [
  { title: "First name", key: "firstName", sortable: true },
  { title: "Last name", key: "lastName", sortable: true },
  { title: "Email", key: "email" },
  { title: "Age", key: "age", sortable: true },
]

function App() {

  return (
    <>
    <h2>First Exercise - useForm custom hook</h2>
    <RegistrationForm />
    <hr />
    <DataTable data={users} columns={columns}
      onSelect={(selected) => {
        console.log("Selected users:", selected);
      }}
      onSort={(config) => {
        console.log("Sort changed:", config);
      }}
    />
    <hr />
    <UserList />
    </>
  )
}

export default App
