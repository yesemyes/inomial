+++
title = "Smile 5.3.11, 5.3.12 – release note summary"
date = 2012-12-12T14:30:28+04:00
type = "release"
layout = "single"
section = 'release'
img = "/images/release5.jpg"
+++

<p>Smile 5.3.12 has been released. This is a maintenance release that includes key improvements and bug fixes.</p>
<h3>Enhancements</h3>
<h5>5.3.12</h5>
<ul>
<li>Improvements to the customisable sales report. Produces better status updates when generating a report.</li>
<li>Fixed browser display problem in Firefox where rows could overlap in customisable sales report.</li>
<li>Old TaskLog entries are now auto purged to reduce database size.</li>
<li>Xero error messages now have more detail.</li>
<li>Added the ability to force credit control dispatches into the dispatch queues rather than going directly out.</li>
<li>User interface improvements to the Advanced Search-Send Email screen.</li>
<li>User interface improvements to send email screen.</li>
<li>Ability added to mark multiple items as unchangeable at once.</li>
<li>Active Radius connections now shows child subscriptions individually.</li>
<li>Traditional Sales Report now wraps category labels rather than truncating.</li>
<li>Manual recurring charge default changed to 1 period in advance rather than in arrears.</li>
<li>Ability added to force strong passwords for services.</li>
<li>Ability added to override the global ABN and company name fields for specific CAT customer portal service.</li>
</ul>
<h5>5.3.11</h5>
<ul>
<li>New auto approval limit for credits distinct from debits.</li>
<li>Report menu reformatted for easier use.</li>
<li>New conditional usage alert stationery field for over 100% making it possible to send different email text for above and below 100% usage.</li>
<li>Unassociated Billing Items Report now allows an operator to manually associate unknown billing items with existing subscriptions even if the username does not match.</li>
</ul>
<h3>Performance Improvement</h3>
<h5>5.3.11</h5>
<ul>
<li>Various indexes added to tables to help improve the performance in payments billing processing dashboard statistics.</li>
<li>Billing run performance improved.</li>
</ul>
<h3>Noteworthy bug fixes</h3>
<h5>5.3.12</h5>
<ul>
<li>Fixed caching bug in customisable sales report that required generating more than once when cloning a report.</li>
<li>Added permissions to Sales per Account Report.</li>
</ul>
<h5>5.3.11</h5>
<ul>
<li>Prevent billing/rating from occurring more than once at a time for each account.</li>
<li>Popup windows used in payments in CAT fixed for IE9.</li>
<li>Processing a billing period from an Account could happen twice if triggered from two separate logins.</li>
<li>API Activity Batch method fixed.</li>
<li>Calendar partially hidden while setting dates on an invoice in some browsers.</li>
<li>Change UCN to USN on home screen.</li>
<li>Events tab optimisations.</li>
<li>‘Not Due’ ageing title relabelled ‘Current’ when ageing periods are in due date mode to be more consistent with general accounting practices.</li>
<li>Fixed agedBalanceOverdue stationery field for statements.</li>
<li>Processing Australia Post bill pay import files when the payment amount is less than the surcharge would cause processing to fail.</li>
<li>RADIUS accounting occasionally waiting for billing to complete.</li>
<li>Customisable Sales report would not generate correctly the first time after cloning.</li>
</ul>
<p>Minor bug fixes and changes to custom code are not included in this summary.</p>