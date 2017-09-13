+++
title = "Smile 5.4.25 Released"
date = 2015-08-04T12:48:31+04:00
type = "release"
layout = "single"
section = 'release'
img = "/images/release5.jpg"
+++

Smile software 5.4.25 has been released. This release includes the ability to configure custom fields on manual invoice line items, a Point payment reconciler and 6 enhancements.

<h3>Features</h3>
<ul>
<li>Added support for configuring custom fields on manual invoice line items</li>
<li>Added BPoint payment reconciliation</li>
</ul>
<h3>Enhancements</h3>
<ul>
<li>Updated the SOAP API method Account.getTransactionList() to filter transactions by date</li>
<li>Added new invoice document fields for adjustments/surcharges with/without GST, charges and GST since last invoice.</li>
<li>Added hasPurchaseOrderNumber document flag field for invoices; can be used to conditionally display fields only when there is a purchase order number.</li>
<li>Charge from/to date columns now shown for charge items when viewing invoices in the user interface</li>
<li>On-net call on home network tariff code prefix now configurable for Optus Wholesale Gateway CDR Importer</li>
<li>BPoint driver now populates CRN1-CRN3 fields with account USN, alternate account number and list of invoice numbers when processing a payment.</li>
</ul>

Minor fixes and changes to custom code are not included in this summary.