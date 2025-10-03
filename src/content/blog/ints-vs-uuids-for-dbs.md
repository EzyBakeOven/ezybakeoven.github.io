---
title: "Should You Use Ints or UUIDs as Primary Keys?"
date: "2025-10-09"
description: "Why Ints are more performant as Primary Keys rather than UUIDs. This blog post relfects on the cases when Ints are more performant, and when UUIDs should still be used."
tags: ["Databases", "Backend", "Primary Keys", "development"]
author: "Matt Hoy"
---

# Should You Use Ints or UUIDs as Primary Keys?

When I was studying at Uni, I always remember just using an auto incrementing int as a primary key. When I started my first job I was told to use UUIDs and I never questioned it. Since then I have always been using UUIDs as PKs. It was not until I had an issue with a database, there was a journal table that had close to a million rows, where MySQL started really taking its sweet time to add new rows. After investigation it was because when adding a  new row, it had to redo the index on the primary key column. These were UUIDs, which are quite large, and are not deterministic. 

## The case for UUIDs

UUIDs are amazing. A Universally unique identifier, that is **globally unique in space and time**. That is pretty impressive. Pretty useful too. This means that if you were to merge databases, our PKs would not conflict. If I call `UUID()` on my computer and you do `UUID()` on yours, we would never get the same value. This allows for interoperability across machines and systems ensuring that IDs remain unique. This impressive feat comes at a trade off though. Readability, and size, its 128 bits. An int is either 16 or 32 bits depending on the system, but in Databases its typically 32 bits.

### Pros

- **UUIDs are unique** across databases, tables, computers, systems, this allows for interoperability across systems without conflicts.
- UUIDs are safer for cyber security, if you have a User ID in your URL and its an auto incrementing number, its much easier to guess someones ID. It also looks more professional to have a UUID in a URL.

### Cons

- Storing UUIDs costs more, in both disk storage and RAM.
- They are **not human readable** which makes working with them slightly difficult.
- UUIDs can cause **performance issues** particularly when you have large tables.
- UUIDs add complexity to your Databases. Inserts can sometimes require converting them to Binary, and then reading you need to convert it back into the same UUID.

So far for me, the only argument for using a UUID is security. That said, you still don't need to use a UUID as the PK, as you could have a column for a public identifier, which is a UUID, and the PK column still can use an auto incrementing `int`. Hang on? So you don't care about having a unique identifier across systems? No. Not really. Foreign Keys (FK) do not need to be unique. I have never had to integrate with another system and have used a FK as a primary key, nor would I. Assumptions are dangerous, and assuming ID's to remain static in a foreign system and relying on them, is risky. That's why we have FK columns.

### The Technical Argument against UUIDs



## The case for an Auto Incrementing Int


## Which one should you use?


