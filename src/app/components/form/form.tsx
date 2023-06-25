import { useState } from 'react';
import { useToggle } from 'react-use';
import { MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH, EMAIL_REGEX } from './helpers';

export interface FormProps {
  title: string
}

type AnimalsType = {
  bear: boolean,
  snake: boolean,
  donkey: boolean,
  tiger: boolean
}

export function Form({ title }: FormProps) {
  const [showTiger, toggleTiger] = useToggle(false);
  const [showEmailValidation, toggleEmailValidation] = useToggle(false);
  const [showPasswordValidation, togglePasswordValidation] = useToggle(false);
  const [showTigerValidation, toggleTigerValidation] = useToggle(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [colour, setColour] = useState('');
  const [animals, setAnimals] = useState<AnimalsType>({
    bear: false,
    snake: false,
    donkey: false,
    tiger: false
  });
  const [tigerType, setTigerType] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert(`Form Submitted with the following data:
      email: ${email}
      password: ${password}
      colour: ${colour}
      animals: ${JSON.stringify(animals)}
      tigerType: ${tigerType}
    `);
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, setter: (x: string) => void) => {
    const value = e.target.value;
    setter(value);
  }

  const handleAnimals = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setAnimals((prev) => {
      return {...prev, [value]: isChecked}
    });
  }

  const checkValidEmail = (email: string) => {
    if (!email.match(EMAIL_REGEX)?.length && !showEmailValidation) {
      toggleEmailValidation()
    }
    if (email.match(EMAIL_REGEX)?.length && showEmailValidation) {
      toggleEmailValidation()
    }
  }

  const checkValidPassword = (password: string) => {
    const isCorrectLength = () => password.length >= 8 && password.length < 20;
    if (!isCorrectLength() && !showPasswordValidation) {
      togglePasswordValidation()
    }
    if (isCorrectLength() && showPasswordValidation) {
      togglePasswordValidation()
    }
  }

  const checkValidTextInput = (text: string) => {
    if (!checkIsNotEmpty(text) && !showTigerValidation) {
      toggleTigerValidation()
    }
    if (checkIsNotEmpty(tigerType) && showTigerValidation) {
      toggleTigerValidation()
    }
  }

  const checkIsNotEmpty = (text: string) => text.length > 0;

  // VALIDATION
  const handleEmailValidation = () => {
    checkValidEmail(email);
  }
  const handlePasswordValidation = () => {
    checkValidPassword(password);
  }
  const handleTigerValidation = () => {
    checkValidTextInput(tigerType);
  }


  return (
    <div className="w-full max-w-md p-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      {!!title && <h1 className="mb-8 text-xl font-bold">{title}</h1>}

      <form action="submit" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            aria-labelledby="email-hint"
            onChange={(e) => handleInput(e, setEmail)}
            onBlur={handleEmailValidation}
            required
            autoComplete="email"
            aria-label="Your email address"
            aria-required="true"
            aria-invalid={showEmailValidation ? "true" : "false"}
          />
          {!!showEmailValidation && <span id="email-hint" className="text-sm text-red-500">Please choose a valid email address.</span>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            aria-labelledby="password-hint"
            minLength={MIN_PASSWORD_LENGTH}
            maxLength={MAX_PASSWORD_LENGTH}
            onChange={(e) => handleInput(e, setPassword)}
            onBlur={handlePasswordValidation}
            required
            aria-label="Your password"
            aria-required="true"
            aria-invalid={showPasswordValidation ? "true" : "false"}
          />
          {!!showPasswordValidation && <span id="password-hint" className="text-sm text-red-500">Password should be between 8-20 characters.</span>}
        </div>

        <div className="relative mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="colour-selector">
            Colour
          </label>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:bg-white focus:border-gray-500"
            id="colour-selector"
            defaultValue=""
            onChange={(e) => handleInput(e, setColour)}
            aria-label="Your choice of colour"
          >
            <option value="" disabled hidden>Choose option</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Red">Red</option>
            <option value="Black">Black</option>
            <option value="Brown">Brown</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="colour-selector">
            Animals
          </label>
          <div className="flex items-center mb-4">
            <input
              id="bear-checkbox"
              type="checkbox"
              value="bear"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={(e) => handleAnimals(e)}
              aria-checked={animals.bear}
            />
            <label htmlFor="bear-checkbox" className="ml-2 text-sm font-medium text-gray-800 dark:text-gray-500">Bear</label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="snake-checkbox"
              type="checkbox"
              value="snake"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={(e) => handleAnimals(e)}
              aria-checked={animals.snake}
            />
            <label htmlFor="snake-checkbox" className="ml-2 text-sm font-medium text-gray-800 dark:text-gray-500">Snake</label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="donkey-checkbox"
              type="checkbox"
              value="donkey"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={(e) => handleAnimals(e)}
              aria-checked={animals.donkey}
            />
            <label htmlFor="donkey-checkbox" className="ml-2 text-sm font-medium text-gray-800 dark:text-gray-500">Donkey</label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="tiger-checkbox"
              type="checkbox"
              value="tiger"
              onChange={(e) => {
                toggleTiger()
                handleAnimals(e)
              }}
              aria-checked={animals.tiger}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="tiger-checkbox" className="ml-2 text-sm font-medium text-gray-800 dark:text-gray-500">Tiger</label>
          </div>
        </div>

        {!!showTiger && (
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tiger-type">
              Type of Tiger <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              id="tiger-type"
              type="tiger-type"
              placeholder="Type of Tiger"
              aria-labelledby="tiger-type-hint"
              required
              onChange={(e) => handleInput(e, setTigerType)}
              onBlur={handleTigerValidation}
              aria-required="true"
            />
            {!!showTigerValidation && <span id="tiger-type-hint" className="text-sm text-red-500">This is a required field.</span>}
          </div>
        )}

        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline"
          type="submit"
          onSubmit={handleSubmit}
          aria-label="submit contact form"
        >
          Submit
        </button>

      </form>

    </div>
  )
}

export default Form;
