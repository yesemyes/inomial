+++
title = "BigRating"
date = 2017-07-14T13:02:52+04:00
type = "solutions"
layout = "solution"
img = "/page-img/bigrating.jpg"
+++

BigRating is a high-performance, real-time rating and policy management engine. It calculates charges and costs in real time for telephone CDRs, meter readings, resource consumption, billable events and more, with a sophisticated subscription billing model and generic, rules based policy manager to enable bandwidth shaping, walled gardens, terminal message display, and other real time user management features.

### Fast and versatile
Although BigRating works well with traditional RDBMS systems, a key design principal of BigRating was to ensure that it could also operate with so-called “BigData” stores such as HBase or Cassandra. These data stores allow the low-cost, high-performance, high-availability storage and processing of data sets far larger than a traditional single-server RDBMS can deal with – perfect for telecommunications data storage and analysis.

The ability to use BigData stores and to rate very large amounts of data in real time, gave BigRating its name.

### Features

<ul>
	<li>Real-time multidimensional rule-based event rating with simultaneous independent cost, charge, and reconciliation rating of events.</li>
	<li>Real-time subscription oriented recurring billing with fully automatic pro rata calculation (including credits and reversals) and sophisticated accounting integration patterns).</li>
	<li>Supports consolidated billing of disparate services when integrated with a consolidating accounts receivable system, such as <a href="/solutions/smile">Smile</a> software.</li>
</ul>

### Advantages of real-time rating
Real-time rating has a number of important advantages over batch rating, including:

<ul>
	<li><strong>Speed</strong> – because rating is performed throughout the billing cycle, the end-of-month billing run doesn’t have to process CDRs. Billing takes minutes, instead of hours or days.</li>
	<li><strong>Performance</strong> – real-time rating spreads the work load throughout the month instead of concentrating it in a single day at the end of the billing cycle. This means that server performance requirements are reduced.</li>
	<li><strong>Customer service</strong> – because BigRating keeps track of the customer’s invoice throughout the billing cycle, it can easily and automatically alert the end-user to overuse, over spend and/or credit limit breaches as soon as they occur; for example, to support Australia’s Telecommunication Customer Protection code.</li>
</ul>

### Integration
BigRating integrates with existing billing systems and accounting systems via an enterprise service bus and WSDL based SOAP APIs.

BigRating requires integration with an event source such as a mediation engine, a storage mechanism and an invoicing service.