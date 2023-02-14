import styled from 'styled-components'
import Timeline from './Timeline'
import {useState} from "react";

const CalenderWrapper = styled.div`
  padding: 10px;
  min-width: 300px;
  background: #fff;
  border-radius: 10px;
`

const Days = styled.button`
  padding: 3px 15px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  background: #F0F1F4;
  margin-right: 15px;
  &:hover {
    background: #2F67DC;
    opacity: 0.8;
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
    const [days, setDay] = useState([...Array(31).keys()].map(val => val + 1))

    return (
        <CalenderWrapper>
            <DaysWrapper>
                <DaysRail>
                    {days.map(d => {
                        return (
                            <Days>
                                <h3>{d}</h3>
                                <p>Wed</p>
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