+++
title = "Smile 5.3.13, 5.3.14, 5.3.15 – release note summary"
date = 2013-04-08T14:26:18+04:00
type = "release"
layout = "single"
section = 'release'
img = "/images/release5.jpg"
+++

<p>Smile 5.3.15 has been released. This is a maintenance release that includes key improvements and bug fixes.</p>
<h3>Enhancements</h3>
<h5>5.3.15</h5>
<ul>
<li>Added the ability to specify that a contract value should be based on a percentage of the plan recurring charges (defaults to 100%).</li>
</ul>
<h5>5.3.13</h5>
<ul>
<li>Transfer instead of Porting of CTS Service.</li>
<li>Improvement to the call listings summary for voice subscriptions.</li>
<li>Support for Glassfish version 3.1.2.2.</li>
</ul>
<h3>Noteworthy bug fixes</h3>
<h5>5.3.15</h5>
<ul>
<li>Fixed rare race condition when creating an invoice.</li>
</ul>
<h5>5.3.14</h5>
<ul>
<li>Improvements to the permissions on some forms accessible by smile operators.</li>
</ul>
<h5>5.3.13</h5>
<ul>
<li>Resolve a possible conflict between prerating and billing.</li>
<li>Removed possibilities for deadlocks in the pre-rate task.</li>
<li>Fixed a bug that was resulting in the Confirm message not being displayed in IE 9.0 which was stoping payment in CAT.</li>
<li>CAT now excludes pending payments from the amount to pay when offering to put through a payment straight after a customer updates their stored payment details.</li>
<li>Ticket description was not saved if a ticket was closed immediately after adding the ticket.</li>
</ul>
<p>Minor bug fixes and changes to custom code are not included in this summary.</p>