import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorBoundary.jsx";

function CrashContent(){
    throw new Error("CRASHED!");
}

export default function Modal({ onClose }){
    return (
        <div className="bodyBackground">
            <div className="modalBox">
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <CrashContent />
                </ErrorBoundary>
                <button onClick={onClose}>Close Error Modal</button>
            </div>
        </div>
    );
}