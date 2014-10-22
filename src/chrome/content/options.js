var CopyLinkOptions = {    

    loadPrefs : function() {
        //var str = CopyLinkPref.getValue("stringpref");
        //document.getElementById("stringpref").value = str;
    },

    //检查模式字符串是否合法，如果不合法，则返回false
    // checkPrefs : function() {
    //     //获取模式字符串
    //     var pref = Components.classes["@mozilla.org/preferences-service;1"].
    //             getService(Components.interfaces.nsIPrefService).getBranch("extensions.copylink.");
    //     var pattern = pref.getCharPref("stringpref");
    //     //解析模式字符串（其中@1和@2都必须有且仅有1个）
    //     var p1 = pattern.indexOf("@1");
    //     var p2 = pattern.indexOf("@2");
    //     if(p1 < 0 || p2 < 0) //缺少@1或@2
    //     {
    //         return false;
    //     }
    //     if(p1 >= 0 && pattern.indexOf("@1", p1+2) >= 0) //有1个以上@1
    //     {
    //         return false;
    //     }
    //     if(p2 >= 0 && pattern.indexOf("@2", p2+2) >= 0) //有1个以上@2
    //     {
    //         return false;
    //     }
    //     return true;
    // },

    savePrefs : function() {
        // if(this.checkPrefs() == false)
        // {
        //     var pref = Components.classes["@mozilla.org/preferences-service;1"].
        //         getService(Components.interfaces.nsIPrefService);
        //     pref.alert(null, "警告(Warning)", "模式字符串不合法(The pattern is invalid)");
        //     return false; //输入的模式字符串不合法，阻止选项窗口关闭
        // }
        try {
            var str = document.getElementById("stringpref").value;
            CopyLinkPref.setValue("stringpref", str);
        } catch(ex) {}
        return true;  //输入的模式字符串合法，选项窗口正常关闭
    },

    restoreDefPrefs : function() {
        document.getElementById("stringpref").value = "[@1](@2)";
    }
}