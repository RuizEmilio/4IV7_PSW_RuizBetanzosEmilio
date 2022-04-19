/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Control;

import Modelo.Computadora;
import java.sql.*;
import java.util.*;
/**
 *
 * @author emili
 */
public class AccionesComputadora {

    public static int registrarComputadora(Computadora c){
        int status = 0;
        
        try{
            Connection con = Conexion.getConnection();
            String q = "insert into computadoras (num_com , lab_com , asi_com , bol_alu)"
                    + "values(?,?,?,?)";
            PreparedStatement ps = con.prepareStatement(q);
            ps.setInt(1, c.getNumero());
            ps.setString(2, c.getLaboratorio());
            ps.setString(3, c.getAsignatura());
            ps.setInt(4, c.getBoleta());
            
            status = ps.executeUpdate();
            System.out.println("Registro de Computadora");
            con.close();
        }
        catch(Exception ed){
            System.out.println("Error al registrar Computadora");
            System.out.println(ed.getMessage());
        }
        return status;
    }
}
