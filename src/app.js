import  express  from "express";
import empleadosRutas from './routes/empleados.ruta.js'
import indexRutas from './routes/index.ruta.js'


const app = express();

app.use(express.json())

app.use(indexRutas);
app.use('/api',empleadosRutas);

app.use((req, res, next) =>{
    res.status(404).json({
        mensaje: "Ruta no encontrada"
    })
})

export default app;
