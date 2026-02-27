import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { BoltIcon } from '@heroicons/react/20/solid';



export default function PrimaryButton() {
  return (
    <button onClick={() => window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0", "_blank")} className="flex items-center px-4 py-2 bg-indigo-500 text-indigo-400 rounded-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus:ring-2 focus:ring-indigo-100 focus:ring-opacity-100">
      <BoltIcon className="h-5 w-5 mr-2 text-indigo-400"/>
      Primary Button
    </button>
  );
}
