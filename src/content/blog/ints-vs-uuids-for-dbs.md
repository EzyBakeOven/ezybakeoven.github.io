---
title: "Should You Use Ints or UUIDs as Primary Keys?"
date: "2025-10-09"
description: "Why Ints are more performant as Primary Keys rather than UUIDs. This blog post relfects on the cases when Ints are more performant, and when UUIDs should still be used."
tags: ["Databases", "Backend", "Primary Keys", "development"]
author: "Matt Hoy"
---

# Should You Use Ints or UUIDs as Primary Keys?

When I was studying at Uni, I always remember just using an auto incrementing int as a primary key. It was easy. When I started my first job I was told to use UUIDs and I never questioned it. It just seemed the professional thing to do. Since then I have always been using UUIDs as PKs. It wasn't until I had an issue with a database table being too large. Adding new rows was taking too long. This table had over a million rows. After investigating, it became clear it was because when adding a new row, it had to redo the index on the primary key column which takes a long time. This is because UUIDs are random, and B-Trees like incrementing values.

## Why did using a UUID slow down inserts?

To understand why, you first need to know why sequential IDs are better as primary keys. A B-Tree is a balanced tree structure, new keys are inserted in order, this keeps the tree balanced and searchable. Random inserts from UUIDs require the tree to re-balance more often. New values from a UUID can land anywhere in the tree, this forces the B-tree to insert into the middle, which may trigger a re-balance, which makes inserts slower and indexes larger. 

## The case for UUIDs

UUIDs are amazing. A Universally unique identifier, that is **globally unique in space and time**. That is pretty impressive. Pretty useful too. This means that if you were to merge databases, our PKs would not conflict. If I call `UUID()` on my computer and you do `UUID()` on yours, we would never get the same value. This allows for interoperability across machines and systems ensuring that IDs remain unique. This impressive feat comes at a trade off though. Readability, and size, its 128 bits. An int is either 16 or 32 bits depending on the system, but in Databases its typically 32 bits.

### Pros

- **UUIDs are unique** across databases, tables, computers, systems, this allows for interoperability across systems without conflicts.
- UUIDs are safer for cyber security, if you have a User ID in your URL and its an auto incrementing number, its much easier to guess someones ID. It also looks more professional to have a UUID in a URL.

### Cons

- Storing UUIDs costs more, in both disk storage and RAM.
- They are **not human readable** which makes working with them slightly difficult.
- UUIDs can cause **performance issues** particularly when you have large tables.
- UUIDs add complexity to your Databases. Inserts can sometimes require converting them to Binary, and then when reading you need to convert it back into the same UUID.

In most cases the only argument for using a UUID is security. That said, you still don't need to use a UUID as the PK, as you could have a column for a public identifier, which is a UUID, and the PK column still can use an auto incrementing `int`. It's important to remember to use complexity where its needed and not because its fancy.

# What Did I Learn?

It's good to question things, it's good to ask if the way you have been doing things is still required. Following established conventions in code bases is part of being a good engineer. If you see something that could be done better, or may be just wrong. Fix it, if it's a fast fix, do it. If it'll take time then speak to your team about it and advocate for it. Be the change you want to see in the world. 

---

