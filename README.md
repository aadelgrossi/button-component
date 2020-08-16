## :point_up_2: button-component

Customizable button component implemented as a solution for DevChallenges' [Button component](https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY)

## :wrench: Setup & Installation

Clone the repository and install dependencies by running.

```sh
$ yarn
```

Run:
```sh
$ yarn start
```

## Usage
Import ***Button*** component from src/components/Button.tsx to use in another component. 

Example:
````tsx
import React from  'react';
import Button from  '../../components/Button';
  
const  App:  React.FC  = () => {
  // a basic button
  <Button>I am very basic and boring</Button> 

  // a button with outline style
  <Button  variant="outline">I am outlined</Button>

  // a button with primary color and no shadow
  <Button  color="primary">I am filled blue button</Button>

  // a red button without shadow
  <Button  color="danger" disableShadow>I am dangerous and flat</Button>

  // a disabled button
  <Button  disabled>I am useless</Button>

  // a small button with secondary color
  <Button  size="sm" color="secondary">I am tiny and not so important</Button>

  // a button with an icon on the left
  <Button  start_icon="lock">I have an icon before my text</Button>

  // a button with an icon on the right
  <Button  size="lg" end_icon="restore">I am big and I have an icon after my text</Button>
}

export default App;
````

### Properties (optional)
Provide these properties to Button component to style it according to the challenge's provided [template](https://www.figma.com/file/vfMDJhGGnqfaskO2aud06o). They are optional and can be omitted.

**variant** ("fill" | "outline" | "text")  
Button style. If omitted, defaults to "fill".

**color** ( "default" | "primary" | "secondary" | "danger")  
Button color (background if variant = fill, border-color if variant = outline, text if variant = text). 
If omitted, defaults to "default".

**size** ("sm" | "md" | "lg")  
Button size. If omitted, defaults to "md".

**disableShadow** (boolean)  
Remove box-shadow effect if true.

**disabled** (boolean )  
Disables button if true.

**startIcon** (string)  
Prepends an icon to the left of button content. Property value should be a [valid icon name](https://material.io/resources/icons/?style=baseline) from Material Icons.

**endIcon** (string)  
Appends an icon to the right of button content. Property value should be a [valid icon name](https://material.io/resources/icons/?style=baseline) from Material Icons.
