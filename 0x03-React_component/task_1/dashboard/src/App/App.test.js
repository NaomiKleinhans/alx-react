import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
	it('calls logOut and shows alert when Control and h keys are pressed', () => {
		const logOutMock = jest.fn();
		const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

		const wrapper = shallow(<App logOut={logOutMock} />);

		// Simulate keydown event for Control + h
		const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
		document.dispatchEvent(event);

		// Verify that logOut and alert are called
		expect(logOutMock).toHaveBeenCalled();
		expect(alertMock).toHaveBeenCalledWith('Logging you out');

		// Cleanup mock
		alertMock.mockRestore();
	});
});
