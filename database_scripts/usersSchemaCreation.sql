--CREATE TABLE users.admin(
--	[admin_id] BIGINT CONSTRAINT admin_id_pk PRIMARY KEY DEFAULT next value for store.user_id,
--	[first_name] VARCHAR(20) NOT NULL,
--	[last_name] VARCHAR(20) NOT NULL,
--	[mobile_number] BIGINT NOT NULL,
--	[mail_id] VARCHAR(50) NOT NULL UNIQUE,
--	[password] VARCHAR(MAX) NOT NULL
--)

-- for admin I created only one user it is enough

--CREATE TABLE users.customers(
--	[customer_id] BIGINT CONSTRAINT customer_id_pk PRIMARY KEY DEFAULT next value for store.user_id,
--	[first_name] VARCHAR(20) NOT NULL,
--	[last_name] VARCHAR(20) NOT NULL,
--	[mobile_number] BIGINT NOT NULL,
--	[mail_id] VARCHAR(50) NOT NULL UNIQUE
--)

--CREATE table store.store(
-- [store_id] INT CONSTRAINT store_id_pk PRIMARY KEY IDENTITY,
-- [store_name] VARCHAR(100) NOT NULL,
-- [mobile_number] CHAR(10) NOT NULL,
-- [mail_id] VARCHAR(100) NOT NULL
--)

--INSERT INTO store.store(store_name,mobile_number,mail_id)
--VALUES('store1','1234567892','store1@gmail.com'),
--('store2','1234567892','store2@gmail.com')

--CREATE TABLE users.staff(
--	[staff_id] BIGINT CONSTRAINT staff_id_pk PRIMARY KEY DEFAULT next value for store.user_id,
--	[first_name] VARCHAR(20) NOT NULL,
--	[last_name] VARCHAR(20) NOT NULL,
--	[mobile_number] BIGINT NOT NULL,
--	[mail_id] VARCHAR(50) NOT NULL UNIQUE,
--	[store_id] INT NOT NULL CONSTRAINT store_id_fk REFERENCES store.store(store_id)
--)

--INSERT INTO users.customers(first_name,last_name,mail_id,mobile_number)
--VALUES('lalith sri','kashyap','lalithxxxxx@gmail.com',9542035647),
--('vasu','ch','vasuxxxxx@gmail.com',9542035984),
--('nihanth mani','ragi','nihanthxxxxx@gmail.com',9542034123),
--('ajay','babu','ajayxxxxx@gmail.com',9542065431),
--('sai madhu','kalluri','madhuxxxxx@gmail.com',9542034238)


--INSERT INTO users.staff(first_name,last_name,mail_id,mobile_number,store_id)
--VALUES('sai madhu','kalluri','madhuxxxxx@gmail.com',9542034238,5),
--('staff','1','staff1xxxxx@gmail.com',9542035984,6),
--('staff','2','staff2xxxxx@gmail.com',9542035984,5)

--CREATE TABLE users.customers_cred(
-- [password] VARCHAR(MAX) NOT NULL,
-- [customer_id] BIGINT NOT NULL UNIQUE CONSTRAINT customer_id_fk REFERENCES users.customers(customer_id)
--)

--INSERT INTO users.customers_cred(password,customer_id)
--VALUES('saimadhu2017',24)

--CREATE TABLE users.staff_cred(
-- [password] VARCHAR(MAX) NOT NULL,
-- [staff_id] BIGINT NOT NULL UNIQUE CONSTRAINT staff_id_fk REFERENCES users.staff(staff_id)
--)

--INSERT INTO users.staff_cred(password,staff_id)
--VALUES('saimadhu2017',28)


--CREATE TABLE finance.wallet(
-- [balance] BIGINT NOT NULL,
-- [customer_id] BIGINT NOT NULL UNIQUE CONSTRAINT customer_id_fk REFERENCES users.customers(customer_id)
--)

--INSERT INTO finance.wallet(balance,customer_id)
--VALUES(0,24)

--CREATE TABLE users.customer_address(
-- [customer_id] BIGINT NOT NULL CONSTRAINT customer_id_address_fk REFERENCES users.customers(customer_id),
-- [street_door_no] VARCHAR(5000) NOT NULL,
-- [city] VARCHAR(100) NOT NULL,
-- [state] VARCHAR(100) NOT NULL,
-- [zipcode] CHAR(6) NOT NULL,
-- PRIMARY KEY([street_door_no],[city],[state],[zipcode])
--)

--INSERT INTO users.customer_address(customer_id,street_door_no,city,state,zipcode)
--VALUES(24,'4-1xx/y, xvxvx, xxxxx','lucknow','UP','226002')


--CREATE TABLE store.category(
-- [category_id] INT CONSTRAINT category_id_pk PRIMARY KEY IDENTITY,
-- [category_name] varchar(50) NOT NULL
--)

--CREATE TABLE store.brand(
-- [brand_id] INT CONSTRAINT brand_id_pk PRIMARY KEY IDENTITY,
-- [brand_name] varchar(50) NOT NULL
--)

--INSERT INTO store.category(category_name) VALUES('mobiles'),('t-shirts'),('phants'),('computers'),('electronics'),('others')
--INSERT INTO store.brand(brand_name) VALUES('samsung'),('apple'),('redmi'),('lenovo'),('peter england'),('van heusen'),('trends'),('adidas'),('puma'),('nike'),('sony')

--CREATE TABLE store.product(
-- [product_id] INT CONSTRAINT product_id_pk PRIMARY KEY IDENTITY,
-- [product_name] VARCHAR(50) NOT NULL,
-- [cost] NUMERIC(30,2) NOT NULL,
-- [brand_id] INT NOT NULL CONSTRAINT brand_id_fk REFERENCES store.brand(brand_id),
-- [category_id] INT NOT NULL CONSTRAINT category_id_fk REFERENCES store.category(category_id)
--)

-- INSERT INTO store.product(product_name,cost,brand_id,category_id)
-- VALUES('samsung galaxy M30s',15000,4,4),('iphone 13',51000,5,4),('T-shirt VH',1499,9,5),
-- ('phant VH',899,9,6),('refrigerator',40000,4,8)

--CREATE TABLE store.stock_in_store(
-- [store_id] INT NOT NULL CONSTRAINT store_id_fk REFERENCES store.store(store_id),
-- [product_id] INT NOT NULL CONSTRAINT product_id_fk REFERENCES store.product(product_id),
-- [quantity_in_store] TINYINT NOT NULL,
-- PRIMARY KEY(store_id,product_id)
--)

--INSERT INTO store.stock_in_store(store_id,product_id,quantity_in_store)
--VALUES(50,5,20),(50,6,20),(51,7,5)

--CREATE TABLE users.cart(
-- [customer_id] BIGINT NOT NULL CONSTRAINT customer_id_cart_fk REFERENCES users.customers(customer_id),
-- [store_id] INT NOT NULL CONSTRAINT store_id_cart_fk REFERENCES store.store(store_id),
-- [product_id] INT NOT NULL CONSTRAINT product_id_cart_fk REFERENCES store.product(product_id),
-- [quantity_selected] TINYINT NOT NULL CONSTRAINT chk_notzero CHECK(quantity_selected!=0),
-- [cart_id] VARCHAR(100) CONSTRAINT cart_id_pk PRIMARY KEY
--)

--CREATE TABLE users.orders(
-- [customer_id] BIGINT NOT NULL CONSTRAINT customer_id_order_fk REFERENCES users.customers(customer_id),
-- [store_id] INT NOT NULL CONSTRAINT store_id_order_fk REFERENCES store.store(store_id),
-- [product_id] INT NOT NULL CONSTRAINT product_id_order_fk REFERENCES store.product(product_id),
-- [quantity_selected] TINYINT NOT NULL CONSTRAINT chk_order_notzero CHECK(quantity_selected!=0),
-- [order_id] VARCHAR(100) CONSTRAINT order_id_pk PRIMARY KEY,
-- [order_date] DATETIME NOT NULL
-- [order_status] CHAR(1) CONSTRAINT chk_order_status CHECK([order_status] IN ('C','D','S'))
--)

-- here c=created, d=delivering and s=sucessfuly deleverd