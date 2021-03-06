+++
title = "Flowcontrol"
date = 2017-07-14T13:23:09+04:00
type = "solutions"
layout = "solution"
img = "/page-img/flowcontrol.jpg"
+++

Flow Control is data collection appliance software installed on a server in your data centre. It simultaneously accepts NetFlow packets and performs SNMP polling from network equipment such as LNSes and routers, classifies and aggregates the data against customers and tariffs, and forwards the aggregate data to Smile software over RADIUS.

### Zoned Billing
Once installed, Flow Control’s configuration is managed entirely within Smile software. Assign IP address ranges, network interfaces or AS numbers to tariff types, allowing you to bill customers by the traffic source and/or destination. Allocate IP addresses to customers from within the Smile application – Flow Control is updated automatically, in real time.

### Committed Rate Billing
In addition to aggregate traffic metrics, Flow Control also computes traffic percentiles for both inbound and outbound data flows, allowing you to provide CIR/EIR billing to end users. Smile uses the percentile data to generate billing events, giving you a great deal of flexibility when providing data transit services. It is possible for you to provide your customers with industry-leading 95th percentile committed information rate – using a 2 minute sampling interval, and with zero sampling gap.

### Shaping and Throttling
Flow Control’s integration with Smile incorporates the ability to perform shaping and rating on services using Flow Control as their primary traffic measurement point. Shaping can be performed via the Smile message bus, or by using SNMP OIDs or RADIUS CoA/PoD. Smile can shape using the source router, or via a centralised traffic shaping appliance.

### Multiple Interfaces
Flow Control can use SNMP to measure multiple, geographically separated interfaces – and aggregate them into a single customer traffic flow figure before computing the traffic percentile. Flow Control takes into account network latency and interface redundancy issues automatically. This allows you to provide CIR/EIR data charges for aggregate network utilisation regardless of which ingress/egress interfaces the customer uses.

### Easy on the NOC
Network operators can provision a new interface for a customer and start billing them – without leaving the command line. All interfaces polled by Flow Control can contain a customer identifier in their interface description. Descriptors containing a customer identifier are automatically added to Flow Control’s customer aggregation database and are included in the aggregate percentile measurements – meaning that billing a new interface will occur automatically, without the need to explicitly configure the interface in Smile or in Flow Control.

### Collection and Graphing
Flow Control maintains an archive of all samples, which can be graphed or presented to end-users for both automated billing purposes and as an anti-repudiation measure. The data can also be mined for traffic analysis purposes. On suitably equipped hardware, Flow Control also store copies of the raw NetFlow data for later analysis.

Smile software integration with Flow Control includes the ability to graph the Flow Control samples, and to display network utilisation graphs to both operators and, via Smile’s customer portal, to end-users.

### Cloud Availability
An SNMP-only version of Flow Control is available from Inomial as a cloud service. However, due to the amount of data generated by NetFlow, the NetFlow features of Flow Control are only available for installation on your own server equipment.