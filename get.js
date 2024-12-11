import express from 'express';
const app =  express()

const port = 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

app.get('/hello', (req, res) => {
    res.json({message: 'funcionando'});
})

export default app