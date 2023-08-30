import {pool} from '../db.js'

//buscar un empleado
export const getEmpleado = async (req, res) => {
    
   try {
    const [rows] = await pool.query('select * from empleados where id = ?', [req.params.id])    
    // console.log(rows)
    if(rows.length<=0) return res.status(404).json({
        mensaje: 'Empleado no encontrado'
    })

    
     res.json(rows[0])
   } catch (error) {
    return res.status(500).json({
        mensaje:'Halgo salió mal'
    })
   }
    }

    //buscar todos los empleados
export const getEmpleados = async (req, res) => {
    // manejo de errores con try catch
    try {
        const [rows] = await pool.query('select * from empleados')
        res.json(rows)        
    } catch (error) {
        return res.status(500).json({
            mensaje:'Halgo salió mal'
        })
    }

}

export const CrearEmpleados = async (req, res) => {
    const {nombre, salario} = req.body;
       
        try {
            const [rows] = await pool.query('insert into empleados (nombre,salario) values (?,?)',[nombre, salario])
         res.send({
            id: rows.insertId,
            nombre,
            salario
        })
        } catch (error) {
            return res.status(500).json({
                mensaje:'Halgo salió mal'
            })
        }
    
    }


export const deleteEmpleados = async (req, res) => {
   
   try {
    const [result] = await pool.query('delete from empleados where id = ?', [req.params.id])    
    // console.log(rows)
    if(result.affectedRows <= 0) return res.status(404).json({
        mensaje: 'Empleado no encontrado'
    })
    
     res.sendStatus(204);
   } catch (error) {
    return res.status(500).json({
        mensaje:'Halgo salió mal'
    })
   }
}



export const putEmpleados = async (req, res) => {
    const {id} = req.params
    const {nombre, salario} = req.body
    
    try {
        const [result] = await pool.query('update empleados set nombre= IFNULL(?,nombre), salario = IFNULL(?, salario) where id = ?', [nombre,salario, id])    
     console.log(result)
    if(result.affectedRows === 0) return res.status(404).json({
        mensaje: 'Empleado no encontrado'
    })
    
   try {
    const [rows] = await pool.query("select * from empleados where id = ?",[id])
    res.json(rows[0]);
   } catch (error) {
    return res.status(500).json({
        mensaje:'Halgo salió mal'
    })
   }
    } catch (error) {
        return res.status(500).json({
            mensaje:'Halgo salió mal'
        })
    }
}


// export const CrearEmpleados = (req, res) => {
// const {nombre, salario} = req.body;
//      pool.query('insert into empleados (nombre,salario) values (?,?)',[nombre, salario])
//      res.send('post success')

// }