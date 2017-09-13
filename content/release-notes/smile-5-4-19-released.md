+++
title = "Smile 5.4.19 Released"
date = 2014-11-10T13:01:39+04:00
type = "release"
layout = "single"
section = 'release'
img = "/images/release5.jpg"
+++

<p><a href="/solutions/smile/">Smile software</a> 5.4.19 has been released. This is a maintenance release that includes key improvements and bug fixes.</p>
<h3>Features</h3>
<ul>
<li>Added InfoX MMS importer</li>
<li>Added InfoX SMS importer</li>
<li>Updated the existing Singtel Importer for a new service, Singtel Fleet Broadband (FBB)</li>
<li>Added ability to automatically run document actions when features are added or removed from subscriptions</li>
<li>Added ability to drop radius interim update packets that have not be processed within a certain time since receipt</li>
<li>Added ISPhone Charge importer</li>
<li>Added SOAP API for subservices</li>
</ul>
<h3>Enhancement</h3>
<ul>
<li>Helpdesk email poller now accepts a configurable maximum email size above which emails will not be downloaded (by default all emails are downloaded)</li>
<li>Added a new call type for ISDN</li>
<li>Minor improvements to the Top Customers report</li>
<li>Added ability to download the Commission Earner history table to CSV</li>
<li>Improved load performance of the usage graph for RADIUS subscriptions</li>
<li>Added ability to display cat username and password on account documents</li>
</ul>
<h3>Noteworthy bug fixes</h3>
<ul>
<li>Fixed an issue that occurred when <a href="/solutions/bigrating/">Big Rating</a> subscriptions were configured with feature recurring billing charges</li>
<li>Fixed an issue that could prevent the summarisation of like invoice items</li>
<li>Fixed an issue that could cause a connection leak in rare circumstances</li>
<li>Corrected an issue where RTR would sometimes attempt to rerate the same subscription twice at the same time</li>
<li>Improvements to <a href="https://www.telstra.com.au" target="_blank" rel="noopener noreferrer">Telstra</a> Infotranz integration</li>
<li>Rounded values from EziDebit to the nearest cent to prevent floating-point problems</li>
<li>Improved helpdesk email poller integration with gmail</li>
<li>UI validates the static IPv4 Address and IPv4 Netmask field on the RADIUS configuration page</li>
<li>Improved performance of plan change poller for large numbers of subscriptions</li>
<li>Fixed an issue where Smile failed to store a payment token against an account via SOAP</li>
<li>Stopped the sending of declined emails for manual payments</li>
</ul>
<p>Minor bug fixes and changes to custom code are not included in this summary.</p>