// @flow
import * as React from 'react';

const CheckCircle = (): React.Eleemnt<'svg'> => (
  <div className="relative">
    <svg
      // width="15"
      height="26"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative z-20"
    >
      <path
        d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"
        fill="currentColor"
      />
    </svg>
    <div className="absolute top-1/2 left-1/2 w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 bg-white z-0 rounded-full" />
  </div>
);

export default CheckCircle;
