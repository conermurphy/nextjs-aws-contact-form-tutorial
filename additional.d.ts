/// <reference types="next-images" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONTACT_FORM_ENDPOINT: string;
      CONTACT_FORM_API_KEY: string;
    }
  }
}

export {};
