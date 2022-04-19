/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Control;

import Modelo.Alumno;
import java.sql.*;
import java.util.*;
/**
 *
 * @author emili
 */
public class AccionesAlumno {
    
    public static int registrarALumno(Alumno a){
        int status = 0;
        
        try{
            Connection con = Conexion.getConnection();
            String q = "insert into alumnos (nom_alu , app_alu , apm_alu , bol_alu , tel_alu , gru_alu , fot_alu)"
                    + "values(?,?,?,?,?,?,?)";
            PreparedStatement ps = con.prepareStatement(q);
            ps.setString(1, a.getNombre());
            ps.setString(2, a.getApp());
            ps.setString(3, a.getApm());
            ps.setInt(4, a.getBoleta());
            ps.setInt(5, a.getTelefono());
            ps.setString(6, a.getGrupo());
            ps.setString(6, a.getFoto());
            
            status = ps.executeUpdate();
            System.out.println("Registro de Usuario Alumno");
            con.close();
        }
        catch(Exception ed){
            System.out.println("Error al registrar Alumno");
            System.out.println(ed.getMessage());
        }
        return status;
    }
    
    public static int actualizarALumno(Alumno a){
        int status = 0;
        
        try{
            Connection con = Conexion.getConnection();
            String q = "update alumnos set nom_alu = ? , app_alu = ? ,"
                    + "apm_usu = ? , bol_usu = ? , tel_alu = ? , gru_alu = ? , "
                    + "fot_alu = ?"
                    + " where bol_alu = ?";
            PreparedStatement ps = con.prepareStatement(q);
            ps.setString(1, a.getNombre());
            ps.setString(2, a.getApp());
            ps.setString(3, a.getApm());
            ps.setInt(4, a.getBoleta());
            ps.setInt(5, a.getTelefono());
            ps.setString(6, a.getGrupo());
            
            status = ps.executeUpdate();
            System.out.println("Actualizacion de Usuario Alumno");
            con.close();
        }
        catch(Exception ed){
            System.out.println("Error al actualizar datos de Alumno");
            System.out.println(ed.getMessage());
        }
        return status;
    }
    
    public static Alumno buscarAlumno(int boleta){
        Alumno a = new Alumno();
        
        try{
            Connection con = Conexion.getConnection();
            String q = "select * from alumnos where bol_usu = ?";
            
            PreparedStatement ps = con.prepareStatement(q);
            ps.setInt(4,boleta);
            
            ResultSet rs = ps.executeQuery();
            if(rs.next()){
                a.setNombre(rs.getString(1));
                a.setApp(rs.getString(2));
                a.setApm(rs.getString(3));
                a.setBoleta(rs.getInt(4));
                a.setTelefono(rs.getInt(5));
                a.setGrupo(rs.getString(6));
                
                
            }
            System.out.println("Se encontro al alumno");
            con.close();
        }
        catch(Exception ed){
            System.out.println("Error al encontrar al Alumno");
            System.out.println(ed.getMessage());
        }
        return a;
    }
}
