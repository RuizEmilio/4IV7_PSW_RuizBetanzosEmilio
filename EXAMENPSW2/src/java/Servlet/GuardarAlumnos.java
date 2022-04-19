/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import Control.AccionesAlumno;
import Modelo.Alumno;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author emili
 */
public class GuardarAlumnos extends HttpServlet {
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            
            String nom , app , apm , grupo , foto;
            int bol , tel;
            
            nom = request.getParameter("Nombre");
            app = request.getParameter("Appat");
            apm = request.getParameter("Apmat");
            bol = Integer.parseInt(request.getParameter("Boleta"));
            tel = Integer.parseInt(request.getParameter("Telefono"));
            grupo = request.getParameter("3IM");
            foto = request.getParameter("Foto");
            
            Alumno a = new Alumno();
            a.setNombre(nom);
            a.setAppat(appat);
            a.setApmat(apmat);
            a.setBoleta(bol);
            a.setTelefono(tel);
            a.setGrupo(grupo);
            a.setFoto(foto);
            
            int status = AccionesAlumno.registrarAlumno(a);
            
            if(status > 0){
                response.sendRedirect("index.html");
            }
            else{
                response.sendRedirect("TablaLaboratorios.jsp");
            }
            
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet GuardarUsuario</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet GuardarUsuario at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }