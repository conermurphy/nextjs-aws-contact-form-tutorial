import React from 'react';
import useContactForm from '../utils/useContactForm';
import useForm from '../utils/useForm';

export default function ContactForm(): JSX.Element {
  const { values, updateValue, resetValues } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const { firstName, lastName, email, message } = values;

  const { loading, outputMessage, submitContactForm } = useContactForm({
    values,
    resetValues,
  });

  const inputContainerStyles =
    'flex flex-col items-start ';
  const labelStyles = 'font-bold mb-1 ';

  return (
    <div className="flex flex-col justify-start items-center p-6 rounded-md col-span-5 xl:col-span-2">
      <form
        onSubmit={submitContactForm}
        className="flex flex-col gap-4 md:gap-6 w-full"
        data-testid="contact-form"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4">
          <div className={inputContainerStyles}>
            <label htmlFor="firstName" className={labelStyles}>
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              placeholder="Your first name"
              onChange={updateValue}
              value={firstName}
              className="rounded-md  text-md w-full"
            />
          </div>
          <div className={inputContainerStyles}>
            <label htmlFor="lastName" className={labelStyles}>
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              placeholder="Your last name"
              onChange={updateValue}
              value={lastName}
              className="rounded-md text-md w-full"
            />
          </div>
        </div>
        <div className={inputContainerStyles}>
          <label htmlFor="email" className={labelStyles}>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Your email"
            onChange={updateValue}
            value={email}
            className="rounded-md text-md w-full"
          />
        </div>
        <div className={`grow ${inputContainerStyles}`}>
          <label htmlFor="message" className={labelStyles}>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            placeholder="Your message"
            onChange={updateValue}
            value={message}
            className="rounded-md text-md w-full resize-none h-full max-h-[150px]"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white text-base font-bold rounded-md py-3 px-5"
        >
          {loading ? 'Sending..' : 'Send Message'}
        </button>
      </form>
      <p
        className={`text-md lg:text-base mt-6 ${
          !outputMessage ? 'animate-pulse' : ''
        }`}
      >
        {outputMessage || 'Awaiting Submission...'}
      </p>
    </div>
  );
}
