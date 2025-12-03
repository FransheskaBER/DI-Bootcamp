export default function UpdateProgress({ progress, handleProgress }) {
    return <label>Progress: <input value={progress} onChange={handleProgress} type="number" min={0} max={100}/></label>;
}