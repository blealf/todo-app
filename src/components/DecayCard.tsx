import styled from 'styled-components'
import ProgressBar from './ProgressBar'

const DecayCardWrapper = styled.div`
  border-radius: 12px;
  box-shadow: 5px 10px 57px 0px rgba(196,192,192,0.75);
  -webkit-box-shadow: 5px 10px 57px 0px rgba(196,192,192,0.75);
  -moz-box-shadow: 5px 10px 57px 0px rgba(196,192,192,0.75);
  padding: 10px;
  max-width: 49%;
  margin: 0 1% auto 1%;
  display: flex;
  flex-direction: column;
`;

const CircularTimer = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 2px solid ${props => props.color || 'lightblue'};
  padding: 2px;
  color: teal;
`;

const GroupTitle = styled.p`
  font-size: 0.7rem;
  text-transform: uppercase;
  color: lightslategray;
`;

const DecayTitle = styled.p`
  font-size: 0.9rem;
  text-transform: uppercase;
  color: gray;
  font-weight: bold;
`;

const DueDate = styled.div`
  padding: 8px 10px;
  border-radius: 15px 30px;
  color: lightblue;
  background: ${props => props.color || 'blue'};
  margin-right: auto;
  font-size: 0.7rem;
`;

type DecayCardProps = {
    group: string
    title: string
    color: string
    backgroundColor: string
    dueDate: string
}

const DecayCard = (props: DecayCardProps) => {
    return (
        <DecayCardWrapper>
            <CircularTimer color={props.color}>
                <ProgressBar value={30} color={props.color} />
            </CircularTimer>
            <GroupTitle>{props.group || 'General'}</GroupTitle>
            <DecayTitle>{props.title || "Amanda at Ruth's"}</DecayTitle>
            <DueDate color={props.color}>{props.dueDate || ''}</DueDate>
        </DecayCardWrapper>
    )
}

export default DecayCard