import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import './index.css';
import { CreateTodoButtom } from '../CreateTodoButtom';
import { DeleteButtoms } from '../deleteButtoms';
import React from 'react';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { Container } from '../Modal/Container';
import { Cross } from '../Modal/Cross'
import { Orden } from '../Modal/Orden';
import { SwitchMode } from '../Modal/switchMode';
import { SettingsButtom } from '../SettingsButtom';
import { Language } from '../Modal/Language';
import { SubmitButtom } from '../Modal/SubmitButtom';
 
function RenderUI() {
    const {openModal} = React.useContext(TodoContext);
    return(
        <>
            <TodoCounter/>
            <CreateTodoButtom/>
            <TodoSearch/>
            <DeleteButtoms/>
            <TodoList/>
            <SettingsButtom/>
            {openModal && (
                <Modal>
                    <Container>
                        <Cross/>
                        <Orden/>
                        <SwitchMode/>
                        <Language/>
                        <SubmitButtom/>
                    </Container>
                </Modal>
            )}
        </>
      );
}

export { RenderUI };