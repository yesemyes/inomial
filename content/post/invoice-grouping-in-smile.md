+++
title = "Invoice Grouping In Smile"
date = 2016-05-10T11:52:58+04:00
type = "post"
layout = "single"
section = 'news'
+++

<p>In Smile billing, invoice grouping is a way of specifying how charge items are displayed on an invoice. Invoice grouping can be used to display bundle charges on an invoice without itemising the individual charges that apply to the bundle.</p>
<h3>Charge type behaviours</h3>
<p>Charge items can be displayed grouped together or rolled up into one line item.</p>
<ul>
<li><strong>Group –</strong>&nbsp;Charges are still displayed individually on an invoice, but charges of the same charge type are displayed grouped together on the page.</li>
<li><strong>Roll Up –</strong>&nbsp;Multiple charges are rolled up and displayed as one line item&nbsp;on an invoice with an item description, the quantity of charges that have been rolled up and a total charge for all the line&nbsp;items that are part of the rolled up group.</li>
</ul>
<p>Multiple charge types can be specified for a grouping, and a behaviour can be set separately for each charge type.</p>
<p>The following is an example of roll up grouping behaviour. The invoice displays one line item&nbsp;for Mobile Subscription (0466666666) that contains 5 charges. Opening the roll up entry displays the individual charge types and the charges that have been included. On a printed or emailed invoice only the roll up entry will be displayed.</p>
<p><a href="/post-img/InvoiceGrouping_Rollup.jpg"><img class="alignnone wp-image-2029 size-large" src="/post-img/InvoiceGrouping_Rollup-1024x598.jpg" alt="subscription billing" width="610" height="356" sizes="(max-width: 610px) 100vw, 610px"></a></p>
<h3>How invoice grouping is implemented</h3>
<h4>Configuration and Tools</h4>
<p>In Smile software’s Configuration and Tools you configure&nbsp;invoice groupings that specify what charge types are included in the grouping and the behaviour for each type. You can also specify charge types that are excluded from grouping behaviour.</p>
<h4>Account</h4>
<p>At the account level you create invoice groupings that specify which subscription(s) are included in that grouping. You can set multiple invoice groupings on an account, for example, you may create a grouping for each subscription on the account or you may pool multiple subscriptions in one grouping.</p>
<p>Note: charges applied at the account level cannot be grouped.</p>