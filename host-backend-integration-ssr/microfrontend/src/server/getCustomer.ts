
export default async (customerId: string) => {
    if (customerId !== '1000') {
        return null;
    }

    // Delay this a bit
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
        lastName: 'Subrahmanya',
        firstName: 'Anna',
    };
}
