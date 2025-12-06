type LayoutProps = {
    title: string;
    children: React.ReactNode;
};

function Layuot({ title, children}: LayoutProps) {
    return (
        <div>
            <h1>{title}</h1>
            {children}
        </div>
    );
}

export default Layuot;