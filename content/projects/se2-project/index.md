---
title: Software Engineering II Project
date: "2021"
description: "RASD, DD, Implementation and Testing of a Software to handle queues for supermarkets during an epidemic."
---

This project completely replaced my exam of Software Engineering 2, and it was super-useful to understand how a RASD (Requirement Analysis and Specification Document), DD (Design Document) and other documentations work in Software Development; in particular, understanding the possible edge-cases of each proposal has been really interesting.

The project consisted in designing a system to allow customers of a supermarket to join a remote queue for a physical supermarket in order to avoid groups of people in front of stores.

At the end a client could join a queue by signing up with their phone number, and get a ticket for their reservation. Store employees could then verify that ticket by scanning its QR code and validating it against the DB.

We also performed full intergration testing of the project.

While the architecture was pretty classic (3-tier web application, boring...), we experimented with REST APIs and Docker to setup this project. If you want to run it, there should be detailed instruction in the [repository readme file](//github.com/QUB3X/Software-Engineering-2-Project-2021). Nothing too complicated or fancy, it's just the usual "docker-compose" stuff.

Finally we had to review another's team project testing practices and results.

## Files

_The links here point to GitHub, btw._

-  [RASD](https://github.com/QUB3X/Software-Engineering-2-Project-2021/blob/main/RASD/rasd.pdf)
-  [DD](https://github.com/QUB3X/Software-Engineering-2-Project-2021/blob/main/DeliveryFolder/dd_update-1.pdf)
-  [Implementation and Testing Document](https://github.com/QUB3X/Software-Engineering-2-Project-2021/blob/main/ITD/itd.pdf)
-  [Acceptance Test of the other Team's project](https://github.com/QUB3X/Software-Engineering-2-Project-2021/blob/main/DeliveryFolder/atd.pdf)

## Other Contributors

-  [Luigi Fusco](https://github.com/LuigiFusco)
-  [Ian Di Dio Lavore](https://github.com/ian-ofgod)

## Repo

[Here's the link to the GitHub repository](https://github.com/QUB3X/Software-Engineering-2-Project-2021).
