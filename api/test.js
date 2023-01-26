export default async function getUsers (req, res) {
    res.status(200).json([{ name: 'john', email: 'emailss'}]);
}