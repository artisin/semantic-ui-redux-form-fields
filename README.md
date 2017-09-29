# Semantic UI React Redux Form Fields

[![npm](https://img.shields.io/npm/l/semantic-ui-redux-form-fields.svg)](https://github.com/artisin/semantic-ui-redux-form-fields/blob/master/LICENSE.txt)
[![npm](https://img.shields.io/npm/v/semantic-ui-redux-form-fields.svg)](https://www.npmjs.com/package/semantic-ui-redux-form-fields)
[![wercker status](https://app.wercker.com/status/a5cd2c460ebd46869b203308802dc50e/s/master "wercker status")](https://app.wercker.com/project/byKey/a5cd2c460ebd46869b203308802dc50e)
[![David](https://img.shields.io/david/artisin/semantic-ui-redux-form-fields.svg)](https://github.com/artisin/semantic-ui-redux-form-fields/blob/master/package.json)

This React component library is designed to help you easily integrate [Semantic UI React](https://react.semantic-ui.com/introduction) with [Redux Form](http://redux-form.com). The components come all pre-hooked-up so you don't have to worry about error reporting or the presentation logic since everything works right out of the box. Included is the big five form components `Checkbox` `Dropdown`, `Input`, `Radio`, and `TextArea` as well as `fieldEnhance` a higher order component that gives you the flexibility to extend and customize.

<p align="center">
  <img src="https://gifyu.com/images/semantic-ui-react-redux-fields.gif" width="450"/>
</p>


## Install

__Package Manager__

   ```bash
   # yarn
   yarn add semantic-ui-redux-form-fields
   # npm
   npm install semantic-ui-redux-form-fields
   ```

__Github__

In the `dist/` directory contains a pre-build Node, Browser, and Browser minified version. However, I strongly recommend you use `yarn` or `npm`.



## Prerequisites

1. [Install and Config Redux](http://redux.js.org/)
2. [Install and Config Redux Form](redux-form.com/7.0.4/docs/gettingstarted.md/)
3. [Install and Config React Semantic UI](https://react.semantic-ui.com/usage)
    + The assumption is you are using Semantic UI. And while you can "technically" use these components as standalones it would not make much sense. Furthermore, the Semantic UI css styles are not included in this package to allow for easier style customizations with Semantic themes and such.

## Props

+ All the default Semantic UI props for each component can be passed just like you would expect.
+ `currentValue` → Is the `value` for all components. It's critically important that you use `currentValue` and not `value` otherwise the component will not work.
+ `topLabel` → An <label>{topLabel ? topLabel : null}</label>
+ Events → In all likelihood you'll need to implement custom events, and while you can use a non-append prop like `onChange` you won't have access to the redux-form `input` methods. However, by using these `{*}Custom` appended props `input` is passed as the first argument.
    * `onBlurCustom(input, event, newValue, previousValue)`
    * `onChangeCustom(input, event, newValue, previousValue)`
    * `onDragStartCustom(input, event)`
    * `onDropCustom(input, event, newValue, previousValue)`
    * `onFocusCustom(input, event)`

## Imports

```js
import {
  Checkbox,
  Dropdown,
  fieldEnhance,
  Input,
  Radio,
  TextArea,
} from 'semantic-ui-redux-form-fields';
```

## Field HOC

All the fields are created through the `fieldEnhance` higher order component which mentioned above gives you the ability to extend and customize. t handles the `Form.Field` presentational logic which includes error reporting and a top `label`. For example, it allows you to easily hook-up and use [React TimePicker](http://react-component.github.io/time-picker/). Check out `__tests__/fieldEnhance.HOC.spec.js` for an example how to use `fieldEnhance` with [React TimePicker](http://react-component.github.io/time-picker/).


## Field Examples

Here's a few examples, and need be there's more examples in `__tests__`. Also check out the `__tests__/fieldEnhance.HOC.spec.js` 

### Checkbox

```js
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Checkbox } from 'semantic-ui-redux-form-fields';

const SemanticFormCheckbox = (props) => {
  const { currentValue, handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={Checkbox}
        currentValue={currentValue}
        name='my-Checkbox'
        placeholder='My Checkbox'
        required={true}
        topLabel='My Checkbox'
      />

      <div>
        <button type='submit' disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  // a unique identifier for this form
  form: 'Semantic_Checkbox_Form'
})(SemanticFormCheckbox);
```

### Input

```js
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from 'semantic-ui-redux-form-fields';


const SemanticFormInput = (props) => {
  const { currentValue, handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={Input}
        currentValue={currentValue}
        name='my-Input'
        placeholder='My Input'
        required={true}
        topLabel='My Input'
      />

      <div>
        <button type='submit' disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  // a unique identifier for this form
  form: 'Semantic_Input_Form'
})(SemanticFormInput);
```

### Dropdown

```js
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Dropdown } from 'semantic-ui-redux-form-fields';

const checkboxOptions = [{
  value: 'one', text: 'one', key: 'one',
}, {
  value: 'two', text: 'two', key: 'two',
}, {
  value: 'three', text: 'three', key: 'three',
}];

const SemanticFormDropdown = (props) => {
  const { currentValue, handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={Dropdown}
        currentValue={currentValue}
        name='my-Dropdown'
        options={checkboxOptions}
        placeholder='My Dropdown'
        required={true}
        topLabel='My Dropdown'
      />

      <div>
        <button type='submit' disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  // a unique identifier for this form
  form: 'Semantic_Dropdown_Form'
})(SemanticFormDropdown);

```


---

Best, te