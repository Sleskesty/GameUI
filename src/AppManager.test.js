import React from 'react'
import {mount, shallow, configure} from 'enzyme'
import AppManager from './AppManager'
import Adapter from 'enzyme-adapter-react-16';
import TextField from '@material-ui/core/TextField';

configure({ adapter: new Adapter() });

test('AppManager renders', () => {
 const tester= shallow(<AppManager/>);

 expect(tester.find(TextField))

})