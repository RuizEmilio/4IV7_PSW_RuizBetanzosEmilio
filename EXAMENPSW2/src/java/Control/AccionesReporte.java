/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Control;

import Modelo.Reporte;
import java.sql.*;
import java.util.*;
/**
 *
 * @author emili
 */
public class AccionesReporte {
    public static int registrarReporte(Reporte r){
        int status = 0;
        
        try{
            Connection con = Conexion.getConnection();
            String q = "insert into reportes (id_rep , fec_rep , des_rep , num_com)"
                    + "values(?,?,?,?)";
            PreparedStatement ps = con.prepareStatement(q);
            ps.setInt(1, r.getId());
            ps.setString(2, r.getFecha());
            ps.setString(3, r.getDespcripion());
            ps.setInt(4, r.getNumero());
            
            status = ps.executeUpdate();
            System.out.println("Registro de Reporte");
            con.close();
        }
        catch(Exception ed){
            System.out.println("Error al registrar Reporte");
            System.out.println(ed.getMessage());
        }
        return status;
    }
}
