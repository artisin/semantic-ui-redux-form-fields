import React from 'react';
import PropTypes from 'prop-types';
import {
  Checkbox as FormCheckbox,
  Dropdown as FormDropdown,
  Form,
  Input as FormInput,
  Radio as FormRadio,
  TextArea as FormTextArea,
} from 'semantic-ui-react';
import {
  compose,
  pure,
  setDisplayName,
  withProps,
} from 'recompose';


/**
 * Common/default PropTypes
 */
const defaultPropTypes = {
  className: PropTypes.string,
  currentValue: PropTypes.any,
  custom: PropTypes.object,
  fieldClass: PropTypes.string,
  input: PropTypes.object.isRequired,
  inputLabel: PropTypes.string,
  label: PropTypes.string,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
  }),
  required: PropTypes.bool,
  topLabel: PropTypes.string,
};



/**
 * Common Form field styles
 * @type {Object}
 */
const formFieldStyles = {
  paddingBottom: '0.75em',
  paddingLeft: '0',
  position: 'relative',
};



/**
 * Merge helper
 * @param  {obj} args -> (target, source, source?)
 * @return {obj}
 */
const merge = (...args) => Object.assign({}, ...args);



/**
 * Applys *Custom event functions to compoent
 *   - The syntax is [event]Custom
 * @param  {obj} custom -> custom props passed in
 * @param  {obj} input  -> redux form input
 */
const applyCustomFuncs = (custom, input) => {
  ['onBlur', 'onChange', 'onDragStart', 'onDrop', 'onFocus'].forEach((val) => {
    val += 'Custom';
    if (typeof custom[val] === 'function') {
      const func = custom[val];
      custom[val.replace('Custom', '')] = (...args) => func(input, ...args);
      delete custom[val];
    }
  });
  return custom;
};


/**
 * Message Error
 * @param  {bln} options.touched
 * @param  {str} options.error   -> error message
 */
const ErrorMsg = ({touched, error}) =>
  touched && error ? <span className='Semantic-redux-form-error' style={{
    color: '#9F3A38',
    position: 'absolute',
    bottom: '-1em',
    left: '0.05em',
  }}>{error}</span> : null;


/**
 * Form.Field props wrapper
 * @param  {obj} props
 */
const formFieldProps = (props) => {
  const {
    className,
    error,
    fieldClass,
    required,
    touched,
  } = props;
  return {
    error: touched && error ? true : false,
    className: `${fieldClass || ''} ${className || ''} Semantic-redux-form-field`,
    required: required,
    style: formFieldStyles,
  };
};


/**
 * Field Enhance HOC so that any "field" can be created using the set presentational logic
 * @param  {elm} ComposedComponent -> react element component
 * @return {elm}                   -> fieldEnhance(ComposedComponent)
 */
export const fieldEnhance = (ComposedComponent) => {
  const EnhancedComponent = (props) => {
    const {
      className,
      fieldClass,
      inputLabel: label,
      meta: { touched, error },
      required,
      topLabel,
      ...rest,
    } = props;
    return (
      <Form.Field {...formFieldProps({className, fieldClass, error, required, touched})}>
        <label>{topLabel ? topLabel : null}</label>
        <ComposedComponent {...rest} />
        <ErrorMsg touched={touched} error={error} />
      </Form.Field>
    );
  };
  EnhancedComponent.propTypes = defaultPropTypes;
  const displayName = ComposedComponent.displayName || ComposedComponent.name || 'Component';
  EnhancedComponent.displayName = `fieldEnhance(${displayName}`;
  return EnhancedComponent;
};


/**
 * Input Field
 *   -> https://react.semantic-ui.com/elements/input
 */
const InputPure = (props) => {
  const {
    currentValue,
    input,
    ...rest,
  } = props;
  // default options + apply custom funcs -> {action}Custom
  const custom = merge({
    value: currentValue,
  }, applyCustomFuncs(rest, input));
  return <FormInput {...input} {...custom}/>;
};
InputPure.propTypes = defaultPropTypes;
export const Input = compose(
  setDisplayName('Input'),
  withProps({
    fieldClass: 'Input',
  }),
  fieldEnhance,
  pure,
)(InputPure);


/**
 * Text Area
 *   -> https://react.semantic-ui.com/addons/text-area
 */
const TextAreaPure = (props) => {
  const {
    currentValue,
    input,
    ...rest,
  } = props;
  // default options + apply custom funcs -> {action}Custom
  const custom = merge({
    autoHeight: true,
    value: currentValue,
  }, applyCustomFuncs(rest, input));
  return <FormTextArea {...input} {...custom}/>;
};
TextAreaPure.propTypes = defaultPropTypes;
export const TextArea = compose(
  setDisplayName('TextArea'),
  withProps({
    fieldClass: 'TextArea',
  }),
  fieldEnhance,
  pure,
)(TextAreaPure);



/**
 * Select Dropdown
 *   -> https://react.semantic-ui.com/modules/dropdown
 */
const DropdownPure = (props) => {
  const {
    currentValue,
    input,
    ...rest,
  } = props;
  // default options + apply custom funcs -> {action}Custom
  const custom = merge({
    fluid: true,
    multiple: false,
    onChange: (event, data) => input.onChange(data.value),
    search: true,
    selection: true,
    value: currentValue,
  }, applyCustomFuncs(rest, input));
  return <FormDropdown {...input} {...custom}/>;
};
DropdownPure.propTypes = merge(defaultPropTypes, {options: PropTypes.array.isRequired});
export const Dropdown = compose(
  setDisplayName('Dropdown'),
  withProps({
    fieldClass: 'Dropdown',
  }),
  fieldEnhance,
  pure,
)(DropdownPure);



/**
 * Checkbox
 *   -> https://react.semantic-ui.com/modules/checkbox
 */
const CheckBoxPure = (props) => {
  const {
    currentValue,
    input,
    ...rest,
  } = props;
  // default options + apply custom funcs -> {action}Custom
  const custom = merge({
    checked: currentValue,
    onChange: (event, data) => input.onChange(data.checked),
  }, applyCustomFuncs(rest, input));
  //remove value key that redux-form attaches
  delete input.value;
  return <FormCheckbox {...input} {...custom}/>;
};
CheckBoxPure.propTypes = defaultPropTypes;
export const Checkbox = compose(
  setDisplayName('CheckBox'),
  withProps({
    fieldClass: 'CheckBox',
  }),
  fieldEnhance,
  pure,
)(CheckBoxPure);



/**
 * Radio Toggle
 *   -> https://react.semantic-ui.com/addons/radio
 */
const RadioPure = (props) => {
  const {
    currentValue,
    input,
    ...rest,
  } = props;
  // default options + apply custom funcs -> {action}Custom
  const custom = merge({
    checked: currentValue,
    onChange: (event, data) => input.onChange(data.checked),
  }, applyCustomFuncs(rest, input));
  //remove value key that redux-form attaches
  delete input.value;
  return <FormRadio {...input} {...custom}/>;
};
RadioPure.propTypes = defaultPropTypes;
export const Radio = compose(
  setDisplayName('Radio'),
  withProps({
    fieldClass: 'Radio',
  }),
  fieldEnhance,
  pure,
)(RadioPure);

