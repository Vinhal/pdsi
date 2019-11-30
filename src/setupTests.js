import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import localStorage from 'unit-test/mock/local-storage'

configure({ adapter: new Adapter() });

global.localStorage = localStorage()
