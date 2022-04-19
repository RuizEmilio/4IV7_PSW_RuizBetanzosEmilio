/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Control;


import java.sql.*;
/**
 *
 * @author emili
 */
public class Conexion {
    
    public static Connection getConnection (){
        String url , nomUsu , contraseña;
        
        url = "jdbc:mysql://localhost/registro";
        nomUsu = "root";
        contraseña = "root";
        
        Connection con = null;
        
        try{
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection(url, nomUsu, contraseña);
            System.out.println("Se conecto a la base de datos");
        }
        catch(Exception e){
            System.out.println("No se conecto a la base de datos");
            System.out.println(e.getMessage());
        }
        return con;
    }
    
}