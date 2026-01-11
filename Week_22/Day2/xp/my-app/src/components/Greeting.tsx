interface Props {
    name: string;
    messageCount: number;
}

export default function Greeting({ name, messageCount }: Props) {
    return (
        <div>
            <h2>{name}</h2>
            <h2>Count: {messageCount}</h2>
        </div>
    );
}