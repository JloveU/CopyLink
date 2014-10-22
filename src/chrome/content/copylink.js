var CopyLinkOverlay = {

    Init:function ()
    {
        var nsSS = Components.interfaces.nsISupportsString;
        document.getElementById("contentAreaContextMenu").addEventListener("popupshowing", CopyLinkOverlay.linkPopup,true);
        
        var tabbarMenu = gBrowser.mStrip.firstChild.nextSibling;
        var separator = null;
        tabbarMenu.insertBefore(document.getElementById("copylinkTabbarContext"), separator);
        tabbarMenu.addEventListener("popupshowing", CopyLinkOverlay.tabbarPopup,true);

    	var oPref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch("extensions.");
    	var ss = Components.classes[ "@mozilla.org/supports-string;1" ].createInstance(nsSS);
    	ss.data = document.getElementById("copylinkLinkContext").getAttribute('statustext');
    	oPref.setComplexValue("CopyLink@fyq.com.description", nsSS, ss);
    },

    linkPopup:function ()
    {
    	document.getElementById("copylinkLinkContext").hidden = (!gContextMenu.onLink);
    },

    tabbarPopup:function ()
    {
        var aTab = (gBrowser && gBrowser.mContextTab && (gBrowser.mContextTab.localName == "tab") ? gBrowser.mContextTab : null);
        document.getElementById("copylinkTabbarContext").hidden = (aTab == null);
    },

    CopyOnLink:function ()
    {
        var urlname = gContextMenu.linkText();
        var url = 'getLinkURL' in gContextMenu ? gContextMenu.getLinkURL() : gContextMenu.linkURL();
        
        var clipboardString = this.formClipboardString(urlname, url);

        //设置剪贴板内容为clipboardString
        Components.classes['@mozilla.org/widget/clipboardhelper;1'].getService(Components.interfaces.nsIClipboardHelper).copyString(clipboardString);
    },

    CopyOnTab:function ()
    {
        var aTab = (gBrowser && gBrowser.mContextTab && (gBrowser.mContextTab.localName == "tab") ? gBrowser.mContextTab : null);
        var urlname = aTab.linkedBrowser.contentDocument.title;
        var url  = aTab.linkedBrowser.contentDocument.location.href;
        
        var clipboardString = this.formClipboardString(urlname, url);

        //设置剪贴板内容为clipboardString
        Components.classes['@mozilla.org/widget/clipboardhelper;1'].getService(Components.interfaces.nsIClipboardHelper).copyString(clipboardString);
    },

    //将标题和网址按设定的格式合成一个字符串
    formClipboardString:function(urlname, url)
    {
        //获取模式字符串
        var pref = Components.classes["@mozilla.org/preferences-service;1"].
                getService(Components.interfaces.nsIPrefService).getBranch("extensions.copylink.");
        var pattern = pref.getCharPref("stringpref");
        //解析模式字符串（其中@1和@2都必须有且仅有1个）
        var clipboardString = "";
        var p1 = pattern.indexOf("@1");
        var p2 = pattern.indexOf("@2");
        if(p1 >= 0 && p2 >= 0) //模式字符串合法
        {
            if(p1 < p2)
            {
                clipboardString = pattern.substring(0, p1) + urlname + pattern.substring(p1+2, p2) + url + pattern.substring(p2+2, pattern.length);
            }
            else
            {
                clipboardString = pattern.substring(0, p2) + url + pattern.substring(p2+2, p1) + urlname + pattern.substring(p1+2, pattern.length);
            }
        }
        else
        {
            clipboardString = "模式字符串不合法。(The pattern is invalid.)\n至少有一个@1和@2，但只有第一个@1、@2是有效的。(At least one @1 and @2 should be in it, but only the first @1 and @2 is valid.)";
        }
        return clipboardString;
    }
}

window.addEventListener("load", CopyLinkOverlay.Init,true);
