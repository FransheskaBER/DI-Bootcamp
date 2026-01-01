import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
    value: Date | null;
    onChange: (d: Date | null) => void;
};

export default function DatePickerComponent({ value, onChange }: Props ) {
    return (
        <DatePicker 
            selected={value}
            onChange={onChange}
        />
    );
}