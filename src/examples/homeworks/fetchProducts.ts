//mocks server call
export default () => {
    return new Promise((resolve) => {
        const products = [
            {name: '', price: 50}
        ];

        setTimeout(() => {
            resolve(products);
        }, 500);
    });
}