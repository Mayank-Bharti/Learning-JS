-- DDL Commands never ruturns data, it is changing the structure of database.


--  USE OF CREATE Command for DDL:

-- create new tables called persons with columns: id, 
-- person_name, birth_date and phone_no

USE mayankdb;
CREATE TABLE persons (
     id INT NOT NULL,
     person_name VARCHAR(50) NOT NULL,
     birth_date DATE,
     phone_no VARCHAR (15) NOT NULL,
     CONSTRAINT pk_persons PRIMARY KEY (id)
)

-- USE OF ALTER Command: Just change structure of table by adding columns to it.
-- Add new column called email to the person's table

ALTER TABLE persons
ADD email VARCHAR(50) NOT NULL DEFAULT '';

-- USE OF DROP Command: to remove columns from table.

-- Remove the column phone_no from the person table:
ALTER TABLE persons
DROP COLUMN phone_no;

-- Delete the table persons from the database.

DROP TABLE persons;
 
--  DML: Use for manipulate or modify data.
-- Commands like INSERT, UPDATE, DELETE are DML Commands.

-- 2 method to insert data in a table:
-- 1. Manually entrying values:
     
     -- OPTIONAL if no columns are specified SQL expects values for all columns.

     -- INSERT INTO table_name(col1,col2,col3,...)
     -- VALUES (val1,val2,val3,...)

     -- Rule: 1. Match the no. of columns and values.
               -- MATCHING DATATYPES RULES, COLUMN COUNTS AND CONSTRAINTS.
          --  2. We can skip columns if you insert values for every column but
               --   always list columns explicitly for clarity and maintainability.
          --  3. Columns not included in INSERT become NULL (unless a default or constraint exists)

-- Examples:
-- Manually inserting data in a table syntax:

INSERT INTO persons(id,person_name,birth_date,phone_no)
VALUES 
      (6, 'Mayank', '2026-02-06', '9142673771'),
      (7, 'Ishika', '2026-02-07', '9142673771');

INSERT INTO persons
VALUES 
      (8, 'Mayank Bharti', '2026-02-06', '9142673771');

-- 2. Copy data or select data from source table and use this result 
     --  to insert in target table.

-- Copy data from customers table insert in persons table.

INSERT INTO persons(id,person_name,birth_date,phone_no)
SELECT 

id,
first_name,
NULL,        --Birth date is not there in customers table.
'UNKNOWN'    --phone no is not there in customers table.

FROM customers

-- USE OF UPDATE COMMAND: Change data of already existing rows.

-- UPDATE Syntax:

UPDATE table_name 
     SET column1 = value1, 
         column2 = value2 
     WHERE <condition>
-- Note: Always use WHERE to avoid updating all rows unintentionally.

-- e.g. 1. Change the score of customer with ID 10 to 0 and update the country to 'UK';

UPDATE customers
     SET score=0,
         country='UK'
     WHERE id=10
SELECT *
FROM customers
WHERE id=10

-- Best Practice: Check with SELECT before running UPDATE to avoid updating the wrong data.

-- e.g. 2. Update all customers with a NULL score by setting their score to 0

UPDATE customers
     SET score=0
     WHERE score IS NULL
SELECT *
FROM customers
WHERE score IS NULL


-- USE OF DELETE COMMAND: It remove rows from our table and we can do using command DELETE.

-- DELETE SYNTAX:

DELETE FROM table_name 
WHERE <condition> 

-- Note: Always use WHERE to avoid Deleting all rows unintentionally.

-- e.g. 1. Delete all customers with an ID greater than 5:

DELETE FROM customers
WHERE id>5

SELECT *
FROM customers
WHERE id>5

-- Best Practice: Check with SELECT before running DELETE to avoid deleting wrong data.

-- e.g. 2. DELETE all data from the persons table:

-- TRUNCATE : Clears the whole table at once without checking or logging.It is way faster than DELETE which is good for deleting large tables where DELETE command is too slow because of lot of things is happening behind the scenes like logs and protocols. In case of truncate, database skip those extra stuff and it is going to be very fast.

DELETE FROM persons  --slow for large tables.

TRUNCATE TABLE persons  --for large tables, it is gonna fast.

