+++
title = "Smile 5.2.5 is now in beta"
date = 2011-05-24T14:41:31+04:00
type = "release"
layout = "single"
section = 'release'
img = "/images/release5.jpg"
+++

<p>We’ve just promoted Smile 5.2.5 to beta. Smile 5.2.5 is mostly a maintenance release, but there’re a couple of noteworthy new features:</p>
<h3>New Features</h3>
<ul>
<li>Work Queues view of the helpdesk</li>
<li>This new feature gives a high level view of what’s going on in helpdesk.</li>
<li>Changes to the Password Manager</li>
<li>The password manager now allows you to search for subscriptions meaning you don’t have to look through a few pages to find the subscription whose password you need to change.</li>
</ul>
<h3>Enhancements</h3>
<p>Searching for an IP address in the IP Pool list page will now return any ip pool that contains that IP address<br>
Account administrators may now delete contracts<br>
Adds ticket description to ticket summary CSV<br>
The Powertel Ebill importer now supports importing from two different sources<br>
Small cleanup of Smile operator page<br>
Significantly improves RADIUS server performance after a Smile restart</p>
<h3>Noteworthy Bug Fixes</h3>
<ul>
<li>Fixes the CAT login page to honour domain detection configuration</li>
<li>Fixes a problem viewing Flow Control activity if there is usage after the subscription has been closed</li>
<li>Fixes a bug in the calendar where moving to the next month would sometimes move you two months</li>
<li>Updates the RBA exchange rate poller to cope with the feed’s new format</li>
<li>Various bug fixes to the AAPT CDR importer</li>
<li>Fixes a problem searching for “All transaction types” on the the transaction search report</li>
<li>Fixes an error preventing the addition of service features from credit control when the feature is present against the subscription but has ended</li>
<li>Fixes a problem sometimes stopping the billing run when Smile is configured to automatically allocate all debits</li>
</ul>
<p>Please note that minor bug fixes and changes to custom code may not be included in the above release notes.</p>
<p>Smile 5.2.5 is expected to remain in beta for a few weeks as we continue to test it before we can consider it stable.</p>