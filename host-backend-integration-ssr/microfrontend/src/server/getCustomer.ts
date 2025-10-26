
export default async (customerId: string) => {
    if (customerId !== '1000') {
        return null;
    }
    return {
        lastName: 'Subrahmanya',
        firstName: 'Anna',
    };
}
