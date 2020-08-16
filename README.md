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
	
	// a button with primary color and no shadow
	<Button  color="primary"  disableShadow>I am filled blue button</Button>
	
	// a button with outline style
	<Button  variant="outline">I am outlined</Button>
	
	// a small button with secondary color
	<Button  size="sm" color="secondary">I am tiny and not so important</Button>
	
	// a button with an icon on the left
	<Button  start_icon="lock">I have an icon before my text</Button>

	// a button with an icon on the right
	<Button  size="lg" end_icon="restore">I am big and I have an icon after my text</Button>
}

export default App;
````

### Properties
**color** ( "default" | "primary" | "secondary" | "danger" / *optional*)
Button base color. If omitted, defaults to "default"

**variant** ("fill" | "outline" | "text" / *optional*)
Button style. If omitted, defaults to "fill"

**size** ("sm" | "md" | "lg" / *optional*)
Button size. If omitted, defaults to  "md".

**disableShadow** (true | false / *optional*)
Remove box-shadow effect. Defaults to false.

**startIcon** (string / *optional*)
Prepends an icon to the left of button content. Property value should be a [valid icon name](https://material.io/resources/icons/?style=baseline) from Material Icons.

**endIcon** (string / *optional*)
Appends an icon to the right of button content. Property value should be a [valid icon name](https://material.io/resources/icons/?style=baseline) from Material Icons.
