---
title: PIACERE Model Checker and Synthesis of IaC
publishDate: 2022-10-01
description: "My contribution to an European DevSecOps framework. Part of my master thesis."
tags:
   - DevSecOps
   - Model Checking
   - IaC
   - Z3
   - Python
   - Research
---

As part of my master thesis, I've been working on PIACERE project with prof. [Matteo Pradella](https://pradella.faculty.polimi.it) and [Michele Chiari](https://michiari.github.io).

[PIACERE](https://www.piacere-project.eu) is a **DevSecOps** framework running on Eclipse (🤮) that features its own high-level, provider-indipendent IaC language called [DOML](https://www.piacere-doml.deib.polimi.it), developed at Polimi, too. 

I continued the previous work of Michele Chiari and Michele De Pascalis on a **Model Checker** that uses the **Z3 SMT solver** to verify that the DOML model satisfies structural and architectural requirements. In particular I developed a **Domain Specific Language** to let users write custom requirements in first-order logic, and prototyped **synthesis of IaC** through an SMT solver, basically generating a complete model starting from an incomplete one. 

I've been maintaining the tool, since November 2022 till the end of the project in November 2023.

## Links
Here are the relevant links of our work, if you are really interested:
- [Thesis](https://www.overleaf.com/read/tzkkskbgyrvn)
- [Thesis - summary](https://www.overleaf.com/read/kmtvpfnqjqqg)
- [The DSL of the Model Checker](https://piacere-model-checker.readthedocs.io/)
- [Model Checker GitHub repository](https://github.com/andreafra/piacere-model-checker)
