import React from 'react'
import styled from 'styled-components'
import TodoGroupItem from "./TodoGroupItem"
import { AiOutlinePlus } from 'react-icons/ai'

const TodoGroupWrapper = styled.div`
  min-width: 300px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
`;
const CreateGroupButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 10px;
  border-radius: 12px;
  background: #3165D5;
  color: white;
  border: none;
  width: 100%;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    opacity: 0.8;
  }
`;
const TodoGroup = () => {
    return (
        <TodoGroupWrapper>
            <TodoGroupItem color={'blue'} title={'General'} tasks={1} />
            <TodoGroupItem color={'teal'} title={'Meetings'} tasks={10} />
            <TodoGroupItem color={'red'} title={'Trip'} tasks={12} />
            <ButtonWrapper>
                <CreateGroupButton>
                    <AiOutlinePlus style={{ marginRight: '5px'}} />
                    CREATE NEW GROUP
                </CreateGroupButton>
            </ButtonWrapper>
        </TodoGroupWrapper>

    )
}

export default TodoGroup