import {useState} from 'React';

const MilesAhead = () => {

const [steps, setSteps] = useState(0);


const increment = () => { 
    setSteps(prev => prev + 1);

return(
    <>
    <p>Today you've taken {steps} steps!</p>
)
}