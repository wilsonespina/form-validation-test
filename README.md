# Springload test

## Running the app

Requirements

`node version 18.16.0`

```bash
npm run start
```

## Running tests

```bash
# all tests
npm run test

# unit tests
npm run test:unit

# e2e tests
npm run test:e2e
```

## Technologies used

* Use `nx` to scaffold project as Standalone React project
* Tailwind css for styling
* Testing:
    * e2e test cypress
    * React testing lib for unit tests
    * Cypress snapshot (visual test)

Browser Support:
Tailwind css takes care of vendor prefixes

## Validation:

* Password - Legnth has to be between 8 - 20 characters.

## Future Refactoring

* Make Form more reusable by accepting props for form elements
* 