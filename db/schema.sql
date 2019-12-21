-- CREATE DATABASE  listings

CREATE TABLE listings (
    listingID SERIAL PRIMARY KEY,
    images TEXT[],
    rooms INT,
    occupancy INT,
    reviews INT,
    ratings INT,
    locashun VARCHAR(300),
    price INT,
    similars integer[]
);

