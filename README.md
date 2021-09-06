# Sample Design System

Sample Design System built with: Storybook and Material-UI.

[Click here to visit: Living Style Guide & Documentation](https://main--608f2711f22164003925aefe.chromatic.com/)

## Installation

Run the following command using [yarn](https://yarnpkg.com/lang/en/):

```bash
yarn install
```

## Commands

Start the dev server

```
yarn start
```

Run tests

```
yarn test
```

Build

```
yarn build
```

## Design proccess outline

### Component API design

The component API is purposely restrictive to prevent consumers from adding custom styles. I've also tried to leverage Material's design system where possible instead of adding custom one-off styles.

### Tests

An emphasis was placed on on writing the tests in a way that closely matches how a user would interact with the component.

## References

- https://inclusive-components.design/cards/
- https://uikit.wfp.org/docs/index.html?path=/story/getting-started-intro--page
- https://designsystem.gov.au/
- https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
