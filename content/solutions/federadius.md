+++
title = "Federadius"
date = 2017-07-14T13:18:42+04:00
type = "solutions"
layout = "solution"
img = "/page-img/federadius.jpg"
+++

Federadius is Inomial’s high performance, fault tolerant RADIUS AAA server for large ISPs and carriers. Combining extremely high authentication rates with a federated, fault tolerant architecture, Federadius is designed to provide authentication and accounting services for millions of simultaneous end-users, while being resilient to major network, hardware and software faults and outages.

Federadius is designed to integrate seamlessly into an existing OSS/BSS environment.

User provisioning and policy management is performed via a real-time SOAP API, which enables easy integration with existing BSS and Policy Management Engines.

Static configuration is provided by the Federadius Configuration Database, which provides a portable XML configuration format to support the development, test, staging and deployment scenarios required for carrier deployment. Configuration can be performed using the included web user interface, integrated with a configuration database, or via the simple configuration API.

Federadius provides a stream of de-duplicated, normalised delta accounting records to the BSS via the enterprise messaging bus, for rating and billing.

Of course, Federadius also includes out-of-the-box integration with Inomial’s BigRating engine and the Smile billing suite to provide a turnkey billing, authentication and accounting system for ISPs.

### Fault Tolerance
The Federadius architecture provides reliability far beyond surviving single points of failure. Each high-performance front-end RADIUS server can authenticate users independently of any other network element. Even a major outage affecting multiple data centres will not affect the FFE units, allowing customers to continue using the network.

The Federadius architecture consists of three major components: the FFE, FSC and CDB.

Federated Front End (FFE) servers are intended to be deployed physically close to network access servers including LNS, BRAS, softswitches and base stations. Proximity to the access servers improves authentication performance while also allowing resilience during a network partition. FFEs make all initial authentication and authorisation decisions locally, decoupling the process from external databases while providing incredible real-time performance. Multiple FFEs can be co-located in each POP, or access servers can be configured to use non-local FFEs as redundant backup servers.

Federated Session Controller (FSC) servers operate from centralised locations such as regional data centres. These servers are in charge of session management and accounting, and provide concurrency control. FSCs and FFEs are not dependent on one another; authentication can continue even if all FSCs are unreachable; accounting will be updated, with no lost records, once the FSCs come back online.

Configuration Database (CDB) servers are non-critical configuration repositories incorporating a web-based management tool for configuring the Federadius cluster. Configuration is dynamically pushed to all FFEs and FSCs as it is updated, ensuring that Federadius is fully tolerant of CDB server faults.

<iframe src="https://fast.wistia.net/embed/iframe/nrd26laub4" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" oallowfullscreen="oallowfullscreen" msallowfullscreen="msallowfullscreen" width="640" height="480"></iframe>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async=""></script>