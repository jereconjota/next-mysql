export default function handler(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        products: [
        {
            id: 1,
            name: 'Product 1',
            price: 10,
            description: 'This is a product',
            image: 'https://picsum.photos/id/1/200/300'
        },
        {
            id: 2,
            name: 'Product 2',
            price: 20,
            description: 'This is a product',
            image: 'https://picsum.photos/id/2/200/300'
        },
        {
            id: 3,
            name: 'Product 3',
            price: 30,
            description: 'This is a product',
            image: 'https://picsum.photos/id/3/200/300'
        },
        {
            id: 4,
            name: 'Product 4',
            price: 40,
            description: 'This is a product',
            image: 'https://picsum.photos/id/4/200/300'
        }
        ]
    }));
}