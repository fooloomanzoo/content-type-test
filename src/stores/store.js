import { writable } from 'svelte/store';

export const options = [
  { value: 'application/octet-stream', text: 'application/octet-stream' },
  { value: 'application/pdf', text: 'application/pdf' },
  { value: 'image/gif', text: 'image/gif' },
  { value: 'image/jpg', text: 'image/jpg' },
  { value: 'image/png', text: 'image/png' }
];

export const sources = [
  { value: 'kermit-phone.gif', text: 'kermit-phone.gif' },
  { value: 'light-special.jpg', text: 'light-special.jpg' },
  { value: 'traffic-lights.png', text: 'traffic-lights.png' },
  { value: 'patent-example.pdf', text: 'patent-example.pdf' }
];

export const currentSrc = writable(sources[0].value);
