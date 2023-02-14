import './App.css';
import TodoGroup from './components/TodoGroup'
import styled from 'styled-components'
import DecayCard from './components/DecayCard'
import Calendar from "./components/Calendar";

const AppWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const DecaySection = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;
function App() {
  return (
    <div className="App">
        <AppWrapper>
            <TodoGroup />
            <DecaySection>
                <DecayCard dueDate={'TODAY'}></DecayCard>
                <DecayCard dueDate={'SAT'}></DecayCard>
            </DecaySection>
            <div>
                <Calendar />
            </div>
        </AppWrapper>
    </div>
  );
}

export default App;
