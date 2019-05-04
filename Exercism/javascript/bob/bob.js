/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  //
  // YOUR CODE GOES HERE
  //

  const whatever = 'Whatever.';
  const chill = 'Whoa, chill out!';
  const sure = 'Sure.';
  const beCalm = 'Calm down, I know what I\'m doing!';

  const something = /\.$/;
  const shout = /[A-Z]+|\!$/;

  if (something.test(message))
    return whatever; 
  else if (shout.test(message))
    return chill;
};
