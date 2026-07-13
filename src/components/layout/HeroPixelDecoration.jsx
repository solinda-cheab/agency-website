export default function HeroPixelDecoration() {
  return (
    <div className="pixel-pattern">
      <svg height="100%" preserveAspectRatio="none" viewBox="0 0 1000 400" width="100%" xmlns="http://www.w3.org/2000/svg">
        {/* Left Side Pixels */}
        <g fill="#0052cc">
          <rect height="20" width="20" x="0" y="350" />
          <rect height="20" width="20" x="20" y="370" />
          <rect height="20" width="20" x="40" y="340" />
          <rect height="20" width="20" x="60" y="360" />
          <rect height="20" width="20" x="100" y="320" />
          <rect height="20" width="20" x="120" y="330" />
          <rect height="20" width="20" x="140" y="310" />
          <rect height="20" width="20" x="160" y="300" />
          <rect height="20" width="20" x="180" y="290" />
          <rect height="20" width="20" x="200" y="285" />
          <rect height="20" width="40" x="220" y="280" />
          <rect height="20" width="40" x="260" y="275" />
          <rect height="20" width="60" x="300" y="280" />
          <rect fill="#ff7e1a" height="10" width="10" x="195" y="270" />
          <rect height="20" opacity="0.8" width="400" x="0" y="380" />
        </g>
        {/* Right Side Pixels */}
        <g fill="#0052cc">
          <rect height="20" width="20" x="960" y="150" />
          <rect height="10" width="10" x="940" y="160" />
          <rect height="20" width="20" x="900" y="250" />
          <rect height="20" width="20" x="880" y="240" />
          <rect height="20" width="20" x="860" y="260" />
          <rect height="20" width="20" x="840" y="280" />
          <rect height="20" width="20" x="820" y="300" />
          <rect height="20" width="40" x="800" y="320" />
          <rect height="20" width="40" x="780" y="330" />
          <rect height="10" width="40" x="740" y="310" />
          <rect fill="#ff7e1a" height="10" width="10" x="745" y="290" />
          <rect fill="#ff7e1a" height="10" width="10" x="968" y="310" />
          <rect height="50" opacity="0.9" width="300" x="700" y="350" />
          <rect height="20" opacity="0.7" width="250" x="750" y="330" />
          <rect height="20" opacity="0.5" width="200" x="800" y="310" />
        </g>
      </svg>
    </div>
  );
}
