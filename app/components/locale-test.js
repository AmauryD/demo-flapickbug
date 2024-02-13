import Component from '@glimmer/component';
console.log('[app] locale imported by app', window.flatpickr?.l10ns);
import 'flatpickr/dist/l10n/fr.js';

export default class LocaleTestComponent extends Component {}
