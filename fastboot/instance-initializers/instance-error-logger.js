/* eslint-disable ember/new-module-imports */
import Ember from 'ember';
const nodeLog = (msg, ...rest) => console.log(`instance-error-logger ---> ${msg}`, ...rest);

/**
 */
export function initialize() {
  // Ember.onerror = error => {
  //   nodeLog('Ember.onerror', error);
  //   // throw error;
  // };

  // this is the node equivilent of window.onerror
  // process.on('uncaughtException', err => {
  // new Promise((resolve, reject) => process
  //   .on('unhandledRejection', reject)
  //   .on('uncaughtException', reject)
  // ).catch(e => {
  //   nodeLog('process unhandledRejection', e);
  //   // throw e;
  // });


  // RSVP.on('error') is registered by ember to throw in backburner and caught by Ember.onerror
  console.log('instance-error-logger instantiated');
}

export default {
  initialize,
  name: 'instance-error-logger'
};
