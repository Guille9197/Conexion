const connection = require("./conexion");

const queries = [];

queries.getVentas =async ()=>{
    
    let sqlAutolavado = `SELECT * FROM ventasautolavado NATURAL JOIN usuarios ORDER BY fecha`;
    let sqlTienda = `SELECT * FROM ventastienda NATURAL JOIN usuarios ORDER BY fecha `;    
        
    return new Promise((resolve, reject) => {
        connection.query(`${sqlAutolavado}`, (err, rows) => {
            const resultado = {autolavado: null, tienda: null};
            if (err ){                
                reject(err);
            }else{                
                resultado.autolavado = rows;
                connection.query(`${sqlTienda}`, (errT, rowsT) => {
                    if (err ){                        
                        reject(errT);
                    }else{
                        resultado.tienda = rowsT;                        
                        resolve(resultado);
                    }        
                });
            }        
        }) 
    });
}

queries.getVentaById = async (id)=>{
    
    let sqlAutolavado = `SELECT * FROM historialventas H 
                        JOIN ventasautolavado V ON H.id_ventasAutolavado = V.id_ventasAutolavado 
                        NATURAL JOIN usuarios
                        WHERE id_historialVentas = ${id}`;
    
    let sqlTienda = `SELECT * FROM historialventas H 
                    JOIN ventastienda V ON H.id_ventasTienda = V.id_ventaTienda 
                    NATURAL JOIN usuarios
                    WHERE id_historialVentas = ${id}`;
        
    return new Promise((resolve, reject) => {
        connection.query(`${sqlAutolavado}`, (err, rows) => {
            const resultado = {autolavado: null, tienda: null};
            if (err || rows.length == 0){                
                reject(err);
            }else{                
                resultado.autolavado = rows;
                connection.query(`${sqlTienda}`, (errT, rowsT) => {
                    if (err || rowsT.length == 0){                        
                        reject(errT);
                    }else{                    
                        resultado.tienda = rowsT;                        
                        resolve(resultado);
                    }        
                });
            }        
        }) 
    });
}

queries.dropRow = async (id)=>{
    let obtenerId = `SELECT * FROM historialventas
    WHERE id_historialVentas = ${id};`
    let sqlBase = `DELETE FROM historialventas
    WHERE id_historialVentas = ${id};`    
        
    return new Promise((resolve, reject) => {
        connection.query(`${obtenerId}`, (err, rows) => {            
            if (err){  
                reject(err);
            }else{
                let idAutolavado = rows[0].id_ventasAutolavado;
                let idTienda = rows[0].id_ventasTienda;
                connection.query(`${sqlBase}`, (err, rows) => {            
                    if (err){  
                        reject(err);
                    }else{
                        let autolavado = `DELETE FROM ventasautolavado
                        WHERE id_ventasAutolavado = ${idAutolavado};`;                
                        connection.query(`${autolavado}`, (err, rows) => {            
                            if (err){  
                                reject(err);
                            }else{                
                                let tienda = `DELETE FROM ventastienda
                                WHERE id_ventaTienda = ${idTienda};`
                                connection.query(`${tienda}`, (err, rows) => {       
                                    console.log('va tienda')     
                                    if (err){
                                        reject(err);
                                    }else{                
                                        resolve(rows);
                                    }        
                                });
                            }        
                        });
                    }        
                });
            }
        });
        
    });
};

queries.deleteAutolavado = (id)=>{
    let sqlAutolavado = `DELETE FROM historialventas
                        WHERE id_ventasAutolavado = ${id}`;
    let autolavado = `DELETE FROM ventasautolavado
                        WHERE id_ventasAutolavado = ${id};`;

    return new Promise((resolve, reject) => {
        connection.query(`${sqlAutolavado}`, (err, rows) => {            
            if (err){                
                reject(err);
            }else{                
                connection.query(`${autolavado}`, (err, rows) => {            
                    if (err){                
                        reject(err);
                    }else{                
                        resolve(rows);
                    }        
                });
            }        
        }) 
    });
};

queries.deleteTienda = (id) =>{
    let sqlTienda = `DELETE FROM historialventas
                        WHERE id_ventasTienda = ${id}`;
    let tienda = `DELETE FROM ventastienda
                WHERE id_ventaTienda = ${id};`;

    return new Promise((resolve, reject) => {
        connection.query(`${sqlTienda}`, (err, rows) => {            
            if (err){                
                reject(err);
            }else{                
                connection.query(`${tienda}`, (err, rows) => {            
                    if (err){                
                        reject(err);
                    }else{                
                        resolve(rows);
                    }        
                });
            }        
        }) 
    });
};

module.exports = queries;