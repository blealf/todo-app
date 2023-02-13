import styled from 'styled-components'
import { BsPencil } from 'react-icons/bs'

const GroupItem = styled.div`
  display: flex;
  border-radius: 12px;
  height: 50px;
  box-shadow: 5px 10px 57px 0px rgba(196,192,192,0.75);
  -webkit-box-shadow: 5px 10px 57px 0px rgba(196,192,192,0.75);
  -moz-box-shadow: 5px 10px 57px 0px rgba(196,192,192,0.75);
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;
`

const LeftDivider = styled.div`
  height: 100%;
  width: 6px;
  background: ${props => props.color || 'grey'};
  border-radius: 3px;
  margin-right: 5px;
`
const GroupTitle = styled.p`
  font-size: 1.1rem;
  color: #41414D;
  font-weight: bold;
  margin: 5px;
`;
const GroupTasks = styled.p`
  font-size: 0.8rem;
  margin: 5px;
  color: lightslategray;
`;
const EditIcon = styled.div`
  color: lightslategray;
  margin: 5px 5px auto auto;
  font-size: 1.2rem;
  cursor: pointer;
`;

type TodoGroupProps = {
    color: string
    title: string
    tasks: number
}
const TodoGroupItem = (props: TodoGroupProps) => {
    return (
        <GroupItem className="todo-group">
            <LeftDivider color={props.color}></LeftDivider>
            <div>
                <GroupTitle>{props.title || ''}</GroupTitle>
                <GroupTasks>{props.tasks || 0} Tasks</GroupTasks>
            </div>
            { props.title === 'General' ? '' : (
                <EditIcon>
                    <BsPencil />
                </EditIcon>

            )
            }

        </GroupItem>
    )
}

export default TodoGroupItem