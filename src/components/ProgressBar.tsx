import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type ProgressBarProps = {
   value: number
    color: string
}
const ProgressBar  = ({ value = 30, color }: ProgressBarProps) => {
    return (
        <CircularProgressbar strokeWidth={50} styles={
            buildStyles(
                {
                    strokeLinecap: 'butt',
                    pathColor: color,
                    trailColor: "white",
                })}
                value={value}/>
    )
}

export default ProgressBar