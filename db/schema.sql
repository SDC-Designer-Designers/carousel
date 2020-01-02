
CREATE TABLE listings (
    listingID SERIAL PRIMARY KEY,
    images TEXT[],
    rooms INT,
    occupancy INT,
    reviews INT,
    ratings INT,
    price INT,
    similars integer[]
);

