import{ Product } from "../../data/products.js";


describe('test suit: product', () => {
    it('has correct properties and method', () => {
        const product = new Product({
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
            stars: 4.5,
            count: 87
            },
            priceCents: 1090,
            keywords: [
            "socks",
            "sports",
            "apparel"
            ]
        });

        // ✅ property tests
        expect(product.name).toEqual(
        "Black and Gray Athletic Cotton Socks - 6 Pairs"
        );

        expect(product.priceCents).toEqual(1090);

        // ✅ method test
        expect(product.getPrice()).toEqual('$10.90');
    })
});