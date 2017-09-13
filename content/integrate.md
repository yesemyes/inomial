+++
title = "Integrate"
date = 2017-07-25T12:20:05+04:00
type = "page"
layout = "single"
img = "/page-img/integrate.jpg"
+++

Integrate, manage and aggregate your different platforms with Inomial’s billing systems, service management tools and workflows using our APIs, services and support. We provide everything your team needs to build an integrated, fully managed and billable product catalog.

Our APIs support integration with hardware, software, services, vendors, agents, acquisitions and more.

All our APIs are documented and supported by the team at Inomial HQ.

### Integration Scenarios

Smile is intended to be integrated into your existing infrastructure, including your back-end services and your front-end customer portal.


{{< figure class="text-center" src="/page-img/IntegrationDiagram1-e1441259014122-940x837.png" width="70%" alt="Integration Scenarios" >}}

We support five broad integration scenarios:

<strong>Back-end integration:</strong> Smile provides a framework and APIs to integrate back end services into Smile for ordering, billing, provisioning, management and policy enforcement.

<strong>Front-end integration:</strong> Smile provides APIs to authenticate customers and provide billing (including invoice rendering), help desk, usage and other services intended to provide end-user self-service.

<strong>Mediation:</strong> Smile provides a framework and file formats to support ingestion and rating of usage data.

<strong>Payment gateways:</strong> Smile supports any number of credit card payment providers, non-card providers, and includes a PCI-DSS compliant PAN storage back-end.

<strong>Financial systems:</strong> Smile provides everything necessary to integrate with even the most complex general ledger system. Currency conversions and drift, deferred income, sales categorisation and much more can be transmitted to a GL. In addition, transactions from other systems can be imported and managed by Smile; in fact, Smile is the ideal platform for integrating multiple billing systems into a cohesive customer experience.

### Inbound APIs

Smile’s incoming SOAP APIs provide services including invoicing, payments, ordering, status, query, ticketing, workflows, usage and much more. Customised service definitions with user-defined fields are treated as first class citizens in our APIs.

{{< figure class="text-center" src="/page-img/PortalIntegration-e1441258015535.png" width="70%" alt="Inbound APIs" >}}

Inbound APIs are called on-demand by your application. In general, anything you store in Smile can be accessed and manipulated by our APIs.

For billing purposes, Smile provides an advanced API pattern called Propose-Offer-Commit. This pattern is used deal with use cases where an API change may cause changes to an end-user’s billing. When a POC pattern is used, you Propose the change by sending a change proposal to Smile; Smile returns a document containing an Offer, which can be presented to a customer; and if the customer accepts the Offer, you Commit the change – along with any required modifications for billing – back to Smile.

### Outbound APIs

Smile’s outbound API is a <a href="https://stomp.github.io/" target="_blank">STOMP</a> based real-time messaging protocol. Whenever an event occurs in Smile, it is published to all subscribers. Smile API messages are transactional and guaranteed to be delivered, making synchronisation between Smile and your external applications a breeze.

Smile Outbound APIs include messages for invoicing, payments, credit management, service ordering, service provisioning, usage alerting, notifications, workflows, policy enforcement, and much more.

### Policy Management

Smile provides a vendor-neutral policy management and enforcement framework. Define any policies – such as bandwidth, QoS, TV definition, walled garden, etc – in a device-independent way, and let the integration module translate the policy into user-visible changes.

{{< figure class="text-center" src="/page-img/PolicyDiagram-e1441259210384-940x714.png" width="70%" alt="Inbound APIs" >}}

Policies directly support <a href="/automate">automation</a> because they can be used to control the behaviour of a service from the customer’s point of view. Device-neutral policies can be transparently implemented simultaneously on different kinds of hardware, giving your users a seamless and consistent experience – regardless of the technology in use.

### Integration Products

In addition to our extensive integration APIs, Inomial provides the following industry-specific integration modules:

* <a href="/solutions/federadius">Federadius</a>: a distributed, fault-tolerant RADIUS AAA and policy enforcement server for ISPs and carriers, supporting real-time shaping, walled gardens and much more;
* Popcorn: a distributed, fault tolerant, real-time VoD purchasing and authorisation system for Pay TV;
* <a href="/solutions/bigrating">BigRating</a>: a real-time, high performance CDR, usage and event rating, reconciliation and policy management engine for VoIP, PSTN, ISP and more;
* INS: DOCSIS CMTS integration service incorporating DHCP, TFTP, and CPE SNMP. Provides automatic shaping over DOCSIS, and other policy enforcement.
* Data migration and importation tools.
* Customer contact APIs and implementations for email, SMS, set top box, and more.