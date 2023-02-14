import { useState } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

const TimelineWrapper = styled.div`
  max-height: 400px;
  overflow: scroll;
  margin-top: 10px;
  position: relative;
`;

const Timeslot = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimeNumber = styled.p`
  margin-right: auto;
`;

const Divider = styled.div`
    height: 2px;
    width: 100%;
    background: lightgray;
`;

const CurrentTime = styled.div`
  height: 2px;
  width: 100%;
  background: lightblue;
  display: block;
`;

const Timeline = () => {
    const [time, setTime] = useState([...Array(24).keys()])
    const currentTime = dayjs().format()
    console.log(currentTime)

    const AmOrPm = (value: number) => {
        return value < 12 ? 'am' : value === 12 ? `noon` : 'pm'
    }

    const activeTime = () => {
        return
    }

    return (
        <TimelineWrapper>
            {time.map(t => {
                return (
                    <Timeslot key={t}>
                        <TimeNumber>{t + ' ' + AmOrPm(t)}</TimeNumber>
                        <div style={{width: '80%'}}>
                            <Divider></Divider>
                            <CurrentTime></CurrentTime>
                        </div>
                    </Timeslot>
                )
            })}
        </TimelineWrapper>
    )
}

export default Timeline