import Star, { StarType } from './star';

export interface FiveStarScoreType extends Omit<StarType, 'id'|'fillPercent'> {
  quantity: number;
  score: number;
}


const FiveStarScore: React.FC<FiveStarScoreType> = ({quantity, score, ...props}) => {
  let starList = [];
    
    for (let i=1; i <= quantity; i++){
        if ( i <= Math.floor(score)){
            
        starList.push(<Star id={`${Math.random()+i}`} key={Math.random()+i} fillPercent='100%' {...props} />)

        } else if ( i >= Math.floor(score) && i-score <= 0.5 && i-score< 1){
            console.log('i - score = ', i-score )

            starList.push(<Star id={`${Math.random()+i}`} key={Math.random()+i} fillPercent='50%' {...props} />)

        } else{
            
            starList.push(<Star id={`${Math.random()+i}`} key={Math.random()+i} fillPercent='0%' {...props} />)
        }
    }


  return (
    <>
      {starList}
    </>
  )
}

export default FiveStarScore
