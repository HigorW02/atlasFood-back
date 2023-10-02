import app from "./app";

const port = process.env.APP_PORT || 3000;

app.get("/", (req, res) => {
    res.send("Modular Layer API Node + TypeScript!");
});

app.post('/', (req,res) => {
    res.json({ message: 'Formulário recebido com sucesso!' });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
