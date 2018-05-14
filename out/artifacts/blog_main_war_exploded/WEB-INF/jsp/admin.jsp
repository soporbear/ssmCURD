<%--
  Created by IntelliJ IDEA.
  User: lilin
  Date: 18-4-14
  Time: 下午12:33
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>admin</title>
    <link href="../../resources/bootstrap-3.3.7-dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="../../resources/jquery-3.3.1.min.js"></script>
    <script src="../../resources/js/AjaxTable.js"></script>
</head>
<body>
    <table id="table" class="table table-striped table-hover" style="table-layout:fixed">
        <thead>
        <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>AUTHOR</th>
            <th>CONTENT</th>
            <th>DATE</th>
            <th>OPERATE</th>
        </tr>
        </thead>
        <tbody></tbody>
    </table>
    <form action="select" method="get">
        <p class="text-center">
            Input id as parameter
            <input name="id"/>
            <input type="submit" class="btn btn-default btn-sm" value="Query"/>
        </p>
    </form>
    <p class="text-center">
        <a onclick="insertClick()" style="cursor:pointer">New Data</a>
    </p>
</body>
</html>