import express from 'express';
import mongoose from 'mongoose';
import Product from './models/product.model.js';
import productRoute from './routes/product.route.js'


const app = express();
const PORT = 3000;

app.use(express.json());

// Get_________________________________________________________

app.get("/", (req, res) => {
    res.send("Working!");
});

// routes
app.use("/api/products", productRoute);

// app.get('/api/products', async (req, res) => {
//     try {
//         const all_products = await Product.find({})
//         res.status(200).json(all_products);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// app.get('/api/products/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//         const products = await Product.findById(id);
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });


// Post_______________________________________________________

// app.post('/api/products', async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });


// Update_____________________________________________________

// app.put('/api/products/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);

//         if (!product) {
//             res.status(404).json({message: "Product not found!"});
//         }

//         const updatedproduct = await Product.findById(id);
//         res.status(200).json(updatedproduct);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// delete a product

// app.delete('/api/products/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);

//         if (!product) {
//             res.status(404).json({message: "Product not found!"});
//         }

//         res.status(200).json({product, message: "Deleted successfully"});

//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// })



// Connection_________________________________________________

mongoose.connect("mongodb+srv://xe000054:1234@cluster0.ybsyznr.mongodb.net/curd")
.then(() => {

    app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`)
    });
    console.log("Connected to database!");
})
.catch(() => {
    console.log("Connection failed!");
});
