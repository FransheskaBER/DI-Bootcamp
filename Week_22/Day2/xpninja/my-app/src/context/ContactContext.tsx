// lets create the context
import { createContext, useContext, useReducer, type ReactNode } from "react";

// types
export type Contact = {
    id: number;
    name: string;
    email: string;
};

export type ContactState = {
    contacts: Contact[];
};

export type ContactAction = 
    | { type: "addContact"; payload: Contact }
    | { type: "removeContact"; payload: { id: number } };

type ContactContextValue = {
    state: ContactState;
    dispatch: React.Dispatch<ContactAction>;
};

// create context (default undefined on purpose)
const ContactContext = createContext<ContactContextValue | undefined>(undefined);

// initial state
const initialState: ContactState = {
    contacts: [],
};

// reducer
function reducer(state: ContactState, action: ContactAction): ContactState {
    switch(action.type) {
        case "addContact": {
            return { contacts: [...state.contacts, action.payload] };
        }
        case "removeContact": {
            return { contacts: state.contacts.filter((c) => c.id !== action.payload.id ) };
        }
        default: {
            return state;
        }
    }
}

// Provider component
export function ContactProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ContactContext.Provider value={{ state, dispatch }}>
            {children}
        </ContactContext.Provider>
    );
}

// custom hook to consume context safely
export function useContacts() {
    const ctx = useContext(ContactContext);

    if (!ctx) {
        throw new Error("The hook with the conext 'useContacts' must be used inside <ContactProvider>")
    }

    return ctx;
}

