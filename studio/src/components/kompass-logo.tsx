type LogoProps = {
  width?: number;
  height?: number;
};

export const KompassLogo = ({ width = 24, height = 24 }: LogoProps) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="33 33 100 100"
           width={width}
           height={height}
           fill="#FF5400">
        <g>
          <path className="st0" d="M115.1,79.9l14.9,3.1c0-25.9-21-47-47-47L86,50.9C89.2,65.5,100.6,76.9,115.1,79.9z"/>
          <path className="st0" d="M80,50.9L83.1,36c-25.9,0-47,21-47,47L51,79.9C65.6,76.9,76.9,65.5,80,50.9z"/>
          <path className="st0" d="M115.1,86.1c-14.6,3-25.9,14.4-29,29L82.9,130c25.9,0,47-21,47-47L115.1,86.1z"/>
          <path className="st0" d="M51,86.1L36.1,83c0,25.9,21,47,47,47L80,115.1C76.9,100.5,65.6,89.2,51,86.1z"/>
        </g>
      </svg>
  );
};
