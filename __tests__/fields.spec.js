/**
 * React/Redux Mock Setup
 */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);
const store = mockStore({});

/**
 * Component assets
 */
import { compose } from 'recompose';
import {
  Checkbox,
  Dropdown,
  Input,
  Radio,
  TextArea,
} from 'dist/semantic-ui-redux-form-fields.js';


/**
 * Simple Form HOC
 */
const formEnhance = ComposedComponent => (props) => {
  return (
    <form>
      <ComposedComponent {...props} />
    </form>
  );
};



/**
 * Checkbox test
 */
const CheckboxPure = (props) => <Field
  component={Checkbox}
  currentValue={props.currentValue}
  name='my-Checkbox'
  placeholder='My Checkbox'
  required={props.required}
  toggle={props.toggle}
  topLabel='My Checkbox'
/>;
const CheckboxTest = compose(
  reduxForm({
    form: 'CheckboxTest',
  }),
  formEnhance
)(CheckboxPure);
//Component Test 
describe('Component Test  -> <Checkbox />', () => {
  it('renders should equal snapshot -> currentValue={true}', () => {
    const wrapper = render(
      <Provider store={store}><CheckboxTest currentValue={true}/></Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders should equal snapshot -> currentValue={false}', () => {
    const wrapper = render(
      <Provider store={store}><CheckboxTest currentValue={false}/></Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders should equal snapshot -> required={true}', () => {
    const wrapper = render(
      <Provider store={store}><CheckboxTest required={true}/></Provider>
    );
    expect(wrapper.find('.required')).toHaveLength(1);
  });
  it('renders should equal snapshot -> toggle={true}', () => {
    const wrapper = render(
      <Provider store={store}><CheckboxTest toggle={true}/></Provider>
    );
    expect(wrapper.find('.toggle')).toHaveLength(1);
  });
});


/**
 * Dropdown test
 */
const DropdownPure = (props) => <Field
  className={props.className}
  component={Dropdown}
  currentValue={props.currentValue}
  name='my-Dropdown'
  options={[{key: 'test', text: 'test', value: 'test'}, {key: 'test2', text: 'test2', value: 'test2'}]}
  placeholder='My Checbox'
  required={props.required}
  topLabel='My Dropdown'
/>;
const DropdownTest = compose(
  reduxForm({
    form: 'DropdownTest',
  }),
  formEnhance
)(DropdownPure);
//Component Test 
describe('Component Test  -> <Dropdown />', () => {
  it('renders should equal snapshot', () => {
    const wrapper = render(
      <Provider store={store}><DropdownTest /></Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders should equal snapshot -> currentValue', () => {
    const wrapper = render(
      <Provider store={store}><DropdownTest currentValue={'test2'}/></Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('span')).toHaveLength(2);
  });
  it('renders should equal snapshot -> required={true}', () => {
    const wrapper = render(
      <Provider store={store}><DropdownTest required={true}/></Provider>
    );
    expect(wrapper.find('.required')).toHaveLength(1);
  });
});


/**
 * Input test
 */
const InputPure = (props) => <Field
  className={props.className}
  component={Input}
  currentValue={props.currentValue}
  name='my-input'
  placeholder='Company Name'
  required={props.required}
  topLabel='My Input'
/>;
const InputTest = compose(
  reduxForm({
    form: 'InputTest',
  }),
  formEnhance
)(InputPure);
//Component Test 
describe('Component Test  -> <Input />', () => {
  it('renders should equal snapshot', () => {
    const wrapper = render(
      <Provider store={store}><InputTest /></Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders should equal snapshot -> currentValue', () => {
    const wrapper = render(
      <Provider store={store}><InputTest currentValue={'Test'} /></Provider>
    );
    expect(wrapper.html()).toContain('value="Test"');
  });
  it('renders should equal snapshot -> className', () => {
    const wrapper = render(
      <Provider store={store}><InputTest className={'Test'} /></Provider>
    );
    expect(wrapper.find('.Test')).toHaveLength(1);
  });
  it('renders should equal snapshot -> required={true}', () => {
    const wrapper = render(
      <Provider store={store}><InputTest required={true}/></Provider>
    );
    expect(wrapper.find('.required')).toHaveLength(1);
  });
});


/**
 * Radio test
 */
const RadioPure = (props) => <Field
  component={Radio}
  currentValue={props.currentValue}
  name='my-Radio'
  placeholder='My Radio'
  required={props.required}
  toggle={props.toggle}
  topLabel='My Radio'
/>;
const RadioTest = compose(
  reduxForm({
    form: 'RadioTest',
  }),
  formEnhance
)(RadioPure);
//Component Test 
describe('Component Test  -> <Radio />', () => {
  it('renders should equal snapshot -> currentValue={true}', () => {
    const wrapper = render(
      <Provider store={store}><RadioTest currentValue={true}/></Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders should equal snapshot -> currentValue={false}', () => {
    const wrapper = render(
      <Provider store={store}><RadioTest currentValue={false}/></Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders should equal snapshot -> required={true}', () => {
    const wrapper = render(
      <Provider store={store}><RadioTest required={true}/></Provider>
    );
    expect(wrapper.find('.required')).toHaveLength(1);
  });
  it('renders should equal snapshot -> toggle={true}', () => {
    const wrapper = render(
      <Provider store={store}><RadioTest toggle={true}/></Provider>
    );
    expect(wrapper.find('.toggle')).toHaveLength(1);
  });
});


/**
 * TextArea test
 */
const TextAreaPure = (props) => <Field
  className={props.className}
  component={TextArea}
  currentValue={props.currentValue}
  name='my-TextArea'
  placeholder='Company Name'
  required={props.required}
  topLabel='My TextArea'
/>;
const TextAreaTest = compose(
  reduxForm({
    form: 'TextAreaTest',
  }),
  formEnhance
)(TextAreaPure);
//Component Test 
describe('Component Test  -> <TextArea />', () => {
  it('renders should equal snapshot', () => {
    const wrapper = render(
      <Provider store={store}><TextAreaTest /></Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders should equal snapshot -> currentValue', () => {
    const wrapper = render(
      <Provider store={store}><TextAreaTest currentValue={'Test content'} /></Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('textarea').text()).toEqual('Test content');
  });
  it('renders should equal snapshot -> className', () => {
    const wrapper = render(
      <Provider store={store}><TextAreaTest className={'Test'} /></Provider>
    );
    expect(wrapper.find('.Test')).toHaveLength(1);
  });
  it('renders should equal snapshot -> required={true}', () => {
    const wrapper = render(
      <Provider store={store}><TextAreaTest required={true}/></Provider>
    );
    expect(wrapper.find('.required')).toHaveLength(1);
  });
});

