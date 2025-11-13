export default function TextRing({ items, fontSize, SIZE, activeValue, scale }) {
  const cx = SIZE / 2;
  const cy = SIZE / 2;

//   if (!items.length) {
//     console.warn("TextRing: items is empty");
//     return null;
//   }
    const itemCount = Math.max(items.length, 1);

    const maxRadius = SIZE * 0.45; // 360
    const radius = Math.min(maxRadius, itemCount * scale);
    
    const dashRadius = radius - fontSize * 1.8;
    const circumference = 2 * Math.PI * dashRadius;
    const stepDeg = 360 / itemCount;
    const dash = circumference / itemCount / 1.5;




//   const stepDeg = 360 / 60;

  const activeIndex = items.findIndex((item) => item.value === activeValue);
  const rotation = activeIndex >= 0 ? activeIndex * stepDeg : 0;

//   const dash = circumference / 60 / 1.5;

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      width={SIZE}
      height={SIZE}
      // style={{ border: "1px solid red" }} 
    >

      {/* helper circle so you can see where the ring should be */}
      <circle
        className="ring-dash"
        cx={cx}
        cy={cy}
        r={dashRadius}
        fill="none"
        strokeDasharray={`${dash} ${dash}`}
        strokeWidth={fontSize * 0.6}
      />
      <g className="ring-track" transform={`rotate(${-rotation} ${cx} ${cy})`}>
        {items.map((item, i) => {

            const isActive = item.value === activeValue;

            const activeFontSize = fontSize * 1.5; // tweak factor as you like

            const angle = i * stepDeg;
            const rad = (angle * Math.PI) / 180;

            const x = cx + radius * Math.cos(rad);
            const y = cy + radius * Math.sin(rad);

            return (
            <text
                key={i}
                x={x}
                y={y}
                fontWeight={isActive ? 700 : 400}
                fontSize={isActive ? activeFontSize : fontSize}
                textAnchor="middle"
                alignmentBaseline="middle"
                transform={`rotate(${angle} ${x} ${y})`}
                fill={isActive ? 'white' : 'grey'}
            >
                {item.label && item.label}
            </text>
            );
        })}
      </g>
    </svg>
  );
}
