+++
title = "Smile 5.4.10, 5.4.11 Release Note Summary"
date = 2013-12-10T14:19:26+04:00
type = "release"
layout = "single"
section = 'release'
img = "/images/release5.jpg"
+++

<p>Smile 5.4.11 has been released. This is a maintenance release that includes key improvements and bug fixes.</p>
<h3>Features</h3>
<h5>5.4.11</h5>
<ul>
<li>Add AmCom CDR importer.</li>
<li>Add support for Bendigo Bank MIGS payment gateway.</li>
</ul>
<h5>5.4.10</h5>
<ul>
<li>Add Singtel CDR importer.</li>
<li>Add iTelecom CDR importer.</li>
<li>Add last balance to invoice approvals page.</li>
<li>Add ability to change subscription username via SOAP.</li>
<li>Add Inmarsat CDR importer.</li>
<li>Add ability to create Appointments via the help desk system.</li>
</ul>
<h3>Enhancements</h3>
<h5>5.4.11</h5>
<ul>
<li>Add support for AAPT COCE &amp; CTOP file format changes.</li>
<li>Add ability to specify RADIUS static IP address through order form.</li>
</ul>
<h5>5.4.10</h5>
<ul>
<li>Add ability to get prepaid state via SOAP.</li>
<li>Add ability to override parameters when adding prepaid via SOAP.</li>
<li>Modify AAPT COCE and CTOP importers to support v1.8 format.</li>
<li>Modify ispOne importers to use new url.</li>
</ul>
<h3>Noteworthy bug fixes</h3>
<h5>5.4.11</h5>
<ul>
<li>Fixed an issue that would prevent transactions from being exported to Xero.</li>
<li>Fixed an issue that would prevent Telstra InfoTranz provisioned subscriptions from being activated in Smile.</li>
<li>Fixed an issue where reopening an invoice would leave it in an inconsistent state if the invoice had been dispatched.</li>
<li>Fixed an issue that would prevent Flow Control subscription activity page from displaying correctly.</li>
<li>Fixed an issue that caused usage cancellations triggered by certain importers to appear in the wrong billing period.</li>
<li>Fixed an issue where Stationery pages with no tables or static content would not be displayed (even if they had background images).</li>
<li>Fixed an issue where large numbers of plan changes in a short period could cause Smile to stop responding.</li>
<li>Fixed an issue where subscription feature changes may not be fully actioned.</li>
<li>Fixed an issue where subscription feature changes may not trigger RADIUS CoA requests.</li>
<li>Fixed an issue that would prevent purchasing prepaid via CAT.</li>
<li>Fixed an issue that would prevent post-paid data blocks via CAT from raising the charge.</li>
<li>Fixed an issue where charges would not be grouped correctly for Real Time Rating subscriptions.</li>
<li>Fixed an issue where usage may be lost if an error occurred during Real Time Rating processing.</li>
</ul>
<h5>5.4.10</h5>
<ul>
<li>Resolved an issue that would prevent multi-company customers from doing billing.</li>
<li>Resolved an issue that would cause problems with background tasks after the user that triggered them logged out.</li>
<li>Improved accented character support in emails sent from Smile.</li>
<li>Resolved an issue that could cause feature updates on subscriptions not to take effect.</li>
<li>The ‘reply to’ field on emails is now honoured.</li>
<li>Resolved an issue that caused certain SFTP based importers to attempt to reimport all available CDR.</li>
<li>Allow operators to configure which Sales Reporting Categories may apply to Bonds.</li>
<li>Fixed an issue that might cause address to appear incorrectly on certain stationery when no company name was specified.</li>
<li>Fixed an issue that might prevent cloning of ticket types.</li>
</ul>
<p>Minor bug fixes and changes to custom code are not included in this summary.</p>