type HasId = { id: number };
type HasEmail = { email: string };
type UserRecord = HasId & HasEmail;
const userObj: UserRecord = {
    id: 124,
    email: "email@example.com",
}


function safeGetLength(value: string | number | null) {
    if (value === null) return 0;
    if (typeof value === "string") return value.length;
    return value.toString().length;
}


class Admin {
    constructor(private superAdmin: boolean) {}
    isSuperAdmin(): boolean {
        return this.superAdmin;
    }
}
class Guest {
    constructor(private temporary: boolean) {}

    isTemporary(): boolean {
        return this.temporary;
    }
}
type User = Admin | Guest
function describeUser(user: User) {
    if (user instanceof Admin) { return user.isSuperAdmin() ? "Super Admin" : "Admin"; }
    if (user instanceof Guest) { return user.isTemporary() ? "Temporary Guest" : "Guest"; }
    return "Unknown user";
}


function isAdmin(u: User): u is Admin {
    return u instanceof Admin;
}
function labelUser(user: User) {
    if (isAdmin(user)) {
        return "Admin User"
    } else {
        return "Guest User"
    }
}



const el = document.querySelector("#score") as HTMLSpanElement;
if (el) {
    const text = el.innerText;
    console.log(text);
}



