$(function(){
    $.getJSON("/getData", function(data){
            var tbody = $("table").find("tbody");
            $.each(data, function(i, iEl){
                var tr = $("<tr></tr>");
                $.each(iEl, function(j, jEl){
                    var td = $("<td></td>");
                    if (j==="date"){
                        var date = new Date(jEl);
                        td.text(date.getFullYear()+"-"
                            +date.getMonth()+"-"
                            +date.getDate()+" "
                            +date.getHours()+":"
                            +date.getMinutes()+":"
                            +date.getSeconds())
                    }
                    else
                        td.text(jEl);
                    tr.append(td);
                });
                var td = $(
                    "<td>\n" +
                    "    <a id=\"a"+(i+1)+"\" onclick='updateClick(this.id)' style='cursor:pointer'>Change</a>\n" +
                    "    /\n" +
                    "    <a href=\"delete?id="+tr.children()[0].innerText+"\">Delete</a>\n" +
                    "</td>"
                );
                tr.append(td);
                tbody.append(tr);
            });
        }
    );
});

var updateClick = function (id) {
    $("table").wrap("<form action=\"update\" method=\"GET\"></form>")
    var tr = $("#"+id).parents("tr");
    tr.after(
        "    <tr>\n" +
        "        <td>"+tr.children()[0].innerText+"</td>\n" +
        "        <td>\n" +
        "            <input name=\"title\" placeholder=\"" + tr.children()[1].innerText + "\"/>\n" +
        "        </td>\n" +
        "        <td>\n" +
        "            <input name=\"author\" placeholder=\"" + tr.children()[2].innerText + "\"/>\n" +
        "        </td>\n" +
        "        <td>\n" +
        "            <input name=\"content\" placeholder=\"" + tr.children()[3].innerText + "\">\n" +
        "        </td>\n" +
        "        <td>"+tr.children()[4].innerText+"</td>\n" +
        "        <td>\n" +
        "            <input type=\"hidden\" name=\"id\" value=\""+tr.children()[0].innerText+"\">\n" +
        "            <input type=\"submit\" class=\"btn btn-default btn-sm\" value=\"Submit\">\n" +
        "        </td>\n" +
        "    </tr>"
    );
    tr.hide();
};

var insertClick = function () {
    $("tbody").append(
        "    <tr>\n" +
        "        <td></td>\n" +
        "        <td>\n" +
        "            <input name=\"title\"/>\n" +
        "        </td>\n" +
        "        <td>\n" +
        "            <input name=\"author\"/>\n" +
        "        </td>\n" +
        "        <td>\n" +
        "            <input name=\"content\">\n" +
        "        </td>\n" +
        "        <td></td>\n" +
        "        <td>\n" +
        "            <input type=\"submit\" class=\"btn btn-default btn-sm\" value=\"Submit\">\n" +
        "        </td>\n" +
        "    </tr>"
    );
    $("table").wrap("<form action=\"insert\" method=\"GET\"></form>")
};

