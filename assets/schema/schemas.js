import { normalize, Schema, arrayOf } from 'normalizr'

export const user = new Schema('users', { idAttribute: '_id' });
export const tournament = new Schema('tournaments', { idAttribute: '_id' });