import 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    'data-aos'?: string;
    'data-aos-delay'?: string;
    'data-aos-duration'?: string;
    'data-aos-easing'?: string;
    // Add any other AOS attributes you plan to use
  }
}