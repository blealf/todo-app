import { useState, useEffect } from 'react'
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
  position: absolute;

  &::before {
    content: '';
    position: absolute;
    height: 7px;
    width: 7px;
    border-radius: 50%;
    background: #3165D5;
    top: -2px;
    left: -1px;
    tranform: translate(50%)
  }
`;

const Timeline = () => {
    const time = [...Array(24).keys()]
    const [currentTime, setCurrentTime] = useState(dayjs())

    const AmOrPm = (value: number) => {
        return value < 12
            ? value + ' am'
            : value === 12
                ? value + ` noon`
                : (value - 12) + ' pm'
    }

    useEffect(() => {
        document.getElementById('currentPoint')?.scrollIntoView()
        setInterval(() => {
            setCurrentTime(dayjs())
        }, 10000)
    })

    return (
        <TimelineWrapper>
            {time.map(t => {
                return (
                    <Timeslot key={t}>
                        <TimeNumber>{AmOrPm(t)}</TimeNumber>
                        <div id="timeContainer" style={{width: '80%', position: 'relative'}}>
                            <Divider></Divider>
                            { currentTime.format('H') === t.toString() ?
                                <CurrentTime id="currentPoint" style={{
                                    top: Math.floor(Number(currentTime.format('m'))/60 * 50) + 'px'
                                }}></CurrentTime> : ''
                            }
                        </div>
                    </Timeslot>
                )
            })}
        </TimelineWrapper>
    )
}

export default Timeline