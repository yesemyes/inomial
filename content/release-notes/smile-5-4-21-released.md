+++
title = "Smile 5.4.21 Released"
date = 2015-04-07T12:54:07+04:00
type = "release"
layout = "single"
section = 'release'
img = "/images/release5.jpg"
+++

<a href="/solutions/smile/">Smile software</a> 5.4.21 has been released. This release includes a new SOAP API for allocating transactions, an <a href="https://www.ezidebit.com/en-au" target="_blank" rel="noopener noreferrer">Ezidebit</a> BPay importer, the ability to automatically add included usage blocks, 4 enhancements and 8 bug fixes.

<h3>Features</h3>
<ul>
<li>Added ability to automatically add included usage blocks to subscriptions each billing period</li>
<li>Added ability to import Ezidebit BPay payments into Smile</li>
<li>Added a new SOAP API for allocating transactions</li>
</ul>
<h3>Enhancements</h3>
<ul>
<li>Added ability to override the cost centre on Invoice line items</li>
<li>Added ability to perform auto allocation of transactions via the API</li>
<li>Added new document fields: total of bonds, paid bonds and unpaid bonds at time of printing and invoicing</li>
<li>Added ability to configure FTP port and passive mode for CDR importers</li>
</ul>
<h3>Noteworthy bug fixes</h3>
<ul>
<li>Fixed a problem where commission reversals might cause printing of RCTI to fail</li>
<li>Fixed Sales Per Account Report to display given and family name if company name is not set</li>
<li>Fixed an issue where searching for a users by IP address was not working in some circumstances</li>
<li>Fixed an RTR bug where invoicing periods could be prematurely released if subscriptions do not share invoicing period with account</li>
<li>Resolved an issue where the AAPT CTOP importer would erroneously record calls between 12:00 and 13:00 as between 00:00 and 01:00</li>
<li>Fixed an issue where Smile is unable to create invoice for an RTR subscription that is GST exempt</li>
<li>ISBillCdrUsage importer now imports wholesale charges</li>
<li>Resolved an issue that closed a period, when rerating a period that was previously published</li>
</ul>

Minor bug fixes and changes to custom code are not included in this summary.