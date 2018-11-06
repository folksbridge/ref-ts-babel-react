/* tslint:disable-next-line */
import * as React from 'react';

// tslint:disable-next-line:interface-name
interface AppProps {
  message: string;
}
export default function({ message }: AppProps) {
  return (
        <div>
            <h1>Hello {message}</h1>
        </div>
  );
}
