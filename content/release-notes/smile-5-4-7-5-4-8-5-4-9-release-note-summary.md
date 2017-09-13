+++
title = "Smile 5.4.7, 5.4.8, 5.4.9 Release Note Summary"
date = 2013-03-19T14:22:10+04:00
type = "release"
layout = "single"
section = 'release'
img = "/images/release5.jpg"
+++

<p>Smile 5.4.9 has been released. This is a maintenance release that includes key improvements and bug fixes.</p>
<h3>Features</h3>
<h5>5.4.9</h5>
<ul>
<li>Added ability to configure tiers of prepaid per plan, allowing customers that purchase prepaid to be rewarded when purchasing again.</li>
<li>Added support for Optus Wholesale Gateway mediated usage files.</li>
<li>Hosted Suite charges importer.</li>
</ul>
<h5>5.4.8</h5>
<ul>
<li>Added support for Federadius.</li>
<li>Added a number of new transaction types to support Bonds and Reimbursements.</li>
<li>Custom fields now support number reservations from number pools.</li>
<li>Added new importer – AAPT CTOP and COCE.</li>
</ul>
<h5>5.4.7</h5>
<ul>
<li>Added the ability to authenticate Smile operators via LDAP or Active Directory.</li>
<li>Added Timer Actions on Tickets &amp; Timer Actions Operating to Schedules.</li>
<li>Added iSeek GoWireless importer.</li>
<li>Order Groups – allows multiple orders to be placed together and have charges appear on single invoice.</li>
</ul>
<h3>Enhancements</h3>
<h5>5.4.9</h5>
<ul>
<li>Added multi-service capability to iVox importer.</li>
<li>Various improvements to order interface on tickets/workflows.</li>
<li>Added ability to retrieve password via SOAP (if required permission is met).</li>
<li>Added a number of stationery fields to Subscription, Reimbursement and Ticket documents.</li>
<li>Added ability to configure plan-option dependent quotas.</li>
<li>Improved the load time of the ticket list page.</li>
</ul>
<h5>5.4.8</h5>
<ul>
<li>Added ability to update the subscription description field via SOAP.</li>
<li>Bulk emails now support attachments.</li>
<li>Reduced the default database connection limit to 50 to prevent postgres from running out of connections.</li>
</ul>
<h5>5.4.7</h5>
<ul>
<li>Automatically assign tickets created by support email address poller to the appropriate account.</li>
<li>Added the ability to use bpay report date rather than transaction date when importing a CBA BPAY file.</li>
</ul>
<h3>Noteworthy bug fixes</h3>
<h5>5.4.9</h5>
<ul>
<li>Fixed a regression that prevented externally provisioned subscriptions from provisioning correctly.</li>
<li>Fixed an issue that caused the wrong page to be displayed when navigating back from viewing a table row.</li>
<li>Added audit logging when subscription’s permissions change.</li>
<li>Resolved an issue preventing payment batches from being created when more than 1000 payments are in the batch.</li>
<li>Resolved an issue that prevented printing of an invoice that has a bond in account history.</li>
<li>Corrected formatting of currency values in several reports.</li>
<li>Correctly hide the delete button on Bonds for operators that do not have delete transaction permission.</li>
<li>Corrected the value in subtext on Bonds tab to be the value of bonds held.</li>
<li>Resolved an error preventing the “Defaults” tab from displaying in Service configuration.</li>
<li>Fixed an issue preventing the deletion of Subscriptions that have features manually applied.</li>
<li>Resolved an issue that prevented some scheduled tasks from completing successfully.</li>
<li>Resolved an issue that sometimes caused an error when placing an order via SOAP with initial payment provided.</li>
<li>Fixed an issue that prevented the ‘Pre-Rating Errors’ report from displaying.</li>
<li>Fixed an issue that prevented the AAPT importer from completing successfully.</li>
<li>Fixed an issue that would cause the search to only display one match for an IP Address when several matches were found.</li>
<li>Fixed an issue that caused ‘Importer Failures by type’ table to display ignored import items.</li>
<li>Resolved an issue that restricted the sales report to 8 digit values or less.</li>
<li>Resolved an issue that prevented the ‘View raw data’ button from working on Smile CDR Importer items.</li>
<li>Resolved a number of regressions that prevented Features from working correctly.</li>
</ul>
<h5>5.4.8</h5>
<ul>
<li>Fixed an issue that prevented operators from configuring a charging rule with included usage dependent on the value of a plan option.</li>
<li>Fixed an issue that occasionally prevented the Eftel DataFast importer from importing a file.</li>
<li>Fixed an issue that prevented operators from viewing a subscription whose first plan started in the future.</li>
<li>Fixed an issue that prevented an invoice from being reopened if it had been dispatched.</li>
<li>Fixed a database compatibility issue preventing the MYOB report from working.</li>
<li>Created an additional index for the iVox Nice CDR importer to speed up imports.</li>
</ul>
<h5>5.4.7</h5>
<ul>
<li>Restored the ability to raise a once-off pro-rata invoice when closing a subscription.</li>
<li>Resolved an issue that would cause the call time on certain stationeries to be midnight.</li>
<li>Resolved an issue that would prevent a pdf file downloaded from archive from having the correct extension.</li>
<li>Resolved an issue that would prevent ordering a package with no plan.</li>
<li>Resolved an issue that would prevent feature updates from being applied.</li>
</ul>
<p>Minor bug fixes and changes to custom code are not included in this summary.</p>