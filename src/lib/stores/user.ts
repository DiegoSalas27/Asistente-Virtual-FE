import { writable } from 'svelte/store';
  import type { User } from '../types';
  
  const user = writable<Partial<User> | null>(null);

  export default user;