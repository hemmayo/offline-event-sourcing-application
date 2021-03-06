import React from 'react';
import styled from 'styled-components';
import { useTodoStateContext } from '../hooks/use-todo-state-context';
import { DebugView } from './debug-view';
import { TodoInput } from './todo-input';
import { Todos } from './todos';

export function App() {
  return (
    <useTodoStateContext.Provider>
      <Wrapper>
        <ContentWrapper>
          <AppHeader>My Todo App</AppHeader>
          <TodoInput/>
          <Todos/>
        </ContentWrapper>
        <DebugWrapper>
          <DebugView/>
        </DebugWrapper>
      </Wrapper>
    </useTodoStateContext.Provider>
  );
}

const AppHeader = styled.h1`
`;

const Wrapper = styled.div`
    overflow: hidden;
    display: flex;
    height: 100vh;
`;

const ContentWrapper = styled.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ecf3f1;
    padding: 1rem;
    flex: 1 1 0;
`;

const DebugWrapper = styled.div`
    overflow: auto;
    padding: 1rem;
    height: 100%;
    flex: 0 0 400px;
    border-left: 1px solid rgba(0, 0, 0, .1);
`;
