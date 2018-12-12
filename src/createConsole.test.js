import React from 'react'
import {mount, shallow, configure} from 'enzyme'
import CreateConsole from './createConsole'
import Adapter from 'enzyme-adapter-react-16';
import Dialog from '@material-ui/core/Dialog';

configure({ adapter: new Adapter() });

test('AppManager renders', () => {
 const tester= shallow(<CreateConsole/>);

 expect(tester.find(Dialog))

})