import { upgradeAdapter } from './upgrade_adapter';
import { ContactsListItemComponent } from './contacts-list-item-component/contacts-list-item-component';

declare let angular: any;

upgradeAdapter.addProvider(ContactsListItemComponent);

angular.module('contacts-list-item-component', [])
  .directive('contactsListItemComponent', upgradeAdapter.downgradeNg2Component(ContactsListItemComponent));
