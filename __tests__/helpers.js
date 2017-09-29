import 'babel-polyfill';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, render, shallow, enzyme} from 'enzyme';
import expect from 'expect';
import enzymify from 'expect-enzyme';

configure({ adapter: new Adapter() });
expect.extend(enzymify());

global.expect = expect;
global.enzyme = enzyme;
global.mount = mount;
global.render = render;
global.shallow = shallow;
