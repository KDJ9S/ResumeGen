function myAjax(userId,resumeId) {
    $.ajax({
            type: 'POST',

            contentType: 'application/json; charset=utf-8',

            url: '/saveMyResume',

            dataType: 'json',

            data: '{"userId":"'+userId+'","resumeId":"'+resumeId+'"}',

            success: function (data) {
                //var json = eval(data);
                if (data.flag==="success"){
                    alert("保存成功！");
                } else if (data.flag==="failure"){
                    alert("模版已保存过！")
                }

            },

            error: function (data) {
                alert("保存模版失败!");
            }

        }
    )
}