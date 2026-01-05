import { type ReactElement } from "react";

// ReactNode can represent any valid React child, including strings, numbers, elements,
// fragments, portals, boolean values, null, or undefined.


// ReactElement specifically represents a React element created using JSX or React.createElement.
// Plainly in other words, ReactElement is a more specific type than ReactNode like
// for example a div, span, or custom component. 

type SectionProps = {
    children: ReactElement;
}

const Section = ({children}: SectionProps): ReactElement => {
    return (
        <>
        <h2>Children: ....{children}</h2>
        </>
    );
}

export default Section;