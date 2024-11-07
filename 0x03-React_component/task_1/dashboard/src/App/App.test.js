import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
	it('calls logOut and shows alert when Control and h keys are pressed', () => {
		const logOutMock = jest.fn();
		const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

		// Shallow render the component with a mock logOut function
		const wrapper = shallow(<App logOut={logOutMock} />);

		// Create and dispatch the keydown event
		const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
		document.dispatchEvent(event);

		// Verify that logOut and alert were called as expected
		expect(logOutMock).toHaveBeenCalled();
		expect(alertMock).toHaveBeenCalledWith('Logging you out');

		// Cleanup alert mock
		alertMock.mockRestore();
	});
});
