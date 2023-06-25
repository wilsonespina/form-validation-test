# Springload test

## Running the app

Requirements

`node version 18.16.0`

```bash
npm run start
```

## Running tests

```bash
npm run test
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
Validation:

* Password - Max length 20 so as to limit character entry and prevent malicious entry

## Future Refactoring

* Make Form more reusable by accepting props for form elements
* 