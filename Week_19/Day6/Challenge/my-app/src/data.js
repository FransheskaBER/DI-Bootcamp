import { v4 as uuidv4 } from "uuid";

export const DEFAULT_CAT_ID = "DEFAULT_CATEGORY_ID";

export const categories = [
    { id: DEFAULT_CAT_ID, name: "No Category", color: "#9CA3AF" },
    { id: uuidv4(), name: "Work", color: "#4F46E5" },
    { id: uuidv4(), name: "Personal", color: "#059669" },
    { id: uuidv4(), name: "Health",  color: "#DC2626" },
    { id: uuidv4(), name: "Study",   color: "#7C3AED" },
    { id: uuidv4(), name: "Errands", color: "#D97706" },
];

// Quick helper to grab category IDs by name
const getId = (categoryName) => {
    return categories.find(c => c.name === categoryName).id;
};

// --- Tasks ---
export const tasks = [
    { id: uuidv4(), title: "Prepare weekly report", completed: false, categoryId: getId("Work"),     date: "2025-12-03", progress: 0 },
    { id: uuidv4(), title: "Team meeting with UX",  completed: false,  categoryId: getId("Work"),     date: "2025-12-02", progress: 50 },
    { id: uuidv4(), title: "Gym session – legs",    completed: false, categoryId: getId("Health"),   date: "2025-12-03", progress: 20 },
    { id: uuidv4(), title: "Study Redux selectors", completed: false, categoryId: getId("Study"),    date: "2025-12-04", progress: 10 },
    { id: uuidv4(), title: "Buy groceries",         completed: false,  categoryId: getId("Errands"),  date: "2025-12-01", progress: 30 },
    { id: uuidv4(), title: "Call mum",              completed: false, categoryId: getId("Personal"), date: "2025-12-03", progress: 0 },
    { id: uuidv4(), title: "Finish calendar UI",    completed: false, categoryId: getId("Study"),    date: "2025-12-05", progress: 0 },
    { id: uuidv4(), title: "Evening walk with Pepper", completed: false, categoryId: getId("Personal"), date: "2025-12-02", progress: 0 },
    { id: uuidv4(), title: "Meditation – 10 minutes", completed: false, categoryId: getId("Health"),  date: "2025-12-04", progress: 0 },
    { id: uuidv4(), title: "Send invoices",         completed: false, categoryId: getId("Work"),     date: "2025-12-06", progress: 0 },
];
