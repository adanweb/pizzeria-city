import React from 'react';

type IconProps = {
  className?: string;
};

export const PizzeriaCityLogo: React.FC<IconProps> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C11.34 2 10.8 2.22 10.39 2.61C6.22 6.78 6.22 13.22 10.39 17.39C14.56 21.56 21 21.56 21 16V12C21 7 16.97 3 12 3C11.55 3 11.12 3.04 10.71 3.11C10.26 5.25 8.71 6.94 6.73 7.55C6.94 8.71 7.25 9.8 7.61 10.8C6.63 9.42 6 7.78 6 6C6 3.79 7.79 2 10 2H12M4.41 12.5C4.15 13.62 4 14.79 4 16C4 18.21 4.84 20.2 6.22 21.61L3.39 24.44L1.56 22.61L4.41 19.78C3.55 18.5 3 17 3 15.3C3 14.36 3.18 13.46 3.5 12.62L4.41 12.5Z" />
  </svg>
);

export const MapPinIcon: React.FC<IconProps> = (props) => (
  <svg {...props} className={props.className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = (props) => (
  <svg {...props} className={props.className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = (props) => (
  <svg {...props} className={props.className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = (props) => (
  <svg {...props} className={props.className || "h-8 w-8"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.149 0-3.499.012-4.71.068-2.693.123-3.994 1.424-4.118 4.118-.056 1.21-.067 1.56-.067 4.71s.011 3.499.067 4.71c.124 2.693 1.424 3.994 4.118 4.118 1.21.056 1.56.067 4.71.067s3.499-.011 4.71-.067c2.693-.124 3.994-1.424 4.118-4.118.056-1.21.067-1.56.067-4.71s-.011-3.499-.067-4.71c-.124-2.693-1.424-3.994-4.118-4.118-1.21-.056-1.56-.067-4.71-.067zm0 3.191c-2.701 0-4.885 2.184-4.885 4.885s2.184 4.885 4.885 4.885 4.885-2.184 4.885-4.885-2.184-4.885-4.885-4.885zm0 7.828c-1.631 0-2.943-1.312-2.943-2.943s1.312-2.943 2.943-2.943 2.943 1.312 2.943 2.943-1.312 2.943-2.943 2.943zm4.965-7.51c-.78 0-1.414-.634-1.414-1.414s.634-1.414 1.414-1.414 1.414.634 1.414 1.414-.634 1.414-1.414 1.414z" />
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = (props) => (
  <svg {...props} className={props.className || "h-8 w-8"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89H8.078v-2.99h2.36V9.36c0-2.344 1.42-3.633 3.536-3.633 1.006 0 1.868.075 2.12.108v2.66h-1.58c-1.138 0-1.358.54-1.358 1.334v1.75h2.95l-.384 2.99h-2.566v7.009A9.957 9.957 0 0022 12z" />
  </svg>
);
