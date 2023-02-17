import {useState} from "react";
import styled from 'styled-components'
import dayjs from 'dayjs'
import Timeline from './Timeline'

const CalenderWrapper = styled.div`
  padding: 10px;
  min-width: 300px;
  background: #fff;
  border-radius: 10px;
`

const Days = styled.button<{active: boolean}>`
  width: 60px;
  height: 60px;
  padding: 0 10px 0 10px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  margin-right: 15px;
  background: ${props => props.active ? '#2F67DC' : '#F0F0F3'};
  color: ${props => props.active ? '#fff' : '#000'};
  &:hover {
    background: #2F67DC;
    color: #fff;
    opacity: 0.8;
  }
  h3, p {
    margin: 6px 2px 6px 2px;
    text-align: center;
  }
  p {
    opacity: 0.7;
    font-size: 12px;
  }
`;

const DaysWrapper = styled.div`
  overflow-x: scroll;
  max-width: 300px;
`;

const DaysRail = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

type CalenderProps = {
    active: boolean
}

const Calendar = ({ active }: CalenderProps ) => {
    const [days, setDay] = useState([...Array(31).keys()].map(val => val - 1))
    const currentDate = dayjs()
    return (
        <CalenderWrapper>
            <DaysWrapper>
                <DaysRail>
                    {days.map(d => {
                        return (
                            <Days key={d} active={d === 0}>
                                <h3>{currentDate.add(d, 'day').format('D')}</h3>
                                <p>{currentDate.add(d, 'day').format('ddd')}</p>
                            </Days>
                        )
                    })}
                </DaysRail>
            </DaysWrapper>
            <div>
                <Timeline></Timeline>
            </div>
        </CalenderWrapper>
    )
}

export default Calendar