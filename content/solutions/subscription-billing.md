+++
title = "Subscription Billing"
date = 2017-07-14T14:40:54+04:00
type = "solutions"
layout = "solution"
+++

Manage millions of pre- and postpaid users with horizontally scaleable, fault tolerant, real time, multi-service rating for mobile and fixed telephony, data, energy, gas, water, waste, and other usage based services. Consolidated, multi-service, multi-user prepaid rating or adaptive post-paid recurring billing accurately tracks the state of subscription charges at all times, providing a real time revenue outlook. Near real time reporting over billions of events – with no ETL phase.

### BigRating usage billing
<a href="/solutions/bigrating">BigRating</a> is Inomial’s high-performance, real-time rating and policy management engine. It calculates charges and costs in real time for telephone CDRs, meter readings, resource consumption, billable events and more, using a sophisticated subscription billing model and generic, rules based policy manager to enable bandwidth shaping, walled gardens, terminal message display, and other real time user management features.

<a href="https://docs.inomial.com/">More information on BigRating…</a>

### Advanced recurring billing
Recurring billing is the primary source of income for many businesses.

Fully automated recurring billing is a critical aspect of revenue assurance because it will eliminate the many revenue leaks and billing disputes caused by manual intervention.

Unfortunately, many implementations of recurring billing are naive, and require manual intervention for even trivial use cases, such as issuing pro-rata credits. Manual intervention is error-prone, especially in complex cases, and causes revenue leakage, billing errors, customer dissatisfaction and delayed cash flow. In naive systems, the more complex use cases are often overlooked, ignored, accepted as revenue loss, or escalated to management for processing.

There is a better way to spend your time.

Smile billing makes these processes fully automatic.

When a customer changes their plan, Smile’s recurring billing engine automatically considers the changes made and will raise new charges or credits in the next invoicing cycle. Regardless of the changes made by a CSR or customer, the next invoice issued is always – automatically – correct. This includes mid-month plan upgrades where a customer must be credited the unused portion of the old plan and debited the remainder of the month on the new plan.

When a customer adds or removes services, the new charges and credits are issued pro-rata relative to the start or cancellation date and the anniversary date of the account — subject to rules which can be defined by the service provider.

Finally, overage charges and policy limits can be raised based on allowances that are adjusted pro-rata to the plan change date, allowing customers to upgrade mid-month.

The correct charges or credits are simply raised during the next billing run, or as required by the business process. These features improve cash flow and customer satisfaction and reduce costs, by ensuring that customers are billed correctly every month.

Adaptive Recurring Billing white paper

### Prepaid usage
Termination, call collection, inbound and outbound call rating.

BigRating can apply an arbitrary number of rule sets (plans) to a CDR, with multiple charged parties, and multiple plans per charged party.

Every CDR received by BigRating can be subject to multiple sets of charging rules (plans) which can compute both the charges to be issued to your customers, and the costs you will be charged by your vendors.

CDRs can be rated against multiple customers, allowing several parties to be billed for the same CDR. For example, call termination charges may be applied to calls received from a peer carrier, where both the carrier and the call recipient are ultimately billed.

BigRating can apply multiple plans from multiple subscriptions to a single CDR. The following rating scenarios are supported for both cost and revenue calculations:

<ul>
	<li><strong>Local termination</strong> – Rates calls delivered to an end-user CPE (retail) or via a trunk (wholesale).</li>
	<li><strong>Foreign termination</strong> – Rates calls terminated at a foreign carrier.</li>
	<li><strong>Inbound rating</strong> – Charges the receiver of the call.</li>
	<li><strong>Outbound rating</strong> – Charges the originator of the call.</li>
	<li><strong>Call collection</strong> – Rates calls based on the location of the carrier interconnect.</li>
</ul>