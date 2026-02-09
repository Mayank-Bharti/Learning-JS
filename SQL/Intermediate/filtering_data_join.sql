-- Where Operators:
--      1. comparison operators(=,<>,=!,>,>=,<,<=): compare two values.
--      2. Logical operators(AND,OR,NOT): Use to combine multiple conditions using this operators.
--      3. Range operators(BETWEEN): check whether values falls with in specific range.It has lower boundary and upper boundary and boundries are inclusive.
--      4. Membership operator(IN AND NOT IN): check whether value is in list or not in list.
--      5. SEARCH OPERATOR(LIKE): To search specific thing in a text.


-- % → any number of characters
-- _ → exactly one character

-- 1. COMPARISON OPERATORS:

-- Employees with salary equal to 40000
SELECT * FROM Employees
WHERE Salary = 40000;

-- Employees not from IT department
SELECT * FROM Employees
WHERE Dept <> 'IT';

-- Employees older than 28
SELECT * FROM Employees
WHERE Age > 28;

-- Employees with salary greater than or equal to 50000
SELECT * FROM Employees
WHERE Salary >= 50000;

-- 2. LOGICAL OPERATORS:

-- Employees from IT department AND salary > 45000
SELECT * FROM Employees
WHERE Dept = 'IT' AND Salary > 45000;

-- Employees from HR OR Finance department
SELECT * FROM Employees
WHERE Dept = 'HR' OR Dept = 'Finance';

-- Employees NOT from Delhi
SELECT * FROM Employees
WHERE NOT City = 'Delhi';

-- 3. RANGE OPERATORS:

-- Employees with salary between 40000 and 60000
SELECT * FROM Employees
WHERE Salary BETWEEN 40000 AND 60000;

-- Employees aged between 25 and 35
SELECT * FROM Employees
WHERE Age BETWEEN 25 AND 35;

-- 4. MEMBERSHIP OPERATORS:

-- Employees working in IT or HR
SELECT * FROM Employees
WHERE Dept IN ('IT', 'HR');

-- Employees not from Delhi or Mumbai
SELECT * FROM Employees
WHERE City NOT IN ('Delhi', 'Mumbai');

-- 5. SEARCH OPERATOR:

-- Names starting with 'R'
SELECT * FROM Employees
WHERE Name LIKE 'R%';

-- Names ending with 'a'
SELECT * FROM Employees
WHERE Name LIKE '%a';

-- Names containing 'it'
SELECT * FROM Employees
WHERE Name LIKE '%it%';

-- Names with exactly 4 letters
SELECT * FROM Employees
WHERE Name LIKE '____';

-- How to combine two tables? 

-- 1. Either by rows=> Talking about set operators. Combine using rows first keep all rows of A or B then keep rows of B then A.

-- 2. Or by columns  => talking about joins: if there are 2 tables i.e. A(Left table) and B(Right Table) then We join both table in AB or BA.

-- For Joins: 4 types: Inner join, Full join, Left Join, Right Join.
-- For Set: 4 types: UNION, UNION ALL, EXCEPT(MINUS), INTERSECT

-- In order to join the tables, we have to define key columns of two tables.

-- Requirement of combining tables using the set operators, the tables in query should has exact same no of columns.


-- SQL JOINS: 

-- Note: Column Ambiguity: Add the table name before the column to avoid confusion in joins with same-named columns. like customes.id, orders.id, etc.

-- Get all customers along with their orders but only for customers who have placed an order without using INNER JOIN.

-- LEFT JOIN + NOT NULL condition = INNER JOIN


SELECT *
FROM customers AS c
LEFT JOIN orders AS o
ON c.id = o.customer_id
WHERE o.customer_id IS NOT NULL;


-- How to choose between join type:

-- combining 2 tables=> result only matching data=> INNER JOIN
--                |==> needed all data (all rows)=> 
--                one side more important than other                    (master table) => left join 
--                Both important/both sides => FULL JOIN 

--                |==> Only unmatching data=> one side(master table)=> left antijoin 
--                both side important=> full antijoin 



-- Examples: Using salesDB, Retrieve a list of all orders, along with the related customer, product, and employee details. For each orders, display: orderid, customer's name, producct name, sales amount, product price, salesperson's name.



