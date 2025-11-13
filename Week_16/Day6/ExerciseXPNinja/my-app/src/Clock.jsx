export default function Clock({ year, monthNumber, week, day, hour, minute, second, month}){
    return (
        <div>
            <p>Year: {year}</p>
            <p>Month {monthNumber}</p>
            <p>Week {week}</p>
            <p>Day {day}</p>
            <p>{hour} hr</p>
            <p>{minute} min</p>
            <p>{second} sec</p>
            <p>{month}</p>
        </div>
    );
}