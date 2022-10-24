export interface StarType {
    id: string;
    stroke?: string;
    fillPercent: string;
    fillColor?: string;
    emptyColor?: string;
  
  }
  
  const Star: React.FC<StarType> = ({id, stroke="yellow", fillPercent, fillColor="yellow", emptyColor="transparent"}) => {
    
    return (
      <>
        <svg height="100%" width="100%" viewBox="0 0 32 32">
      <defs>
        <linearGradient id={id}>
          <stop offset={fillPercent} stopColor={fillColor}/>
          <stop offset={fillPercent} stopColor={emptyColor}/>
        </linearGradient>
      </defs>
      <g>
      <path fill={`url(#${id})`} d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
    l11.547-1.2L16.026,0.6L20.388,10.918z" stroke={stroke}/>
      </g>
    </svg>
      </>
    )
  }
  
  export default Star
