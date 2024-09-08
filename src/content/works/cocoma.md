---
title: "Cocoma"
publishDate: 2023-06-01
description: "A COokie COnsent MAnager web extension, for Firefox and Chrome."
sourceUrl: https://github.com/andreafra/cocoma
tags:
    - WebExtension
    - JavaScript
    - Swift
---

While I was exploring random repos on GitHub, I found that Mozilla had a [repository](https://github.com/mozilla/cookie-banner-rules-list) for an upcoming Firefox feature that should automatically accept or reject cookie consent banners.

I've decided to try to implement that feature on my own in a web extension to test the new WebExtension API. The extension simply reads the URL, checks if it has a rule for that website, and tries to either click the "Accept" or "Refuse" button automatically, or to inject universal cookies to express the consent/withdrawal.

The result is ok - of course it doesn't work for many websites if you default to the "Refuse" option since many banners requires multiple steps, for example "All options > Save & Exit".

It doesn't collect any data, and it's very lightweight. It also features a nice dark theme, with the UI all made from scratch (and mimicking iOS).

Finally, I've also tried to port it to iOS with the new support from Safari for WebExtensions. It was definitely an interesting experience, and the new SwiftUI API is nicer than I expected.

![A screenshot of the extension](https://addons.mozilla.org/user-media/previews/full/285/285408.png?modified=1690463673)

## Download now!

-   [Firefox](https://addons.mozilla.org/en-US/firefox/addon/cocoma-cookie-consent-manager/)
-   [Chrome](https://chromewebstore.google.com/detail/cocoma-cookie-consent-man/jilggebemakcagefeopnbieakfgmknmm)
-   Safari: you'll have to build it on your own, sorry! Just open the Xcode project and compile the app.

## Source Code

[GitHub repository](https://github.com/andreafra/Cocoma)
