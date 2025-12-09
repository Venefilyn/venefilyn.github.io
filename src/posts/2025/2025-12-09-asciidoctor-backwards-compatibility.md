---
draft: true
title: "AsciiDoctor and backwards compatibility"
description: "Supporting both asciidoctor and asciidoc-py is painful."
date: 2025-11-08
tags:
  - asciidoctor
  - asciidoc
  - asciidoc-py
  - cockpit
---

While working on Cockpit our elegant [@bookwar](https://fosstodon.org/@bookwar) began converting the DocBook content over to [AsciiDoc](https://asciidoc.org). Main reason for this is for maintainability of the docs and general know-how around Fedora-community with AsciiDoc

With shifting focuses I ended up taking over the work to bring the conversion the rest of the way, but gosh did I encounter a lot of problems and I'm sure we'll get more

## AsciiDoctor

In general, having used [AsciiDoctor](https://asciidoctor.org/) for parsing AsciiDoc files has been great. Barely encountered issues but there were general asciidoc syntax woes with docbook to asciidoc with pandoc.

AsciiDoctor is available in a lot of distributions but it wasn't in two distributions that Cockpit distributes to, namely RHEL and CentOS Stream, which meant we can't use it during build-time to generate docs. For those distributions we have to rely on something else, namely the legacy [asciidoc-py](#asciidoc-py).

But AsciiDoctor generates very nice HTML pages with great style, and Manpages that look and function well.

## asciidoc-py

Here is where issues start to appear, not only did we run into limitations with [asciidoc-py](https://asciidoc-py.github.io/) that is no longer an issue with [AsciiDoctor](#asciidoctor), I decided we should be AsciiDoctor first and asciidoc-py second. Which means using AsciiDoctor for most distributions and fallback to asciidoc-py when AsciiDoctor isn't available.

### Relative leveloffset

This might look like a small issue but something that I tried solving for a day or two before I found anything useful. 

- What works on AsciiDoctor
- What I thought worked on asciidoc-py but turned out to be AsciiDoctor specific
- Where AsciiDoctor complained and where asciidoc-py complained
- The hack or workaround I created

I did find an email in the now-abandoned asciidoc mailing list by Jeremiah Leary that helped me a lot. It taught me not only about the issue existing for others, but that it counter and eval was a think you can use!

> Well, that worked on the way down the hierarchy, but coming up had some 
> issues.  So the complete solution looks like this:
> 
> ```asciidoc
> :leveloffset: {counter:leveloffset}
> 
> include::<filename>
> 
> :leveloffset: {eval:{leveloffset} - 1}
> ```
> 
> Now any of my files can be rendered at any level of document hierarchy.
>
> [Jeremiah Leary on asciidoc@googlegroups.com mailing list](https://www.mail-archive.com/asciidoc@googlegroups.com/msg05053.html)

## Asciidoc confusion

- admonition limitations
- definition lists and indentation
- definition lists and literal blocks/code blocks

## Cockpit and future of docs

{# FIXME: Refine #}
While asciidoc migration took way longer than I wanted, we aren't really there yet! I still want to get us over to [Antora](https://antora.org/) to make the Cockpit documentation look better than it currently does. I want something that is made for documentation and not just our own pages wrapped in our Cockpit website.
