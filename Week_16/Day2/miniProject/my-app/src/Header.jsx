import './Header.css';

export default function Header(){
    return (
        <header className="fixed-top header-bar">
            <div className="text-center">
                <h1 className='display-4 mb-2'>Company</h1>
                <h3 className="lead mb-0">We specialize in something...</h3>
            </div>
        </header>
    );
}