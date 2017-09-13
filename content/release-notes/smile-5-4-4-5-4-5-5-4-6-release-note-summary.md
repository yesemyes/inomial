+++
title = "Smile 5.4.4, 5.4.5, 5.4.6 Release Note Summary"
date = 2013-06-14T14:24:24+04:00
type = "release"
layout = "single"
section = 'release'
img = "/images/release5.jpg"
+++


<p>Smile 5.4.6 has been released. This is a maintenance release that includes key improvements and bug fixes.</p>
<h3>Features</h3>
<h5>&nbsp;5.4.6</h5>
<ul>
<li>Ability to hide contact details from Smile operators on protected accounts.</li>
<li>SOAP API for retrieving connection history for subscriptions.</li>
<li>SOAP API allowing external components to complete external provisioning.</li>
</ul>
<h5>5.4.5</h5>
<ul>
<li>SOAP API – Submit an account, get a list of transactions.</li>
<li>SOAP API – Retrieve connection history.</li>
<li>Cisco voice works importer is now subservice aware.</li>
</ul>
<h5>5.4.4</h5>
<ul>
<li>Managed plans – allows operators to configure allowed plan change paths, costs for plan changes etc.</li>
</ul>
<h3>Enhancements</h3>
<h5>&nbsp;5.4.6</h5>
<ul>
<li>Improved validation on custom fields.</li>
<li>Improvements to the new manage plan changes feature.</li>
<li>Performance improvements when viewing some RADIUS and data subscriptions.</li>
<li>Improvements to emails sent from ticket actions.</li>
</ul>
<h5>5.4.5</h5>
<ul>
<li>Allow BSB numbers to be of several different formats when processed by the NAB gateway.</li>
<li>User interface clean ups with managed plan changes.</li>
<li>Use stored payment details for manual payments if they exist.</li>
<li>Invoice document fields added for the previous two billing periods.</li>
</ul>
<h5>5.4.4</h5>
<ul>
<li>Minor interface improvements for BindR DNS service.</li>
<li>Ability added to view master subscription field from the child subscription.</li>
<li>Allow the display of the features tab on non RADIUS service types.</li>
<li>Newly created subscriptions will automatically import unassociated usage for new importer framework based importers (matches older importer behaviour).</li>
<li>Improvements to order forms interface.</li>
<li>‘Account Type’ added to SOAP method Account get().</li>
<li>Added the ability to specify that a contract value should be based on a percentage of the plan recurring charges (defaults to 100%).</li>
<li>Smile CDR importer can now import to more than one service. This includes a new importer configuration form and moves some of the configuration options from the general importer form to the configuration screen.</li>
<li>Smile (rather than glassfish) now authenticates SOAP requests. SOAP access can be configured via the access tab of CAT subscriptions.</li>
</ul>
<h3>Noteworthy bug fixes</h3>
<h5>&nbsp;5.4.6</h5>
<ul>
<li>Custom field regular expressions are now enforced.</li>
<li>Support for various BSB formats when using NAB direct debit.</li>
<li>Fixed a bug deleting accounts with a CAT subscription who created other subscriptions.</li>
<li>Only attempt to use stored payment details if there are stored payment details to use.</li>
<li>Fixed a problem closing some subscriptions.</li>
<li>Fixed a problem redeeming prepaid vouchers.</li>
</ul>
<h5>5.4.5</h5>
<ul>
<li>Fixed error displaying prepaid in CAT.</li>
<li>$0 invoices were sometimes not able to be reopened.</li>
<li>Regular expressions constraints on custom fields are now honoured.</li>
<li>Number validation performed on custom fields.</li>
<li>Fixed error in upgrade script not taking currency into account.</li>
<li>Deleting an account could be blocked by a CAT user who had ordered subscriptions.</li>
</ul>
<h5>5.4.4</h5>
<ul>
<li>Fixed rare race condition when creating an invoice.</li>
<li>Destination email address not logged to dispatch log.</li>
<li>Further restrict payment types allowed in CAT for purchasing prepaid blocks.</li>
<li>Customisable sales report could error for customers that had never used it before due to not having a last generated date.</li>
<li>Fixed possibility of a duplicate key when cloning services or plans.</li>
<li>Public schema queries now return the text name of custom collections instead of blank.</li>
<li>Override Description was not being overridden when using the view plan button on a subscription.</li>
</ul>
<p>Minor bug fixes and changes to custom code are not included in this summary.</p>