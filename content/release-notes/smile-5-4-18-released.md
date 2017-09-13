+++
title = "Smile 5.4.18 Released"
date = 2014-09-22T13:03:28+04:00
type = "release"
layout = "single"
section = 'release'
img = "/images/release5.jpg"
+++

<p><a href="/solutions/smile/">Smile software</a> 5.4.18 has been released. This is a maintenance release that includes key improvements and bug fixes.</p>
<h3>Features</h3>
<ul>
<li>Added SOAP API for managing simple recurring charges (user auto-charges)</li>
<li>Added SOAP API for managing automated subscription contracts</li>
<li>Added ability to update the expiry field for token based <a href="https://nab.com.au" target="_blank" rel="noopener noreferrer">NAB</a> Transact payment methods without requiring the credit card number</li>
<li>Added a new Inomial RADIUS attribute for marking accounting packets as ignorable</li>
<li>Added SOAP API CRM.getTickets() to get all tickets that belong to an account</li>
<li>Added SOAP API CRM.runTicketAction() to run a ticket action on a ticket</li>
<li>Updated AAPT CTOP importer to allow called/caller/usernames to be converted to E.164</li>
<li>Added SOAP API Payment.recordFailedPayment() to record failed payment in Smile</li>
<li>Added ability to override the default invoicing and rating cycle at the service level</li>
<li>Added SOAP getPayment method for getting information about a payment</li>
<li>Updated SOAP getTransactions method to include pending payment reference if the transaction has one</li>
</ul>
<h3>Enhancements</h3>
<ul>
<li>Added ability to select a simpler tariff code generation scheme for AAPT CTOP importer</li>
<li>Additional views in the public schema exposing plan schedule and tickets</li>
<li>Added new functions in Public SQL Smile01 schema to get subscription current plan and plan at a particular time</li>
<li>UI Enhancements to make account and subscription fields always visible in a ticket</li>
<li>Added ability to display token when viewing a customers payment details</li>
</ul>
<h3>Noteworthy bug fixes</h3>
<ul>
<li>Fixed a miscalculation in <a href="/solutions/bigrating/">Big Rating</a> when crossing daylight savings boundaries</li>
<li>Resolved an issue that caused RADIUS to process slowly when transitioning between peak and off-peak times</li>
<li>Resolved an issue that would sometimes cause RADIUS to stop processing accounting packets for a time after a plan change</li>
<li>Removed permissions granted erroneously to various groups</li>
<li>Payment details now uses display name instead of company name for ‘Entered by’ and ‘Cleared by’ fields</li>
<li>Fixed an issue that caused updating prepaid via SOAP API to not record the adjustment in the prepaid history</li>
<li>Fixed a bug where the trial balance report could fetch the wrong accounts when the account type was specified</li>
<li>Fixed a bug that caused invoices to fail to print with a specific credit control setup</li>
</ul>
<p>Minor bug fixes and changes to custom code are not included in this summary.</p>