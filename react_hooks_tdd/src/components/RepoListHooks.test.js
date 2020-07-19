import React from 'react';
// fireevent: dispara eventos dentro da DOM
import { render, fireEvent, cleanup } from '@testing-library/react';

import RepoListHooks from './RepoListHooks';

// test('Deve ser possível adicionar novos repositórios', () => {
//     const { container, getByTestId } = render(
//         <RepoListHooks/>
//     );

//     const input = getByTestId('new-repo-input');
//     const form = getByTestId('new-repo-form');

//     fireEvent.change(input, { target: { valeu: 'ReactJS' }});
//     fireEvent.submit(form);

//     fireEvent.change(input, { target: { valeu: 'Node' }});
//     fireEvent.submit(form);

//     console.log("ffffff" + getByTestId('ReactJS'));
//     expect(input.value).toBe('ReactJS')
//     // expect(!!getByTestId('ReactJS')).toBe(true);

//     console.log(container.innerHTML);

//     afterEach(cleanup);

// });

// test('Deve remover o item quando clicar em remover', () => {
//     const { getByTestId } = render(
//         <RepoListHooks/>
//     );

//     const input = getByTestId('new-repo-input');
//     const form = getByTestId('new-repo-form');

//     fireEvent.change(input, { target: { valeu: 'ReactJS'}});
//     fireEvent.submit(form);

//     const { button } = getByTestId('remove-button');
//     fireEvent.click(button);

//     // expect(!!getByTestId('ReactJS')).toBe(false);

//     expect(input.value).not.toBe('ReactJS')

//     afterEach(cleanup);

// });


test('meu teste', () => {

    const container = document.body
    const input = getByTestId(container, 'new-repo-input')
    const input = getByTestId(container, 'new-repo-form')

    fireEvent.change(input, { target: { valeu: 'ReactJS'}});
    fireEvent.submit(form);

    expect(input.value).not.toBe('ReactJS');

    afterEach(cleanup);

});

