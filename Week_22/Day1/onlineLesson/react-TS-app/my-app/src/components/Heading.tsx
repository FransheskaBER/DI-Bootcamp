import { type ReactElement } from "react";

type HeadingProps = {
    title: string;
    subtitle: string;
}

const Heading = ({title, subtitle}: HeadingProps): ReactElement => {
    return (
        <>
        <h1>My title: {title}</h1>
        <h3>{subtitle}</h3>
        </>
    )
}

export default Heading;