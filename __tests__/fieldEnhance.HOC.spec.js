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
import TimePicker from 'rc-time-picker';
import moment from 'moment-timezone';
import {
  fieldEnhance,
} from 'dist/semantic-ui-redux-form-fields.js';


/**
 * fieldEnhance HOC -> TimeDropdown example
 *  -> https://github.com/react-component/time-picker
 *  - Two parts
 *    1. Build Time Dropdown compoent and apply fieldEnhance HOC
 *    2. Connect to redux-form + helper formEnhance
 */

/**
 * The TimeDropDown compoent
 */
const SelectTimeDropdownPure = (props) => {
  const {
    currentValue,
    input,
    ...rest
  } = props;
  const defaultProps = {
    format: 'h:mm a',
    onChange: (event, data) => input.onChange(data.value),
    showSecond: false,
    use12Hours: true,
    //IMPORTANT need to assign currentValue
    value: currentValue,
    ...rest,
  };
  return <TimePicker {...props} {...defaultProps} />;
};
const SelectTimeDropdown = compose(
  fieldEnhance
)(SelectTimeDropdownPure);

/**
 * Connects TimeDropDown compoent to redux-form
 */
const SelectTimeDropdownFieldPure = (props) =>
  <form>
    <Field
      className={props.className}
      currentValue={props.currentValue}
      component={SelectTimeDropdown}
      name='my-TimeDropdown'
      placeholder='Company Name'
      required={props.required}
      topLabel='My TimeDropdown'
    />
  </form>;
const TimeDropdown = compose(
  reduxForm({
    form: 'HOCTest_TimeDropdown',
  }),
)(SelectTimeDropdownFieldPure);
//-> fieldEnhance HOC
describe('fieldEnhance HOC -> <TimeDropdown />', () => {
  it('renders should equal snapshot', () => {
    const wrapper = render(
      <Provider store={store}><TimeDropdown /></Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders should equal snapshot -> currentValue', () => {
    const wrapper = render(
      <Provider store={store}>
        <TimeDropdown currentValue={moment('2017-09-25T10:30:00-04:00').tz('America/Toronto')} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.html()).toContain('value="10:30 am"');
  });
});
