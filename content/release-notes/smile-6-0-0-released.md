+++
title = "Smile 6.0.0 Released"
date = 2016-07-13T12:29:53+04:00
type = "release"
layout = "single"
section = 'release'
img = "/images/release6.jpg"
+++

Smile software 6.0.0 has been released. This release includes 16 features and 20 enhancements.

<h3>Features</h3>
<ul>
<li>Manual management for Westpac credit card gateway</li>
<li>Flexible CSV-based invoice charge importer</li>
<li>SOAP API for migrating an invoice from one account to another</li>
<li>Invoices detail columns added to stationery types</li>
<li>Users can be redirected to external application for ordering subscriptions</li>
<li>Manual management for Westpac direct debit gateway</li>
<li>Westpac RECall BPay payment importer</li>
<li>Analytics reports have individual access control lists for managing permissions</li>
<li>Subscription Migrator to import subscriptions from a CSV</li>
<li>Notification scheduling to control when notifications are sent</li>
<li>Flexible CSV importer</li>
<li>Expiring purchase orders report</li>
<li>Responsive credit control</li>
<li>View future invoices for entire accounts through user interface or SOAP API</li>
<li>Purchase order support</li>
<li>View future billing on an entire account</li>
</ul>
<h3>Enhancements</h3>
<ul>
<li>Alert level information in Account Summary and Transaction List</li>
<li>New message bus topic SmileChargeTopic; sends DeferredChargeMsg when deferred charges are created</li>
<li>Search for custom field on accounts, subscriptions and invoice line items</li>
<li>Custom fields on invoice line items</li>
<li>AAPT CTOP importer now uses ‘special field 1’ as username for ‘Softswitch as a Service’ records by default</li>
<li>Custom field codes are auto-generated if not provided and they will be unique and contain valid characters</li>
<li>Support for a street type suffix Billing address Street address</li>
<li>Support for SFTP when using Westpac direct debit payment gateway</li>
<li>Credit control account treatment levels will only be escalated whenever new recurring task updateDispositionsTask runs</li>
<li>Ability to raise a surcharge via document action</li>
<li>Add start date to purchase order configuration</li>
<li>New notifications in Credit Control for when an invoice, receipt or RCTI is raised</li>
<li>Notifications support for printing</li>
<li>New SOAP API for plan configuration and charging rule overrides are now returned/requested in PlanScheduleItem elements in SOAP API response/request</li>
<li>Payment declined message body on SmileTransactionTopic contains more detailed information about payment failure</li>
<li>Ability to define declined payment emails and SMSs in credit control configuration</li>
<li>New SOAP API method WSSubscription.findSubscriptions(); takes same argument type as findSubscription() but can return multiple matches.</li>
<li>hasPurchaseOrderNumber document flag field for invoices can be used to conditionally display fields only when there is a purchase order number</li>
<li>Ability to exclude a line item from rolling up</li>
<li>Ability to create and modify invoice groupings for an account</li>
</ul>

Minor fixes and changes to custom code are not included in this summary