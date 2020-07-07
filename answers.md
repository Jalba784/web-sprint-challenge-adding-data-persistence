## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Explain the difference between `Relational Databases` and `SQL`.

        A relational database is a system whose data is stored in tables. A table consists of 
        different columns of data. Many rows can exist within these tables and these rows 
        should not be identical in theory, so as not to create data anamolies. All these tables
        all related to each via primary keys and foreign keys. SQL on the other hand is a 
        standard language designed to manage relational databases. Basically, SQL can run 
        queries on these relational databases. 

2. Why do tables need a `primary key`?

        Primary keys provide a certain uniqueness for tables. A primary key also provides an 
        anchor to relate a different table to its foreign key.

3. What is the name given to a table column that references the primary key on another table.

        Foreign Key

4. What do we need in order to have a _many to many_ relationship between two tables.

        The first table needs to have multiple records that are associated with 
        multiple records from the second table. And vice versa, the second table should 
        have multiple records that are associated with the first table.